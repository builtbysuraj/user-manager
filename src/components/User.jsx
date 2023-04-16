import { DisplayUser } from "../styles/User.style";

export default function User({ id, name, phone, email }) {
  return (
    <DisplayUser>
        <p> {id} </p>
        <h3>{name}</h3>
        <p> {phone} </p>
        <p> {email} </p>
    </DisplayUser>
  );
}
