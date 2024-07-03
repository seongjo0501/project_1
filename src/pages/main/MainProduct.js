import React, { memo } from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import { Link } from 'react-router-dom';

const MainProductContainer = styled.div`
    ul {
        display: flex;
        gap: 10px 5px;
        flex-wrap: wrap;

        ${mq.maxWidth('desktopS')`
            padding: 0 15px
        `};

        ${mq.maxWidth('tablet')`
            gap: 10px;
        `};

        li {
            width: calc((100% - 15px)/4) ;

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
                font-family: 'Outfit',"Noto Sans KR";
            }

            .name {
                display:block;
                padding-top: 8px;
                font-size: 0.875rem;
            }

            .best {
                padding-left: 5px;
                font-size: 0.875rem;
                color: rgb(49, 130, 246);
                animation: best 1.5s linear infinite;
            }

            @keyframes best {
                0% {opacity: 1;}
                50% {opacity: 0;}
                100% {opacity: 1;}
            }
        }
    }
`;

const MainProduct = memo(({data}) => {
    return (
        <MainProductContainer>
            <h2>MainProduct</h2>
            <ul>
                {data &&
                    data.map(v => (
                        <li key={v.id}>
                            <Link 
                                to={`/product/ViewProduct?id=${v.id}`}
                            >
                                <div className='thumb'>
                                    <img src={v.thumb} alt={v.name} />
                                </div>
                                <div className='info'>
                                    <span className='price'>
                                        {v.price} 원
                                        {v.isBest && <span className='best'>베스트 아이템</span>}
                                    </span>
                                    <span className='name'>{v.name}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
        </MainProductContainer>
    );
});

export default MainProduct;