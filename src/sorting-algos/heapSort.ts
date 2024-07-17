import type { moveType } from "../types/types";
// we're building max-heap, then popping
const moves: moveType[] = [];

export default function heapSort(heights: number[]) {
    // heights.forEach((elm, idx) => {
    //     heights[idx] = Math.floor(elm * 100);
    // });

    const arr = [0, ...heights]; // for 1-based indexing

    // console.log(arr);

    make_heap(arr, moves);

    // return moves;

    let N = arr.length;

    while (N > 1) {
        _delete(arr, N, moves);
        N--;
    }

    // console.log(arr);

    return moves;
}

// function siftUp(arr: number[], idx: number) {
//     let parentIdx = Math.floor(idx / 2);

//     while (parentIdx >= 1 && arr[parentIdx] < arr[idx]) {
//         [arr[parentIdx], arr[idx]] = [arr[idx], arr[parentIdx]];
//         idx = parentIdx;
//         parentIdx = Math.floor(parentIdx / 2);
//     }
// }

function siftDown(arr: number[], idx: number, N: number, moves: moveType[]) {
    while (2 * idx < N) {
        let childIndex = 2 * idx;

        if (childIndex + 1 < N && arr[childIndex] < arr[childIndex + 1])
            childIndex++;

        moves.push({
            indices: [idx - 1, childIndex - 1],
            type: "compare",
        });

        if (arr[idx] < arr[childIndex]) {
            moves.push({
                indices: [idx - 1, childIndex - 1],
                type: "swap",
            });

            [arr[idx], arr[childIndex]] = [arr[childIndex], arr[idx]];
            idx = childIndex;
        } else break;
    }
}

// function _insert(arr, elm) {
//     arr.push(elm);
//     siftUp(arr, arr.length - 1);
// }

function _delete(arr: number[], N: number, moves: moveType[]) {
    moves.push({
        indices: [0, N - 2],
        type: "swap",
    });

    [arr[1], arr[N - 1]] = [arr[N - 1], arr[1]]; // pop
    siftDown(arr, 1, N - 1, moves);

    // return N-1;
}

function make_heap(arr: number[], moves: moveType[]) {
    const N = arr.length;

    for (let i = N - 1; i >= 1; i--) siftDown(arr, i, N, moves);
}
