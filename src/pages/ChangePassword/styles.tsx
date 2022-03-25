import styled from "styled-components";

export const Section = styled.section ` 
    width: 30vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 20px;
    filter: drop-shadow(-6px -5px 22px rgba(0, 0, 0, 0.25));
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

export const Text = styled.p `
    margin: 0px 80px 15px 80px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.07em;
    color: #353535;
`;

export const Form = styled.form `
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BottomContainer = styled.div `
    width: 40%;
    margin: 10px auto;
`;