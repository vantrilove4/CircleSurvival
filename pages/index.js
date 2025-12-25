import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Chuyển thẳng tới game HTML
    window.location.href = "/index.html";
  }, []);

  return <p>Đang tải game...</p>;
}
