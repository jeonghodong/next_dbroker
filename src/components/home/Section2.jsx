import Image from "next/image";
import logo from "public/images/section2-logo.png";

export default function Section2() {
  return (
    <div className="w-[100%] h-[100%] bg-[#ff2727] flex justify-between items-center py-[10rem] px-[8rem]">
      <div className="flex flex-col text-white">
        <span className="text-[4rem] font-black ">
          더 이상 찾아다니지
          <br /> 말고,.
          <br />
        </span>
        <span className="py-[4rem] text-[2rem]">
          내 취향에 딱 맞는 디자이너 !<br /> 창업 라이프스타일 No.1
          <br /> 디자이너는 아티스트다 !
        </span>
        <span className="text-[1.5rem] w-[150px] mt-[10rem] rounded-full px-[.5rem] py-[.5rem] text-center border border-white border-solid cursor-pointer">
          검색하기
        </span>
      </div>
      <div className="w-[500px] h-[500px] bg-white rounded-full">
        <Image src={logo} alt="logo" width="100%" height="100%" />
      </div>
    </div>
  );
}
