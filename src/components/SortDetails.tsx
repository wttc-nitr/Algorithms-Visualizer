type sortProperties = {
    algoName: "bubble" | "insertion" | "merge" | "quick" | "heap";
    timeComplexity: {
        best: string;
        average: string;
        worst: string;
    };
    spaceComplexity: string;
    online: boolean;
    stable: boolean;
    extraDetails?: string;
};

const objSortingDetails: sortProperties[] = [
    {
        algoName: "bubble",
        timeComplexity: {
            worst: "O(N * N)",
            average: "O(N * N)",
            best: "O(N)",
        },
        spaceComplexity: "O(1)",
        online: false,
        stable: true,
    },
    {
        algoName: "insertion",
        timeComplexity: {
            worst: "O(N * N)",
            average: "O(N * N)",
            best: "O(N)",
        },
        spaceComplexity: "O(1)",
        online: true,
        stable: true,
        extraDetails:
            "since it is online it can be used to sort stream of data(we don't have the complete data beforehand), can be also used if array is almost sorted",
    },
    {
        algoName: "merge",
        timeComplexity: {
            worst: "O(NlogN)",
            average: "O(NlogN)",
            best: "O(NlogN)",
        },
        spaceComplexity: "O(N)",
        online: false,
        stable: true,
        extraDetails:
            "used to sort linkedList because we don't need random access, so we don't need extra space. also used for external sorting",
    },
    {
        algoName: "quick",
        timeComplexity: {
            worst: "O(N * N)",
            average: "O(NlogN)",
            best: "O(NlogN)",
        },
        spaceComplexity: "O(1)",
        online: false,
        stable: false,
        extraDetails:
            "quick sort is preferred over merge-sort for arrays, because we need random access.",
    },
    {
        algoName: "heap",
        timeComplexity: {
            worst: "O(NlogN)",
            average: "O(NlogN)",
            best: "O(NlogN)",
        },
        spaceComplexity: "O(1)",
        online: false,
        stable: false,
    },
];

const SortDetails = ({
    sortType,
}: {
    sortType: sortProperties["algoName"];
}) => {
    const found = objSortingDetails.reduce((acc, curr) => {
        if (curr.algoName === sortType) {
            return curr;
        }

        return acc;
    });

    if (!found) return <div>error</div>;

    return (
        <div className="flex justify-between">
            <div className="flex flex-col mx-2">
                <h3>Time-Complexity</h3>
                <h3>{found.timeComplexity.average}</h3>
            </div>
            |
            <div className="flex flex-col mx-2">
                <h3>Space-Complexity</h3>
                <h3>{found.spaceComplexity}</h3>
            </div>
            |
            <div className="flex flex-col mx-2">
                <h3>Online</h3>
                <input type="checkbox" checked={found.online} />
            </div>
            |
            <div className="flex flex-col ml-2">
                <h3>Stable</h3>
                <input type="checkbox" checked={found.stable} />
            </div>
        </div>
    );
};

export type sortType = sortProperties["algoName"];

export default SortDetails;
