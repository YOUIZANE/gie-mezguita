"use client";
import {
  Box,
  Container,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import data from "@/data/data";

function BestCategory() {
  return (
    <>
      <Container
        maxW={"8xl"}
        p="12"
        bg={useColorModeValue("white.100", "white.700")}
      >
        <Heading as="h1">Best Category</Heading>
        <Box>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>

            {data.listCategory.map((product) => (
              <CategoryCard
              key={product.id}
              isNew={product.isNew}
              imageURL={product.imageURL}
              name={product.name}
              rating={product.rating}
              numReviews={product.numReviews}
              price={product.price}
            />
            ))}
            

            
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}

export default BestCategory;
