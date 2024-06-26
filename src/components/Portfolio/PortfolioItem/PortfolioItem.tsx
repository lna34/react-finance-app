import { SyntheticEvent } from "react";
import "./PortfolioItem.css";
import { Link } from "react-router-dom";
type Props = {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
};

const PortfolioItem = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div className="portfolioItemContainer">
      <Link to={`company/${portfolioValue}`} className="portfolioItemSymbol">
        {portfolioValue}
      </Link>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} readOnly={true} value={portfolioValue} />
        <button className="portfolioItemDelete" type="submit">
          Delete
        </button>
      </form>
    </div>
  );
};

export default PortfolioItem;
