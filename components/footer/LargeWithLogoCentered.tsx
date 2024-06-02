"use client";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import data from "@/data/data";
import Image from "next/image";
import SocialButton from "./SocialButton";


export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "white.900")}
      color={useColorModeValue("green.700", "green.200")}
      borderTop={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image src={data.sitelogo} alt="alt" width={100} height={100} />
        <Text>Copyright © 2024 GIE MEZGUITA DATTES | Design and Developed By  OUIZANE Younesse</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Facebook"} href={"https://web.facebook.com/gie.mezguita.dattes"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Linkeding"} href={"https://www.linkedin.com/company/gie-mezguita-agdez"}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
