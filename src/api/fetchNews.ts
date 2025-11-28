import type { NewsItem } from "../types/NewsItem";

const NEWS_URL = "https://newsapi.org/v2/everything";

export async function fetchNews(
  query = "crypto",
  pageSize = 9
): Promise<NewsItem[]> {
  const key = import.meta.env.VITE_NEWS_API_KEY as string | undefined;
  if (!key) throw new Error("Missing VITE_NEWS_API_KEY in env");

  const url = `${NEWS_URL}?q=${encodeURIComponent(query)}&pageSize=${pageSize}`;
  const res = await fetch(url, { headers: { Authorization: key } });

  if (!res.ok) throw new Error("Failed fetching news: " + res.statusText);

  const j = await res.json();

  return (j.articles || []).map((a: any) => ({
    title: a.title,
    url: a.url,
    source: a.source?.name,
    description: a.description,
  }));
}
