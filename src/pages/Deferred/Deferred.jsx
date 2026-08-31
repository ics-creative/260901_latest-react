import { Suspense, use, useDeferredValue, useState } from "react";
import { SearchBox } from "../../components/SearchBox.jsx";
import { Spinner } from "../../components/Spinner.jsx";
import { searchPeople } from "./searchPeople.js";

const SearchResults = ({ resource, isSearching }) => {
  const people = use(resource);

  return (
    <div className="search-results">
      <ul
        className={["search-results__list", isSearching && "is-pending"]
          .filter(Boolean)
          .join(" ")}
      >
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
 * useDeferredValueで検索中も直前の検索結果を表示します。
 */
export const Deferred = () => {
  const [query, setQuery] = useState("");
  const [searchResource, setSearchResource] = useState(() => searchPeople(""));

  const deferredResource = useDeferredValue(searchResource);
  const isSearching = searchResource !== deferredResource;

  const handleSearchChange = (nextQuery) => {
    setQuery(nextQuery);
    setSearchResource(searchPeople(nextQuery));
  };

  return (
    <div className="deferred">
      <SearchBox onChange={handleSearchChange} value={query} />
      <div className="deferred__list">
        <Suspense fallback={<Spinner />}>
          <SearchResults
            resource={deferredResource}
            isSearching={isSearching}
          />
        </Suspense>
      </div>
    </div>
  );
};
