import "./searchInput.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueriedStations } from "../../../Libs/Redux/slices/stationsSlice";
import { AppDispatch } from "../../../Libs/Redux/store";
import { getQuery, updateQuery } from "../../../Libs/Redux/slices/paramsRequestSlice";

export const SearchInput = ({ className }: { className: string }) => {

  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector(getQuery)

  function handleChange(value: string) {
      dispatch(updateQuery(value))
      dispatch(fetchQueriedStations(value));
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
