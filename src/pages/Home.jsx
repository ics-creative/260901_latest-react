import { NavLink } from "react-router";

const pages = [
  { path: "/suspense", label: "Suspense" },
  { path: "/transition", label: "useTransition" },
  { path: "/deferred", label: "useDeferredValue" },
  { path: "/optimistic", label: "useOptimistic" },
  { path: "/activity", label: "Activity" },
];

/**
 * 各ページへのリンク一覧を表示します。
 */
export const Home = () => (
  <ul className="home">
    {pages.map((page) => (
      <li key={page.path}>
        <NavLink to={page.path}>{page.label}</NavLink>
      </li>
    ))}
  </ul>
);
