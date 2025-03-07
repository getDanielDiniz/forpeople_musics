import "./searchInput.scss";
import { useDispatch } from "react-redux";
import { fetchQueriedStations } from "../../../Libs/Redux/slices/stationsSlice";
import { AppDispatch } from "../../../Libs/Redux/store";
import { updateQuery } from "../../../Libs/Redux/slices/paramsRequestSlice";
import { useState } from "react";

export const SearchInput = ({ className }: { className: string }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [lastFetch, setLastFetch] = useState(new Date());

  function handleChange(value: string) {
    let agora: Date = new Date();
    let diff = agora.getTime() - lastFetch.getTime(); //milissegundos
    setQuery(value);
    if (
      // Ou em posições pares ou se tem mais de 300ms desde a ultima busca
      value.trim().length % 2 === 0 ||
      diff > 300
    ) {
      dispatch(updateQuery(value));
      dispatch(fetchQueriedStations(value));
      setLastFetch(new Date());
    }
  }

  return (
    <input
      placeholder="Pesquisar..."
      className={`${className} 
        bg-dark fs-5 d-flex align-self-start mt-3 mb-3 component-searchInput text-white`}
      value={query}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
