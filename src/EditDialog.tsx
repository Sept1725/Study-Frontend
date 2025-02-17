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
  handleClose: () => void;
  onClickEditEnd: () => void;
};

export default function EditDialog({
  open,
  handleClose,
  onClickEditEnd,
}: EditDialogProps) {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>メモ更新</DialogTitle>
      <DialogContent>
        <Typography variant="h5" sx={{ marginBottom: "16px" }}>
          メモの作成
        </Typography>
        <Box sx={{ marginBottom: "16px" }}>
          <Typography variant="subtitle1">タイトル</Typography>
          <TextField helperText="必須入力" sx={{ width: "50%" }} />
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <Typography variant="subtitle1">詳細</Typography>
          <TextField multiline rows={3} sx={{ width: "70%" }} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>キャンセル</Button>
        <Button onClick={onClickEditEnd}>送信</Button>
      </DialogActions>
    </Dialog>
  );
}
