import React, { memo } from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';

const FooterContainer = styled.footer`
    margin-top: 20px;
    border-top: 1px solid #ededed;

    .footer-wrap {
        max-width: 1520px;
        margin: 0 auto;
        padding: 35px 0;

        ${mq.maxWidth('desktopM')`
            padding: 35px 15px;
        `};

        .info {
            dl {
                display: flex;
                gap: 20px;
                margin-top: 8px;

                &:first-child {
                    margin-top: 0;
                }

                dt {
                    position: relative;
                    width: 150px;
                    font-weight: 500;
                    font-size: 1rem;

                    ${mq.maxWidth('desktopM')`
                        width: 100px;
                        font-size: 0.875rem;
                    `};

                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        right:0;
                        width: 1px;
                        height: 10px;
                        background-color: #333;
                        transform: translateY(-50%);
                    }
                }

                dd {
                    color: #666;
                    font-size: 0.875rem;
                }
            }
        }

        .copy {
            padding-top: 30px;
            font-size: 0.875rem;
            color: #666;
        }
    }
`;

const index = memo(() => {
    return (
        <FooterContainer>
            <div className='footer-wrap'>
                <div className='info'>
                    <dl>
                        <dt>본사</dt>
                        <dd>서울특별시 강남구 강남로 123, 345호 (강남동)</dd>
                    </dl>
                    <dl>
                        <dt>R&D센터</dt>
                        <dd>제주특별시 서귀포 제주로 123,</dd>
                    </dl>
                    <br />
                    <dl>
                        <dt>Tel</dt>
                        <dd>+82-01-234-5678</dd>
                    </dl>
                    <dl>
                        <dt>Fax</dt>
                        <dd>+82-01-234-5678</dd>
                    </dl>
                    <dl>
                        <dt>E-mail</dt>
                        <dd>email@naver.com</dd>
                    </dl>
                </div>

                <div className='copy'>© 2024 John Doe. All rights reserved.</div>
            </div>
        </FooterContainer>
    );
});

export default index;
