import { Deferred } from "./Deferred";
import { NoDeferred } from "./NoDeferred";

export const DeferredPage = () => (
  <div className="page">
    <section className="page__section">
      <h2>No Deferred</h2>
      <NoDeferred />
    </section>
    <section className="page__section">
      <h2>Deferred</h2>
      <Deferred />
    </section>
  </div>
);
