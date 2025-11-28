import { useEffect, useState } from "react";
import { fetchNews } from "../api/fetchNews";
import type { NewsItem } from "../types/NewsItem";

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchNews("cryptocurrency OR bitcoin OR ethereum", 9)
      .then((n) => setNews(n))
      .catch((e) => setError(String(e.message || e)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl text-green-300 font-mono mb-4">Crypto News</h1>

      {loading && <div className="text-green-200">Carregando Notícias...</div>}
      {error && <div className="text-red-400">{error}</div>}

      <div className="flex flex-col gap-3">
        {news.map((n, i) => (
          <a
            key={i}
            href={n.url}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-black/80 border border-green-800 rounded"
          >
            <div className="font-mono text-green-200">{n.title}</div>
            <div className="text-xs text-green-300">{n.source}</div>
            <div className="text-sm text-green-400 mt-1">{n.description}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
