import { Box, Center, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";

const Details = ({ pokeDetails }) => {
  return (
    <Flex
      h="100%"
      direction="column"
      bg="white"
      borderTopLeftRadius="20px"
      borderTopRightRadius="20px"
      pt={10}
      px={2}
      justify="space-around"
      textTransform="capitalize"
      fontSize="0.7rem"
    >
      {/* <Flex direction="column" align="center">
        <Box>
          <Text>
            Height: {(parseInt(pokeDetails.height) * 0.1).toFixed(1)}m
          </Text>
          <Text>
            Weight: {(parseInt(pokeDetails.weight) * 0.1).toFixed(1)}kgs
          </Text>
        </Box>
      </Flex> */}
      <Flex justify="center">
        <Text fontSize="1xl" fontWeight="bolder">
          Base Stats
        </Text>
      </Flex>
      {pokeDetails.stats.map((data) => {
        const { stat, base_stat } = data;
        return (
          <Flex key={stat.name} direction="row" align="center" mb={2}>
            <Box flex="1">
              <Text textTransform="capitalize">{stat.name}</Text>
            </Box>
            <Flex
              direction="column"
              position="relative"
              width="100%"
              align="center"
              flex="2"
            >
              <Text position="absolute" zIndex="1">
                {base_stat}
              </Text>
              <Progress
                value={parseInt(base_stat)}
                size="xs"
                width="100%"
                height="15px"
                borderRadius="lg"
                colorScheme={
                  parseInt(base_stat) > 75
                    ? "green"
                    : parseInt(base_stat) >= 50
                    ? "orange"
                    : parseInt(base_stat) < 50 && "red"
                }
              >
                {base_stat}
              </Progress>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Details;
