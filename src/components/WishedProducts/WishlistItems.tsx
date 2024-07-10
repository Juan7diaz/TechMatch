import { VStack, Fade } from "@chakra-ui/react";
import DesiredItem from "./DesiredItem";
import { ResponseWishedProduct } from "../../interfaces/wishedProduct.interface";

interface WishlistItemsProps {
  items: ResponseWishedProduct[];
  refetch: () => void;
}

const WishlistItems = ({ items, refetch }: WishlistItemsProps) => {
  return (
    <Fade in={true}>
      <VStack spacing={6} align="stretch">
        {items.map((item) => (
          <DesiredItem key={item.id} item={item} refetch={refetch} />
        ))}
      </VStack>
    </Fade>
  );
};

export default WishlistItems;