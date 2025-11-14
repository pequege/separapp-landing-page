import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import emailjs from "@emailjs/browser";

// Componentes con estilos
const ContactoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(4),
  },
}));

const ContactoContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const StyledButton = styled(Button)({
  backgroundColor: "#2e7d32",
  color: "white",
  padding: "12px 24px",
  "&:hover": {
    backgroundColor: "#1b5e20",
    color: "white",
  },
});

const Contacto = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    severity: "success",
    msg: "",
  });

  const handleCloseSnack = () => setSnack((s) => ({ ...s, open: false }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form["from_name"]?.value?.trim();
    const email = form["from_email"]?.value?.trim();
    const message = form["message"]?.value?.trim();

    if (!name || !email || !message) {
      setSnack({
        open: true,
        severity: "error",
        msg: "Por favor completa todos los campos.",
      });
      return;
    }

    // guardo fecha y hora del mensaje en formato ISO
    const sentAt = new Date().toISOString();
    // aseguro que el formulario tenga un input hidden llamado "sent_at" con el valor
    let sentAtInput = form.querySelector('input[name="sent_at"]');
    if (!sentAtInput) {
      sentAtInput = document.createElement("input");
      sentAtInput.type = "hidden";
      sentAtInput.name = "sent_at";
      form.appendChild(sentAtInput);
    }
    sentAtInput.value = sentAt;

    setSending(true);
    try {
      // Reemplaza estos valores por los de tu cuenta EmailJS
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      setSnack({
        open: true,
        severity: "success",
        msg: "Mensaje enviado. Gracias!",
      });
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setSnack({
        open: true,
        severity: "error",
        msg: "Error enviando el mensaje. Intenta más tarde.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <ContactoContainer
      id="contact"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 8 },
        px: 2,
      }}
    >
      <ContactoContent>
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
            Contacto
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{ mb: 2, textAlign: "left" }}
          >
            Enviános tu consulta y nos pondremos en contacto.
          </Typography>

          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              name="from_name"
              label="Nombre"
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              name="from_email"
              label="Email"
              type="email"
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              name="message"
              label="Mensaje"
              required
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <StyledButton type="submit" disabled={sending}>
                {sending ? "Enviando..." : "Enviar"}
              </StyledButton>
            </Box>
          </Box>
        </Box>

        {/* Columna derecha opcional: texto o imagen */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", maxWidth: 360 }}
          >
            También podés agendar una reunión o contactarnos por WhatsApp si
            preferís una respuesta más rápida.
          </Typography>
        </Box>
      </ContactoContent>

      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={snack.severity}
          sx={{ width: "100%" }}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </ContactoContainer>
  );
};

export default Contacto;
