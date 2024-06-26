import { ChangeEvent, SyntheticEvent } from "react";
import "./Search.css";
interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string | undefined;
}

const Search: React.FC<Props> = ({
  search,
  onSearchSubmit,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <>
      <div className="searchContainer">
        <form className="searchForm" onSubmit={onSearchSubmit}>
          <input
            className="searchCompanies"
            value={search}
            onChange={handleSearchChange}
            type="text"
          />
          <button className="searchCompaniesButton" type="submit">
            Rechercher une entreprise
          </button>
        </form>
      </div>
    </>
  );
};
export default Search;
