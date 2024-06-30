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
                width: 100%;
            }

            .star {
                display:block;
                font-family: 'Outfit',"Noto Sans KR";
                font-weight: 500;
                color: rgb(49, 130, 246);

                &::before {
                    content: '평점 : ';
                    font-weight: 400;
                    color: #333;
                }
            }
        }
    }

    h3 {
        position: relative;
        text-align: center;
        font-weight: 300;
        font-size: 1.875rem;
        padding-top: 40px;

        &::before {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            width: 20px;
            height: 2px;
            background-color: rgb(49, 130, 246);
            transform: translateX(-50%);
        }
    }

    .detail {
        padding-top: 30px;

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

    const [{ data: productData, loading: productLoading, error: productError }] = useAxios('http://localhost:3001/products');

    if (productLoading) return <p>로딩 중...</p>;
    if (productError) return <p>에러 발생: {productError.message}</p>;

    // id에 해당하는 아이템을 찾음
    const item = productData.find(d => d.id === parseInt(id));

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
                    <span className='star'>{item.star}</span>
                </div>
            </div>

            <h3>제품 상세</h3>
            <div className='detail'>
                <img src={item.view} />
            </div>
        </ViewContainer>
    );
});

export default View;
