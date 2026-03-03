import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import saludImage from "../assets/separapp-salud.png";

const Salud = () => {

  const SaludContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    textAlign: "start",
    // padding-top en móviles para evitar que el navbar tape el contenido
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(10), // cambia el valor si tu navbar tiene otra altura
      paddingBottom: theme.spacing(5),
    },
  }));

  return (
    <SaludContainer id="salud" sx={{

      background: "#6EA1B8",
    }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 8 },
          px: 2,
        }}
      >
        {/* Columna izquierda: Texto */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            className="urbane-font"
            gutterBottom
            sx={{
              background: "linear-gradient(90deg, #E7F0F4 0%, #D1ECF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SeparApp Salud
          </Typography>
          <Typography variant="h6" color="white" align="left">
            Digitalización inteligente para la gestión sanitaria ambiental.
          </Typography>
          <Typography variant="body1" color="white">
            Un módulo especializado para hospitales, clínicas, policlínicas y farmacias que optimiza la separación en origen, garantiza trazabilidad de residuos y genera indicadores para la toma de decisiones. Integra establecimientos de salud con municipios y sistemas GIRSU en una única plataforma digital.
          </Typography>
        </Box>

        {/* Columna derecha: Imagen */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={saludImage}
            alt="SeparApp Salud"
            sx={{
              width: "100%",
              maxWidth: 400,
              height: "auto",
            }}
          />
        </Box>
      </Container>
    </SaludContainer>
  );
};

export default Salud;
