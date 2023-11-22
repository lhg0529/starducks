import React from 'react';
import Header from '../../components/Header/Header'; // '../../'를 사용하여 상위 두 디렉토리로 이동
import Sidebar from '../../components/Sidebar/Sidebar'; 
import MainContent from '../../components/MainContent/MainContent';
import './MyPage.css';

function MyPage() {
  return (
    <div className="mypage">
      <Sidebar />
      <div className="main-layout">
        <Header />
        <MainContent /> {/* 이 부분에 메인 콘텐츠 영역 컴포넌트를 배치합니다 */}
      </div>
    </div>
  );
}

export default MyPage;
