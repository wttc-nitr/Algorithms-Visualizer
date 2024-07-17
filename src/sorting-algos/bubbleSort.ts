import type { moveType } from "../types/types";

export default function bubbleSort(heights: number[]) {
    let isSorted = null;
    const moves: moveType[] = [];
    const N = heights.length;

    do {
        isSorted = true;

        for (let i = 1; i < N; i++) {
            moves.push({
                indices: [i - 1, i],
                type: "compare",
            });
            if (heights[i - 1] > heights[i]) {
                isSorted = false;
                // swap
                const temp = heights[i];
                heights[i] = heights[i - 1];
                heights[i - 1] = temp;

                moves.push({
                    indices: [i - 1, i],
                    type: "swap",
                });
            }
        }
    } while (isSorted === false);

    return moves;
}
