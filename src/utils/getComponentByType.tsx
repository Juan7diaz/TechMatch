import GraficaDetails from "../components/ProductDetails/types/GraficaDetails";
import PlacaDetails from "../components/ProductDetails/types/PlacaDetails";
import ProcesadorDetails from "../components/ProductDetails/types/ProcesadorDetails";
import RamDetails from "../components/ProductDetails/types/RamDetails";
import { Grafica, Placa, Procesador, Ram, Type } from "../interfaces/product.interface";


interface TypeComponentProps {
  type: Type | undefined;
  data: Grafica | Placa | Procesador | Ram | Type;
}

export const getComponentByType = ({type, data}: TypeComponentProps) => {


  switch (type) {
    case 'RAM':
      return <RamDetails ram={data as Ram} />;
    case 'PROCESADOR':
      return <ProcesadorDetails procesador={data as Procesador} />;
    case 'GRAFICA':
      return <GraficaDetails grafica={data as unknown as Grafica} />;
    case 'PLACA':
      return <PlacaDetails placa={data as unknown as Placa} />;
    default:
      return null;
  }
};