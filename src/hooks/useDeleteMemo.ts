import axios from "axios";

export const useDeleteMemo = (memoId: number) => {
  const apiUrl = "http://localhost:8000/memos";

  const onClickDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    axios
      .delete(`${apiUrl}/${memoId}`, { data: { id: 1 } })
      .then((res) => {
        window.alert(res.data.message);
      })
      .catch(() => window.alert("メモの削除に失敗しました"));
  };

  return { handle: { onClickDelete } };
};
