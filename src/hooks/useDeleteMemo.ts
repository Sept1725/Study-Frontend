import axios from "axios";

export const useDeleteMemo = (memoId: number) => {
  const apiUrl = "http://localhost:8000/memos";

  const onClickDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    axios
      .delete(`${apiUrl}/${memoId}`, { data: { id: memoId } })
      .then((res) => {
        window.alert(res.data.message);
        window.location.reload();
      })
      .catch(() => window.alert("メモの削除に失敗しました"));
  };

  return { handle: { onClickDelete } };
};
