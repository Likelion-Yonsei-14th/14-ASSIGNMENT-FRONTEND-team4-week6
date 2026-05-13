import { useState } from "react";
import { XIcon, RefreshIcon } from "../components/shared";

const SORT_OPTIONS = ["인기순", "최신순", "가까운순", "예약율순", "높은 가격순", "낮은 가격순", "높은 수용 인원순"];
const CAPACITY_OPTIONS = ["1~5인", "6~10인", "11~15인", "16~20인", "20~30인", "30인 이상"];
const PRICE_OPTIONS = ["1만원대", "2~3만원대", "5만원 이하", "10만원 이이하", "15만원 이하", "15만원 이상"];

type FilterState = {
  sort: string | null;
  capacity: string | null;
  price: string | null;
};

interface FilterPageProps {
  onNavigate?: (page: string) => void;
}

export default function FilterPage({ onNavigate }: FilterPageProps) {
  const [filters, setFilters] = useState<FilterState>({
    sort: "높은 수용 인원순",
    capacity: "30인 이상",
    price: "15만원 이하",
  });

  function select(category: keyof FilterState, value: string) {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  }

  function reset() {
    setFilters({ sort: null, capacity: null, price: null });
  }

  function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className={`px-[10px] py-[5px] rounded-[15px] text-[13px] border border-[#cbcbcb] whitespace-nowrap transition-colors ${
          active ? "bg-[#013f80] text-[#f5f5f5]" : "bg-transparent text-black"
        }`}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="bg-white relative w-full h-full overflow-hidden">
      {/* 헤더 */}
      <div className="absolute top-[16px] left-[2px] w-[393px] flex items-center justify-between pl-[22px] pr-[25px] py-[10px] border-b border-[#cbcbcb]">
        <span className="text-[15px] text-black">필터</span>
        <button onClick={() => onNavigate?.("search")}>
          <XIcon />
        </button>
      </div>

      {/* 본문 */}
      <div className="absolute top-[71px] left-0 w-full flex flex-col gap-[35px] items-center overflow-y-auto pb-[120px]" style={{ maxHeight: "calc(100% - 171px)" }}>
        <div className="flex flex-col gap-[10px] items-center w-full">
          {/* 정렬 */}
          <div className="flex items-start px-[20px] w-full">
            <span className="text-[13px] font-medium text-black">정렬</span>
          </div>
          <div className="flex flex-wrap gap-[10px_5px] px-[20px] w-full">
            {SORT_OPTIONS.map((opt) => (
              <FilterChip key={opt} label={opt} active={filters.sort === opt} onClick={() => select("sort", opt)} />
            ))}
          </div>

          {/* 수용 인원 */}
          <div className="flex items-start px-[20px] py-[10px] w-full">
            <span className="text-[13px] font-medium text-black">수용 인원</span>
          </div>
          <div className="flex flex-wrap gap-[10px_5px] px-[20px] w-full">
            {CAPACITY_OPTIONS.map((opt) => (
              <FilterChip key={opt} label={opt} active={filters.capacity === opt} onClick={() => select("capacity", opt)} />
            ))}
          </div>

          {/* 가격 */}
          <div className="flex items-start px-[20px] py-[10px] w-full">
            <span className="text-[13px] font-medium text-black">가격</span>
          </div>
          <div className="flex flex-wrap gap-[10px_5px] px-[20px] w-full">
            {PRICE_OPTIONS.map((opt) => (
              <FilterChip key={opt} label={opt} active={filters.price === opt} onClick={() => select("price", opt)} />
            ))}
          </div>
        </div>


      </div>

      {/* 하단바 */}
      <div className="absolute bottom-0 left-[2px] w-[393px] h-[100px] bg-white border-t border-[#cbcbcb] flex items-center justify-between px-[40px] pt-[10px]">
        <button onClick={reset} className="flex items-center gap-[6px] h-[58px]">
          <RefreshIcon />
          <span className="text-[#003778] text-[15px]">선택초기화</span>
        </button>
        <button className="bg-[#003778] flex items-center justify-center p-[10px] rounded-[10px]">
          <span className="text-[#f5f5f5] text-[15px]">00개 합주실 보기</span>
        </button>
      </div>
    </div>
  );
}