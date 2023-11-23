import React from 'react';
import Header from '../../components/Header/Header'; // '../../'를 사용하여 상위 두 디렉토리로 이동
import MainContent from '../../components/MainContent/MainContent';
import './MyPage.css';
import { Link } from 'react-router-dom'; //로그인 페이지 링크 만들기용 임시

function MyPage() {
  return (
    <div className="mypage">
      <div className="main-layout">
        <Header />
        <MainContent /> {/* 이 부분에 메인 콘텐츠 영역 컴포넌트를 배치합니다 */}
      </div>
      <Link to="/login">
          로그인 페이지
      </Link>
    </div>
    
  );
}

export default MyPage;
