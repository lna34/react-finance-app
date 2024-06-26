import { SyntheticEvent } from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

type Props = {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
};

const ListPortfolio = ({ onPortfolioDelete, portfolioValues }: Props) => {
  return (
    <>
      {portfolioValues.length
        ? portfolioValues.map((portfolioValue) => (
            <PortfolioItem
              onPortfolioDelete={onPortfolioDelete}
              portfolioValue={portfolioValue}
            />
          ))
        : "Aucune donnée dans le portfolio"}
    </>
  );
};

export default ListPortfolio;
