import { Box, Grid, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              component="a"
              href="https://www.instagram.com/separapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.youtube.com/@separapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              sx={{ color: "white" }}
            >
              <YouTubeIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/company/separapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ color: "white" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
