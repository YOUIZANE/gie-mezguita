"use client";
import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { BiFridge } from "react-icons/bi";
import { FcShop } from "react-icons/fc";
import { SiFlatpak } from "react-icons/si";
import Feature from "./Feature";

function OurServices() {
  return (
    <>
      <Container
        maxW={"8xl"}
        p="12"
        bg={useColorModeValue("green.100", "green.700")}
      >
        <Heading as="h1">Our Services</Heading>
        <Box mt="8">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              icon={<Icon as={BiFridge} color={"green"} w={10} h={10} />}
              title={"refrigeration servicing"}
              text={
                "If you are a cooperative, you can take advantage of refrigeration services and so on...."
              }
            />
            <Feature
              icon={<Icon as={FcShop} w={10} h={10} />}
              title={"Wholesale Sale or Installment"}
              text={
                "We provide you with high quality products that comply with the stipulated standards while respecting the health safety standards..."
              }
            />
            <Feature
              icon={<Icon as={SiFlatpak} color={"green"} w={10} h={10} />}
              title={"Canning and Ellipsis"}
              text={
                "We provide you with a canning service within the unit and how to wrap your products related to Timers in accordance with the established standards...."
              }
            />
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}

export default OurServices;
