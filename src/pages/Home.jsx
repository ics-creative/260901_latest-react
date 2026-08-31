import { Link } from "react-router-dom";

const pages = [
  { path: "/suspense", label: "Suspense" },
  { path: "/transition", label: "useTransition" },
  { path: "/deferred", label: "useDeferredValue" },
  { path: "/optimistic", label: "useOptimistic" },
  { path: "/activity", label: "Activity" },
  { path: "/view-transition", label: "ViewTransition" },
];

/**
 * 各ページへのリンク一覧を表示します。
 */
export const Home = () => (
  <ul className="home">
    {pages.map((page) => (
      <li key={page.path}>
        <Link to={page.path}>{page.label}</Link>
      </li>
    ))}
  </ul>
);
