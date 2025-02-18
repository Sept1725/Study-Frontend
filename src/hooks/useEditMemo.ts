import axios from "axios";
import { useState } from "react";

export const useEditMemo = (memoId: number) => {
  const apiUrl = "http://localhost:8000/memos";
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onClickEditStart = () => {
    setOpen(true);
  };

  const onClickEditEnd = () => {
    axios
      .put(`${apiUrl}/${memoId}`, { title: title, description: description })
      .then((res) => {
        window.alert(res.data.message);
        setOpen(false);
        window.location.reload();
      })
      .catch(() => window.alert("メモの更新に失敗しました"));
  };

  const onChangeEditTitle: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setTitle(event.target.value);
  };

  const onChangeEditDescription: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setDescription(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    value: { open, title, description },
    handle: {
      onClickEditStart,
      onClickEditEnd,
      handleClose,
      onChangeEditTitle,
      onChangeEditDescription,
    },
  };
};
