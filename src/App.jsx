import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Hero />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
