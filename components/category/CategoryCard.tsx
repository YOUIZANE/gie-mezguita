import {
  Badge,
  Box,
  Circle,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Rating from "./Rating";
import { ProductProps } from "@/types/types";

function CategoryCard({
  isNew,
  imageURL,
  name,
  rating,
  numReviews,
  price,
}: ProductProps) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image src={imageURL} alt={`Picture of ${name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            {/* <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip> */}
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={rating} numReviews={numReviews} />
            {/* <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              {price.toFixed(2)}
              <Box as="span" color={"gray.600"} fontSize="lg">
                DH
              </Box>
            </Box> */}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default CategoryCard;
