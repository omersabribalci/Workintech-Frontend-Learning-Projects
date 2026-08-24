import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Başarılı Giriş!</h1>
      <Button onClick={handleClick}>Login</Button>
    </div>
  );
}

export default Success;
