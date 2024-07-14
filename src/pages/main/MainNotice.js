import React, { memo } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MainNoticeContainer = styled.div`
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;

        thead {
            background-color: rgb(49, 130, 246, 0.2);
            color: #333;

            th {
                padding: 15px 20px;
                text-align: left;
                font-weight: 600;
                border-bottom: 2px solid #eee;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
        }

        tbody {
            tr {
                transition: background-color 0.3s;

                &:nth-child(even) {
                    background-color: #fafafa;
                }

                &:hover {
                    background-color: #f1f1f1;
                }
            }

            td {
                padding: 15px 20px;
                border-bottom: 1px solid #eee;
                vertical-align: middle;
                max-width: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

                .ell {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
`;

const MainNotice = memo(() => {
    return (
        <MainNoticeContainer>
            <h2>MainNotice</h2>
            <table>
                <caption className='hide'>리뷰</caption>
                <colgroup>
                    <col style={{ width: '30%' }} />
                    <col style={{ width: 'auto' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <td>
                            <div className='ell'>제목입니다~~ 제목이요~~</div>
                        </td>
                        <td>
                            <div className='ell'>
                                <Link to="/">
                                    내용입니다~~ 내용이요~~내용입니다~~ 내용이요~~
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </MainNoticeContainer>
    );
});

export default MainNotice;
