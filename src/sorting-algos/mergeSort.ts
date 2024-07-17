import { moveType } from "../types/types";

export default function mergeSort(heights: number[]) {
    const moves: moveType[] = [];
    const low = 0,
        high = heights.length - 1;

    __mergeSort(heights, low, high);

    function __mergeSort(heights: number[], low: number, high: number) {
        if (low >= high) {
            return;
        }

        const mid = low + Math.floor((high - low) / 2);

        __mergeSort(heights, low, mid);
        __mergeSort(heights, mid + 1, high);
        merge(heights, low, mid, high);
    }

    function merge(heights: number[], low: number, mid: number, high: number) {
        const N = high - low + 1;
        const temp = [];

        let i = low,
            j = mid + 1,
            k = 0;

        while (i <= mid && j <= high) {
            if (heights[i] < heights[j]) {
                temp[k++] = heights[i++];
            } else {
                temp[k++] = heights[j++];
            }
        }

        while (i <= mid) {
            temp[k++] = heights[i++];
        }

        while (j <= high) {
            temp[k++] = heights[j++];
        }

        for (let x = 0; x < N; x++) {
            moves.push({
                indices: [low + x, temp[x]],
                type: "overwrite",
            });
            heights[low + x] = temp[x];
        }
    }

    return moves;
}
