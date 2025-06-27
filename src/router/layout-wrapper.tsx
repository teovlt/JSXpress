import { Footer } from "@/components/customs/footer";
import { Navbar } from "@/components/customs/navbar";
import { Outlet } from "react-router-dom";

interface LayoutWrapperProps {
  withLayout?: boolean;
}

export const LayoutWrapper = ({ withLayout = true }: LayoutWrapperProps) => {
  return (
    <>
      {withLayout && <Navbar />}
      <Outlet />
      {withLayout && <Footer />}
    </>
  );
};
