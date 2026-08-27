import { useActionState, useOptimistic, useState } from "react";
import { wait } from "../utils/resources.js";

const initialState = {
  liked: false,
  count: 128,
  error: "",
};

const saveLike = async (previousState, formData) => {
  await wait(1400);
  const shouldFail = formData.get("shouldFail") === "true";
  const liked = formData.get("liked") === "true";

  if (shouldFail) {
    return {
      ...previousState,
      error: "通信エラーが発生したため、表示を元に戻しました。",
    };
  }

  return {
    liked,
    count: previousState.count + (liked ? 1 : -1),
    error: "",
  };
};

const optimisticReducer = (currentState, liked) => ({
  liked,
  count: currentState.count + (liked ? 1 : -1),
  error: "",
});

const LikeCard = () => {
  const [shouldFail, setShouldFail] = useState(false);
  const [state, submitAction, isPending] = useActionState(
    saveLike,
    initialState,
  );
  const [optimisticState, setOptimisticLiked] = useOptimistic(
    state,
    optimisticReducer,
  );

  const action = async (formData) => {
    const nextLiked = formData.get("liked") === "true";
    setOptimisticLiked(nextLiked);
    await submitAction(formData);
  };

  return (
    <div className="optimistic-layout">
      <article className="social-card">
        <div className="social-image" aria-hidden="true">
          <span>UI</span>
        </div>
        <div className="social-body">
          <p className="mini-label">DESIGN NOTE</p>
          <h2>余白から考える、読みやすいカードUI</h2>
          <p>
            情報のまとまりを余白で整理すると、装飾を増やさなくても読みやすくなります。
          </p>
          <form action={action}>
            <input
              name="liked"
              type="hidden"
              value={String(!optimisticState.liked)}
            />
            <input name="shouldFail" type="hidden" value={String(shouldFail)} />
            <button
              aria-pressed={optimisticState.liked}
              className={
                optimisticState.liked ? "like-button is-liked" : "like-button"
              }
              disabled={isPending}
              type="submit"
            >
              <span aria-hidden="true">♥</span>
              {optimisticState.liked ? "いいね済み" : "いいね"}
              <strong>{optimisticState.count}</strong>
            </button>
          </form>
        </div>
      </article>

      <aside className="action-console">
        <h3>APIの状態</h3>
        <p className={isPending ? "api-status is-pending" : "api-status"}>
          <span aria-hidden="true" />
          {isPending ? "サーバーへ保存中（1.4秒）" : "保存済み"}
        </p>
        <label className="switch-row">
          <input
            checked={shouldFail}
            disabled={isPending}
            onChange={(event) => setShouldFail(event.target.checked)}
            type="checkbox"
          />
          <span>次のリクエストを失敗させる</span>
        </label>
        <p className="note">
          ボタンの表示はすぐ変わります。失敗を有効にすると、1.4秒後に確定値へ戻ります。
        </p>
        {state.error && (
          <p className="error-message" role="alert">
            {state.error}
          </p>
        )}
      </aside>
    </div>
  );
};

/**
 * 楽観的更新の成功時と失敗時の挙動を確認するページを表示します。
 */
export const Optimistic = () => (
  <>
    <h1>APIの応答前に操作結果を見せる</h1>
    <p>
      「いいね」を押した瞬間に画面を更新します。APIが失敗した場合に表示が確定値へ戻る様子も確認できます。
    </p>
    <LikeCard />
  </>
);
