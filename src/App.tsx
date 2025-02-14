import React from "react";
import { ChakraProvider, defaultSystem, Grid, GridItem } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { NavBar } from "./components/ui/NavBar";
import { ColorModeButton } from "@/components/ui/color-mode";

function App() {
  return (
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
          <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
            Aside
          </GridItem>
          <GridItem area="main" bg="dodgerblue">
            Main
          </GridItem>
        </Grid>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
