import React, { SyntheticEvent } from "react";
import ListPortfolio from "../../components/Portfolio/ListPortfolio/ListPortfolio";

type Props = {};

const PortfolioPage = ({}: Props) => {
  const portfolioValues = [""];
  const onPortfolioDelete = (e: SyntheticEvent) => {};

  return (
    <ListPortfolio
      portfolioValues={portfolioValues}
      onPortfolioDelete={onPortfolioDelete}
    />
  );
};

export default PortfolioPage;
