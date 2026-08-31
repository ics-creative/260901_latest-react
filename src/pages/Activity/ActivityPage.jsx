import { NoActivity } from "./NoActivity";
import { WithActivity } from "./WithActivity";

export const ActivityPage = () => (
  <div className="page">
    <section className="page__section">
      <h2>No Activity</h2>
      <NoActivity />
    </section>
    <section className="page__section">
      <h2>Activity</h2>
      <WithActivity />
    </section>
  </div>
);
