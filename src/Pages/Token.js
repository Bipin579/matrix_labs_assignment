import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    SimpleGrid,
    Stack,
    Text,
    Icon,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { Search2Icon } from "@chakra-ui/icons";
  import { Loading } from "../Components/Loading";
  import { FiInfo } from "react-icons/fi";
  import { BiDollarCircle, BiCube } from "react-icons/bi";
  
  const Token = () => {
    const [tokenData, setTokenData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
  
    const handleSearch = async () => {
      try {
        const response = await fetch(
          `https://api.dexscreener.com/latest/dex/search/?q=${searchValue}`
        );
        const data = await response.json();
        setTokenData(data.pairs);
        console.log(data);
      } catch (error) {
        console.error("Error fetching token data:", error);
      }
    };
  
    return (
      <Box p={5} ml={{ base: "0px", md: "20%", lg: "20%" }} minHeight={"100vh"}>
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            p={"4"}
            alignItems={"center"}
            pt={{ base: "70px", md: "30px", lg: "30px" }}
          >
            <Stack spacing={4} width="300px">
              <InputGroup>
                <Input
                  placeholder="Search"
                  fontWeight={"bold"}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <InputRightElement>
                  <Search2Icon
                    color="white"
                    onClick={handleSearch}
                    cursor="pointer"
                  />
                </InputRightElement>
              </InputGroup>
            </Stack>
            <Button ml={4} bg="#F30050" fontWeight={"bold"}>
              Connect
            </Button>
          </Box>
          <Box padding={"20px 0px"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Token Search Result
            </Text>
            <hr />
            {tokenData.length > 0 ? (
              tokenData.map((token, index) => (
                <Box key={index} mt={8} fontSize={"sm"}>
                  <SimpleGrid columns={[1, 1, 2, 4]} spacing={4}>
                    <Box bg={"#390554"} p={4} borderRadius={10}>
                      <Text fontSize="md" fontWeight="bold">
                        Basic Info
                      </Text>
  
                      <Box mt={4} position="relative">
                        <Text>Pair created at: {token.chainId}</Text>
                        <Text>Symbol: {token.baseToken.symbol}</Text>
                        <Text>DEx id: {token.dexId}</Text>
                        <Text isTruncated>
                          Pair Address: {token.pairAddress.slice(0, 10)}
                        </Text>
                        <Icon
                          as={FiInfo}
                          position="absolute"
                          bottom={0}
                          right={0}
                          boxSize={10}
                          rounded={"full"}
                          bg="#f30050"
                          color="white"
                          p="2"
                        />
                      </Box>
                    </Box>
                    <Box
                      bg={"#390554"}
                      p={4}
                      borderRadius={10}
                      position="relative"
                    >
                      <Text fontSize="md" fontWeight="bold">
                        Base Token
                      </Text>
  
                      <Box mt={4}>
                        <Text>Name: {token.baseToken.name}</Text>
                        <Text>Symbol: {token.baseToken.symbol}</Text>
                        <Text isTruncated>
                          Address: {token.baseToken.address.slice(0, 10)}
                        </Text>
                      </Box>
                      <Icon
                        as={BiCube}
                        position="absolute"
                        bottom={3}
                        right={4}
                        boxSize={10}
                        rounded={"full"}
                        bg="#f30050"
                        color="white"
                        p="2"
                      />
                    </Box>
                    <Box
                      bg={"#390554"}
                      p={4}
                      borderRadius={10}
                      position="relative"
                    >
                      <Text fontSize="md" fontWeight="bold">
                        Quote Token
                      </Text>
  
                      <Box mt={4}>
                        <Text>Name: {token.quoteToken.name}</Text>
                        <Text>Symbol: {token.quoteToken.symbol}</Text>
                        <Text isTruncated>
                          Address: {token.quoteToken.address.slice(0, 10)}
                        </Text>
                      </Box>
                      <Icon
                        as={BiCube}
                        position="absolute"
                        bottom={3}
                        right={4}
                        boxSize={10}
                        rounded={"full"}
                        bg="#f30050"
                        color="white"
                        p="2"
                      />
                    </Box>
                    <Box
                      bg={"#390554"}
                      p={4}
                      borderRadius={10}
                      position={"relative"}
                    >
                      <Text fontSize="md" fontWeight="bold">
                        Price
                      </Text>
  
                      <Box mt={4}>
                        <Text>Price Native: {token.priceNative}</Text>
                        <Text>Price USD: {token.priceUsd}</Text>
                      </Box>
                      <Icon
                        as={BiDollarCircle}
                        position="absolute"
                        bottom={3}
                        right={4}
                        boxSize={10}
                        rounded={"full"}
                        bg="#f30050"
                        color="white"
                        p="2"
                      />
                    </Box>
                  </SimpleGrid>
                </Box>
              ))
            ) : (
              <Loading />
            )}
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Token;
  