import { NoTransition } from "./NoTransition.jsx";
import { Transition } from "./Transition.jsx";

export const TransitionPage = () => (
  <div className="transition-page">
    <section className="transition-page__section">
      <h2>No Transition</h2>
      <NoTransition />
    </section>
    <section className="transition-page__section">
      <h2>Transition</h2>
      <Transition />
    </section>
  </div>
);
