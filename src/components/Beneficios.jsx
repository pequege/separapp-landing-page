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
  const BeneficiosContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    textAlign: "start"
  });

  const cards = [
    {
      id: 1,
      title: "Menos Residuos en Disposición Final",
      description:
        "Reducimos el volumen de basura enviada al relleno sanitario, disminuyendo la contaminación y mejorando la calidad de vida en la ciudad.",
      img: "./src/assets/impacto-esperado/impacto-esperado-1.png",
    },
    {
      id: 2,
      title: "Aumento del Empleo Verde",
      description:
        "Impulsamos nuevos puestos de trabajo en economía circular, desde promotores ambientales hasta clasificadores y logística, generando oportunidades sostenibles para la comunidad.",
      img: "./src/assets/impacto-esperado/impacto-esperado-2.png",
    },
    {
      id: 3,
      title: "Conciencia Ambiental y Cambio Cultural",
      description:
        "Promovemos un cambio cultural sostenido hacia prácticas más responsables, formando ciudadanos comprometidos con el cuidado del ambiente y el futuro de su comunidad.",
      img: "./src/assets/impacto-esperado/impacto-esperado-3.png",
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
            variant="h2"
            component="h2"
            className="urbane-font"
            sx={{ mb: 4 }}
          >
            Impacto Esperado
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
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.img}
                    alt={card.title}
                  />
                  <CardContent sx={{ height: "100%" }}>
                    <Typography variant="h5" component="div">
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
