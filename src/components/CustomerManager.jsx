import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

const CustomerManager = () => {
  const [customers, setCustomers] = useState([]);

  return (
    <section className="flex flex-col items-center mx-auto px-12 py-4  rounded-xl shadow-2xl bg-white/40">
      <h1 className="mb-4 text-2xl font-bold">Customer Management System</h1>
      <CustomerForm setCustomers={setCustomers} />
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </section>
  );
};

export default CustomerManager;
