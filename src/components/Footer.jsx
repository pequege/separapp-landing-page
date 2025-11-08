import { Box, Grid, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src="./src/assets/footer-landscape.svg" alt="separapp landscape footer image" />
      <Box
        sx={{
          background: "#33AA74",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ px: 2, py: 4, justifyContent: "center" }}
        >
          <Grid item xs={6}>
            <Typography
              variant="body2"
              color="white"
              align="center"
              sx={{ py: 2, fontWeight: 600 }}
            >
              &copy; {new Date().getFullYear()} SeparApp SAS
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
            <InstagramIcon sx={{ color: "white"}} />
            <YouTubeIcon sx={{ color: "white"}} />
            <LinkedInIcon sx={{ color: "white"}} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
