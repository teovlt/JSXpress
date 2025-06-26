import { Home } from "@/pages/Home";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
