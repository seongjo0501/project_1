import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import mq from '../../MediaQuery';
import useAxios from 'axios-hooks';

import styled from 'styled-components';

const ViewContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;

    ${mq.maxWidth('desktopS')`
        padding: 0 15px;
    `}

    h2 {
        margin-top: 30px;
        padding-bottom: 15px;
        text-align: center;
        font-weight: 300;
        font-size: 1.875rem;

        ${mq.maxWidth('tablet')`
            font-size: 1.5rem;
        `}
    }

    .top {
        display: flex;
        gap: 0 30px;

        ${mq.maxWidth('tablet')`
            flex-wrap: wrap;

            .thumb {
                margin: 0 auto;
            }
        `}

        

        .info {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            align-content: center;

            ${mq.maxWidth('tablet')`
                width: 100%;

                gap: 5px;
            `}

            .price {
                display: block;
                width: 100%;
                margin: 5px 0 0 0;
                padding: 0 0 0 25px;
                background: no-repeat url('/images/main/best/arr.png') left center;
                font-family: 'Outfit',"Noto Sans KR";
            }
            .name {
                display: block;
            }
        }
    }

    .detail {
        padding-top: 100px;

        ${mq.maxWidth('tablet')`
            padding-top: 50px;
        `}

        img {
            display:block;
            max-width: 100%;
            margin: 0 auto;
        }
    }
`;

const View = memo(() => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const [{ data: bestItemData, loading: bestItemLoading, error: bestItemError }] = useAxios('http://localhost:3001/bestItem');

    if (bestItemLoading) return <p>로딩...</p>;
    if (bestItemError) return <p>에러</p>;

    // id에 해당하는 아이템을 찾음
    const item = bestItemData.find(d => d.id === parseInt(id));

    return (
        <ViewContainer>
            <h2>상품 디테일</h2>
            <div className='top'>
                <div className='thumb'>
                    <img src={item.thumb} />
                </div>

                <div className='info'>
                    <span className='price'>{item.price} 원</span>
                    <span className='name'>{item.name}</span>
                </div>
            </div>

            <div className='detail'>
                <img src={item.view} />
            </div>
        </ViewContainer>
    );
});

export default View;
