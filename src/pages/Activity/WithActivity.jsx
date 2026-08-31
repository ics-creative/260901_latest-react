import { Activity, Suspense, useState } from "react";
import { Spinner } from "../../components/Spinner.jsx";
import { fetchCountries } from "./fetchCountries.js";
import { ProfileForm } from "./ProfileForm.jsx";
import { QuestionnaireForm } from "./QuestionnaireForm.jsx";

const Preservation = () => {
  const [tab, setTab] = useState("profile");
  const [countries] = useState(() => fetchCountries());

  return (
    <section className="preservation">
      <Activity mode={tab === "profile" ? "visible" : "hidden"}>
        <ProfileForm />
      </Activity>
      <Activity mode={tab === "questionnaire" ? "visible" : "hidden"}>
        <QuestionnaireForm resource={countries} />
      </Activity>

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
 * Activityによる状態保持とプリレンダリングを確認するページを表示します。
 */
export const WithActivity = () => (
  <div className="activity">
    <Suspense fallback={<Spinner />}>
      <Preservation />
    </Suspense>
  </div>
);
