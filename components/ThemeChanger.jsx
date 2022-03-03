import { Box } from "@chakra-ui/react";
import React from "react";
const ThemeChanger = ({ pokemonData, children }) => {
  return (
    <>
      <Box
        bg={
          pokemonData.types[0].type.name === "electric"
            ? "#F7E403"
            : pokemonData.types[0].type.name === "psychic"
            ? "#E86487"
            : pokemonData.types[0].type.name === "fighting"
            ? "#F55A03"
            : pokemonData.types[0].type.name === "poison"
            ? "#A846B5"
            : pokemonData.types[0].type.name === "fire"
            ? "#E16235"
            : pokemonData.types[0].type.name === "water"
            ? "#3B7DCE"
            : pokemonData.types[0].type.name === "ground"
            ? "#DDBE72"
            : pokemonData.types[0].type.name === "normal"
            ? "#66C6B0"
            : pokemonData.types[0].type.name === "rock"
            ? "#B8A02A"
            : pokemonData.types[0].type.name === "ice"
            ? "#73C3C8"
            : pokemonData.types[0].type.name === "dragon"
            ? "#753AEC"
            : pokemonData.types[0].type.name === "dark"
            ? "#644F48"
            : pokemonData.types[0].type.name === "bug"
            ? "#A9B621"
            : pokemonData.types[0].type.name === "steel"
            ? "#8E9CBC"
            : pokemonData.types[0].type.name === "ghost"
            ? "#725792"
            : pokemonData.types[0].type.name === "fairy"
            ? "#EC77C2"
            : "#2CDBB0"
        }
        h="100%"
        w="100%"
      >
        {children}
      </Box>
    </>
  );
};

export default React.memo(ThemeChanger);
