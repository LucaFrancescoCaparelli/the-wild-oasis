import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    // Identifica la consulta. Podemos usar esta key en otro componente y va a leer la data del cache
    queryKey: ["cabins"],
    // Función responsable de realizar la query. Fetching data de la API
    queryFn: getCabins,
  });
  return { isLoading, cabins, error };
}
