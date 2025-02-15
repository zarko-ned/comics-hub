import React, { useEffect } from "react";
import { ChakraProvider, defaultSystem, Grid, GridItem } from "@chakra-ui/react";
import { ColorModeProvider, useColorMode } from "@/components/ui/color-mode";
import { NavBar } from "./components/ui/NavBar";
import { ColorModeButton } from "@/components/ui/color-mode";
import ComicGrid from "./components/ComicGrid";
import SeriaList from "./components/SeriaList";
import { ThemeProvider } from "next-themes";

function App() {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    // Postavi default temu na dark samo jednom, pri inicijalnom renderovanju
    if (colorMode !== "dark") {
      setColorMode("dark");
    }
  }, []); // Prazan niz zavisnosti znači da se useEffect pokreće samo jednom, pri mountu

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <Grid
            templateAreas={{
              base: `"nav" "main"`,
              lg: `"nav nav" "aside main"`,
            }}
          >
            <GridItem area="nav" display="flex" justifyContent="space-between" alignItems="center">
              <NavBar />
              <ColorModeButton />
            </GridItem>
            <GridItem area="aside" paddingX={5} display={{ base: "none", lg: "block" }}>
              <SeriaList />
            </GridItem>
            <GridItem area="main">
              <ComicGrid />
            </GridItem>
          </Grid>
        </ColorModeProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
