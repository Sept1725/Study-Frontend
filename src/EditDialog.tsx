import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

type EditDialogProps = {
  open: boolean;
  handleClose: () => void;
  onClickEditEnd: () => void;
};

export default function EditDialog({
  open,
  handleClose,
  onClickEditEnd,
}: EditDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: "form",
        },
      }}
    >
      <DialogTitle>メモ更新</DialogTitle>
      <DialogContent>メモ更新画面</DialogContent>
      <DialogActions>
        <Button onClick={onClickEditEnd}>送信</Button>
      </DialogActions>
    </Dialog>
  );
}
