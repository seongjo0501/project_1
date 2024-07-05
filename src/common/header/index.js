// src/common/header/index.js
import React, { memo, useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import { gnbMouse, gnbClick, useIsMobile } from "./HeaderEvent";
import { useUser } from "./UserContext"; // UserContext를 불러옴

const Header = memo(() => {
    const [isChecked, setIsChecked] = useState(false);
    const isMobile = useIsMobile();
    const { user, logout } = useUser(); // user와 logout 함수를 가져옴
    const navigate = useNavigate();

    useEffect(() => {
        const gnbWrap = document.querySelector(".gnb-wrap");

        if (gnbWrap) {
            gnbWrap.classList.toggle("on", isChecked);
        }

    }, [isChecked]);

    const checkChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <HeaderContainer>
            <div className="header-wrap">
                <h1>
                    <Link to="/">
                        <span className="hide">로고</span>
                    </Link>
                </h1>

                <div className="gnb-wrap">
                    <ul id="gnb">
                        <li 
                            onMouseEnter={(e) => gnbMouse(e, true, isMobile)}
                            onMouseLeave={(e) => gnbMouse(e, false, isMobile)}
                            onClick={(e) => gnbClick(e, setIsChecked)}
                        >
                            <NavLink to="/about">회사소개</NavLink>
                            <ul className="depth2">
                                <li>
                                    <NavLink to="/about">인사말</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about/history">연혁</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li 
                            onMouseEnter={(e) => gnbMouse(e, true, isMobile)}
                            onMouseLeave={(e) => gnbMouse(e, false, isMobile)}
                            onClick={(e) => gnbClick(e, setIsChecked)}
                        >
                            <NavLink to="/product">상품</NavLink>
                        </li>
                        <li
                            onMouseEnter={(e) => gnbMouse(e, true, isMobile)}
                            onMouseLeave={(e) => gnbMouse(e, false, isMobile)}
                            onClick={(e) => gnbClick(e, setIsChecked)}
                        >
                            <NavLink to="/notice">공지사항</NavLink>
                        </li>
                        <li
                            onMouseEnter={(e) => gnbMouse(e, true, isMobile)}
                            onMouseLeave={(e) => gnbMouse(e, false, isMobile)}
                            onClick={(e) => gnbClick(e, setIsChecked)}
                        >
                            <NavLink to="/board">질문 게시판</NavLink>
                        </li>
                    </ul>

                    <ul className="utils">
                        {user ? (
                            <>
                                <li>
                                    <NavLink to="/user/profile">내 정보</NavLink>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>로그아웃</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login">로그인</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/sign">회원가입</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="gnb-btn">
                    <label className="burger" htmlFor="burger">
                        <input type="checkbox" id="burger" checked={isChecked} onChange={checkChange} />
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
