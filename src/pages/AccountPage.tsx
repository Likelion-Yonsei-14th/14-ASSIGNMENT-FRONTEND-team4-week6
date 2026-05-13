import { BackIcon, BellIcon, UserIcon, BottomNav } from "../components/shared";

const MENU_ITEMS = [
  "프로필 관리",
  "결제 내역",
  "예약 내역",
  "쿠폰",
  "공지사항",
  "앱 설정",
  "로그아웃",
  "탈퇴",
];

interface AccountPageProps {
  onNavigate?: (page: string) => void;
}

export default function AccountPage({ onNavigate }: AccountPageProps) {
  return (
    <div className="bg-white relative w-full h-full overflow-hidden">
      {/* 상단바 */}
      <div className="absolute top-[39px] left-0 w-full flex items-center justify-between pl-[22px] pr-[25px]">
        <button onClick={() => onNavigate?.("home")}>
          <BackIcon />
        </button>
        <BellIcon hasNotification={true} />
      </div>

      {/* 본문 */}
      <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[350px] flex flex-col gap-[63px] items-center">
        {/* 프로필 */}
        <div className="flex flex-col gap-[7px] items-center">
          <p className="text-[13px] text-black">계정</p>
          <div className="w-[40px] h-[40px] bg-[#003778] rounded-full flex items-center justify-center">
            <UserIcon active={true} />
          </div>
          <p className="text-[13px] font-medium text-black">이가영</p>
          <p className="text-[12px] font-light text-black">emilygylee@yonsei.ac.kr</p>
        </div>

        {/* 메뉴 리스트 */}
        <div className="flex flex-col gap-[20px] w-full pb-[120px]">
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              className="bg-[#f5f5f5] flex items-center h-[40px] p-[10px] rounded-[10px] w-full text-left"
            >
              <span className="text-[13px] text-black">{item}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 하단 네비바 */}
      <BottomNav active="account" onNavigate={(p) => onNavigate?.(p)} />
    </div>
  );
}
