import { Dialog, DialogTitle } from "@mui/material";

type EditDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export default function EditDialog({ open, handleClose }: EditDialogProps) {
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
    </Dialog>
  );
}
