import { Outlet } from "react-router-dom";
import "./StaffLayout.scss";

const StaffLayout = () => {
  return (
    <div className="staff-layout">
      <Outlet />
    </div>
  );
};

export default StaffLayout;
