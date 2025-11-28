import type { Coin } from "../types/Coin";

export async function fetchTopCoins(limit = 17): Promise<Coin[]> {
  const res = await fetch(`http://localhost:3001/api/coins?limit=${limit}`);

  if (!res.ok) throw new Error("Failed fetching backend: " + res.statusText);

  return await res.json();
}
