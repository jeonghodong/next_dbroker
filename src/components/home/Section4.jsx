export default function Section4() {
  return (
    <div className="w-[100%] h-[100%] rounded-t-[5rem] bg-[#f1f1f1] flex justify-between items-center py-[5rem] pt-[5rem]">
      <div className="Section4_span items-baseline pl-[1rem]">
        <span data-aos="fade-right" className="Section4_span_border">
          안녕! :D
        </span>
        <span data-aos="fade-right" className="Section4_span_border">
          Bonjour
        </span>
        <span data-aos="fade-right" className="Section4_span_border">
          Hallo.
        </span>
        <span data-aos="fade-right" className="Section4_span_border">
          반가워요!
        </span>
        <span data-aos="fade-right" className="Section4_span_border">
          Buongiorno.
        </span>
        <span data-aos="fade-right" className="Section4_span_border">
          Xin chào.
        </span>
      </div>
      <div className="Section4_span items-end pr-[1rem]">
        <span data-aos="fade-left" className="Section4_span_border">
          안녕하세요
        </span>
        <span data-aos="fade-left" className="Section4_span_border">{`:)`}</span>
        <span data-aos="fade-left" className="Section4_span_border">
          HELLO
        </span>
        <span data-aos="fade-left" className="Section4_span_border">
          ¡Buenos días!
        </span>
        <span data-aos="fade-left" className="Section4_span_border">
          Здравствуйте
        </span>
        <span data-aos="fade-left" className="Section4_span_border">
          おはようございます
        </span>
      </div>
      <div className="absolute left-[33%] flex flex-col text-center items-center">
        <span data-aos="fade-in" className="mb-[5rem] text-[5rem] font-black">
          디자이너라면?
        </span>
        <span data-aos="fade-in" className="text-center text-[1.7rem] font-light">
          나를 위한 컨텐츠를,
          <br /> 창작 😎
          <br /> 공유 😆
          <br /> 소통 🥰
          <br /> 전문 디자이너를 폼나게 소개해볼게요
        </span>
        <span
          data-aos="fade-in"
          className="text-[1.5rem] w-[150px] mt-[10rem] rounded-full px-[.5rem] py-[.5rem] text-center border border-black border-solid cursor-pointer"
        >
          가입하기
        </span>
      </div>
    </div>
  );
}
