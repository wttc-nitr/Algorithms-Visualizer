import { useState } from "react";
import ShowBars from "./components/ShowBars";
import { moveType } from "./types/types";
import bubbleSort from "./sorting-algos/bubbleSort";
import heapSort from "./sorting-algos/heapSort";
import insertionSort from "./sorting-algos/insertionSort";
import mergeSort from "./sorting-algos/mergeSort";
import NavBar from "./components/NavBar";
import quickSort from "./sorting-algos/quickSort";
import { useContext } from "react";
import SortContext from "./store/SortContext";

const generateRandomNumbers = (N: number): number[] =>
    Array.from(Array(N), Math.random);

const App = () => {
    const N = 100;
    const [array, setArray] = useState<number[]>(() =>
        generateRandomNumbers(N)
    );
    const [move, setMove] = useState<moveType>();
    const [initBtn, setInitBtn] = useState(false);
    const [playBtn, setPlayBtn] = useState(false);

    const data = useContext(SortContext);

    function getMoves(temp: number[]): moveType[] {
        if (data.selectedSortType === "merge") return mergeSort(temp);

        if (data.selectedSortType === "bubble") return bubbleSort(temp);

        if (data.selectedSortType === "heap") return heapSort(temp);

        if (data.selectedSortType === "quick") return quickSort(temp);

        return insertionSort(temp);
    }

    function play() {
        const moves = getMoves([...array]);
        animate(moves);
    }

    function animate(moves: moveType[]) {
        if (moves.length === 0) {
            setMove(undefined);
            setInitBtn(false);
            return;
        }

        const move = moves.shift()!;

        setArray((prevArray) => {
            const tempArray = [...prevArray];

            if (move.type === "swap") {
                const [i, j] = move.indices;
                [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
            } else if (move.type === "overwrite") {
                const [i, val] = move.indices;
                tempArray[i] = val;
            }

            return tempArray;
        });

        setMove(move);

        setTimeout(() => {
            animate(moves);
        }, 1000 / 30);
    }

    return (
        <>
            <NavBar />
            <ShowBars array={array} move={move} />
            <div id="buttons" className="text-center">
                <button
                    id="init"
                    className="p-2 m-2 bg-gray-200 rounded-md hover:bg-slate-400"
                    disabled={initBtn}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setArray(() => generateRandomNumbers(N));
                        setPlayBtn(false);
                    }}
                >
                    new array
                </button>
                <button
                    id="play"
                    className="p-2 m-2 bg-gray-200 rounded-md hover:bg-slate-400"
                    disabled={playBtn}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // e.currentTarget.disabled = true;
                        setInitBtn(true);
                        setPlayBtn(true);
                        play();
                    }}
                >
                    visualize
                </button>
            </div>
        </>
    );
};

export default App;
