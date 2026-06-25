export type TokenTicker = {
  symbol: string;
  name: string;
  mint: string;
  price: number;
  change24h: number;
};

const featuredMints = [
  "So11111111111111111111111111111111111111112",
  "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
  "DezXAZ8z7PnrnRJjz3Qeq9Pb5f2Mk7ZQpB263fuf6PQo",
  "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzL262VYWTomSZ",
  "7vfCXTUXx5WJVZ5JADk17DUJ4ksgau7utNKjGgNVPump",
  "4k3Dyjzvzp8e9G79NCUsU4q3zFpPKBq7adCYdVMmADsf"
];

const fallbackTokens: TokenTicker[] = [
  {
    symbol: "SOL",
    name: "Solana",
    mint: "So11111111111111111111111111111111111111112",
    price: 136.42,
    change24h: 4.28
  },
  {
    symbol: "JUP",
    name: "Jupiter",
    mint: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
    price: 0.52,
    change24h: 2.91
  },
  {
    symbol: "BONK",
    name: "Bonk",
    mint: "DezXAZ8z7PnrnRJjz3Qeq9Pb5f2Mk7ZQpB263fuf6PQo",
    price: 0.000018,
    change24h: 7.74
  },
  {
    symbol: "WIF",
    name: "dogwifhat",
    mint: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzL262VYWTomSZ",
    price: 0.84,
    change24h: -1.52
  },
  {
    symbol: "ETH",
    name: "Ethereum Wormhole",
    mint: "7vfCXTUXx5WJVZ5JADk17DUJ4ksgau7utNKjGgNVPump",
    price: 2420.81,
    change24h: 1.16
  },
  {
    symbol: "RAY",
    name: "Raydium",
    mint: "4k3Dyjzvzp8e9G79NCUsU4q3zFpPKBq7adCYdVMmADsf",
    price: 2.12,
    change24h: 5.03
  }
];

type BirdeyeTokenItem = {
  symbol?: string;
  name?: string;
  address?: string;
  value?: number;
  price?: number;
  priceChange24h?: number;
  priceChange24hPercent?: number;
};

type BirdeyeTokenResponse = {
  data?: {
    items?: BirdeyeTokenItem[];
  } & Record<string, BirdeyeTokenItem | BirdeyeTokenItem[] | undefined>;
};

export async function getFeaturedTokens(): Promise<TokenTicker[]> {
  const apiKey = process.env.BIRDEYE_API_KEY;

  if (!apiKey) {
    return fallbackTokens;
  }

  try {
    const url = new URL("https://public-api.birdeye.so/defi/multi_price");
    url.searchParams.set("list_address", featuredMints.join(","));

    const response = await fetch(url, {
      headers: {
        "X-API-KEY": apiKey,
        "x-chain": "solana"
      },
      next: {
        revalidate: 30
      }
    });

    if (!response.ok) {
      return fallbackTokens;
    }

    const payload = (await response.json()) as BirdeyeTokenResponse;
    const keyedItems: BirdeyeTokenItem[] = Object.entries(payload.data ?? {})
      .filter(([address, value]) => address !== "items" && typeof value === "object" && value !== null)
      .map(([address, value]) => ({
        address,
        ...(Array.isArray(value) ? {} : value)
      }));
    const items = payload.data?.items ?? keyedItems;

    if (!items.length) {
      return fallbackTokens;
    }

    return fallbackTokens.map((fallback) => {
      const live = items.find((item) => item.address === fallback.mint);

      return {
        symbol: live?.symbol ?? fallback.symbol,
        name: live?.name ?? fallback.name,
        mint: live?.address ?? fallback.mint,
        price: live?.price ?? live?.value ?? fallback.price,
        change24h: live?.priceChange24hPercent ?? live?.priceChange24h ?? fallback.change24h
      };
    });
  } catch {
    return fallbackTokens;
  }
}
