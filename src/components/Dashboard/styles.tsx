import styled from "styled-components";

export const Nav = styled.nav `
    width: 100%;
    height: 100vh;
    margin: 0;
    box-shadow: 2px 0px 0px rgba(0, 0, 0, 0.2);
`;
     
export const Menu = styled.menu `
    width: 100%;
    display: flex;
    flex-direction: column;
    `;
    
export const MenuItem = styled.div `
    width: 35px;
    height: 30px;
    margin: 20px auto;
`;

export const ItemLink = styled.a `
    width: 100%;
    height: 100%;
`;

export const Icon = styled.img `
    width: 100%;
    height: 100%;
`;

export const Logo = styled.img `
    width: 70px;
    height: 70px;
    margin: 20px 15px;
`;