import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { theme } from "./theme";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Hero />
          <Testimonials />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
