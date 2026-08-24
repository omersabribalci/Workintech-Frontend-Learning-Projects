import React from "react";

const CustomerItem = ({ customerName, customerId, handleDelete }) => {
  return (
    <>
      <li className="flex flex-row items-center w-full justify-between bg-amber-400 rounded-2xl p-2">
        <div className="flex items-center gap-4">
          <img
            className="w-12.5 rounded-full"
            src="https://i.pravatar.cc/300"
          />
          <span className="text-lg">{customerName}</span>
        </div>

        <button
          className="bg-red-600 rounded-xl"
          type="button"
          onClick={() => handleDelete(customerId)}
        >
          <i className="fa-solid fa-trash-can fa-1x text-white p-2 cursor-pointer"></i>
        </button>
      </li>
    </>
  );
};

export default CustomerItem;
