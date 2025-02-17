import axios from "axios";
import { useState } from "react";

export const useEditMemo = (memoId: number) => {
  const apiUrl = "http://localhost:8000/memos";
  const [open, setOpen] = useState(false);

  const onClickEditStart = () => {
    setOpen(true);
  };

  const onClickEditEnd = () => {
    axios
      .put(`${apiUrl}/${memoId}`, { title: "テスト", description: "詳細" })
      .then((res) => {
        window.alert(res.data.message);
      })
      .catch(() => window.alert("メモの更新に失敗しました"));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    value: { open },
    handle: { onClickEditStart, onClickEditEnd, handleClose },
  };
};
