import { Box } from "@chakra-ui/react";
import "./App.css";
import { Main } from "./components/main/Main";
import { Navbar } from "./components/navbar/Navbar";
import { Slider } from "./components/slider/Slider";
import { Footer } from "./components/footer/Footer";
// import { useColorMode } from "./components/ui/color-mode";

function App() {
  // const { toggleColorMode } = useColorMode();
  return (
    <Box>
      {/* <Button onClick={toggleColorMode}>Click</Button> */}
      <Navbar />
      <Slider />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
