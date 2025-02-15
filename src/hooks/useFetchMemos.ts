import axios from "axios";
import { useEffect, useState } from "react";

type MemoData = {
  title: string;
  description: string;
  memoId: number;
};

export const useFetchMemos = () => {
  const apiUrl = "http://localhost:8000/memos";
  const [memos, setMemos] = useState<MemoData[]>([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => res.data)
      .then((data) => setMemos(data));
  }, []);

  return { memos };
};
