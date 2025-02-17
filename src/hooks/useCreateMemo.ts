import axios from "axios";
import { useState } from "react";

export const useCreateMemos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onClickCreate = () => {
    const apiUrl = "http://localhost:8000/memos";
    axios
      .post(apiUrl, {
        title: title,
        description: description,
      })
      .then((res) => {
        window.alert(res.data.message);
        window.location.reload();
        setTitle("");
        setDescription("");
      })
      .catch(() => window.alert("メモの作成に失敗しました"));
  };

  const onChangeTitle: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescription: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setDescription(event.target.value);
  };

  return {
    value: { title, description },
    handle: { onClickCreate, onChangeTitle, onChangeDescription },
  };
};
