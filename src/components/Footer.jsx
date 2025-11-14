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
      <Box sx={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920.29 454"
        >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  .cls-1 { fill: #33aa74; }
                  .cls-2 { fill: #5475ed; }
                  .cls-3 { fill: #f1f374; }
                  .cls-4 { fill: none; }
                  .cls-5 { fill: #a5d94f; }
                  .cls-6 { fill: #6754ea; }
                  .cls-7 { fill: #77ae81; }
                `,
              }}
            />
          </defs>
          <circle className="cls-3" cx="1184.08" cy="254" r="200" />
          <path
            className="cls-6"
            d="m1920.08,18.35l-54.61,51.62-66.36-18.94-31.17,12.05-56.31-13.77-66.36,68.87-25.33,23.82-53.4-11.59s-24.83.97-31.87-.17-42.23-13.2-42.23-13.2l-53.29,13.38-21.73,29.65-22.51.02-18.1,25.83-75.41-24.68-45.25,29.85-94.51,6.89-61.33-17.79-77.9,47.35-146.32,44.48v71l1044-.95V18.35Z"
          />
          <path
            className="cls-2"
            d="m1102.08,332H.08V96.08l51.28-24.08,61.33,57.97,66.36-18.94,31.17,12.05,56.31-13.77,66.36,68.87,25.33,23.82,53.4-11.59s24.83.97,31.87-.17c7.04-1.15,42.23-13.2,42.23-13.2l53.29,13.38,21.73,29.65,22.51.02,18.1,25.83,75.41-24.68,45.25,29.85,94.51,6.89,61.33-17.79,77.9,47.35,146.32,44.48Z"
          />
          <path
            className="cls-5"
            d="m1731.08,388v-67s-270-187-624-36-310-163-702,36l.3,89.46,1325.7-22.46Z"
          />
          <rect className="cls-4" x=".08" width="1920" height="454" />
          <polygon
            className="cls-1"
            points="198.72 142 180.05 190.79 192.14 178.02 175.52 202.27 166.51 226.17 181.4 211.62 173.44 222.36 180.37 218.55 158.43 247.06 134.41 310 263.27 310 256.53 292.45 245.66 264.16 224.36 248 231.91 249.78 222.28 237.95 238.96 246.73 228.38 219.19 213.27 198.81 225.04 210.49 198.72 142"
          />
          <path
            className="cls-1"
            d="m1107.38,453.94C782.08,313.74,675.08,283.39.08,279.45c-.17,0,0,173.79,0,173.79l1107.3.69Z"
          />
          <polygon
            className="cls-1"
            points="693.59 295 688.4 280.73 624.19 252.19 685.16 272.3 661.81 210.68 631.32 187.32 635.21 186.68 628.08 181.49 655 193.08 612.51 79 582.02 163.32 600.19 151.65 591.75 161.38 598.89 158.78 576.83 177.59 555.43 234.68 586.56 214.57 550.24 248.3 539.21 278.78 559.32 265.81 552.19 273.59 568.4 266.46 535.32 287.86 532.08 295 595.08 295 595.08 343 629.08 343 629.08 295 693.59 295"
          />
          <polygon
            className="cls-1"
            points="1758.25 86 1784.15 153.67 1767.38 135.96 1790.44 169.59 1802.93 202.74 1782.27 182.56 1793.32 197.46 1783.71 192.17 1814.14 231.71 1847.45 319 1668.73 319 1678.08 294.66 1693.16 255.42 1722.7 233.01 1712.22 235.48 1725.58 219.07 1702.45 231.25 1717.12 193.05 1738.07 164.79 1721.76 180.98 1758.25 86"
          />
          <polygon
            className="cls-1"
            points="1427.41 282.71 1430.9 273.1 1474.11 253.9 1433.08 267.43 1448.79 225.97 1469.31 210.26 1466.69 209.82 1471.49 206.33 1453.38 214.13 1481.96 137.38 1502.47 194.11 1490.25 186.26 1495.93 192.8 1491.13 191.06 1505.96 203.71 1520.37 242.12 1499.42 228.59 1523.86 251.28 1531.28 271.8 1517.75 263.07 1522.55 268.3 1511.64 263.5 1533.9 277.9 1536.08 282.71 1493.69 282.71 1493.69 315 1470.82 315 1470.82 282.71 1427.41 282.71"
          />
          <path
            className="cls-7"
            d="m1208.83,293.21c-.62-3.23-18.61-35.8-23.2-44.07-.46-.82-1.64-.81-2.09.02l-23.68,43.8c-.09.17-.14.35-.15.54-.28,7.81,8.14,12.88,18.11,14.75.57.11.98.59.98,1.17v17.38c0,.66.53,1.19,1.19,1.19h8.8c.66,0,1.19-.53,1.19-1.19v-16.78c0-.62.47-1.12,1.08-1.18,10.71-1.07,19.61-6.09,17.76-15.63Z"
          />
          <path
            className="cls-7"
            d="m1246.88,286.55c-.51-2.64-15.22-29.28-18.97-36.04-.37-.67-1.34-.67-1.71.01l-19.36,35.82c-.07.14-.12.29-.12.44-.23,6.39,6.66,10.53,14.8,12.06.46.09.8.48.8.95v14.22c0,.54.44.98.98.98h7.19c.54,0,.98-.44.98-.98v-13.72c0-.5.39-.92.89-.97,8.76-.88,16.03-4.98,14.53-12.78Z"
          />
          <path
            className="cls-7"
            d="m1159.25,301c-.5-2.6-14.98-28.82-18.67-35.47-.37-.66-1.32-.65-1.68.01l-19.06,35.25c-.07.13-.12.29-.12.44-.22,6.29,6.56,10.37,14.57,11.87.46.09.79.48.79.94v13.99c0,.53.43.96.96.96h7.08c.53,0,.96-.43.96-.96v-13.51c0-.5.38-.9.87-.95,8.62-.86,15.78-4.9,14.3-12.58Z"
          />
          <path
            className="cls-1"
            d="m1920.08,453.93s.48-186.94,0-186.93c-408,.72-1496,104.28-1514.7,186.93-.03.15,1514.7,0,1514.7,0Z"
          />
        </svg>
      </Box>
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
