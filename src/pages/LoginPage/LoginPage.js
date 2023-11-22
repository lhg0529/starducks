import React from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const submitLogin = (e) => {
    e.preventDefault();
    // 로그인 처리 로직
    onLogin(/* credentials */);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src="/path/to/your/logo-and-coffee-image.jpg" alt="Coffee Logo" className="login-logo" />
        <form onSubmit={submitLogin} className="login-form">
          <input type="text" placeholder="아이디" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit" className="login-button">로그인</button>
        </form>
        <button className="password-reset">비밀번호 변경</button>
      </div>
    </div>
  );
};

export default LoginPage;
