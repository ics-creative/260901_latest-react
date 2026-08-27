import { Navigate, Route, Routes } from "react-router-dom";
import { Activity } from "./pages/Activity.jsx";
import { Deferred } from "./pages/Deferred.jsx";
import { Home } from "./pages/Home.jsx";
import { LoadingSuspense } from "./pages/LoadingSuspense.jsx";
import { Optimistic } from "./pages/Optimistic.jsx";
import { Transition } from "./pages/Transition.jsx";
import { ViewTransition } from "./pages/ViewTransition.jsx";

/**
 * アプリケーションのルート定義を描画します。
 */
export const App = () => (
  <main className="main-content">
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<LoadingSuspense />} path="/suspense" />
      <Route element={<Transition />} path="/transition" />
      <Route element={<Deferred />} path="/deferred" />
      <Route element={<Optimistic />} path="/optimistic" />
      <Route element={<Activity />} path="/activity" />
      <Route element={<ViewTransition />} path="/view-transition" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  </main>
);
