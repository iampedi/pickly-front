// src/pages/ContentsPage.tsx
import { API_URL } from "@/config/api";
import { CrownIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContentsPage() {
  type Content = {
    id: number;
    title: string;
    type: string;
    description: string;
    link: string;
  };

  const [Contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetch(`${API_URL}/contents`);
        const data = await response.json();

        setContents(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching contents:", error);
      }
    };

    fetchContents();
  }, []);

  return (
    <div className="relative">
      <div className="absolute -top-8 right-0 left-0 mx-auto flex h-16 max-w-4xl items-center justify-around gap-4 rounded-full bg-white shadow">
        <div>Movie</div>
        <div>Podcast</div>
        <div>Book</div>
        <div>Article</div>
        <div>Game</div>
      </div>

      <div className="bg-white px-6 py-18">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-4 flex items-center gap-2 text-xl font-medium">
            <CrownIcon size={22} />
            Contents List
          </h1>

          <div className="grid gap-4">
            {Contents.map((content) => (
              <div key={content.id} className="bg-gray-100 px-5 py-3">
                <h2>{content.title}</h2>
                <p>{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
