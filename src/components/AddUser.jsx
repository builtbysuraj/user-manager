import { Formik, Field, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input, InputWrapper } from "../styles/Input.style";

export default function AddUser({ onAdd }) {
  // handle form submit using Formik
  const handleSubmit = (values, { resetForm }) => {
    const { name, phone, email } = values;
    if (name === "" || email === "" || phone === "") {
      toast.error("Invalid input❗Please fill all input(s)");
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
          <Field name="name" placeholder="Name" type="text" as={Input} />
          <Field name="phone" placeholder="Phone" type="number" as={Input} />
          <Field name="email" placeholder="Email" type="email" as={Input} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </InputWrapper>
  );
}
