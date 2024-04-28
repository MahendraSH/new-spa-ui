import { Outlet, Navigate } from "react-router-dom";
import AuthWrapper from "./auth-components/AuthWrapper";
import { useGetProfileDetailsQuery } from "@/app/features/userApiSlice";

const AuthLayout = () => {
  const { isLoading, isError, isSuccess } = useGetProfileDetailsQuery();
  if (isLoading) {
    return <></>;
  }
  if (isSuccess) {
    return <Navigate to="/" />;
  }
  if (isError) {
    return (
      <AuthWrapper>
        <Outlet />
      </AuthWrapper>
    );
  }
};

export default AuthLayout;
