import { NextResponse } from "next/server";
import { getFeaturedTokens } from "@/lib/tokens";

export const dynamic = "force-dynamic";

export async function GET() {
  const tokens = await getFeaturedTokens();

  return NextResponse.json({
    source: process.env.BIRDEYE_API_KEY ? "birdeye" : "fallback",
    chain: "solana",
    tokens
  });
}
