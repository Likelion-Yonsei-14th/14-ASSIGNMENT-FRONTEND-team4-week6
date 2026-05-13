import { BellIcon, SearchIcon, BottomNav, LocationBadge } from "../components/shared";

interface RoomCardProps {
  name: string;
  location: string;
  rooms: { size: string; price: string }[];
  onClick?: () => void;
}

function RoomCard({ name, location, rooms, onClick }: RoomCardProps) {
  return (
    <button onClick={onClick} className="flex gap-[16px] items-center w-full text-left">
      <div className="w-[100px] h-[100px] bg-[#d9d9d9] rounded-[10px] shrink-0" />
      <div className="flex flex-col gap-[4px] h-[100px] justify-start">
        <p className="text-[13px] text-black">{name}</p>
        <div className="text-[0px]">
          {rooms.map((r, i) => (
            <p key={i} className="text-[12px] text-black leading-normal mb-0">
              {r.size} <span className="text-[13px] font-semibold">{r.price}</span>
            </p>
          ))}
        </div>
        <LocationBadge label={location} />
      </div>
    </button>
  );
}

const SAMPLE_ROOMS: RoomCardProps[] = [
  {
    name: "00합주실",
    location: "신촌역",
    rooms: [
      { size: "5인실", price: "15,000원" },
      { size: "10인실", price: "30,000원" },
      { size: "20인실", price: "60,000원" },
    ],
  },
  {
    name: "00합주실",
    location: "신촌역",
    rooms: [
      { size: "5인실", price: "15,000원" },
      { size: "10인실", price: "30,000원" },
      { size: "20인실", price: "60,000원" },
    ],
  },
  {
    name: "00합주실",
    location: "신촌역",
    rooms: [
      { size: "5인실", price: "15,000원" },
      { size: "10인실", price: "30,000원" },
      { size: "20인실", price: "60,000원" },
    ],
  },
  {
    name: "00합주실",
    location: "신촌역",
    rooms: [
      { size: "5인실", price: "15,000원" },
      { size: "10인실", price: "30,000원" },
      { size: "20인실", price: "60,000원" },
    ],
  },
];

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-white relative w-full h-full overflow-hidden">
      {/* 상단바 */}
      <div className="absolute top-[20px] left-0 w-full flex items-end justify-between pl-[20px] pr-[25px]">
        <div className="h-[43px] flex items-center gap-2">
          {/* 로고 */}
          <div className="w-[28px] h-[28px] bg-[#003778] rounded-full flex items-center justify-center text-white text-xs font-bold">P</div>
          <span className="text-[#003778] text-[15px] font-bold">합주픽</span>
        </div>
        <button>
          <BellIcon hasNotification={false} />
        </button>
      </div>

      {/* 본문 */}
      <div className="absolute top-[72px] left-[22px] w-[350px] flex flex-col gap-[12px] overflow-y-auto" style={{ maxHeight: "calc(100% - 172px)" }}>
        {/* 검색창 */}
        <button
          onClick={() => onNavigate?.("search")}
          className="bg-[#f5f5f5] flex items-center justify-between p-[10px] rounded-[10px] w-full"
        >
          <span className="text-[#b7b7b7] text-[15px]">합주실 가격, 크기, 위치 검색</span>
          <SearchIcon />
        </button>

        {/* 광고 배너 */}
        <div className="bg-[#f5f5f5] h-[150px] flex items-center justify-center rounded-[10px] w-full shrink-0">
          <span className="text-[15px] text-black">광고 배너</span>
        </div>

        {/* 추천 합주실 */}
        <p className="text-[13px] font-medium text-black">추천 합주실</p>

        <div className="flex flex-col gap-[15px] w-full pb-[120px]">
          {SAMPLE_ROOMS.map((room, i) => (
            <RoomCard
              key={i}
              {...room}
              onClick={() => onNavigate?.("detail")}
            />
          ))}
        </div>
      </div>

      {/* 하단 네비바 */}
      <BottomNav active="home" onNavigate={(p) => onNavigate?.(p)} />
    </div>
  );
}
