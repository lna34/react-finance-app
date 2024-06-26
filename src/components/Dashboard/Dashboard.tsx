import { Outlet } from "react-router";
import "./Dashboard.css";
import Tile from "../Tile/Tile";

interface Props {
  ticker: string;
}

const Dashboard = ({ ticker }: Props) => {
  return (
    <div className="dashboard">
      <Outlet context={ticker} />
    </div>
  );
};

export default Dashboard;
