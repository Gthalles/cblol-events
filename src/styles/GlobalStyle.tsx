import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        font-family: "Encode sans";
        color: #353535;
    }
    
    input::placeholder {
        text-indent: 10px;
        color:rgba(112, 89, 89, 0.493);
    }

    p {
        margin: 10px 0;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.05em;
    }

    a {
        color: #353535;
    }
`;