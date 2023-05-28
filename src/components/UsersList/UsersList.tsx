import { FC } from "react";
import { User } from "../../types/types";

interface UsersListProps {
  users: User[];
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  const elements = users.map(
    ({
      id,
      name,
      username,
      email,
      address: {
        city,
        street,
        zipcode,
        suite,
        geo: { lat, lng },
      },
    }) => (
      <li key={id}>
        <b>{name}</b> -<span>{username}</span>
        <p>{email}</p>
        <p>{`${city}, ${street}, ${suite}, ${zipcode}, ${lat} - ${lng}`}</p>
        <button>Remove</button>
        <hr />
      </li>
    )
  );

  return <ul>{elements}</ul>;
};

export default UsersList;
