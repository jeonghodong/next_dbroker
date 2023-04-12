import Image from "next/image";
import logo from "/public/images/logo.png";

export default function Header() {
  return (
    <div
      className={
        "bg-[#ffffff29] fixed top-0 left-0 z-9999 w-screen flex justify-around items-center p-4 backdrop-filter backdrop-blur-[5px] opacity-[50]"
      }
    >
      <Image src={logo} alt="logo image" width={220} height={220} />
      <div>
        <span className="Hspan">그림판</span>
        <span className="Hspan">많은 작품 보기</span>
        <span className="Hspan">서비스 질문</span>
      </div>
      <input className="border rounded-full px-2 py-1" type="text" placeholder="어떤 디자인 필요하세요?" />
      <div>
        <span>로그인</span>
        <span>회원가입</span>
      </div>
    </div>
  );
}
