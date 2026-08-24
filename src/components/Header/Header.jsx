import styled from "styled-components";

const Title = styled.h1`
  background-color: red;
  color: white;
  padding: 20px;
  text-align: center;
`;

function Header() {
  return (
    <>
    <header>
      <Title>Super Store</Title>
    </header>
  </>
);
}

export default Header;