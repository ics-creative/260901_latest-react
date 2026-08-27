import {
  Activity as ReactActivity,
  Suspense,
  use,
  useEffect,
  useState,
} from "react";
import { Spinner } from "../components/Spinner.jsx";
import { createReportResource } from "../utils/resources.js";

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  return (
    <div className="form-stack">
      <label>
        <span>表示名</span>
        <input
          onChange={(event) => setName(event.target.value)}
          placeholder="名前を入力"
          value={name}
        />
      </label>
      <label>
        <span>自己紹介</span>
        <textarea
          onChange={(event) => setBio(event.target.value)}
          placeholder="自己紹介を入力"
          rows="4"
          value={bio}
        />
      </label>
    </div>
  );
};

const NotificationForm = () => {
  const [email, setEmail] = useState(true);
  const [frequency, setFrequency] = useState("daily");
  return (
    <div className="form-stack">
      <label className="switch-row">
        <input
          checked={email}
          onChange={(event) => setEmail(event.target.checked)}
          type="checkbox"
        />
        <span>メール通知を受け取る</span>
      </label>
      <label>
        <span>通知の頻度</span>
        <select
          onChange={(event) => setFrequency(event.target.value)}
          value={frequency}
        >
          <option value="realtime">リアルタイム</option>
          <option value="daily">1日1回</option>
          <option value="weekly">週1回</option>
        </select>
      </label>
    </div>
  );
};

const StatePreservation = () => {
  const [tab, setTab] = useState("profile");
  return (
    <>
      <div className="tab-list" role="tablist" aria-label="設定項目">
        <button
          aria-selected={tab === "profile"}
          onClick={() => setTab("profile")}
          role="tab"
          type="button"
        >
          プロフィール
        </button>
        <button
          aria-selected={tab === "notification"}
          onClick={() => setTab("notification")}
          role="tab"
          type="button"
        >
          通知設定
        </button>
      </div>
      <div className="activity-form">
        <ReactActivity mode={tab === "profile" ? "visible" : "hidden"}>
          <ProfileForm />
        </ReactActivity>
        <ReactActivity mode={tab === "notification" ? "visible" : "hidden"}>
          <NotificationForm />
        </ReactActivity>
      </div>
      <p className="note">
        入力後にタブを切り替え、戻ってみてください。子コンポーネントのstateが保持されます。
      </p>
    </>
  );
};

const Report = ({ resource }) => {
  const report = use(resource);
  return (
    <div className="report-card">
      <div className="score-ring">
        <strong>{report.score}</strong>
        <span>score</span>
      </div>
      <div>
        <p className="mini-label">ENGAGEMENT REPORT</p>
        <h3>{report.change} 改善</h3>
        <p>{report.summary}</p>
      </div>
    </div>
  );
};

const Prerender = () => {
  const [resource, setResource] = useState(createReportResource);
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isCurrent = true;
    resource.then(() => {
      if (isCurrent) setStatus("ready");
    });
    return () => {
      isCurrent = false;
    };
  }, [resource]);

  const reset = () => {
    setIsVisible(false);
    setStatus("loading");
    setResource(createReportResource());
  };

  return (
    <>
      <div className="prerender-controls">
        <p className={`preload-status preload-status--${status}`}>
          <span aria-hidden="true" />
          {status === "ready"
            ? "非表示のレポートを準備できました"
            : "非表示のままレポートを準備中…"}
        </p>
        <div>
          <button
            className="button"
            onClick={() => setIsVisible((current) => !current)}
            type="button"
          >
            {isVisible ? "レポートを隠す" : "レポートを表示"}
          </button>
          <button
            className="button button--quiet"
            onClick={reset}
            type="button"
          >
            最初から試す
          </button>
        </div>
      </div>
      <ReactActivity mode={isVisible ? "visible" : "hidden"}>
        <Suspense fallback={<Spinner label="レポートを読み込み中" />}>
          <Report resource={resource} />
        </Suspense>
      </ReactActivity>
      {!isVisible && (
        <div className="hidden-placeholder">
          レポートは非表示です。準備完了後に表示すると、すぐに内容が現れます。
        </div>
      )}
    </>
  );
};

/**
 * Activityによる状態保持とプリレンダリングを確認するページを表示します。
 */
export const Activity = () => (
  <>
    <h1>非表示のUIを保持し、先に準備する</h1>
    <p>
      Activityは子要素を非表示にしてもstateを保持します。非表示中に低い優先度でレンダリングを進める使い方も確認できます。
    </p>
    <div className="activity-grid">
      <StatePreservation />
      <Prerender />
    </div>
  </>
);
