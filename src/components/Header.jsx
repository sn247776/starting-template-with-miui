import React, { useContext } from "react";
import { ColorModeContext } from "../theme";
import { Box, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
// import Logo from "../assets/logo.png";

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      alignItems="center"
    >
      <Box>
        <Link to={"/"} className="logo">
          {/* <img src={Logo} alt="logo" /> */}
          <h1>Logo</h1>
        </Link>
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <Link to="https://github.com/sn247776/react-todo" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
