import { createContext } from "react";
import type { sortType } from "../components/SortDetails";

type SortContextType = {
    selectedSortType: sortType;
};

const SortContext = createContext<SortContextType>({
    selectedSortType: "insertion",
});

export default SortContext;
