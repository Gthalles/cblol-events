import styled from "styled-components";

export const Section = styled.section ` 
    width: 32vw;
    height: 66vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 20px;
`;

export const Title = styled.h1 `
    font-family: "Gemunu Libre";
    font-size: 36px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0.1em;
    color: #353535;
`;

export const Logo = styled.img `
    margin-bottom: 20px;
`;

export const SuccessText = styled.p `
    margin: 40px auto;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.09em;
    color: #0F9F26;
`;

export const Text = styled.p `
    margin: 0 80px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.07em;
    color: #353535;
`;

export const ButtonContainer = styled.div `
    width: 40%;
    margin: 40px auto;
`;