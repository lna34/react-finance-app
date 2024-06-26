import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import CardList from "../../components/CardList/CardList";
import ListPortfolio from "../../components/Portfolio/ListPortfolio/ListPortfolio";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../types/companySearch";
import Search from "../../components/Search/Search";

type Props = {};

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    console.log(e);
    const updatedPortfolioValues = portfolioValues.filter(
      (p) => p !== e.target[0].value
    );
    setPortfolioValues(updatedPortfolioValues);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    if (portfolioValues.find((p) => p === e.target[0].value)) {
      return;
    }

    setPortfolioValues([...portfolioValues, e.target[0].value]);
    console.log(portfolioValues);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const companiesResult = await searchCompanies(search);
    if (typeof companiesResult === "string") {
      setServerError(companiesResult);
    } else if (Array.isArray(companiesResult.data)) {
      setSearchResult(companiesResult.data);
    }
  };

  return (
    <div className="app">
      <Search
        onSearchSubmit={onSearchSubmit}
        handleSearchChange={handleSearchChange}
        search={search}
      />
      <CardList
        onPortfolioCreate={onPortfolioCreate}
        searchResults={searchResult}
      />
    </div>
  );
};

export default SearchPage;
