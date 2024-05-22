import { Heading as ChakraHeading } from "@chakra-ui/react";

const Heading = ({ props }: { props?: object }) => {
  return (
    <ChakraHeading
      fontWeight={700}
      bgGradient="linear(to-r, #fdc671, #f48c06)"
      bgClip="text"
      fontSize={{ base: "5xl", sm: "6xl", md: "7xl" }}
      lineHeight={"110%"}
      {...props}
    >
      TechMatch
    </ChakraHeading>
  );
};

export default Heading;
