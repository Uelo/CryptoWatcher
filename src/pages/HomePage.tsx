import { useEffect, useState } from "react";
import type { Coin } from "../types/Coin";
import { fetchTopCoins } from "../api/fetchTopCoins";
import { useCart } from "../context/CartContext";

export default function HomePage() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { add } = useCart();

  useEffect(() => {
    setLoading(true);
    fetchTopCoins(18)
      .then((c) => setCoins(c))
      .catch((e) => setError(String(e.message || e)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl text-green-300 font-mono mb-4">Top Cryptos</h1>

      {loading && <div className="text-green-200">Carregando...</div>}
      {error && <div className="text-red-400">{error}</div>}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <article
            key={coin.id}
            className="bg-black/80 border border-green-800 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-mono text-green-200">
                  {coin.name}{" "}
                  <span className="text-xs text-green-500">{coin.symbol}</span>
                </div>
                <div className="text-sm text-green-300">
                  Rank #{coin.cmc_rank ?? "—"}
                </div>
              </div>

              <div className="text-right">
                <div className="font-mono text-green-100 text-lg">
                  ${coin.quote.USD.price.toFixed(2)}
                </div>
                <div
                  className={`text-sm ${
                    coin.quote.USD.percent_change_24h >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {coin.quote.USD.percent_change_24h.toFixed(2)}%
                </div>
              </div>
            </div>

            <p className="text-xs text-green-300 mb-3">
              {coin.name} é uma moeda com símbolo {coin.symbol}.
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => add(coin, 10)}
                className="px-3 py-1 font-mono text-sm border border-green-700 rounded"
              >
                Comprar $10
              </button>
              <button className="px-3 py-1 font-mono text-sm border border-green-700 rounded">
                Detalhes
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
