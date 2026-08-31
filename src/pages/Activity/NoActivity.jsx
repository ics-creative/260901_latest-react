import { Suspense, useState } from "react";
import { Spinner } from "../../components/Spinner.jsx";
import { fetchCountries } from "./fetchCountries.js";
import { ProfileForm } from "./ProfileForm.jsx";
import { QuestionnaireForm } from "./QuestionnaireForm.jsx";

const Preservation = () => {
  const [tab, setTab] = useState("profile");
  const [countries] = useState(() => fetchCountries());

  return (
    <section className="preservation">
      {tab === "profile" && <ProfileForm />}
      {tab === "questionnaire" && <QuestionnaireForm resource={countries} />}

      <div className="preservation_buttons">
        <button
          className="button-secondary"
          disabled={tab === "profile"}
          onClick={() => setTab("profile")}
          type="button"
        >
          Prev
        </button>
        <button
          disabled={tab === "questionnaire"}
          onClick={() => setTab("questionnaire")}
          type="button"
        >
          Next
        </button>
      </div>
    </section>
  );
};

/**
 * Activityがないページ
 */
export const NoActivity = () => (
  <div className="activity">
    <Suspense fallback={<Spinner />}>
      <Preservation />
    </Suspense>
  </div>
);
