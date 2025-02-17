import { Button } from "@mui/material";
import { useDeleteMemo } from "./hooks/useDeleteMemo";
import { useEditMemo } from "./hooks/useEditMemo";
import EditDialog from "./EditDialog";

type OperationButtonsProps = {
  memoId: number;
};

export default function OperateButtons({ memoId }: OperationButtonsProps) {
  const { handle: handleDelete } = useDeleteMemo(memoId);
  const { value, handle: handleEdit } = useEditMemo(memoId);
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleEdit.onClickEditStart}
        sx={{ marginRight: "10px" }}
      >
        編集
      </Button>
      <EditDialog
        open={value.open}
        handleClose={handleEdit.handleClose}
        onClickEditEnd={handleEdit.onClickEditEnd}
      />
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
