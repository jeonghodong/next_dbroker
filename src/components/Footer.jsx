import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-full bg-[#333] py-[2rem]">
      <div className="flex gap-y-[.5rem] relative flex-col justify-center items-center text-white">
        <span className="cursor-pointer">개인정보처리방침</span>
        <span className="cursor-pointer">이용약관</span>
        <span>커네팅</span>
        <span className="font-normal">
          대표 <span className="font-light">홍길동</span>
        </span>
        <span className="font-normal">
          사업자등록번호 <span className="font-light">123-12-12345</span>
        </span>
        <span>울산광역시 중구 학성로 00-0, 0F-000</span>
        <span className="font-normal">
          통신판매업신고증 <span className="font-light">제 2022-대한민국-0000 호</span>
        </span>
        <span className="font-normal">
          벤처기업 <span className="font-light">제 20220111123456 호</span>
        </span>
        <span className="mt-[2rem] text-[1.5rem]">© CONNECTHINK All Rights Reserved.</span>
      </div>
    </div>
  );
}
