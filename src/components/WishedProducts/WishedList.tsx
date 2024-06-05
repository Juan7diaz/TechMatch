import { Flex, Text } from '@chakra-ui/react';
import { getPiezasDeseadasByUsuarioId } from '../../services/api';
import { ResponseWishedProduct } from '../../interfaces/wishedProduct.interface';
import useUSerStore from '../../store/useUserStore';
import DesiredItem from './DesiredItem';
import { useEffect, useState } from 'react';


function WishedList (){
  const [desiredItems, setDesiredItems] = useState<ResponseWishedProduct[]>([]);
  const usuarioId = useUSerStore(state=>state.id)

  useEffect(() => {
    const fetchDesiredItems = async () => {
      try {
        const items = await getPiezasDeseadasByUsuarioId(usuarioId);
        setDesiredItems(items);
      } catch (error) {
        console.error('Error al obtener las piezas deseadas:', error);
      }
    };

    fetchDesiredItems();
  }, [usuarioId]);

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" m={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Lista de Deseados
      </Text>
      {desiredItems.map((item) => (
        <DesiredItem item={item} />
      ))}
    </Flex>
  );
};


export default WishedList;