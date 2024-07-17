"use strict";

import type { moveType } from "../types/types";

export default function quickSort(heights: number[]) {
    // heights.forEach((elm, idx) => {
    //     heights[idx] = Math.floor(elm * 1000);
    // });

    const moves: moveType[] = [];
    const N = heights.length;

    __quickSort(heights, 0, N - 1);
    // console.log(heights);

    function __quickSort(arr: number[], low: number, high: number) {
        if (low >= high) return;

        const pivot = partition(arr, low, high);

        __quickSort(arr, low, pivot - 1);
        __quickSort(arr, pivot + 1, high);
    }

    function partition(arr: number[], low: number, high: number) {
        const pivot = low;
        let i = low,
            j = high;

        while (i < j) {
            // find greater than pivot
            while (arr[i] <= arr[pivot]) i++;

            // find smaller than or equal to pivot
            while (arr[j] > arr[pivot]) j--;

            moves.push({
                indices: [i, j],
                type: "compare",
            });

            if (i < j) {
                moves.push({
                    indices: [i, j],
                    type: "swap",
                });
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        moves.push({
            indices: [j, pivot],
            type: "swap",
        });
        [arr[j], arr[pivot]] = [arr[pivot], arr[j]];

        return j;
    }

    return moves;
}
