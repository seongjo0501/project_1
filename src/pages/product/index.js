import React, { memo } from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import { Link } from 'react-router-dom';

import useAxios from 'axios-hooks';

const ProductContainer = styled.div`
    h2 {
        margin-top: 60px;
        padding-bottom: 15px;
        text-align: center;
        font-weight: 300;
        font-size: 1.875rem;
    }

    .product-wrap {
        max-width: 1280px;
        margin: 0 auto;
    }

    .product-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px 10px;

        ${mq.maxWidth('desktopS')`
            padding: 0 15px
        `};

        ${mq.maxWidth('tablet')`
            gap: 10px;
        `};

        li {
            width: calc((100% - 30px) / 4);

            ${mq.maxWidth('tablet')`
                width: calc((100% - 10px)/2) ;
            `};

            .thumb {
                width: 100%;
                height: 300px;

                ${mq.maxWidth('desktopS')`
                    height: 250px;
                `};

                ${mq.maxWidth('mobile')`
                    height: 200px;
                `};

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .price {
                display: block;
                margin: 5px 0 0 0;
                padding: 0 0 0 25px;
                background: no-repeat url('/images/main/best/arr.png') left center;
                font-family: 'Outfit', 'Noto Sans KR';
            }

            .name {
                font-size: 0.875rem;
            }

            .best {
                display: block;
                color: rgb(49, 130, 246);
                font-size: 0.875rem;
                font-weight:500;

                animation: best 1s linear infinite;
            }
        }
    }

    @keyframes best {
        to {opacity:1}
        50% {opacity:0.5}
        from{opacity: 1;}
    }
`;

const index = memo(() => {
    const [{ data: productData, loading: productLoading, error: productError }] = useAxios('http://localhost:3001/products');

    if (productLoading) return; //<p>로딩...</p>;
    if (productError) return; //<p>에러</p>;

    return (
        <ProductContainer>
            <div className='product-wrap'>
                <h2>상품 목록</h2>

                <ul className='product-list'>
                    {productData &&
                        productData.map((v, i) => (
                            <li key={i}>
                                <Link
                                     to={`/product/viewBest?id=${v.id}`}
                                >
                                    <div className='thumb'>
                                        <img src={v.thumb} alt={v.name} />
                                    </div>
                                    <div className='info'>
                                        <span className='price'>{v.price} 원</span>
                                        <span className='name'>{v.name}</span>
                                        {v.isBest && <span className="best">베스트 상품</span>}
                                    </div>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </ProductContainer>
    );
});

export default index;
