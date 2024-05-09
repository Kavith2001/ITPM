import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ContainerWidget = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.75rem",
  width: "850px", // Set the desired width
  height: "800px", // Set the desired height
}));

export default ContainerWidget;