import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../common/header/UserContext'; // UserContext를 불러옴

const LoginContainer = styled.div`
    position: relative;
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);

    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 400px;
        padding: 40px;
        background: #ffffff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        text-align: center;

        .input-area {
            margin-bottom: 20px;

            li {
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;

                label {
                    margin-bottom: 5px;
                    font-size: 0.875rem;
                    color: #333333;
                    text-align: left;
                }

                input {
                    padding: 10px;
                    font-size: 1rem;
                    border: 1px solid #cccccc;
                    border-radius: 5px;
                    transition: border-color 0.3s;

                    &:focus {
                        border-color: #3192f6;
                        outline: none;
                    }
                }
            }
        }

        .btn {
            margin-top: 20px;

            button {
                width: 100%;
                padding: 12px 0;
                border: none;
                border-radius: 5px;
                background: #3192f6;
                font-size: 1.125rem;
                color: #ffffff;
                cursor: pointer;
                transition: background 0.3s;

                &:hover {
                    background: #2176ce;
                }
            }
        }

        .util {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            font-size: 0.875rem;

            a {
                color: #3192f6;
                text-decoration: none;
                transition: color 0.3s;

                &:hover {
                    color: #2176ce;
                }
            }
        }
    }

`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useUser();

    // 로그인 페이지의 height 조정
    useEffect(() => {
        const wH = window.innerHeight;
        const footer = document.querySelector('footer');
        const loginWrap = document.querySelector('.login-wrap');

        if (footer && loginWrap) {
            const footerRect = footer.getBoundingClientRect();
            const footerStyles = window.getComputedStyle(footer);
            const fH = footerRect.height + parseFloat(footerStyles.marginTop);

            loginWrap.style.cssText = `
                min-height: ${wH - fH}px;
            `;
            // console.log(wH);
            // console.log(fH);
        }
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            const users = response.data;
            //console.log(`입력된 비밀번호: ${password}`);

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                //console.log('사용자 정보:', user);
                alert(`로그인 성공, ${user.name}님 환영합니다.`);
                login(user);
                navigate('/');
            } else {
                alert('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');
            }
        } catch (error) {
            console.error('로그인 에러:', error);
            alert('로그인 중 에러가 발생했습니다.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <LoginContainer className='login-wrap'>
             <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend className='hide'>로그인</legend>
                    <ul className='input-area'>
                        <li>
                            <label>아이디</label>
                            <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
                        </li>
                        <li>
                            <label>비밀번호</label>
                            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                        </li>
                    </ul>
                    <div className='btn'>
                        <button type='submit'>
                            로그인
                        </button>
                    </div>
                    <ul className='util'>
                        <li>
                            <Link to='/sign'>회원가입</Link>
                        </li>
                        <li>
                            <Link to='/find'>아이디/비밀번호 찾기</Link>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </LoginContainer>
    );
};

export default Login;
