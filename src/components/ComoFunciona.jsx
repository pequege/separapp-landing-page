import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
    [theme.breakpoints.down("lg")]: {
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

  const isVerySmall = useMediaQuery("(max-width:1200px)");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(
    isVerySmall ? "animate__fadeInRight" : "animate__fadeInDown"
  );

  useEffect(() => {
    let timeoutId = null;
    const inClass = isVerySmall ? "animate__fadeInRight" : "animate__fadeInDown";
    const outClass = isVerySmall ? "animate__fadeOutLeft" : "animate__fadeOutDown";

    const interval = setInterval(() => {
      // animación de salida
      setAnimationClass(outClass);

      // espera a que termine la animación de salida antes de cambiar slide
      timeoutId = window.setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
        // animación de entrada
        setAnimationClass(inClass);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isVerySmall]); // re-ejecuta cuando cambia el breakpoint / ancho < 500px

  return (
    <ComoFuncionaContainer id="howitworks">
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
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
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ flexDirection: { xs: "column", lg: "row" } }}
          >
            {/* Primera Card con animación de entrada y salida */}
            <Grid
              item
              xs={12}
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
                lg={4}
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
