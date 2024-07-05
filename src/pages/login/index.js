import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../common/header/UserContext'; // UserContext를 불러옴

const LoginContainer = styled.div``;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useUser();

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            const users = response.data;
            console.log(`입력된 비밀번호: ${password}`);

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                console.log('사용자 정보:', user);
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

    return (
        <LoginContainer>
            <form onSubmit={(e) => e.preventDefault()}>
                <fieldset>
                    <legend className="hide">로그인</legend>
                    <ul className="input-area">
                        <li>
                            <label>아이디</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </li>
                        <li>
                            <label>비밀번호</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </li>
                    </ul>
                    <div className="btn">
                        <button
                            type="button"
                            onClick={handleLogin}
                        >
                            로그인
                        </button>
                    </div>
                    <ul className="util">
                        <li>
                            <Link to="/sign">회원가입</Link>
                        </li>
                        <li>
                            <Link to="/find">아이디/비밀번호 찾기</Link>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </LoginContainer>
    );
};

export default Login;
