import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import LoginPage from './pages/LoginPage/LoginPage';
import MyPage from './pages/MyPage/MyPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 상태를 변경하는 함수 예시입니다.
  const handleLogin = (credentials) => {
    // 로그인 로직 구현...
    // 성공 시:
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app">
        {isLoggedIn && <Sidebar />}
        <div className="main-section">
          {isLoggedIn && <Header />}
          <Routes> {/* 'Switch' 대신 'Routes' 사용 */}
            <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <LoginPage onLogin={handleLogin} />} />
            <Route path="/" element={isLoggedIn ? <MyPage /> : <Navigate replace to="/login" />} />
            {/* 다른 라우트들을 여기에 추가할 수 있습니다 */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
