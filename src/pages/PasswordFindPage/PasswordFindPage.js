import React from 'react';
import './PasswordFindPage.css'; // 해당 CSS 파일도 생성해야 합니다.
import { Link } from 'react-router-dom'; //로그인 페이지로 넘어가기용 임시


const PasswordFindPage = () => {
  return (
    <div className="password-find-page">
      <h2>비밀번호 찾기</h2>
      <input type="email" placeholder="이메일 주소" />
      <button>비밀번호 재설정 링크 보내기</button>
      <Link to="/login">
          로그인 페이지
      </Link>
      {/* 나중에 없앨 로그인 페이지 이동용 링크~~~~~~~~~~~~~ */}
    </div>
  );
};

export default PasswordFindPage;