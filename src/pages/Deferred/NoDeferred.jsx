import { Suspense, use, useState } from "react";
import { SearchBox } from "../../components/SearchBox.jsx";
import { Spinner } from "../../components/Spinner.jsx";
import { searchPeople } from "./searchPeople.js";

const SearchResults = ({ resource }) => {
  const people = use(resource);

  return (
    <div className="search-results">
      <ul className="search-results__list">
        {people.map((person) => (
          <li className="search-results__list-item" key={person.id}>
            <span>{person.name}</span>
            <span className="search-results__list-team">{person.team}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * 人物の検索。
 * useDeferredValue不使用。
 */
export const NoDeferred = () => {
  const [query, setQuery] = useState("");
  const [searchResource, setSearchResource] = useState(() => searchPeople(""));

  const handleSearchChange = (nextQuery) => {
    setQuery(nextQuery);
    setSearchResource(searchPeople(nextQuery));
  };

  return (
    <div className="deferred">
      <SearchBox onChange={handleSearchChange} value={query} />
      <div className="deferred__list">
        <Suspense fallback={<Spinner />}>
          <SearchResults resource={searchResource} />
        </Suspense>
      </div>
    </div>
  );
};
