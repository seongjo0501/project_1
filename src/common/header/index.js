import React, { memo, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';

const Header = memo(() => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const gnbWrap = document.querySelector('.gnb-wrap');
        if (isChecked) {
            gnbWrap.classList.add('on');
        } else {
            gnbWrap.classList.remove('on');
        }
    }, [isChecked]);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <HeaderContainer>
            <div className='header-wrap'>
                <h1>
                    <Link to='/'>
                        <span className='hide'>로고</span>
                    </Link>
                </h1>

                <div className='gnb-wrap'>
                    <ul id='gnb'>
                        <li>
                            <NavLink to='/about'>회사소개</NavLink>
                            <ul className='depth2'>
                                <li>
                                    <NavLink to='/about'>인사말</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about/history'>연혁</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='/product'>상품</NavLink>
                        </li>
                        <li>
                            <NavLink to='/notice'>공지사항</NavLink>
                        </li>
                        <li>
                            <NavLink to='/board'>질문 게시판</NavLink>
                        </li>
                    </ul>

                    <ul className='utils'>
                        <li>
                            <NavLink to='/login'>로그인</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sign'>회원가입</NavLink>
                        </li>
                        <li>
                            <NavLink to='/user/basket'>장바구니</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='gnb-btn'>
                    <label className='burger' htmlFor='burger'>
                        <input 
                            type='checkbox' 
                            id='burger' 
                            checked={isChecked}
                            onChange={handleCheckboxChange} 
                        />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
            </div>
        </HeaderContainer>
    );
});

export default Header;
