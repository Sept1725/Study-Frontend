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
      .then((data) => setMemos(data))
      .catch(() => window.alert("メモ一覧の取得に失敗しました"));
  }, []);

  return { memos };
};
