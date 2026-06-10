import "./globals.css";
import type { ReactNode } from "react";
import "../lib/i18n";
import I18nProvider from "@/components/I18nProvider";
import GlobalSearch from "@/components/search/GlobalSearch";
export const metadata = {
  title: "Shop Inventory Management System",
  description: "Inventory Management System",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 ">
        <I18nProvider>
          {children}
        </I18nProvider>
        <GlobalSearch />
      </body>
    </html>
  );
}