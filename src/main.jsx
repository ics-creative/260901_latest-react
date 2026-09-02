import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ActivityPage } from "./pages/Activity/ActivityPage";
import { DeferredPage } from "./pages/Deferred/DeferredPage";
import { Home } from "./pages/Home";
import { Optimistic } from "./pages/Optimistic/Optimistic";
import { LoadingSuspense } from "./pages/Suspense/LoadingSuspense";
import { TransitionPage } from "./pages/Transition/TransitionPage";
import "./styles/base.css";
import "./styles/app.css";

const siteTitle = "Improve User Experience with React";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <title>{siteTitle}</title>
        <Home />
      </>
    ),
  },
  {
    path: "/suspense",
    element: (
      <>
        <title>{`${siteTitle} | Suspense`}</title>
        <LoadingSuspense />
      </>
    ),
  },
  {
    path: "/transition",
    element: (
      <>
        <title>{`${siteTitle} | useTransition`}</title>
        <TransitionPage />
      </>
    ),
  },
  {
    path: "/deferred",
    element: (
      <>
        <title>{`${siteTitle} | useDeferredValue`}</title>
        <DeferredPage />
      </>
    ),
  },
  {
    path: "/optimistic",
    element: (
      <>
        <title>{`${siteTitle} | useOptimistic`}</title>
        <Optimistic />
      </>
    ),
  },
  {
    path: "/activity",
    element: (
      <>
        <title>{`${siteTitle} | Activity`}</title>
        <ActivityPage />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="main-content">
      <RouterProvider router={router} />
    </main>
  </StrictMode>,
);
