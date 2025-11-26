import { notFound } from "next/navigation";
import { articlesData } from "@/app/data/articlesData";

export default async function ArticlePage({ params }) {
  const { slug } = await params;  // ⬅ WAJIB AWAIT

  const article = articlesData.find(a => a.slug === slug);

  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10">
      <img src={article.image} className="w-full rounded-xl" />

      <h1 className="text-4xl font-bold mt-6">{article.title}</h1>
      <p className="text-gray-600 mt-2">{article.date}</p>

      <div className="prose mt-6 whitespace-pre-line">
        {article.content}
      </div>
    </div>
  );
}
