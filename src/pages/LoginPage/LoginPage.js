import React from 'react';
import './LoginPage.css';

import { Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const submitLogin = (e) => {
    e.preventDefault();
    onLogin(); // 로그인 로직
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src="/Starducks_Logo.png" alt="Starducks Logo" className="login-logo" />
        <input type="text" required className="input-field" placeholder="아이디" />
        <input type="password" required className="input-field" placeholder="비밀번호" />
        <button type="submit" onClick={submitLogin} className="login-button">로그인</button>
        <div className="password-find">
          <Link to="/password-find">
            <i className="fas fa-key"></i> 비밀번호 찾기 
            {/* fas fa-key는 index.html에 cdn으로 font-awesome 받아와서 열쇠 아이콘 집어넣음 */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
