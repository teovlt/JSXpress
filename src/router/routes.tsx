import { Home } from "@/pages/Home";
import { Routes, Route } from "react-router-dom";
import { LayoutWrapper } from "./layout-wrapper";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
