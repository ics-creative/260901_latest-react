import { useDeferredValue, useState } from "react";
import { CompareGrid } from "../components/CompareGrid.jsx";
import { people } from "../data/catalog.js";

const SearchResults = ({ query }) => {
  const normalizedQuery = query.trim().toLowerCase();
  const matches = [];
  let checksum = 0;

  for (const person of people) {
    for (let step = 0; step < 28; step += 1) {
      checksum += (person.id * (step + 5)) % 19;
    }
    if (
      normalizedQuery === "" ||
      person.name.toLowerCase().includes(normalizedQuery) ||
      person.team.toLowerCase().includes(normalizedQuery)
    ) {
      matches.push(person);
    }
  }

  return (
    <div className="search-results">
      <p>
        <strong>{matches.length.toLocaleString()}</strong>人が見つかりました
        <span className="visually-hidden">計算ID {checksum % 991}</span>
      </p>
      <ul>
        {matches.slice(0, 7).map((person) => (
          <li key={person.id}>
            <span className="avatar">{person.name.slice(0, 1)}</span>
            <span>
              <strong>{person.name}</strong>
              <small>{person.team}</small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SearchBox = ({ value, onChange }) => (
  <label className="search-box">
    <span>メンバーを検索</span>
    <input
      onChange={(event) => onChange(event.target.value)}
      placeholder="例：佐藤、デザイン"
      type="search"
      value={value}
    />
  </label>
);

const WithoutDeferred = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBox onChange={setQuery} value={query} />
      <SearchResults query={query} />
    </>
  );
};

const WithDeferred = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    <>
      <SearchBox onChange={setQuery} value={query} />
      <div className={isStale ? "pending-content" : undefined}>
        <SearchResults query={deferredQuery} />
      </div>
      <p className="status-line" aria-live="polite">
        {isStale ? "入力を優先しています…" : "検索結果は最新です"}
      </p>
    </>
  );
};

/**
 * useDeferredValueの使用有無を比較するページを表示します。
 */
export const Deferred = () => (
  <>
    <h1>入力値と検索結果の更新頻度を比べる</h1>
    <p>
      「デザイン」などの文字を素早く入力してください。右側は入力値をすぐ更新し、重い検索結果だけを遅らせます。
    </p>
    <CompareGrid>
      <WithoutDeferred />
      <WithDeferred />
    </CompareGrid>
  </>
);
