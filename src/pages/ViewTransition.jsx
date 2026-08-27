import {
  ViewTransition as ReactViewTransition,
  startTransition,
  useState,
} from "react";
import { articles } from "../data/catalog.js";

const ArticleVisual = ({ article, large = false }) => (
  <div
    className={`article-visual article-visual--${article.color}${large ? " is-large" : ""}`}
  >
    <span>{article.category}</span>
    <strong>{article.title.slice(0, 1)}</strong>
  </div>
);

const ArticleList = ({ onSelect }) => (
  <div className="article-grid">
    {articles.map((article) => (
      <ReactViewTransition
        enter="article-enter"
        exit="article-exit"
        key={article.id}
        name={`article-${article.id}`}
        share="article-share"
      >
        <button
          className="article-card"
          onClick={() => onSelect(article)}
          type="button"
        >
          <ArticleVisual article={article} />
          <span className="article-copy">
            <small>{article.category}</small>
            <strong>{article.title}</strong>
            <span>{article.description}</span>
          </span>
        </button>
      </ReactViewTransition>
    ))}
  </div>
);

const ArticleDetail = ({ article, onBack }) => (
  <ReactViewTransition
    enter="article-enter"
    exit="article-exit"
    name={`article-${article.id}`}
    share="article-share"
  >
    <article className="article-detail">
      <button className="back-button" onClick={onBack} type="button">
        ← 一覧へ戻る
      </button>
      <ArticleVisual article={article} large />
      <div className="article-detail-copy">
        <p className="mini-label">{article.category}</p>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <p>
          一覧と詳細で同じ`name`を指定したViewTransitionが、共有要素として位置と大きさを滑らかにつなぎます。
        </p>
      </div>
    </article>
  </ReactViewTransition>
);

/**
 * ViewTransitionによる一覧と詳細の遷移を確認するページを表示します。
 */
export const ViewTransition = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const supportsViewTransition = "startViewTransition" in document;

  const selectArticle = (article) => {
    startTransition(() => setSelectedArticle(article));
  };

  const closeArticle = () => {
    startTransition(() => setSelectedArticle(null));
  };

  return (
    <>
      <h1>一覧と詳細をアニメーションでつなぐ</h1>
      <p>
        カードを選ぶと、同じ名前を持つ共有要素が一覧から詳細へ移動します。更新はstartTransitionで開始しています。
      </p>
      <p
        className={
          supportsViewTransition ? "support-note" : "support-note warning"
        }
      >
        {supportsViewTransition
          ? "このブラウザーはView Transitions APIに対応しています。"
          : "このブラウザーはView Transitions APIに未対応のため、アニメーションなしで切り替わります。"}
      </p>
      <div className="view-transition-stage">
        {selectedArticle ? (
          <ArticleDetail article={selectedArticle} onBack={closeArticle} />
        ) : (
          <ArticleList onSelect={selectArticle} />
        )}
      </div>
    </>
  );
};
