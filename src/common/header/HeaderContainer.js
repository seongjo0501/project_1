import styled from 'styled-components';
import mq from '../../MediaQuery';

const HeaderContainer = styled.header`
    box-shadow: 0 0px 15px rgba(0 0 0 / 15%);

    .header-wrap {
        position: relative;
        max-width: 1520px;
        margin: 0 auto;

        ${mq.maxWidth('desktopM')`
            margin : 0 20px;
        `};

        ${mq.maxWidth('tablet')`
            height: 60px;
        `};
    }

    h1 {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

        a {
            display: block;
            width: 150px;
            height: 50px;
            background: no-repeat url('/images/layout/logo.png') center / cover;

            ${mq.maxWidth('tablet')`
                width: 120px;
                height: 40px;
            `};
        }
    }

    .gnb-wrap {
        
        ${mq.maxWidth('tablet')`
            position: fixed;
            top: 0;
            left: 100%;
            width: 100%;
            height: 100%;
            z-index: 100;
            background: #fff;

            display: flex;
            flex-wrap: wrap;
            align-content: center;

            transition: left 0.4s;

            overflow: hidden;
            &.on {
                left: 0;

                .utils {
                    left: 15px;
                    transform: translateX(0);
                    transition-duration: 0.4s;
                    transition-delay: 0.4s;
                }
            }

        `};

        #gnb {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;

            > li {
                position: relative;

                &:hover > a {
                    position: relative;
                    color: rgb(49, 130, 246);

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 5px;
                        left: 50%;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: rgb(49, 130, 246);
                        transform: translateX(-50%);
                    }
                }

                > a {
                    display: block;
                    padding: 30px 15px;
                    font-weight: 600;
                    font-size: 1.25rem;
                }
            }

            .depth2 {
                position: absolute;
                top: 100%;
                left: 0;
                max-height:0;
                overflow: hidden;

                display: flex;
                flex-wrap: wrap;
                box-shadow: 0 15px 15px rgba(0, 0, 0, 0.15);
                background-color: #fff;

                &.on {
                    transition: max-height 0.3s linear;
                }

                ${mq.maxWidth('tablet')`
                    &.on {
                        display: block;

                        position: static;
                        max-height: max-content;
                        box-shadow: none;

                        &::before {
                            content: '';
                            position: absolute;
                            left: 20px;
                            right: 20px;
                            bottom: 0;
                            height: 1px;
                            background-color: #333;
                        }
                    }
                `}

                li {
                    width: 100%;
                    text-align: center;

                    a {
                        display: block;
                        padding: 10px 15px;

                        &:hover {
                            color: rgb(49, 130, 246);
                        }
                    }
                }
            }

            ${mq.maxWidth('tablet')`
            
                flex-wrap: wrap;
                align-content: center;
                gap: 10px;

                width: 100%;
                height: max-content;

            > li {
                width: 100%;


                > a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    padding: 10px; 
                }

                &:hover > a::after {
                    position: static;
                    transform: translate(0);
                }
            }
        `};
        }
        .utils {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);

            display: flex;

            ${mq.maxWidth('tablet')`
                width: max-content;
                top: 15px;
                right: auto;
                
                transform: translateY(0);
                transform: translateX(-120%);
            `}

            li {
                position: relative;
                padding: 0 10px;

                &::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 1px;
                    height: 13px;
                    background-color: #ddd;
                    transform: translateY(-50%);
                }

                &:first-child::before {
                    display: none;
                }

                a {
                    display: block;
                    font-weight: 500;
                    font-size: 0.875rem;

                    &:hover {
                        color: rgb(49, 130, 246);
                        font-weight: 600;
                    }
                }
            }
        }
    }

    .gnb-btn {
        display: none;

        ${mq.maxWidth('tablet')`
            display: block;
            position: absolute;
            top: 15px;
            right: 20px;
            width: max-content;
            z-index: 200;
        `};

        .burger {
            display: block;
            position: relative;
            width: 40px;
            height: 30px;
            background: transparent;
            cursor: pointer;

            input {
                display: none;
            }

            span {
                display: block;
                position: absolute;
                height: 3px;
                width: 100%;
                background: #333;
                border-radius: 10px;
                opacity: 1;
                left: 0;
                transform: rotate(0deg);
                transition: 0.25s ease-in-out;

                &:nth-of-type(1) {
                    top: 0px;
                    transform-origin: left center;
                }
                &:nth-of-type(2) {
                    top: 50%;
                    transform: translateY(-50%);
                    transform-origin: left center;
                }
                &:nth-of-type(3) {
                    top: 100%;
                    transform-origin: left center;
                    transform: translateY(-100%);
                }
            }

            input:checked ~ span:nth-of-type(1) {
                transform: rotate(45deg);
                top: 0px;
                left: 5px;
            }

            input:checked ~ span:nth-of-type(2) {
                width: 0%;
                opacity: 0;
            }

            input:checked ~ span:nth-of-type(3) {
                transform: rotate(-45deg);
                top: 28px;
                left: 5px;
            }
        }
    }
`;

export default HeaderContainer;
