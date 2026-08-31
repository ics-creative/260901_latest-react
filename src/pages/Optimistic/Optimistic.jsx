import { useOptimistic, useState, useTransition } from "react";
import heart from "../../images/heart.svg";
import icon1 from "../../images/icon_1.jpg";
import icon7 from "../../images/icon_7.jpg";
import { saveLike } from "./updateLike.js";

/**
 * いいねを楽観更新で実装します。
 */
export const Optimistic = () => {
  const [liked, setLiked] = useState(false);
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked);
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(128);

  const handleLike = () => {
    const nextLiked = !optimisticLiked;
    startTransition(async () => {
      setOptimisticLiked(nextLiked);
      const saved = await saveLike(nextLiked);
      setLiked(saved);
      setCount((currentCount) => currentCount + (saved ? 1 : -1));
    });
  };

  const optimisticCount =
    optimisticLiked === liked ? count : count + (optimisticLiked ? 1 : -1);

  return (
    <div className="optimistic">
      <article className="optimistic-article">
        <div className="optimistic__user">
          <img
            className="optimistic__avatar"
            src={icon7}
            alt=""
            width="40"
            height="40"
          />
          <p>Lucas Martin</p>
        </div>
        <img
          className="optimistic__post-image"
          src={icon1}
          alt=""
          width="400"
          height="400"
        />
        <div className="optimistic__body">
          <div className="optimistic__controls">
            <button
              aria-label={optimisticLiked ? "Unlike" : "Like"}
              aria-pressed={optimisticLiked}
              className="optimistic__like-button"
              disabled={isPending}
              onClick={handleLike}
              type="button"
            >
              <img alt="" src={heart} width="28" height="28" />
            </button>
            <p className="optimistic__likes">{optimisticCount} likes</p>
          </div>
          <p className="optimistic__caption">
            my lovely kitten♡ bothering me during important meetings and i can’t
            even scold her 😂
          </p>
        </div>
      </article>
      <div className="optimistic-labels">
        <p>{isPending ? "保存中" : "保存完了"}</p>
        <p>
          optimisticLiked:{" "}
          <span
            className={optimisticLiked && "is-liked"}
          >{`${optimisticLiked}`}</span>
        </p>
        <p>
          liked: <span className={liked && "is-liked"}>{`${liked}`}</span>
        </p>
      </div>
    </div>
  );
};
