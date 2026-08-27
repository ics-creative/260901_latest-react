import { Link } from "react-router-dom";

const pages = [
  { path: "/suspense", label: "<Suspense>で準備できた部分から見せる" },
  { path: "/transition", label: "useTransitionでstateの更新を遅らせる" },
  { path: "/deferred", label: "useDeferredValueで入力と更新の頻度を分ける" },
  {
    path: "/optimistic",
    label: "useOptimisticとuseActionStateでAPIの完了を待たず画面を更新する",
  },
  {
    path: "/activity",
    label:
      "非表示のコンポーネントで状態を保持する / 重いコンポーネントのプリレンダリング",
  },
  { path: "/view-transition", label: "画面の変化をアニメーションさせる" },
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
