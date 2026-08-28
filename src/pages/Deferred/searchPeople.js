import { delayedPromise } from "../../logics/delayedPromise.js";
import { people } from "./people.js";

/**
 * 名前または所属チームで人物を検索します。
 * @param {string} query 検索文字列
 */
export const searchPeople = (query) => {
  const normalizedQuery = query.trim().toLowerCase();
  const results = people.filter(
    (person) =>
      normalizedQuery === "" ||
      person.name.toLowerCase().includes(normalizedQuery) ||
      person.team.toLowerCase().includes(normalizedQuery),
  );

  return delayedPromise(results, 600);
};
