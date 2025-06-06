// src/pages/ContentsPage.tsx
import { API_URL } from "@/config/api";
import { useEffect, useState } from "react";

export default function ContentsPage() {
  const [Contents, setContents] = useState([]);

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
    <div>
      <h1>Contents Page</h1>
    </div>
  );
}
