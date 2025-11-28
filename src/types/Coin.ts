export type Coin = {
  id: number;
  name: string;
  symbol: string;
  quote: { USD: { price: number; percent_change_24h: number } };
  cmc_rank?: number;
};
