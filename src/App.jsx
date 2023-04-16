import { useState, useEffect } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { Global } from "./styles/Global.style";
import { Container, Wrapper } from "./styles/Main.style";
import { SearchBox } from "./styles/Search.style";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // fetching user data from api
  const fetchData = async () => {
    try {
      const responce = await fetch(`${import.meta.env.VITE_API_URL}`);
      if (!responce.ok) throw new Error(`Responce isnt OK`);
      const data = await responce.json();
      setUserData(data);
    } catch (error) {
      throw error;
    }
  };

  // handle form submision
  const handleUserAdd = (name, phone, email) => {
    const newUser = {
      id: userData.length + 1,
      name,
      email,
      phone,
    };
    setUserData([...userData, newUser]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // filtered user based on search query
  const filteredUser = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Global />
      <Wrapper>
        {/* search box  */}
        <SearchBox
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          spellCheck="false"
        />
        <AddUser onAdd={handleUserAdd} />
        <UserList userData={filteredUser} />
      </Wrapper>
    </Container>
  );
}
