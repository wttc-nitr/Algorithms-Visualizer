import type { moveType } from "../types/types";

export default function insertionSort(heights: number[]) {
    const moves: moveType[] = [];
    const N = heights.length;

    // starting from index 1, as index 0 is single element which is already sorted
    for (let i = 1; i < N; i++) {
        const key = heights[i];
        let j = i - 1;

        while (j >= 0) {
            moves.push({
                indices: [j, j + 1],
                type: "compare",
            });

            if (heights[j] <= key) break;

            moves.push({
                indices: [j, j + 1],
                type: "swap",
            });

            // shifting to right
            heights[j + 1] = heights[j];

            j--;
        }

        heights[j + 1] = key;
    }

    return moves;
}

// 5 3 2 1
