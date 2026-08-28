import { Suspense, use, useState } from "react";
import { Spinner } from "../../components/Spinner.jsx";
import { fetchArticles, fetchUser, fetchUsers } from "./fetchUsers.js";

const UserList = ({ resource, onClick }) => {
  const users = use(resource);

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <button
            className="user-list__button"
            onClick={() => onClick(user.id)}
            type="button"
          >
            <img
              className="user-list__icon"
              src={user.image}
              width="40"
              height="40"
              alt=""
            />
            <span>{user.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

const UserProfile = ({ resource }) => {
  const profile = use(resource);

  return (
    <div className="user-profile">
      <img
        alt=""
        className="user-profile__image"
        src={profile.image}
        width="120"
        height="120"
      />
      <div>
        <h3>
          {profile.name} | <small>{profile.role}</small>
        </h3>
        <p>Branch: {profile.branch}</p>
        <p>{profile.address}</p>
        <p>{profile.phone}</p>
      </div>
    </div>
  );
};

const RelatedArticles = ({ resource }) => {
  const articles = use(resource);

  return (
    <div className="related-articles">
      <h3>Articles</h3>
      <div className="related-articles__item">
        {articles.map((article) => (
          <div key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 全体ローディングと部分ローディングを比較するページを表示します。
 */
export const LoadingSuspense = () => {
  const [users] = useState(() => fetchUsers());
  const [currentUser, setCurrentUser] = useState(() => fetchUser(1));
  const [articles, setArticles] = useState(() => fetchArticles(1));

  const onClick = (userId) => {
    setCurrentUser(fetchUser(userId));
    setArticles(fetchArticles(userId));
  };

  return (
    <div className="loading-suspense">
      <section className="list">
        <Suspense fallback={<Spinner />}>
          <UserList onClick={onClick} resource={users} />
        </Suspense>
      </section>
      <section className="profile">
        <Suspense fallback={<Spinner />}>
          <UserProfile resource={currentUser} />
        </Suspense>
      </section>
      <section className="related">
        <Suspense fallback={<Spinner />}>
          <RelatedArticles resource={articles} />
        </Suspense>
      </section>
    </div>
  );
};
