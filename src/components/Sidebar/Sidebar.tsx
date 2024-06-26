import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="company-profile" className="sidebar-link">
        <FaHome className="sidebar-icon" />
        Company profile
      </Link>
      <Link to="income-statements" className="sidebar-link">
        <FaHome className="sidebar-icon" />
        Income Statements
      </Link>
      <Link to="balance-sheet" className="sidebar-link">
        <FaHome className="sidebar-icon" />
        Balance sheet
      </Link>
      <Link to="cashflow-statement" className="sidebar-link">
        <FaHome className="sidebar-icon" />
        Cashflow statement
      </Link>
    </div>
  );
};

export default Sidebar;
