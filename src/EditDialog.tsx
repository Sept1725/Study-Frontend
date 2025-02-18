import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

type EditDialogProps = {
  open: boolean;
  title: string;
  description: string;
  handleClose: () => void;
  onClickEditEnd: () => void;
  onChangeEditTitle: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  onChangeEditDescription: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
};

export default function EditDialog({
  open,
  title,
  description,
  handleClose,
  onClickEditEnd,
  onChangeEditTitle,
  onChangeEditDescription,
}: EditDialogProps) {
  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "70%",
          },
        },
      }}
    >
      <DialogTitle>メモ更新</DialogTitle>
      <DialogContent>
        <Typography variant="h5" sx={{ marginBottom: "16px" }}>
          メモの作成
        </Typography>
        <Box sx={{ marginBottom: "16px" }}>
          <Typography variant="subtitle1">タイトル</Typography>
          <TextField
            value={title}
            helperText="必須入力"
            onChange={onChangeEditTitle}
            sx={{ width: "50%" }}
          />
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <Typography variant="subtitle1">詳細</Typography>
          <TextField
            multiline
            value={description}
            rows={3}
            onChange={onChangeEditDescription}
            sx={{ width: "70%" }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>キャンセル</Button>
        <Button onClick={onClickEditEnd}>送信</Button>
      </DialogActions>
    </Dialog>
  );
}
