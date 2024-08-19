import { useState } from "react";
import SortDetails from "./SortDetails";
import type { sortType } from "./SortDetails";
import { useContext } from "react";
import SortContext from "../store/SortContext";

const NavBar = () => {
    const data = useContext(SortContext);

    const [selectedSortType, setSelectedSortType] =
        useState<sortType>("insertion");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSortType(event.target.value as sortType);
    };

    return (
        <div className="flex justify-between">
            <div>
                <label htmlFor="sorting-algo">Choose sorting algorithm: </label>
                <select
                    name="sorting-algo"
                    id="sorting-algo"
                    value={selectedSortType}
                    onChange={(event) => {
                        // console.log(event.target.value);
                        data.selectedSortType = event.target.value as sortType;
                        handleChange(event);
                    }}
                >
                    <option value="bubble">Bubble-sort</option>
                    <option value="insertion">insertion-sort</option>
                    <option value="merge">merge-sort</option>
                    <option value="quick">quick-sort</option>
                    <option value="heap">heap-sort</option>
                </select>
            </div>
            <SortDetails sortType={selectedSortType} />
        </div>
    );
};

export default NavBar;
