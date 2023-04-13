import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "/public/images/img-001.jpg";
import img2 from "/public/images/img-002.jpg";
import img3 from "/public/images/img-003.jpg";
import img4 from "/public/images/img-004.jpg";
import img5 from "/public/images/img-005.jpg";
import img6 from "/public/images/img-006.jpg";
import img7 from "/public/images/img-007.jpg";
import img8 from "/public/images/img-008.jpg";
import img9 from "/public/images/img-009.jpg";
import img10 from "/public/images/img-010.jpg";
import img11 from "/public/images/img-011.jpg";
import img12 from "/public/images/img-012.jpg";
import img13 from "/public/images/img-013.jpg";
import img14 from "/public/images/img-014.jpg";
import img15 from "/public/images/img-015.jpg";
import img16 from "/public/images/img-016.jpg";
import img17 from "/public/images/img-017.jpg";
import img18 from "/public/images/img-018.jpg";
import img19 from "/public/images/img-019.jpg";
import img20 from "/public/images/img-020.jpg";

export default function Section6() {
  return (
    <div className="w-[100%] h-[100%] bg-[#222] text-white py-[8rem]">
      <div className="pl-[5rem] flex flex-col">
        <span data-aos="fade-left" className="text-[4rem] leading-[7vw] font-black">
          수수료 ZERO ! 누구나 참여하고,
          <br /> 최신 작품을 쉽고 빠르게 공유하세요
          <br /> 학생, 청년, 로컬 디자이너에게
          <br /> 디자인 활동을 지원하고 있습니다
        </span>
        <span
          data-aos="fade-left"
          className="mt-[7rem] px-[3rem] font-bold py-[1rem] bg-white text-center text-black rounded-2xl w-[45vw]"
        >
          2022년 두번째 프로젝트를 <span className="text-orange-500">수상작 14인의 아티스트</span>를 만나보세요 !
        </span>
        <span
          data-aos="fade-right"
          className="text-[1.5rem] w-[150px] mt-[10rem] rounded-full px-[.5rem] py-[.5rem] text-center border border-white border-solid cursor-pointer"
        >
          계정만들기
        </span>
      </div>
      <div className="mt-[5rem]">
        <Slider slidesToShow={10} slidesToScroll={1} infinite={true} autoplay={true} autoplaySpeed={700}>
          <Image src={img1} alt="img" width={140} height={140} />
          <Image src={img2} alt="img" width={140} height={140} />
          <Image src={img3} alt="img" width={140} height={140} />
          <Image src={img4} alt="img" width={140} height={140} />
          <Image src={img5} alt="img" width={140} height={140} />
          <Image src={img6} alt="img" width={140} height={140} />
          <Image src={img7} alt="img" width={140} height={140} />
          <Image src={img8} alt="img" width={140} height={140} />
          <Image src={img9} alt="img" width={140} height={140} />
          <Image src={img10} alt="img" width={140} height={140} />
          <Image src={img11} alt="img" width={140} height={140} />
          <Image src={img12} alt="img" width={140} height={140} />
          <Image src={img13} alt="img" width={140} height={140} />
          <Image src={img14} alt="img" width={140} height={140} />
          <Image src={img15} alt="img" width={140} height={140} />
          <Image src={img16} alt="img" width={140} height={140} />
          <Image src={img17} alt="img" width={140} height={140} />
          <Image src={img18} alt="img" width={140} height={140} />
          <Image src={img19} alt="img" width={140} height={140} />
          <Image src={img20} alt="img" width={140} height={140} />
        </Slider>
      </div>
    </div>
  );
}
