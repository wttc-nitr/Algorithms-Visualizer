import type { moveType } from "../types/types";

const ShowBars = ({
    array,
    move,
}: {
    array: number[];
    move?: moveType;
}): JSX.Element => {
    return (
        <div id="container" className="h-[38rem] flex items-end mt-auto mb-2">
            {array.map((val, index) => (
                <div
                    key={index}
                    className="w-[10px] bg-black my-0 mx-[2px]"
                    style={{
                        height: `${Math.floor(val * 80) + 1}%`,
                        backgroundColor: `${
                            move && move.indices.includes(index)
                                ? move.type === "compare"
                                    ? "blue"
                                    : "green"
                                : "black"
                        }`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default ShowBars;
