import { useState } from "react";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import SearchPage from "./pages/SearchPage";
import FilterPage from "./pages/FilterPage";
import DetailPage from "./pages/DetailPage";

type Page = "home" | "account" | "search" | "filter" | "detail";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: string) => setPage(p as Page);

  return (
    // 모바일 프레임 (393×852 iPhone 14 Pro)
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className="relative bg-white overflow-hidden shadow-2xl rounded-[40px]"
        style={{ width: 393, height: 852 }}
      >
        {page === "home" && <HomePage onNavigate={navigate} />}
        {page === "account" && <AccountPage onNavigate={navigate} />}
        {page === "search" && <SearchPage onNavigate={navigate} />}
        {page === "filter" && <FilterPage onNavigate={navigate} />}
        {page === "detail" && <DetailPage onNavigate={navigate} />}
      </div>


    </div>
  );
}