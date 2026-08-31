import { startTransition, useState, ViewTransition } from "react";
import { users } from "../Suspense/fetchUsers.js";
import { ProfileDetail } from "./ProfileDetail.jsx";

const UserList = ({ onSelect }) => (
  <section>
    <ul className="vt-user-list">
      {users.map((user) => (
        <li key={user.id}>
          <ViewTransition name={`user-card-${user.id}`}>
            <button
              className="vt-user-list__button"
              onClick={() => onSelect(user)}
              type="button"
            >
              <img
                alt=""
                className="vt-user-list__image"
                height="40"
                src={user.image}
                width="40"
              />
              <span className="vt-user-list__copy">
                <strong>{user.name}</strong>
                <small>{user.role}</small>
              </span>
            </button>
          </ViewTransition>
        </li>
      ))}
    </ul>
  </section>
);

const UserDetail = ({ user, onBack }) => (
  <section class="user-detail">
    <div>
      <button onClick={onBack} type="button">
        Back
      </button>
    </div>
    <ViewTransition name={`user-card-${user.id}`}>
      <article className="user-detail__profile">
        <img
          alt=""
          className="user-detail__image"
          height="120"
          src={user.image}
          width="120"
        />
        <ProfileDetail
          name={user.name}
          role={user.role}
          branch={user.branch}
          address={user.address}
          phone={user.phone}
        />
      </article>
    </ViewTransition>
  </section>
);

/**
 * ViewTransitionによる一覧と詳細の遷移を確認するページを表示します。
 */
export const ViewTransitionPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (user) => {
    startTransition(() => setSelectedUser(user));
  };

  const closeUser = () => {
    startTransition(() => setSelectedUser(null));
  };

  return (
    <div className="view-transition">
      {selectedUser ? (
        <UserDetail onBack={closeUser} user={selectedUser} />
      ) : (
        <UserList onSelect={selectUser} />
      )}
    </div>
  );
};
