import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  background: "rgba(0, 0, 0, 0.28)",
  padding: '0 24px',
}));

const pages = [
  { label: "Inicio", href: "#hero" },
  { label: "Como Funciona", href: "#howitworks" },
  { label: "Contacto", href: "#contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // smooth scroll handler for internal anchors
  const handleNavClick = (event, href) => {
    // only handle hash links
    if (href && href.startsWith("#")) {
      event.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback: try querySelector
        const sel = document.querySelector(href);
        if (sel) sel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      handleCloseNavMenu();
    }
  };

  return (
    <AppBar position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}>
      <Container maxWidth="xl">
        <StyledToolbar variant="dense" disableGutters>
            {/* Mobile burger on the LEFT */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: 'center', order: 0 }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ width: 40, height: 40 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.label}
                    component="a"
                    href={page.href}
                    onClick={(e) => handleNavClick(e, page.href)}
                  >
                    {page.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo (center / middle order) */}
            <Box sx={{ display: "flex", alignItems: "center", order: 1, flexGrow: 0 }}>
              <Typography
                variant="h6"
                noWrap
                className="urbane-font"
                sx={{ color: 'inherit' }}
              >
                SeparApp
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", order: 3, flexGrow: 0 }}></Box>

            {/* Desktop menu on the right */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                order: 2,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.label}
                  href={page.href}
                  onClick={(e) => handleNavClick(e, page.href)}
                  sx={{
                    color: "text.primary",
                    display: "block",
                    fontWeight: 600,
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
