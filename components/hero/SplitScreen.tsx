"use client";
import data from "@/data/data";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} m={10} direction={{ base: "column", md: "row" }}>
       
      <Flex p={10}  flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"} >
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              Morroco Dates
            </Text>
            <br />{" "}
            <Text color={"green.400"} as={"span"}>
              Distinguished in valuing dates, taste touches hearts
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            We believe that quality is the foundation of excellence and strive
            to provide the best services to our customers. We value you very
            carefully and use the latest technology to ensure you get fresh,
            clean fruits with an irresistible taste. With each fruit, we offer
            you a promise of quality and mastery
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
            >
              Purshage Dates
            </Button>
            <Button rounded={"full"}>About our IGE</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} m={10}>
        <Image alt={"hero Image"} objectFit={"cover"}  src={data.hero} />
      </Flex>
     
    </Stack>
  );
}
