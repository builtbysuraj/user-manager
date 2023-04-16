import { Formik, Field, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input, InputWrapper } from "../styles/Input.style";

export default function AddUser({ onAdd }) {
  // handle form submit using Formik
  const handleSubmit = (values, { resetForm }) => {
    const { name, phone, email } = values;
    if (name === "" || email === "" || phone === "") {
      toast.error("Invalid input input❗");
      return;
    }
    onAdd(name, phone, email);
    resetForm();
  };

  return (
    <InputWrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="name"
            placeholder="Name"
            type="text"
            as={Input}
            spellCheck="false"
          />
          <Field
            name="phone"
            placeholder="Phone"
            type="number"
            as={Input}
            spellCheck="false"
          />
          <Field
            name="email"
            placeholder="Email"
            type="email"
            as={Input}
            spellCheck="false"
          />
          <Button type="submit">Add User</Button>
        </Form>
      </Formik>
    </InputWrapper>
  );
}
