import React, { memo } from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import useAxios from 'axios-hooks';

import MainSlide from './MainSlide';
import MainBest from './MainBest';
import MainProduct from './MainProduct';
import MainNotice from './MainNotice';
import MainReview from './MainReview';

const MainContainer = styled.main`
    .main-wrap {
        max-width: 1280px;
        margin: 0 auto;

        h2 {
            padding-bottom: 15px;
            text-align: center;
            font-weight: 300;
            font-size: 1.875rem;

            ${mq.maxWidth('tablet')`
                font-size: 1.5rem;
            `}
        }
    }
`;

const Index = memo(() => {
    const [{ data: bestItemData, loading: bestItemLoading, error: bestItemError }] = useAxios('http://localhost:3001/bestItem');
    const [{ data: productsData, loading: productsLoading, error: productsError }] = useAxios('http://localhost:3001/products');
    const [{ data: noticeData, loading: noticeLoading, error: noticeError }] = useAxios('http://localhost:3001/notice');
    const [{ data: reviewData, loading: reviewLoading, error: reviewError }] = useAxios('http://localhost:3001/review');

    if (bestItemLoading || productsLoading || noticeLoading || reviewLoading) return <p>Loading...</p>;
    if (bestItemError || productsError || noticeError || reviewError) return <p>Error!</p>;

    return (
        <MainContainer>
            <div className='main-wrap'>
                <MainSlide />
                <MainBest data={bestItemData} />
                <MainProduct data={productsData} />

                <div className='main-multi'>
                    <MainNotice data={noticeData} />
                    <MainReview data={reviewData} />
                </div>
            </div>
        </MainContainer>
    );
});

export default Index;
