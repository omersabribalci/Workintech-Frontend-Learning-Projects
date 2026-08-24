import React from "react";
import CustomerItem from "./CustomerItem";

const CustomerList = ({ customers, setCustomers }) => {
  const handleDelete = (id) => {
    setCustomers((prev) => prev.filter((c) => c.id != id));
  };
  return (
    <>
      <ul className="flex flex-col w-full gap-4  rounded-xl">
        {customers.length > 0
          ? customers.map((customer) => (
              <CustomerItem
                key={customer.id}
                customerName={customer.name}
                customerId={customer.id}
                handleDelete={handleDelete}
              />
            ))
          : "There are no customers..."}
      </ul>
    </>
  );
};

export default CustomerList;
