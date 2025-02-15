import { Button } from "@mui/material";
import { useDeleteMemo } from "./hooks/useDeleteMemo";
import { useEditMemo } from "./hooks/useEditMemo";

type OperationButtonsProps = {
  memoId: number;
};

export default function OperateButtons({ memoId }: OperationButtonsProps) {
  const { handle: handleDelete } = useDeleteMemo(memoId);
  const { handle: handleEdit } = useEditMemo(memoId);
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleEdit.onClickEdit}
        sx={{ marginRight: "10px" }}
      >
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
