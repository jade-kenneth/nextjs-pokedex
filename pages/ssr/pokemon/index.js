import { Box, Button, position, useMediaQuery } from "@chakra-ui/react";
import Pagination from "components/Pagination";
import EachPokemon from "components/EachPokemon";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Flex } from "@chakra-ui/react";
import Layout from "components/layouts/Layout";

import { useRouter } from "next/router";
import SwitchButtonAndLoader from "components/SwitchButtonAndLoader";

export async function getServerSideProps() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
  );
  const { results } = await response.json();
  const getData = async () => {
    let pokemonDetails = [];
    for (let i = 0; i < results.length; i++) {
      const eachResult = await fetch(`${results[i].url}`);
      const finalData = await eachResult.json();
      pokemonDetails.push({
        image: finalData.sprites.other["home"].front_default,
        types: finalData.types,
        name: finalData.name,
      });
    }
    return pokemonDetails;
  };
  return { props: { pokemons: await getData() } };
}

const PokemonList = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [isLowerThan1020] = useMediaQuery("(max-width: 1020px)");
  const numberPerPage = 10;
  const indexOfLast = currentPage * numberPerPage;
  const indexOfFirst = indexOfLast - numberPerPage;

  const paginate = useCallback((number) => {
    setCurrentPage(number);
  }, []);

  return (
    <Flex
      direction="row"
      wrap="wrap"
      h={isLowerThan1020 ? "100%" : "90vh"}
      position="relative"
      zIndex="0"
    >
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        w="100%"
        justifyContent="center"
      >
        {pokemons.slice(indexOfFirst, indexOfLast).map((pokemon, idx) => {
          const { name } = pokemon;
          return (
            <React.Fragment key={name}>
              <EachPokemon
                number={indexOfFirst + idx + 1}
                pokemonData={pokemon}
                type="ssr"
              >
                {name}
              </EachPokemon>
            </React.Fragment>
          );
        })}
      </Flex>
      <Flex align="center" justify="center" direction="column" w="100%">
        <SwitchButtonAndLoader type="ssr" hidden={false} />
        <Pagination
          numberPerPage={numberPerPage}
          totalPokemon={pokemons.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Flex>
    </Flex>
  );
};

export default PokemonList;

PokemonList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
