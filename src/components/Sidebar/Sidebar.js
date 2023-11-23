import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'; 
const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="sidebar">
      <img src="/Starducks_Logo.png" alt="Starducks Logo" className="sidebar-logo" />
      <ul className="sidebar-menu">
        <li>
          <Link to="/mypage">마이페이지</Link>
          <ul>
            <li><Link to="/mypage/attendance">근태관리</Link></li>
            <li><Link to="/mypage/schedule">일정관리</Link></li>
            <li><Link to="/mypage/meeting-room">회의실 예약</Link></li>
          </ul>
        </li>
        <li><Link to="/e-document">전자결재</Link></li>
        <li><Link to="/forum">전사 게시판</Link></li>
        {/* 추가 부서 메뉴 */}
        <li><Link to="/hr">인사부</Link></li>
        <li><Link to="/logistics">물류유통부</Link></li>
        <li><Link to="/general-affairs">총무부</Link></li>
        <li><Link to="/finance">재무부</Link></li>
        <li><Link to="/org-chart">조직도</Link></li>
      </ul>
      <button onClick={handleLogout} className="logout-button">로그아웃</button>
      <div className="sidebar-footer">
        ©2023 STARDUCKS ERP
      </div>
    </nav>
  );
};

export default Sidebar;