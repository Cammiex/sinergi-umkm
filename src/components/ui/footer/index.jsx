import bg from '@/assets/images/footer-wave.svg';
import logo from '../../../assets/images/app-icon.png';
import {
  faInstagram,
  faYoutube,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const index = () => {
  return (
    <footer
      className="w-full h-[783px] bg-no-repeat bg-cover pt-[333px] pb-[62px] flex items-center justify-center mt-[100px]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex flex-col items-center w-[1296px] gap-[50.4px]">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-[19px]">
            <div className="flex items-center gap-[22px] py-[10px]">
              <img src={logo} alt="" className="w-[55px] h-[49px]" />
              <h1 className="text-[24px] text-white font-semibold font-livvic uppercase tracking-[1px]">
                Sinergi UMKM
              </h1>
            </div>
            <p className="text-white font-bold leading-[24px] max-w-[324px] text-left font-inter">
              Lorem ipsum dolor sit amet consectetur. Mi natoque tortor
              adipiscing vitae pellentesque vivamus amet cras viverra.{' '}
            </p>
            <p className="text-white font-bold leading-[24px] max-w-[324px] text-left font-inter">
              Jl. Trans Kalimantan KM.12, Sungai Lumbah Kalimantan Selatan 70582
            </p>
          </div>
          <div className="flex flex-col gap-[19px] font-inter text-left">
            <h1 className="font-bold text-[19px] text-white">Product</h1>
            <ul className="flex flex-col gap-[9.6px] text-white font-bold">
              <li>Kerajinan</li>
              <li>Fashion</li>
              <li>Interior</li>
              <li>Kuliner</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[19px] font-inter text-left">
            <h1 className="font-bold text-[19px] text-white">Features</h1>
            <ul className="flex flex-col gap-[9.6px] text-white font-bold">
              <li>Home</li>
              <li>Forum</li>
              <li>Konsultasi</li>
              <li>About</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[19.2px]">
            <h1 className="font-bold text-[19px] text-white text-left">
              Social Media
            </h1>
            <div className="flex items-center gap-[13px]">
              <div className="rounded-[9.6px] bg-[#1D4ED8] size-[38.4px] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white size-6"
                />
              </div>
              <div className="rounded-[9.6px] border-[0.24px] size-[38.4px] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white size-6"
                />
              </div>
              <div className="rounded-[9.6px] border-[0.24px] size-[38.4px] flex items-center justify-center">
                {' '}
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-white size-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.6px] bg-white"></div>
        <h1 className="text-white font-inter font-bold text-[14.4px] self-end">
          © 2024 Sinergi UMKM dev - All Right Reserved
        </h1>
      </div>
    </footer>
  );
};

export default index;
