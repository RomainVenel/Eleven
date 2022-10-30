import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import New from "./New";
import List from "./List";
import Edit from "./Edit";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="list" element={<List />} />
                    <Route path="new" element={<New />} />
                    <Route path="edit" element={<Edit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;