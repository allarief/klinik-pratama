import { notFound } from "next/navigation";
import { articlesData } from "@/app/data/articlesData";
import Image from "next/image";

export default async function ArticlePage({ params }) {
  const { slug } = await params; // ✅ unwrap Promise

  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Main Image */}
      <Image
        src={article.image}
        alt={article.title}
        width={1200}
        height={600}
        className="w-full rounded-xl object-cover"
      />

      {/* Title & Date */}
      <h1 className="text-4xl font-bold mt-6">{article.title}</h1>
      <p className="text-gray-600 mt-2">{article.date}</p>

      {/* Content */}
      <div className="prose mt-6">
        {article.content.map((block, idx) => {
          switch (block.type) {
            case "heading":
              return <h2 key={idx}>{block.text}</h2>;
            case "paragraph":
              return <p key={idx}>{block.text}</p>;
            case "list":
              if (block.style === "number") {
                return (
                  <ol key={idx} className="list-decimal ml-6">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                );
              } else {
                return (
                  <ul key={idx} className="list-disc ml-6">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
            case "tip":
              return (
                <div
                  key={idx}
                  className="bg-blue-100 text-blue-800 p-4 rounded-md my-4"
                >
                  {block.text}
                </div>
              );
            case "divider":
              return <hr key={idx} className="my-6" />;
            case "gallery":
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6"
                >
                  {block.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={`Gallery image ${i + 1}`}
                      width={600}
                      height={400}
                      className="w-full rounded-lg object-cover"
                    />
                  ))}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
