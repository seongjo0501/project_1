import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainSlideContainer = styled.div`
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    .swiper-slide {
        height: 740px;

        ${mq.maxWidth('desktopM')`
            height: 600px;
        `};

        ${mq.maxWidth('desktopS')`
            height: 500px;
        `};

        ${mq.maxWidth('tablet')`
            height: 400px;
        `};

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .swiper-pagination {
        left: 50%;
        transform: translateX(-50%);

        width: max-content;
        padding: 10px;
        border-radius: 20px;
        background-color: rgba(0 0 0 / 13%);
        font-size: 0;

        .swiper-pagination-bullet {
            width: 11px;
            height: 11px;
            margin: 0 0 0 5px;

            &:first-child {
                margin-left: 0;
            }

            &.swiper-pagination-bullet-active {
                background-color: #fff;
            }
        }
    }

    .swiper-button-prev,
    .swiper-button-next {
        width: 33px;
        height: 45px;
        background-repeat: no-repeat;
        background-image: url(${process.env.PUBLIC_URL + '/images/main/slide/btn_control.png'});

        &::after {
            display: none;
        }

        ${mq.maxWidth('tablet')`
            display: none;    
        `};
    }

    .swiper-button-prev {
        left: 50%;
        margin-left: -640px;
        background-position: left center;

        ${mq.maxWidth('desktopS')`
            margin-left: -320px;
        `};
    }

    .swiper-button-next {
        right: 50%;
        margin-right: -640px;
        background-position: right center;

        ${mq.maxWidth('desktopS')`
            margin-right: -320px;
        `};
    }
`;

const MainSlide = memo(() => {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            loop: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);

    return (
        <MainSlideContainer>
            <div className='swiper'>
                <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                        <img src={process.env.PUBLIC_URL + '/images/main/slide/main_slide_1.jpg'} alt='Slide 1'/>
                    </div>
                    <div className='swiper-slide'>
                        <img src={process.env.PUBLIC_URL + '/images/main/slide/main_slide_2.jpg'} alt='Slide 2'/>
                    </div>
                    <div className='swiper-slide'>
                        <img src={process.env.PUBLIC_URL + '/images/main/slide/main_slide_3.jpg'} alt='Slide 3'/>
                    </div>
                </div>
                {/* // swiper-wrapper */}

                <div className='swiper-pagination'></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </MainSlideContainer>
    );
});

export default MainSlide;
