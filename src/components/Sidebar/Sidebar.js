import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('');
  const [activeSubMenu, setActiveSubMenu] = useState('');

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? '' : menuName);
  };

  const handleMenuClick = (menuName) => {
    if (activeMenu === menuName) {
      // If the same menu is clicked again, toggle it off
      setActiveMenu('');
      setActiveSubMenu(''); // Also clear sub-menu selection
    } else {
      setActiveMenu(menuName);
      setActiveSubMenu(''); // Clear sub-menu selection when switching menus
    }
  };

  const handleSubMenuClick = (subMenuName) => {
    setActiveSubMenu(subMenuName);
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
              <li className={activeSubMenu === 'mypage/attendance' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('mypage', 'attendance')}>
                <Link to="/mypage/attendance">근태관리</Link>
              </li>
              <li className={activeSubMenu === 'mypage/schedule' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('mypage', 'schedule')}>
                <Link to="/mypage/schedule">일정관리</Link>
              </li>
              <li className={activeSubMenu === 'mypage/meeting-room' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('mypage', 'meeting-room')}>
                <Link to="/mypage/meeting-room">회의실 예약</Link>
              </li>
            </ul>
          )}
        </li>
         {/* 전자결재 메뉴 항목 */}
        <li className={activeMenu === 'e-document' ? "clicked" : ""}
            onClick={() => handleMenuClick('e-document')}>
          <Link to="/e-document">전자결재</Link>
          <ul>
            <li className={activeSubMenu === 'e-document/my' ? "active-submenu" : ""}
                onClick={() => handleSubMenuClick('e-document', 'e-document/my')}>
              <Link to="/e-document/my">나의 결재</Link>
            </li>
            <li className={activeSubMenu === 'e-document/create' ? "active-submenu" : ""}
                onClick={() => handleSubMenuClick('e-document', 'e-document/create')}>
              <Link to="/e-document/create">결재문서 작성</Link>
            </li>
            <li className={activeSubMenu === 'e-document/inbox' ? "active-submenu" : ""}
                onClick={() => handleSubMenuClick('e-document', 'e-document/inbox')}>
              <Link to="/e-document/inbox">수신함</Link>
            </li>
            <li className={activeSubMenu === 'e-document/drafts' ? "active-submenu" : ""}
                onClick={() => handleSubMenuClick('e-document', 'e-document/drafts')}>
              <Link to="/e-document/drafts">임시 저장함</Link>
            </li>
          </ul>
        </li>
         {/* 전사 게시판 메뉴 항목 */}
         <li className={activeMenu === 'forum' ? "clicked" : ""}
            onClick={() => handleMenuClick('forum')}>
          <Link to="/forum">전사 게시판</Link>
        </li>
        {/* 인사부 메뉴 항목 */}
        <li className={activeMenu === 'hr' ? "clicked" : ""}
            onClick={() => toggleMenu('hr')}>
          <div className={activeMenu === 'hr' ? "clicked" : ""}>인사부</div>
          {activeMenu === 'hr' && (
            <ul>
              <li className={activeSubMenu === 'hr/employee-management' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('hr', 'employee-management')}>
                <Link to="/hr/employee-management">사원 관리</Link>
              </li>
              <li className={activeSubMenu === 'hr/payroll' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('hr', 'payroll')}>
                <Link to="/hr/payroll">급여 관리</Link>
              </li>
              <li className={activeSubMenu === 'hr/attendance' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('hr', 'attendance')}>
                <Link to="/hr/attendance">근태 관리</Link>
              </li>
              <li className={activeSubMenu === 'hr/vacation' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('hr', 'vacation')}>
                <Link to="/hr/vacation">휴가 관리</Link>
              </li>
              <li className={activeSubMenu === 'hr/department' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('hr', 'department')}>
                <Link to="/hr/department">부서 관리</Link>
              </li>
              <li className={activeSubMenu === 'hr/documents' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('hr', 'documents')}>
                <Link to="/hr/documents">문서 관리</Link>
              </li>
            </ul>
          )}
        </li>
        {/* 물류유통부 메뉴 항목 */}
        <li className={activeMenu === 'logistics' ? "clicked" : ""}
            onClick={() => toggleMenu('logistics')}>
          <div className={activeMenu === 'logistics' ? "clicked" : ""}>물류유통부</div>
          {activeMenu === 'logistics' && (
            <ul>
              <li className={activeSubMenu === 'logistics/incoming' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('logistics', 'incoming')}>
                <Link to="/logistics/incoming">입고 관리</Link>
              </li>
              <li className={activeSubMenu === 'logistics/outgoing' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('logistics', 'outgoing')}>
                <Link to="/logistics/outgoing">출고 관리</Link>
              </li>
              <li className={activeSubMenu === 'logistics/inventory' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('logistics', 'inventory')}>
                <Link to="/logistics/inventory">재고 관리</Link>
              </li>
            </ul>
          )}
        </li>
        {/* 총무부 메뉴 항목 */}
        <li className={activeMenu === 'admin' ? "clicked" : ""}
            onClick={() => toggleMenu('admin')}>
          <div className={activeMenu === 'admin' ? "clicked" : ""}>총무부</div>
          {activeMenu === 'admin' && (
            <ul>
              <li className={activeSubMenu === 'general-affairs/schedule' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('admin', 'general-affairs/schedule')}>
                <Link to="/general-affairs/schedule">일정 관리</Link>
              </li>
              <li className={activeSubMenu === 'general-affairs/notice' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('admin', 'general-affairs/notice')}>
                <Link to="/general-affairs/notice">게시판 공지 등록</Link>
              </li>
              <li className={activeSubMenu === 'general-affairs/meeting-room' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('admin', 'general-affairs/meeting-room')}>
                <Link to="/general-affairs/meeting-room">회의실 관리</Link>
              </li>
              <li className={activeSubMenu === 'general-affairs/items' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('admin', 'general-affairs/items')}>
                <Link to="/general-affairs/items">품목 관리</Link>
              </li>
            </ul>
          )}
        </li>
        {/* 재무부 메뉴 항목 */}
        <li className={activeMenu === 'finance' ? "clicked" : ""}
            onClick={() => toggleMenu('finance')}>
          <div className={activeMenu === 'finance' ? "clicked" : ""}>재무부</div>
          {activeMenu === 'finance' && (
            <ul>
              <li className={activeSubMenu === 'finance/branch-info' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('finance', 'branch-info')}>
                <Link to="/finance/branch-info">지점 정보 관리</Link>
              </li>
              <li className={activeSubMenu === 'finance/partner-info' ? "active-submenu" : ""}
                  onClick={() => handleSubMenuClick('finance', 'partner-info')}>
                <Link to="/finance/partner-info">거래처 정보 관리</Link>
              </li>
            </ul>
          )}
        </li>
        {/* 조직도 메뉴 항목 */}
        <li className={activeMenu === 'org-chart' ? "clicked" : ""}
            onClick={() => handleMenuClick('org-chart')}>
          <Link to="/org-chart">조직도</Link>
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
