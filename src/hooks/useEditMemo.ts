import axios from "axios";

export const useEditMemo = (memoId: number) => {
  const apiUrl = "http://localhost:8000/memos";

  const onClickEdit = () => {
    axios
      .put(`${apiUrl}/${memoId}`, { title: "テスト", description: "詳細" })
      .then((res) => {
        window.alert(res.data.message);
      })
      .catch(() => window.alert("メモの更新に失敗しました"));
  };

  return { handle: { onClickEdit } };
};
