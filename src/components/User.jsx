export default function User({ id, name, phone, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p> {id} </p>
      <p> {phone} </p>
      <p> {email} </p>
    </div>
  );
}
