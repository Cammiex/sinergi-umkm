import pemasaran1 from '@/assets/images/pemasaran-img1.png';
import pemasaran2 from '@/assets/images/pemasaran-img2.png';
import ornamen1 from '@/assets/icon/bg-ornament4.svg';
import {
  faArrowRight,
  faCircleCheck,
  faHeart,
  faRightFromBracket,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PemasaranCard = ({ name, category, img }) => {
  const [like, setLike] = useState(false);
  const [love, setLove] = useState(false);

  return (
    <div className="w-[406px] h-[401px] bg-[#EBFAEF] rounded-[32px] pt-[34px] px-6 pb-6 flex flex-col gap-2 items-center">
      <h1 className="text-slate-600 font-bold text-[24px]">{name}</h1>
      <div className="flex gap-[24px]">
        <div className="flex flex-col justify-between h-[300px]">
          <div className="flex flex-col gap-4">
            <div className="text-slate-600">{category}</div>
            <div className="w-[112px] h-[42px] rounded-[22px] bg-blue-normal flex items-center justify-center gap-[7px] cursor-pointer active:scale-95 transition-all duration-150">
              <h1 className="font-semibold text-white">Baca</h1>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-white size-[18px]"
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div
              onClick={() => setLike(!like)}
              className="bg-white size-12 rounded-[14px] flex justify-center items-center cursor-pointer active:scale-95 transition-all duration-150"
            >
              {like ? (
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-[28px] text-blue-800"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-[28px] text-black"
                />
              )}
            </div>
            <div
              onClick={() => setLove(!love)}
              className="bg-white size-12 rounded-[14px] flex justify-center items-center cursor-pointer active:scale-95 transition-all duration-150"
            >
              {love ? (
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-[28px] text-pink-800"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-[28px] text-black"
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-[210px] h-[300px] rounded-[32px] overflow-hidden">
          <img
            src={img}
            alt=""
            className="object-cover object-center size-full"
          />
        </div>
      </div>
    </div>
  );
};

const SectionPemasaran = () => {
  return (
    <section className="w-full h-[885px] py-[120px] bg-[#424B94] flex gap-[120px] px-[90.5px]">
      <div className="w-full max-w-[660px] flex flex-col">
        <div className="w-full max-w-[500px] h-[533px] relative overflow-hidden">
          <div className="size-[400px] bg-blue-light_active rounded-full absolute bottom-0 z-[0]"></div>
          <img src={pemasaran1} alt="" className="z-[1] absolute" />
          <img src={ornamen1} alt="" className="absolute top-0 right-0" />
        </div>
        <div className="h-[112px] w-[606px] bg-white px-7 rounded-[22px] shadow-md flex flex-col gap-[10px] justify-center">
          <div className="flex items-center gap-[10px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#3B82F6] text-[20px]"
            />
            <h1 className="text-[24px] tracking-[1px] text-slate-600">
              Akses artikel dan video dari para ahli.
            </h1>
          </div>
          <div className="flex items-center gap-[10px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#3B82F6] text-[20px]"
            />
            <h1 className="text-[24px] tracking-[1px] text-slate-600">
              Belajar kapan saja, di mana saja.
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[822px] w-full flex flex-col gap-5">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2 max-w-[435px] font-inter">
            <h1 className="text-white text-[36px] font-bold">Pemasaran</h1>
            <p className="text-white text-pretty">
              Lihat lebih banyak UMKM yang sudah tergabung bersama kami
            </p>
          </div>
          <Link className="flex items-center justify-center gap-3 px-5 py-3 text-white underline transition-all duration-300 hover:scale-105 active:scale-100">
            <p className="font-medium">Lebih Banyak</p>
            <FontAwesomeIcon icon={faArrowRight} className="text-[14px]" />
          </Link>
        </div>
        <div className="flex gap-5">
          <PemasaranCard
            name="Tutorial Posting Instagram"
            category="Artikel Lukisan"
            img={pemasaran2}
          />
          <PemasaranCard
            name="Tutorial Posting Instagram"
            category="Artikel Lukisan"
            img={pemasaran2}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionPemasaran;
