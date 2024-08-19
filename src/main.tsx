import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import SortContext from "./store/SortContext.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SortContext.Provider value={{ selectedSortType: "insertion" }}>
            <App />
        </SortContext.Provider>
    </React.StrictMode>
);
