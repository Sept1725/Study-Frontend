import { Button } from "@mui/material";
import { useDeleteMemo } from "./hooks/useDeleteMemo";

type OperationButtonsProps = {
  memoId: number;
};

export default function OperateButtons({ memoId }: OperationButtonsProps) {
  const { handle: handleDelete } = useDeleteMemo(memoId);
  return (
    <>
      <Button variant="outlined" sx={{ marginRight: "10px" }}>
        編集
      </Button>
      <Button
        variant="outlined"
        sx={{ marginLight: "10px" }}
        onClick={handleDelete.onClickDelete}
      >
        削除
      </Button>
    </>
  );
}
