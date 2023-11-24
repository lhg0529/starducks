import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('');

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? '' : menuName);
  };

  return (
    <nav className="sidebar">
      <img src="/Starducks_Logo.png" alt="Starducks Logo" className="sidebar-logo" />
      <ul className="sidebar-menu">
        {/* 마이페이지 메뉴 항목 */}
        <li className={activeMenu === 'mypage' ? "clicked" : ""}
          onClick={() => toggleMenu('mypage')}>
          <Link to="/mypage">마이페이지</Link>
          {activeMenu === 'mypage' && (
            <ul>
              <li><Link to="/mypage/attendance">근태관리</Link></li>
              <li><Link to="/mypage/schedule">일정관리</Link></li>
              <li><Link to="/mypage/meeting-room">회의실 예약</Link></li>
            </ul>
          )}
        </li>
        {/* 전자결재 메뉴 항목 */}
        <li className={activeMenu === 'e-document' ? "clicked" : ""}
          onClick={() => toggleMenu('e-document')}>
          <Link to="/e-document">전자결재</Link>
          {activeMenu === 'e-document' && (
            <ul>
              <li><Link to="/e-document/my">나의 결재</Link></li>
              <li><Link to="/e-document/create">결재문서 작성</Link></li>
              <li><Link to="/e-document/inbox">수신함</Link></li>
              <li><Link to="/e-document/drafts">임시 저장함</Link></li>
            </ul>
          )}
        </li>
        {/* 인사부 메뉴 항목 */}
        <li className={activeMenu === 'hr' ? "clicked" : ""}
          onClick={() => toggleMenu('hr')}>
          <div className={activeMenu === 'hr' ? "clicked" : ""}>인사부</div>
          {activeMenu === 'hr' && (
            <ul>
              <li><Link to="/hr/employee-management">사원 관리</Link></li>
              <li><Link to="/hr/payroll">급여 관리</Link></li>
              <li><Link to="/hr/attendance">근태 관리</Link></li>
              <li><Link to="/hr/vacation">휴가 관리</Link></li>
              <li><Link to="/hr/department">부서 관리</Link></li>
              <li><Link to="/hr/documents">문서 관리</Link></li>
            </ul>
          )}
        </li>
        {/* 물류유통부 메뉴 항목 */}
        <li className={activeMenu === 'logistics' ? "clicked" : ""}
          onClick={() => toggleMenu('logistics')}>
          <div className={activeMenu === 'logistics' ? "clicked" : ""}>물류유통부</div>
          {activeMenu === 'logistics' && (
            <ul>
              <li><Link to="/logistics/incoming">입고 관리</Link></li>
              <li><Link to="/logistics/outgoing">출고 관리</Link></li>
              <li><Link to="/logistics/inventory">재고 관리</Link></li>
            </ul>
          )}
        </li>
        {/* 총무부 메뉴 항목 */}
        <li className={activeMenu === 'admin' ? "clicked" : ""}
          onClick={() => toggleMenu('admin')}>
          <div className={activeMenu === 'admin' ? "clicked" : ""}>총무부</div>
          {activeMenu === 'admin' && (
            <ul>
              <li><Link to="/general-affairs/schedule">일정 관리</Link></li>
              <li><Link to="/general-affairs/notice">게시판 공지 등록</Link></li>
              <li><Link to="/general-affairs/meeting-room">회의실 관리</Link></li>
              <li><Link to="/general-affairs/items">품목 관리</Link></li>
            </ul>
          )}
        </li>
        {/* 재무부 메뉴 항목 */}
        <li className={activeMenu === 'finance' ? "clicked" : ""}
          onClick={() => toggleMenu('finance')}>
          <div className={activeMenu === 'finance' ? "clicked" : ""}>재무부</div>
          {activeMenu === 'finance' && (
            <ul>
              <li><Link to="/finance/branch-info">지점 정보 관리</Link></li>
              <li><Link to="/finance/partner-info">거래처 정보 관리</Link></li>
            </ul>
          )}
        </li>
      </ul>
      <button onClick={handleLogout} className="logout-button">로그아웃</button>
      <div className="sidebar-footer">
        ©2023 STARDUCKS ERP
      </div>
    </nav>
  );
};

export default Sidebar;