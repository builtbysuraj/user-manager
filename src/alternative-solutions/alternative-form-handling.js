//* handle form submit in controlled form

const handleSubmit = () => {
  e.preventDefault();
  if ((userInput.name === "", userInput.email === "", userInput.phone === ""))
    return;
  onAdd(userInput.name, userInput.email, userInput.phone);
  setUserInput({
    name: "",
    email: "",
    phone: "",
  });
}


//* handle input change in controlled form

const handleChange = (e) => {
  const { name, value } = e.target;
  setUserInput((prev) => ({
    ...prev,
    [name]: value,
  }));
};

