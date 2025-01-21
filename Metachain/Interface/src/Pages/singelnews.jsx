import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`
        );
        const data = await response.json();
        const selectedArticle = data.Data.find((item) => item.id === id);
        setArticle(selectedArticle);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8 text-xl">Loading...</div>;
  }

  if (!article) {
    return <div className="text-center mt-8 text-xl">Article not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={article.imageurl}
            alt={article.title}
            className="w-full h-64 object-cover max-w-[600px] items-center "
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold my-4">{article.title}</h1>
            <p className="text-gray-700 mb-4">{article.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;