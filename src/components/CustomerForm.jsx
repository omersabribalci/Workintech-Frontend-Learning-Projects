import React, { useState } from "react";
import CustomerList from "./CustomerList";
import { nanoid } from "nanoid";

const CustomerForm = ({ setCustomers }) => {
  const [newCustomer, setNewCustomer] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newCustomer.trim().length >= 3) {
      setCustomers((prevState) => [
        ...prevState,
        { id: nanoid(), name: newCustomer.trim() },
      ]);
      setNewCustomer("");
    } else {
      setHasError(true);
    }
  };

  const handleChange = (e) => {
    setNewCustomer(e.target.value);
    setHasError(false);
  };

  return (
    <>
      <form className="flex w-full gap-2 mb-4" onSubmit={handleSubmit}>
        <input
          className="flex-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
          autoFocus
          type="text"
          placeholder="Add a new customer..."
          onChange={handleChange}
          value={newCustomer}
          style={hasError ? { backgroundColor: "red", color: "white" } : null}
        />
        <button type="submit">
          <i className="fa-solid fa-square-plus fa-3x text-green-700 cursor-pointer"></i>
        </button>
      </form>
    </>
  );
};

export default CustomerForm;
