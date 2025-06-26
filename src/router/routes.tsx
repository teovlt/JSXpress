import Footer from "@/components/customs/footer";
import { Navbar } from "@/components/customs/navbar";
import { Home } from "@/pages/Home";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
