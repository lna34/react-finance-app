import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../types/companySearch";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <div className="details">
        <div className="symbol">{searchResult.exchangeShortName}</div>
        <Link to={`/company/${searchResult.symbol}`} className="name">
          {searchResult.name} {searchResult.stockExchange}
        </Link>
      </div>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;
