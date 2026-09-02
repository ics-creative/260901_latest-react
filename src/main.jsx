import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ActivityPage } from "./pages/Activity/ActivityPage";
import { DeferredPage } from "./pages/Deferred/DeferredPage";
import { Home } from "./pages/Home";
import { Optimistic } from "./pages/Optimistic/Optimistic";
import { LoadingSuspense } from "./pages/Suspense/LoadingSuspense";
import { TransitionPage } from "./pages/Transition/TransitionPage";
import "./styles/base.css";
import "./styles/app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/suspense",
    element: <LoadingSuspense />,
  },
  {
    path: "/transition",
    element: <TransitionPage />,
  },
  {
    path: "/deferred",
    element: <DeferredPage />,
  },
  {
    path: "/optimistic",
    element: <Optimistic />,
  },
  {
    path: "/activity",
    element: <ActivityPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="main-content">
      <RouterProvider router={router} />
    </main>
  </StrictMode>,
);
