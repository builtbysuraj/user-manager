import User from "./User";

export default function UserList({ userData }) {
  return (
    <>
      {userData.map((user) => (
        <User 
        key={user.id}
        id={user.id}
        name={user.name}
        phone={user.phone}
        email={user.email}
        />
      ))}
    </>
  );
}
