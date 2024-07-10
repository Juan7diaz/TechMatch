import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value }: { value: number }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;

  return (
    <Flex alignItems="center">
      <HStack spacing={1}>
        {Array.from({ length: fullStars }, (_, i) => (
          <Icon key={i} as={FaStar} color="#f48c04" />
        ))}
        {hasHalfStar && <Icon as={FaStarHalfAlt} color="#f48c04" />}
        {Array.from(
          { length: 5 - fullStars - (hasHalfStar ? 1 : 0) },
          (_, i) => (
            <Icon key={i} as={FaStar} color="gray.300" />
          )
        )}
      </HStack>
      <Text ml={2} fontWeight={"bold"} color={"gray.500"}>
        {value.toFixed(1)}
      </Text>
    </Flex>
  );
};

export default Rating;
