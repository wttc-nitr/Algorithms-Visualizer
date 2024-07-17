import { useState } from "react";
import ShowBars from "./components/ShowBars";
import { moveType } from "./types/types";
// import bubbleSort from "./sorting-algos/bubbleSort";
// import heapSort from "./sorting-algos/heapSort";
// import insertionSort from "./sorting-algos/insertionSort";
// import mergeSort from "./sorting-algos/mergeSort";
import quickSort from "./sorting-algos/quickSort";

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

    function play() {
        const tempArray = [...array];
        // const moves = bubbleSort(tempArray);
        // const moves = mergeSort(tempArray);
        // const moves = heapSort(tempArray);
        // const moves = insertionSort(tempArray);
        const moves = quickSort(tempArray);
        // console.log(moves);
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
