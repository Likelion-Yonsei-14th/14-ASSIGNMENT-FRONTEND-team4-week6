import { BackIcon, BellIcon, SearchIcon, FilterTag, LocationBadge } from "../components/shared";

const RECENT_SEARCHES = ["라디오가가", "신촌 합주실", "연세대", "합정", "단체 합주실", "악기대여"];
const BOOKED_ROOMS = ["라디오가가", "00합주", "합주픽"];
const NEARBY_LOCATIONS = ["신촌역", "홍대입구", "신촌역", "대흥역", "이대역", "서강대역"];

interface SearchPageProps {
  onNavigate?: (page: string) => void;
}

export default function SearchPage({ onNavigate }: SearchPageProps) {
  return (
    <div className="bg-white relative w-full h-full overflow-hidden">
      {/* 상단바 */}
      <div className="absolute top-[39px] left-0 w-full flex items-center justify-between pl-[22px] pr-[25px]">
        <button onClick={() => onNavigate?.("home")}>
          <BackIcon />
        </button>
        <BellIcon hasNotification={true} />
      </div>

      {/* 검색창 */}
      <div className="absolute top-[72px] left-[22px] w-[350px] flex flex-col gap-[35px]">
        <div className="flex items-center gap-[8px] w-full">
          <div className="bg-[#f5f5f5] flex items-center justify-between p-[10px] rounded-[10px] flex-1">
            <span className="text-[#b7b7b7] text-[15px]">합주실 가격, 크기, 위치 검색</span>
            <SearchIcon />
          </div>
          <button
            onClick={() => onNavigate?.("filter")}
            className="bg-[#f5f5f5] flex items-center justify-center p-[10px] rounded-[10px] shrink-0 gap-[4px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4" y1="6" x2="20" y2="6" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="7" y1="12" x2="17" y2="12" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="10" y1="18" x2="14" y2="18" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[13px] text-black">필터</span>
          </button>
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          {/* 최근 검색어 */}
          <p className="text-[13px] font-medium text-black">최근 검색어</p>
          <div className="flex flex-wrap gap-y-[13px] gap-x-[5px]">
            {RECENT_SEARCHES.map((term) => (
              <FilterTag key={term} label={term} />
            ))}
          </div>

          {/* 예약했던 합주실 */}
          <p className="text-[13px] font-medium text-black">예약했던 합주실</p>
          <div className="flex flex-wrap gap-[5px]">
            {BOOKED_ROOMS.map((room) => (
              <FilterTag key={room} label={room} />
            ))}
          </div>

          {/* 인근 지역 */}
          <p className="text-[13px] font-medium text-black">인근 지역</p>
          <div className="flex flex-wrap gap-[10px]">
            {NEARBY_LOCATIONS.map((loc, i) => (
              <LocationBadge key={i} label={loc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}