import { Navigate, Route, Routes } from "react-router-dom";
import { Activity } from "./pages/Activity.jsx";
import { DeferredPage } from "./pages/Deferred/DeferredPage.jsx";
import { Home } from "./pages/Home.jsx";
import { Optimistic } from "./pages/Optimistic/Optimistic.jsx";
import { LoadingSuspense } from "./pages/Suspense/LoadingSuspense.jsx";
import { TransitionPage } from "./pages/Transition/TransitionPage.jsx";
import { ViewTransition } from "./pages/ViewTransition.jsx";

/**
 * アプリケーションのルート定義を描画します。
 */
export const App = () => (
  <main className="main-content">
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<LoadingSuspense />} path="/suspense" />
      <Route element={<TransitionPage />} path="/transition" />
      <Route element={<DeferredPage />} path="/deferred" />
      <Route element={<Optimistic />} path="/optimistic" />
      <Route element={<Activity />} path="/activity" />
      <Route element={<ViewTransition />} path="/view-transition" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  </main>
);
