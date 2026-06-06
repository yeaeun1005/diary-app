import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-4 md:p-6 font-jua">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-normal text-sky-400 drop-shadow-sm">
            마음바다탐험대
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="rounded-full bg-white/80 backdrop-blur-sm border-blue-200 text-blue-800 hover:bg-blue-50 text-lg py-5 px-6 shadow-sm"
          >
            로그인 없이 체험하기
          </Button>
          <Button 
            className="rounded-full bg-sky-400 hover:bg-sky-500 text-white text-lg py-5 px-6 shadow-md"
          >
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}
