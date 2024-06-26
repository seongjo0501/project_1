import { createGlobalStyle } from "styled-components";
import mq from './MediaQuery';
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    body {
        line-height: 1.3;
        font-weight: normal;
        font-family: "Roboto","Noto Sans KR", sans-serif;
        font-size: 18px;
        color: #333;

        ${mq.maxWidth('tablet')`
            font-size: 16px;
        `}

        ${mq.maxWidth('mobile')`
            font-size: 14px;
        `}

        a {
            text-decoration: none;
            color: inherit;
        }

        .hide {
            position: absolute;
            top: -9999px;
            left: -9999px;
            width: 0px;
            height: 0px;
            text-indent: -9999px;
            line-height: 0px;
            font-size: 0px;
        }
    }
`;

export default GlobalStyles;
