"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NotificationDropdown from "./NotificationDropdown";
// import { Search } from "lucide-react";
import GlobalSearch from "./GlobalSearch";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const { t } = useTranslation();
  const [openNotifications, setOpenNotifications] =
    useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 h-16 md:h-15 bg-[#131C31] border-b border-slate-800 px-3 md:px-8 flex items-center justify-between z-50">
      {/* LEFT */}
      <div className="flex items-center gap-3 w-full md:w-auto">

        {/* Logo */}
        <div className="hidden md:flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="rounded"
          />
          {/* <span className="font-bold text-white text-lg">
      ShopInventory
    </span> */}
        </div>

        {/* Mobile title */}
        <div className="md:hidden flex items-center gap-2 font-bold text-white">
          <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
          <span>{t("ShopInventory")}</span>
        </div>


      </div>
      {/* Search */}
      {/* <div className="hidden md:flex items-center bg-[#0B1120] rounded-xl px-4 py-2 border border-slate-700 w-72">
        <Search size={18} className="text-slate-400" />
        <input
          type="text"
          placeholder={t("Search")}
          className="bg-transparent outline-none text-white ml-3 w-full"
        />
      </div> */}
<div className="hidden md:block">
  <GlobalSearch />
</div>
      {/* RIGHT */}
      <div className="flex items-center gap-2 md:gap-4">

        {/* Language */}
        <div className=" ">
          <LanguageSwitcher />
        </div>
<button
  onClick={() => setOpenSearch(true)}
  className="md:hidden p-2 bg-[#0B1120] border border-slate-700 rounded-lg"
>
  <Search size={18} className="text-white" />
</button>
        {/* Bell */}
        <div className="relative">

          <button
            onClick={() =>
              setOpenNotifications(!openNotifications)
            }
            className="relative p-2 rounded-xl bg-[#0B1120] border border-slate-700"
          >
            <Bell size={18} className="text-slate-300" />

            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
              4
            </span>
          </button>

          {openNotifications && (
            <NotificationDropdown />
          )}

        </div>

        {/* Date (hide on small screens) */}
        <div className="hidden md:block bg-[#0B1120] border border-slate-700 rounded-xl px-4 py-2">
          <span className="text-slate-300 text-sm">
            June 2026
          </span>
        </div>

        {/* User */}
        <div className="flex items-center gap-2">
          <Link href="/dashboard/profile" className="flex items-center gap-2">
            <UserCircle2 size={34} className="text-cyan-400" />
          </Link>
          <div className="hidden lg:block">
            <p className="text-white text-sm font-medium">{t("Admin")}</p>
            <p className="text-slate-400 text-xs">{t("Administrator")}</p>
          </div>
        </div>
        <button
          onClick={() => window.dispatchEvent(new Event("open-sidebar"))}
          className="md:hidden p-2 bg-[#0B1120] border border-slate-700 rounded-lg"
        >
          <Menu size={18} className="text-white" />
        </button>
      </div>
      {openSearch && (
        <div className="fixed inset-0 z-50 bg-[#0B1120] p-4 flex flex-col">

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-medium">Search</h2>

            <button
              onClick={() => setOpenSearch(false)}
              className="text-slate-400"
            >
              ✕
            </button>
          </div>

          <GlobalSearch mobileMode />
        </div>
      )}
    </header>
  );
}