import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material";
import Form from "./Form";
import logo from "images/logo.png"
import loginImg from "images/login.jpg"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
    <Box
      width="100%"
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign="center"
    >
      <img src={logo} alt="logo" width="400" height="100" />
    </Box>

    <Box
      width={isNonMobileScreens ? "50%" : "93%"}
      p="2rem"
      m="2rem auto"
      borderRadius="1.5rem"
      backgroundColor={theme.palette.background.alt}
    >
      <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem", textAlign: 'center' }}>
        Welcome to SLIIT NET, the Social Media for all Students!
      </Typography>
      
      {/* Using Grid to create layout with image and form */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}> {/* Adjust the width of the image based on screen size */}
          <img src={loginImg} alt="logo" width="100%" height="auto" />
        </Grid>
        <Grid item xs={12} md={6}> {/* Adjust the width of the form based on screen size */}
          <Form />
        </Grid>
      </Grid>
      
    </Box>
  </Box>
  );
};

export default LoginPage;
