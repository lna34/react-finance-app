import { SyntheticEvent } from "react";
import { CompanySearch } from "../../types/companySearch";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
import "./CardList.css";
import Spinner from "../Spinner/Spinner";
interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="cardContainer">
      {searchResults.length
        ? searchResults.map((result: CompanySearch) => {
            return (
              <Card
                onPortfolioCreate={onPortfolioCreate}
                id={result.symbol}
                searchResult={result}
                key={uuidv4()}
              />
            );
          })
        : "Aucune donnée"}
    </div>
  );
};

export default CardList;
