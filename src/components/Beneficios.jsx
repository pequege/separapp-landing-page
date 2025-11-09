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
import { useState } from "react";

const Beneficios = () => {
  const BeneficiosContainer = styled(Box)(({ theme }) => ({
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

  const cards = [
    {
      id: 1,
      title: "Menos Residuos en Disposición Final",
      description:
        "Reducimos el volumen de basura enviada al relleno sanitario, disminuyendo la contaminación y mejorando la calidad de vida en la ciudad.",
      src: "https://media.pixverse.ai/pixverse%2Fmp4%2Fmedia%2Fweb%2Fori%2F2f86c441-0434-419b-b2da-5f68be641ded_seed1748126184.mp4",
    },
    {
      id: 2,
      title: "Aumento del Empleo Verde",
      description:
        "Impulsamos nuevos puestos de trabajo en economía circular, desde promotores ambientales hasta clasificadores y logística, generando oportunidades sostenibles para la comunidad.",
      src: "https://media.pixverse.ai/pixverse%2Fmp4%2Fmedia%2Fweb%2Fori%2F0df890bc-c525-4c52-a514-0afb991cf5bb_seed1331030434.mp4",
    },
    {
      id: 3,
      title: "Conciencia Ambiental y Cambio Cultural",
      description:
        "Promovemos un cambio cultural sostenido hacia prácticas más responsables, formando ciudadanos comprometidos con el cuidado del ambiente y el futuro de su comunidad.",
      src: "https://media.pixverse.ai/pixverse%2Fmp4%2Fmedia%2Fweb%2Fori%2Ffea9baf3-990c-4561-8692-1a0ce40a15ef_seed2119717918.mp4",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <BeneficiosContainer>
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
        <Box sx={{ width: "100%", maxWidth: 1100 }}>
          <Typography
            variant="h4"
            component="h1"
            className="urbane-font"
            gutterBottom
          >
            Beneficios Esperados
          </Typography>

          {/* Grid centrado */}
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 2,
              justifyContent: "center", // centra el grid dentro del contenedor
              alignItems: "start",
              margin: "0 auto",
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={card.id}
                sx={{ width: "100%", maxWidth: 360, margin: "0 auto" }}
              >
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? "" : undefined}
                  sx={{
                    height: "100%",
                    "&[data-active]": {
                      backgroundColor: "action.selected",
                      "&:hover": {
                        backgroundColor: "action.selectedHover",
                      },
                    },
                  }}
                >
                  {/* Video en lugar de imagen */}
                  <CardMedia
                    component="video"
                    src={card.src}
                    controls={false}
                    preload="metadata"
                    autoPlay={true}
                    loop
                    sx={{
                      height: 200,
                      width: "100%",
                      objectFit: "cover",
                      backgroundColor: "#000", // fallback mientras carga
                    }}
                  />

                  <CardContent sx={{ height: "100%" }}>
                    <Typography variant="h6" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </BeneficiosContainer>
  );
};

export default Beneficios;
