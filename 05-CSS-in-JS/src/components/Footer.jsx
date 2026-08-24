import styled from "styled-components"

const StyledFooter = styled.footer`
background-color: #161616;
color: #fff;
text-align: center;
padding: 20px;
width: 100%;
`;

function Footer(){
    return (
        <StyledFooter>
          Super Store 2026 - All rights reserved.
        </StyledFooter>
    );
}

export default Footer;