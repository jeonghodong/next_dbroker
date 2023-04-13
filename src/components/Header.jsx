import Image from "next/image";
import logo from "/public/images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className={
        "bg-[#ffffff29] fixed top-0 left-0 z-[9998] w-screen flex justify-around items-center p-4 backdrop-filter backdrop-blur-[5px] opacity-[50]"
      }
    >
      <Link href="/">
        <Image className="cursor-pointer" src={logo} alt="logo image" width={220} height={220} />
      </Link>
      <div>
        <span className="Hspan mr-[2rem]">
          <Link href="/draw">그림판</Link>
        </span>
        <span className="Hspan mr-[2rem]">
          <Link href="/folio">많은 작품 보기</Link>
        </span>
        <span className="Hspan">
          <Link href="/ask">서비스 질문</Link>
        </span>
      </div>
      <input
        className="border rounded-xl px-[1rem] py-[.3rem] outline-none placeholder:text-[1rem]"
        type="text"
        placeholder="어떤 디자인 필요하세요?"
      />
      <div>
        <span className="px-[1rem] cursor-pointer py-[.5rem] rounded-xl text-white bg-black mr-[1rem]">로그인</span>
        <span className="px-[1rem] cursor-pointer py-[.5rem] rounded-xl text-black bg-gray-200 ">회원가입</span>
      </div>
    </div>
  );
}
