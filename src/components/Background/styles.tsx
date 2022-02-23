import styled from "styled-components";
import { BackgroundProperties } from "./index";

export const Image = styled.div `
    height: 100vh;
    background-image: url(${({ image }: BackgroundProperties) => image});
    background-position-y: -20px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;