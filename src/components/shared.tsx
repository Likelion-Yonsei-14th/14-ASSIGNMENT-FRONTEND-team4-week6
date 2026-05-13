// ─── Icons ────────────────────────────────────────────────────────────────────

export function BellIcon({ hasNotification = false }: { hasNotification?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {hasNotification && <circle cx="17" cy="5" r="3" fill="#FF3B30"/>}
    </svg>
  );
}

export function HomeIcon({ active = false }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        stroke={active ? "#003778" : "#000"} strokeWidth="1.5"
        fill={active ? "#003778" : "none"}
        strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="9,22 9,12 15,12 15,22" stroke={active ? "#fff" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function UserIcon({ active = false }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        stroke={active ? "#003778" : "#000"} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        fill={active ? "#003778" : "none"}/>   {/* 이 줄 추가 */}
      <circle cx="12" cy="7" r="4"
        stroke={active ? "#003778" : "#000"} strokeWidth="1.5"
        fill={active ? "#003778" : "none"}/>
    </svg>
  );
}

export function BackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="15,18 9,12 15,6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" stroke="#B7B7B7" strokeWidth="1.5"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="18" y1="6" x2="6" y2="18" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="6" y1="6" x2="18" y2="18" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function RefreshIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="1,4 1,10 7,10" stroke="#003778" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.51 15a9 9 0 1 0 .49-4.95" stroke="#003778" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Bottom Nav Bar ────────────────────────────────────────────────────────────

interface BottomNavProps {
  active: "home" | "account";
  onNavigate?: (page: "home" | "account") => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white border-t border-[#cbcbcb] flex items-center justify-between px-[100px]">
      <button onClick={() => onNavigate?.("home")} className="p-1">
        <HomeIcon active={active === "home"} />
      </button>
      <button onClick={() => onNavigate?.("account")} className="p-1">
        <UserIcon active={active === "account"} />
      </button>
    </div>
  );
}

// ─── Filter Tag ───────────────────────────────────────────────────────────────

interface FilterTagProps {
  label: string;
  active?: boolean;
  color?: string;
  onClick?: () => void;
}

export function FilterTag({ label, active = false, color, onClick }: FilterTagProps) {
  const bg = color ?? (active ? "#013f80" : "transparent");
  const textColor = active || color ? (active ? "#f5f5f5" : "#000") : "#000";
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bg, color: textColor }}
      className="border border-[#cbcbcb] px-[10px] py-[5px] rounded-[15px] text-[13px] font-normal whitespace-nowrap"
    >
      {label}
    </button>
  );
}

// ─── Location Badge ───────────────────────────────────────────────────────────

const LOCATION_COLORS: Record<string, string> = {
  신촌역: "#b2e4ec",
  홍대입구: "#8ada67",
  대흥역: "#da9967",
  이대역: "#8ada67",
  서강대역: "#d3f9ff",
};

export function LocationBadge({ label }: { label: string }) {
  const bg = LOCATION_COLORS[label] ?? "#8ada67";
  return (
    <span style={{ backgroundColor: bg }} className="px-[3px] py-[1px] rounded-[10px] text-[13px] text-black">
      {label}
    </span>
  );
}
