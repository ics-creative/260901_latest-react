/**
 * ユーザーの詳細ページ
 * @param {string} role
 * @param {string} name
 * @param {string} branch
 * @param {string} address
 * @param {string} phone
 * @returns
 */
export const ProfileDetail = ({ role, name, branch, address, phone }) => (
  <div className="profile-detail">
    <p className="profile-detail__role">{role}</p>
    <h2 className="profile-detail__title">{name}</h2>
    <dl className="profile-detail__content">
      <div>
        <dt>Branch</dt>
        <dd>{branch}</dd>
      </div>
      <div>
        <dt>Address</dt>
        <dd>{address}</dd>
      </div>
      <div>
        <dt>Phone</dt>
        <dd>
          <a href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>
        </dd>
      </div>
    </dl>
  </div>
);
