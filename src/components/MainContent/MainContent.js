import React from 'react';
import AttendanceManagementWidget from '../AttendanceManagementWidget/AttendanceManagementWidget';
import ElectronicApprovalWidget from '../ElectronicApprovalWidget/ElectronicApprovalWidget';
import CalendarWidget from '../CalendarWidget/CalendarWidget';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import BulletinBoardWidget from '../BulletinBoardWidget/BulletinBoardWidget';
import MailboxWidget from '../MailboxWidget/MailboxWidget';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <div className="widget attendance-management">
        <AttendanceManagementWidget />
      </div>
      <div className="widget electronic-approval">
        <ElectronicApprovalWidget />
      </div>
      <div className="widget calendar">
        <CalendarWidget />
      </div>
      <div className="widget weather">
        <WeatherWidget />
      </div>
      <div className="widget bulletin-board">
        <BulletinBoardWidget />
      </div>
      <div className="widget mailbox">
        <MailboxWidget />
      </div>
    </main>
  );
}

export default MainContent;
