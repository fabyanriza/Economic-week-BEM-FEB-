import React from "react";
import mascot1 from "../assets/mascot1.png";

function Second() {
  return (
    <div className="bg-yellow-100 h-[600px]  relative">
      <div className=" absolute w-full h-[60px] bg-custom-gradient top-0"></div>
      <div className="text-blue-800 text-5xl font-bold pt-[150px] h-[100px] w-full flex items-end justify-center tracking-widest">
        GRAND THEME
      </div>
      <div className="grid sm:grid-cols-12 m-4 gap-4 pt-20">
        <div className=" h-[100px] sm:col-span-8 ">
          <h2 className="text-blue-500 text-base sm:text-2xl text-justify p-10 tracking-widest">
            Dalam semangat kolaborasi dan inovasi, Fakultas Ekonomi & Bisnis
            mengadakan serangkaian acara yang mengintegrasikan hiburan,
            pengabdian masyarakat, dan edukasi. Melalui Konser Ekonomi Harmoni,
            kami menghadirkan kolaborasi musik yang menginspirasi. Pengmas
            Ekonomi Peduli menjadi wujud nyata kontribusi kami dalam
            meningkatkan kesejahteraan masyarakat. Sosialisasi Ekonomi Cerdas
            berfokus pada pemberdayaan dan edukasi publik tentang pentingnya
            literasi ekonomi. Bersama, kita bersinergi untuk membangun masa
            depan yang lebih baik bagi negeri ini.
          </h2>
        </div>
        <div className=" h-[100px] sm:col-span-4 sm:block hidden items-center">
          <img src={mascot1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Second;
