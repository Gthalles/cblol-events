import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        font-family: "Encode sans";
        color: #353535;
    }

    input {
        height: 30px;
        text-indent: 10px;
        border-radius: 5px;
        border: 1px solid rgba(117, 109, 109, 0.479);
    }
    
    input::placeholder {
        text-indent: 10px;
        color:rgba(112, 89, 89, 0.493);
    }

    p {
        margin: 8px 0;
        font-size: 12px;
        text-align: center;
        line-height: 16px;
        letter-spacing: 0.05em;
    }

    a {
        color: #353535;
    }
`;