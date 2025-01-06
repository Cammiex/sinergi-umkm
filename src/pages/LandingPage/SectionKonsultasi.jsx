import { faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import consultant1 from '@/assets/images/consultant-img1.png';
import consultant2 from '@/assets/images/consultant-img2.png';
import consultant3 from '@/assets/images/consultant-img3.png';
import ornament3 from '@/assets/icon/bg-ornament3.png';

import PropTypes from 'prop-types';

const ConsultantCard = ({ name, job, img }) => {
  return (
    <div
      id="card"
      className="w-[302px] h-[406px] bg-white rounded-xl p-8 flex flex-col items-center shadow-md"
    >
      <div className="w-[215px] h-[227px] rounded overflow-hidden">
        <img
          src={img}
          alt=""
          className="object-cover object-center size-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-slate-700">{name}</h1>
          <h2 className="text-sm text-slate-400">{job}</h2>
        </div>
        <Link className="flex items-center text-[#1D4ED8] w-full justify-between">
          <a href="" className="font-semibold w-[182px]">
            Konsultasi Sekarang
          </a>
          <FontAwesomeIcon icon={faArrowRight} className="text-[18px]" />
        </Link>
      </div>
    </div>
  );
};

ConsultantCard.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  img: PropTypes.string,
};

const SectionKonsultasi = () => {
  return (
    <section className="w-full h-[887px] py-[120px] bg-[#DEE0F4] flex gap-[120px] justify-center">
      <div className="flex flex-col gap-5 max-w-[632px]">
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-4xl font-bold text-slate-600 font-inter">
            Konsultasi
          </h1>
          <div className="flex items-center justify-between w-full">
            <p className="text-slate-400 max-w-[375px]">
              Lihat lebih banyak UMKM yang sudah tergabung bersama kami
            </p>
            <Link className="flex items-center justify-center gap-3 px-5 py-3 text-[#2563EB]">
              <p className="font-medium">Lebih Banyak</p>
              <FontAwesomeIcon icon={faArrowRight} className="text-[14px]" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <ConsultantCard
            name="Noor Halimah Anjani"
            job="Analyst - Asia Group Advisors"
            img={consultant1}
          />
          <ConsultantCard
            name="Prof. Dr. Ir. M. Amin Aziz"
            job="Pendiri PINBUK Indonesia"
            img={consultant2}
          />
        </div>
        <button className="w-fit h-[53px] px-20 py-[10px] bg-blue-normal rounded-[32px] text-white font-semibold hover:bg-blue-normal_hover active::bg-blue-normal_active active:scale-95 transition-all duration-100">
          Get Started
        </button>
      </div>
      <div className="max-w-[606px] w-full flex flex-col">
        <div className="w-[500px] h-[535px] relative overflow-hidden">
          <div className="size-[400px] rounded-full bg-blue-light_active absolute bottom-[-26px] left-[50px]"></div>
          <img src={consultant3} alt="" className="z-[1] absolute" />
          <img
            src={ornament3}
            alt=""
            className="z-[2] absolute top-[0px] w-[126px] h-[143px] object-cover object-center"
          />
        </div>
        <div className="w-[606px] h-[112px] bg-white rounded-[22px] shadow-md z-[2] px-7 flex flex-col gap-[10px] justify-center">
          <div className="flex items-center gap-[10px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#3B82F6] text-[20px]"
            />
            <h1 className="text-[24px] tracking-[1px] text-slate-600">
              Umpan balik yang membangun.
            </h1>
          </div>
          <div className="flex items-center gap-[10px]">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#3B82F6] text-[20px]"
            />
            <h1 className="text-[24px] tracking-[1px] text-slate-600">
              Saran spesifik sesuai kebutuhan UMKM
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionKonsultasi;
