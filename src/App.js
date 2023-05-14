import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </Router>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
