import { useEffect, useState } from "react";

export default function index() {
  const [type, setType] = useState(false);
  useEffect(() => {
    console.log(type);
  }, [type]);
  const handleTypeClick = (v) => {
    if (v.target.innerText === "이미지") {
      setType(false);
    }
    if (v.target.innerText === "동영상") {
      setType(true);
    }
  };
  return (
    <div className="w-full bg-slate-100 h-screen pt-[6rem] px-[1rem] flex justify-center items-center">
      <div className="relative w-[80vw] h-full mb-[3rem] bg-white py-[4rem] flex flex-wrap justify-center rounded-2xl">
        <div className="flex flex-wrap absolute top-[10px] left-[70px]">
          {!type ? (
            <span onClick={(v) => handleTypeClick(v)} className="wirte_type mr-[1.3rem] pb-[7px] border-b-[3px]">
              이미지
            </span>
          ) : (
            <span
              onClick={(v) => handleTypeClick(v)}
              className="wirte_type mr-[1.3rem] pb-[7px] border-b-[0] text-gray-300"
            >
              이미지
            </span>
          )}
          {type ? (
            <span onClick={(v) => handleTypeClick(v)} className="wirte_type pb-[7px] border-b-[3px]">
              동영상
            </span>
          ) : (
            <span onClick={(v) => handleTypeClick(v)} className="wirte_type pb-[7px] border-b-[0] text-gray-300">
              동영상
            </span>
          )}
        </div>
        {/*  */}
        {type ? (
          <span>fdas</span>
        ) : (
          <>
            <div className="cursor-pointer border border-gray-400 border-solid w-[300px] h-[400px] mr-[2rem] flex flex-col justify-center items-center">
              <span className="text-[1.2rem] font-medium mb-[2rem]">이미지를 업로드해주세요.</span>
              <span className="text-[.9rem] font-light">최대 10MB의 JPG, JPEG, PNG, GIF 이미지 파일</span>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="제목을 입력해주세요.(최대 100글자)"
                className="wirte_text h-[3rem] mb-[3rem]"
              />
              <textarea
                placeholder="내용을 입력해주세요."
                className="resize-none wirte_text w-[700px] h-[300px]"
              ></textarea>
              <input
                type="text"
                placeholder="URL을 입력해주세요.(최대 100글자)"
                className="w-[700px] p-[1rem] wirte_text h-[3rem] mt-[3rem]"
              />
              <input
                type="text"
                placeholder="썸네일 이미지 업로드"
                className="w-[700px] p-[1rem] wirte_text h-[3rem] mt-[3rem]"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
