import React, { useState } from "react";
import { BackIcon } from "../components/shared";

const DAYS_OF_WEEK = ["일", "월", "화", "수", "목", "금", "토"];

function Calendar() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // May 2025 calendar - starts on Thursday (index 4)
  const startDay = 4; // Thursday
  const totalDays = 31;
  const weeks: (number | null)[][] = [];
  let day = 1;
  let week: (number | null)[] = Array(startDay).fill(null);

  while (day <= totalDays) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
    day++;
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  const isRedDay = (dayIdx: number, d: number | null): boolean => {
    if (!d) return false;
    return dayIdx === 0 || dayIdx === 6; // Sun or Sat
  };

  return (
    <div className="w-full">
      <p className="text-center text-[12px] text-black mb-[10px]">5월</p>
      <div className="flex justify-between mb-[8px]">
        {DAYS_OF_WEEK.map((d, i) => (
          <span key={i} className={`text-[11px] text-center flex-1 ${i === 0 || i === 6 ? "text-[#db1414]" : "text-[#888]"}`}>
            {d}
          </span>
        ))}
      </div>
      {weeks.map((week, wi) => (
        <div key={wi} className="flex justify-between mb-[6px]">
          {week.map((d, di) => (
            <button
              key={di}
              onClick={() => d && setSelectedDay(d)}
              disabled={!d}
              className={`text-[12px] flex-1 text-center h-[22px] rounded-full transition-colors ${
                !d ? "invisible" :
                d === selectedDay ? "bg-[#003778] text-white" :
                isRedDay(di, d) ? "text-[#db1414]" : "text-black"
              }`}
            >
              {d ? `${d}일` : ""}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

interface DetailPageProps {
  onNavigate?: (page: string) => void;
}

export default function DetailPage({ onNavigate }: DetailPageProps) {
  return (
    <div className="bg-white relative w-full h-full overflow-hidden">
      {/* 상단바 */}
      <div className="absolute top-[36px] left-0 w-full flex items-center justify-between pl-[22px] pr-[25px]">
        <button onClick={() => onNavigate?.("home")}>
          <BackIcon />
        </button>
        <span className="text-[15px] text-black absolute left-1/2 -translate-x-1/2">합주실</span>
      </div>

      {/* 본문 스크롤 */}
      <div className="absolute top-[72px] left-[22px] w-[350px] flex flex-col gap-[10px] overflow-y-auto pb-[120px]" style={{ maxHeight: "calc(100% - 172px)" }}>
        {/* 이미지 */}
        <div className="bg-[#f5f5f5] h-[150px] flex items-center justify-center rounded-[10px] w-full shrink-0">
          <span className="text-[15px] text-black">합주실 이미지</span>
        </div>

        {/* 이름 */}
        <div className="border-b border-[#cbcbcb] flex items-start px-[5px] py-[10px] w-full">
          <span className="text-[15px] font-bold text-black">라디오가가</span>
        </div>

        {/* 정보 */}
        <p className="text-[15px] font-semibold text-black">정보</p>
        <div className="flex flex-col gap-[10px] text-[15px] text-black">
          <p>
            <span className="font-medium">주소</span>
            <span className="font-normal"> 00시 00구 00로 00길</span>
          </p>
          <p>
            <span className="font-medium">전화번호</span>
            <span className="font-normal"> 000-000-0000</span>
          </p>
          <div className="flex gap-[16px] items-start">
            <span className="font-medium whitespace-nowrap">영업시간</span>
            <div className="font-normal leading-normal">
              <p className="mb-0">일-</p>
              <p className="mb-0">월 13:00-22:00</p>
              <p className="mb-0">화 13:00-22:00</p>
              <p className="mb-0">수 13:00-22:00</p>
              <p className="mb-0">목 13:00-22:00</p>
              <p className="mb-0">금 13:00-22:00</p>
              <p>토 13:00-22:00</p>
            </div>
          </div>
        </div>

        {/* 예약 가능 날짜 */}
        <p className="text-[15px] font-semibold text-black">예약 가능 날짜</p>
        <Calendar />
      </div>

      {/* 하단 버튼 */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white border-t border-[#cbcbcb] flex items-center justify-between px-[60px]">
        <button className="bg-[#cbcbcb] flex items-center justify-center p-[10px] rounded-[10px]">
          <span className="text-[15px] text-black">문의하기</span>
        </button>
        <button className="bg-[#003778] flex items-center justify-center p-[10px] rounded-[10px]">
          <span className="text-[15px] text-[#f5f5f5]">예약하기</span>
        </button>
      </div>
    </div>
  );
}
