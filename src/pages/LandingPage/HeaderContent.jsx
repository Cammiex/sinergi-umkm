import img1 from '@/assets/images/landingpage-img1.png';
import img2 from '@/assets/images/landingpage-img2.png';
import ornament1 from '@/assets/icon/bg-ornament1.svg';

const HeaderContent = () => {
  return (
    <section className="w-[1654px] rounded-[44px] h-[835px] flex flex-col py-[72px] px-[50px] bg-blue-light relative">
      <div className="flex gap-[150px] items-center">
        <div className="flex flex-col justify-between py-9 h-[482px] max-w-[798px]">
          <h4 className="text-[18px] font-semibold text-[#445BA8]">
            #UMKM Bersinergi
          </h4>
          <h1 className="text-[44px] font-bold tracking-[1px] text-blue-normal">
            Bersama Membangun Usaha, Meningkatkan Kesejahteraan UMKM Indonesia
          </h1>
          <p className="text-slate-700 text-[18px]">
            Sinergi UMKM memberikan layanan Informasi dan Konsultasi Terbaik
            untuk Pengembangan UMKM Indonesia
          </p>
          <button className="w-fit h-[53px] px-20 py-[10px] bg-blue-normal rounded-[32px] text-white font-semibold hover:bg-blue-normal_hover active::bg-blue-normal_active active:scale-95 transition-all duration-100">
            Get Started
          </button>
        </div>
        <div className="w-[598px] h-[482px] rounded-[32px] relative">
          <img
            src={img1}
            alt=""
            className="object-cover object-center absolute rounded-[32px] z-[1]"
          />
          <div className="w-[390px] h-[266px] rounded-[32px] absolute top-[389px] right-[453px] overflow-hidden z-[2]">
            <img
              src={img2}
              alt=""
              className="object-cover object-center rounded-[32px]"
            />
          </div>
          <div className="w-[450px] h-[221px] border border-blue-normal rounded-3xl absolute z-[0] top-[461px] right-[221px]"></div>
          <div className="w-[434px] h-[96px] rounded-3xl bg-white shadow-md absolute z-20 bottom-[-117px] right-0 p-[10px] flex items-center justify-center gap-4">
            <div className="flex flex-col items-center w-[115px]">
              <h1 className="text-[24px] font-semibold text-slate-600">123</h1>
              <h2 className="text-[20px] font-medium text-slate-600">
                Total Client
              </h2>
            </div>
            <div className="flex flex-col items-center w-[140px]">
              <h1 className="text-[24px] font-semibold text-slate-600">200</h1>
              <h2 className="text-[20px] font-medium text-slate-600">
                Total Member
              </h2>
            </div>
            <div className="flex flex-col items-center w-[127px]">
              <h1 className="text-[24px] font-semibold text-slate-600">123</h1>
              <h2 className="text-[20px] font-medium text-slate-600">
                Total Review
              </h2>
            </div>
          </div>
        </div>
      </div>
      <img
        src={ornament1}
        alt=""
        className="w-[300px] h-[289px] absolute bottom-[-125px] left-[-76px]"
      />
    </section>
  );
};

export default HeaderContent;
