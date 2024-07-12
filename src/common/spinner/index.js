import React, { memo } from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    --size: 30px;
    --first-block-clr: #005bba;
    --second-block-clr: #fed500;
    --clr: #111;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    
    width: 100px;
    height: 100px;

    &::after,
    &::before {
        box-sizing: border-box;
        position: absolute;
        content: '';
        width: var(--size);
        height: var(--size);
        top: 50%;
        animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
        left: 50%;
        background: var(--first-block-clr);
    }

    &::after {
        background: var(--second-block-clr);
        top: calc(50% - var(--size));
        left: calc(50% - var(--size));
        animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
    }

    @keyframes down {
        0%,
        100% {
            transform: none;
        }

        25% {
            transform: translateX(100%);
        }

        50% {
            transform: translateX(100%) translateY(100%);
        }

        75% {
            transform: translateY(100%);
        }
    }

    @keyframes up {
        0%,
        100% {
            transform: none;
        }

        25% {
            transform: translateX(-100%);
        }

        50% {
            transform: translateX(-100%) translateY(-100%);
        }

        75% {
            transform: translateY(-100%);
        }
    }
`;

const index = memo(() => {
    return <SpinnerContainer className='spinner' />;
});

export default index;
