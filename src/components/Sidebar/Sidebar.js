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
        <li><Link to="/e-document">전자결재</Link>
          <ul>
            <li><Link to="/e-document/my">나의 결재</Link></li>
            <li><Link to="/e-document/create">결재문서 작성</Link></li>
            <li><Link to="/e-document/inbox">수신함</Link></li>
            <li><Link to="/e-document/drafts">임시 저장함</Link></li>
          </ul>
        </li>
        <li><Link to="/forum">전사 게시판</Link></li>
        <li>인사부
          <ul>
            <li><Link to="/e-document/my">사원 관리</Link></li>
            <li><Link to="/e-document/create">급여 관리</Link></li>
            <li><Link to="/e-document/inbox">근태 관리</Link></li>
            <li><Link to="/e-document/drafts">휴가 관리</Link></li>
            <li><Link to="/e-document/inbox">부서 관리</Link></li>
            <li><Link to="/e-document/drafts">문서 관리</Link></li>
          </ul>
        </li>
        <li>물류유통부
          <ul>
            <li>입출고관리
              <ul>
                <li><Link to="/logistics/incoming">입고관리</Link></li>
                <li><Link to="/logistics/outgoing">출고관리</Link></li>
              </ul>
            </li>
            <li><Link to="/logistics/inventory">재고관리</Link></li>
          </ul>
        </li>
        <li>총무부
          <ul>
            <li><Link to="/general-affairs/schedule">일정 관리</Link></li>
            <li><Link to="/general-affairs/notice">게시판 공지 등록</Link></li>
            <li><Link to="/general-affairs/meeting-room">회의실 관리</Link></li>
            <li><Link to="/general-affairs/items">품목 관리</Link></li>
          </ul>
        </li>
        <li>재무부
          <ul>
            <li><Link to="/finance/branch-info">지점 정보 관리</Link></li>
            <li><Link to="/finance/partner-info">거래처 정보 관리</Link></li>
          </ul>
        </li>
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