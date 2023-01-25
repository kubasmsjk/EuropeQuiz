import PropTypes from "prop-types";
import { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    nickname: "",
    amountOfQuestions: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return { handleChange, handleSubmit, values, errors };
};

useForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.string,
  errors: PropTypes.string,
};

export default useForm;
