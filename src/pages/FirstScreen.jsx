import StartForm from "../components/form/StartForm";
import { Box } from "@mui/system";

const FirstScreen = () => {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        bgcolor: "rgba(255,255,255, 0.95)",
        borderRadius: 2,
        border: 1,
        p: 2,
      }}
    >
      <StartForm />
    </Box>
  );
};

export default FirstScreen;
