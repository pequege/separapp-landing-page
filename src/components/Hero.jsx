import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import EventIcon from "@mui/icons-material/Event";

// Importa la imagen desde tu carpeta de assets
import heroImage from "../assets/hero-section-image.png";

// Componentes con estilos
const HeroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  textAlign: "center",
  // padding-top en móviles para evitar que el navbar tape el contenido
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(4), // cambia el valor si tu navbar tiene otra altura
  },
}));

const HeroContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const HeroImage = styled("img")({
  maxWidth: "75%",
  height: "auto",
});

const StyledButton = styled(Button)({
  backgroundColor: "#2e7d32", // Verde oscuro
  color: "white",
  padding: "12px 24px",
  "&:hover": {
    backgroundColor: "#1b5e20",
    color: "white",
  },
});

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <Container>
        <HeroContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 8 },
            }}
          >
            <Box>
              <HeroImage
                src={heroImage}
                alt="imagen de celular con la app de separapp"
              />
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h4"
                component="h1"
                className="urbane-font"
                gutterBottom
              >
                Ganá puntos,
                <br />
                Ayuda al{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #02BB61 0%, #C18CEF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  planeta
                </span>
              </Typography>
              <Typography component="p" variant="h6" sx={{ mb: 4 }}>
                Transformá acciones simples en beneficios para vos y para el
                medioambiente
              </Typography>
              <StyledButton
                variant="contained"
                href={"https://wa.me/3814067218"}
                target="_blank"
                rel="noopener"
                startIcon={<EventIcon />}
                xs={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
              >
                Agendar reunión
              </StyledButton>
            </Box>
          </Box>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
