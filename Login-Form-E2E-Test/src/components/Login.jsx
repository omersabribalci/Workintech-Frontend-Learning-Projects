import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const errorMessages = {
  email: "Please enter a valid email address",
  password:
    "Password must be at least 8 characters, include uppercase, lowercase and number",
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === "checkbox" ? event.target.checked : value;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    validateForm(updatedForm);
  };
  // validation
  const validateForm = (formData) => {
    let newErrors = { email: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = errorMessages.email;
    }

    if (!strongPasswordRegex.test(formData.password)) {
      newErrors.password = errorMessages.password;
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password && formData.terms) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    validateForm(form);
  }, [form]);

  function handleSubmit(event) {
    event.preventDefault();
    if (isValid) {
      axios
        .get("https://6540a96145bedb25bfc247b4.mockapi.io/api/login")
        .then((res) => {
          const user = res.data.find(
            (item) =>
              item.password === form.password && item.email === form.email,
          );
          if (user) {
            setForm(initialForm);
            navigate("/success");
          }
        });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={form.email}
          invalid={errors.email !== ""}
          data-cy="form-email"
        />
        {errors.email && (
          <FormFeedback data-cy="error-email">{errors.email}</FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
          value={form.password}
          invalid={errors.password !== ""}
          data-cy="form-password"
        />
        {errors.password && (
          <FormFeedback data-cy="error-password">
            {errors.password}
          </FormFeedback>
        )}
      </FormGroup>
      <FormGroup check>
        <Input
          id="terms"
          name="terms"
          checked={form.terms}
          type="checkbox"
          onChange={handleChange}
          invalid={!form.terms}
          data-cy="form-terms"
        />{" "}
        <Label htmlFor="terms" check>
          I agree to terms of service and privacy policy
        </Label>
      </FormGroup>
      <FormGroup className="text-center p-4">
        <Button color="primary" disabled={!isValid} data-cy="form-btn-submit">
          Sign In
        </Button>
      </FormGroup>
    </Form>
  );
}
