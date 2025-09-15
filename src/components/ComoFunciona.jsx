import { useState, useEffect } from "react";
import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import { Grid, styled } from "@mui/system";
import "animate.css";

const ComoFunciona = () => {
  const ComoFuncionaContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    textAlign: "center",
    backgroundColor: "#262727ff",
  });

  const carouselItems = [
    {
      title: "Mirá Videos",
      img: "./src/assets/como-funciona/image01.png",
    },
    {
      title: "Asistí a eventos",
      img: "./src/assets/como-funciona/image02.png",
    },
    {
      title: "Separá tus residuos",
      img: "./src/assets/como-funciona/image03.png",
    },
  ];

  const otherCards = [
    {
      title: "Ganá Puntos",
      img: "./src/assets/como-funciona/image05.png",
    },
    {
      title: "Canjealos por beneficios",
      img: "./src/assets/como-funciona/image04.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate__backInRight");

  useEffect(() => {
    const interval = setInterval(() => {
      // Primero animación de salida
      setAnimationClass("animate__backOutLeft");

      // Esperamos a que termine la animación de salida (duración típica de animate.css = 1s)
      setTimeout(() => {
        // Cambiamos el contenido
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );

        // Después aplicamos la animación de entrada
        setAnimationClass("animate__backInRight");
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ComoFuncionaContainer>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className="urbane-font"
          sx={{ mb: 4, color: "#f6f6f6" }}
        >
          Como Funciona
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {/* Primera Card con animación de entrada y salida */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                background: "transparent",
                color: "#f6f6f6",
                p: 3,
                height: "100%",
                borderColor: "hsla(220, 25%, 25%, 0.3)",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                className={`animate__animated ${animationClass}`}
                component="img"
                image={carouselItems[currentIndex].img}
                alt={carouselItems[currentIndex].title}
                sx={{
                  width: "100%",
                  maxHeight: 300,
                  objectFit: "contain",
                  mb: 2,
                }}
              />
              <Typography
                gutterBottom
                sx={{ fontWeight: "medium" }}
                className={`animate__animated ${animationClass}`}
              >
                {carouselItems[currentIndex].title}
              </Typography>
            </Card>
          </Grid>

          {/* Otras Cards estáticas */}
          {otherCards.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  background: "transparent",
                  color: "#f6f6f6",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    maxHeight: 300,
                    objectFit: "contain",
                    mb: 2,
                  }}
                />
                <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ComoFuncionaContainer>
  );
};

export default ComoFunciona;
