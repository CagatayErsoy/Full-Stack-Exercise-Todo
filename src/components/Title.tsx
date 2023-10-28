import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "../themes/theme";

function Title() {
  return (
    <Box sx={{ m: 2 }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: theme.palette.text.primary  }}
      >
        Todo List
      </Typography>
    </Box>
  );
}

export default Title;
