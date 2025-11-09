import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Grid, styled } from "@mui/system";
import "animate.css";

const ComoFunciona = () => {
  const ComoFuncionaContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    textAlign: "center",
    // padding-top en móviles para evitar que el navbar tape el contenido
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(10), // cambia el valor si tu navbar tiene otra altura
    },
  }));

  const carouselItems = [
    {
      title: "Mirá Videos",
      img: "https://i.imgur.com/28Fx0Yt.png",
    },
    {
      title: "Asistí a eventos",
      img: "https://i.imgur.com/A4lsqnl.png",
    },
    {
      title: "Separá tus residuos",
      img: "https://imgur.com/HA2QHQ9.png",
    },
  ];

  const otherCards = [
    {
      title: "Ganá Puntos",
      img: "https://imgur.com/JT7UtFW.png",
    },
    {
      title: "Canjealos por beneficios",
      img: "https://imgur.com/kwTcKQV.png",
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 8 },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            className="urbane-font"
            gutterBottom
          >
            Cómo Funciona
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {/* Primera Card con animación de entrada y salida */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography className="number-badge" variant="h5" component="p">
                1
              </Typography>
              <Typography
                gutterBottom
                mt={3}
                variant="h5"
                component="h3"
                sx={{ fontWeight: "600" }}
                className={`animate__animated ${animationClass} urbane-font`}
              >
                {carouselItems[currentIndex].title}
              </Typography>
              <img
                src={carouselItems[currentIndex].img}
                alt={carouselItems[currentIndex].title}
                className={`animate__animated ${animationClass} como-funciona-img`}
              />
            </Grid>

            {/* Otras Cards estáticas */}
            {otherCards.map((item, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={idx}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography className="number-badge" variant="h5" component="p">
                  {idx + 2}
                </Typography>
                <Typography
                  gutterBottom
                  mt={3}
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: "600" }}
                  className="urbane-font"
                >
                  {item.title}
                </Typography>
                <img
                  src={item.img}
                  alt={item.title}
                  className="como-funciona-img"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ComoFuncionaContainer>
  );
};

export default ComoFunciona;
