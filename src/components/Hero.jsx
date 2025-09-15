import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

// Importa la imagen desde tu carpeta de assets
import heroImage from "../assets/hero-section-image.png";

// Componentes con estilos
const HeroContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  textAlign: "center",
  background: "linear-gradient(135deg, #1e3c1e 0%, #4caf50 100%)"
  /* background: 'url("/hero-bg.png")',
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover" */
});

const HeroContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const HeroImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
});

const StyledButton = styled(Button)({
  backgroundColor: "#2e7d32", // Verde oscuro
  color: "white",
  padding: "12px 24px",
  "&:hover": {
    backgroundColor: "#1b5e20",
  },
});

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 8 },
            }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h2" component="h1" gutterBottom>
                Gana puntos,
                <br />
                Ayuda al <span style={{ color: "#4CAF50" }}>planeta</span>
              </Typography>
              <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                Lorem ipsum dolor sit amet consectetur. Viverra dui cras nisl
                sed lacus et. Dolor tellus quam et at ac
              </Typography>
              <StyledButton
                variant="contained"
                href={"https://wa.me/3814067218"}
                target="_blank"
                rel="noopener"
              >
                Agendar reunión
              </StyledButton>
            </Box>
            <Box>
              <HeroImage src={heroImage} alt="Separapp" />
            </Box>
          </Box>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
