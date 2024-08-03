import Button from '../button/button';
import Searchbar from './searchbar';
import logo from '../../../assets/images/app-icon.png';

const Navbar = () => {
  return (
    <header className="flex items-center justify-center w-full py-4 h-fit gap-[68px] text-blue-normal">
      <div className="flex items-center gap-[22px]">
        <img src={logo} alt="" className="w-[55px] h-[49px]" />
        <h1 className="text-[24px] font-semibold font-livvic uppercase tracking-[1px]">
          Sinergi UMKM
        </h1>
      </div>

      <nav className="flex items-center gap-12">
        <a
          href=""
          className="px-3 py-2 font-medium transition-all duration-300 rounded-full text-slate-600 size-fit hover:bg-slate-700/20 active:bg-slate-700/50"
        >
          Home
        </a>
        <a
          href=""
          className="px-3 py-2 font-medium transition-all duration-300 rounded-full text-slate-600 size-fit hover:bg-slate-700/20 active:bg-slate-700/50"
        >
          Pemodalan
        </a>
        <a
          href=""
          className="px-3 py-2 font-medium transition-all duration-300 rounded-full text-slate-600 size-fit hover:bg-slate-700/20 active:bg-slate-700/50"
        >
          Pemasaran
        </a>
        <a
          href=""
          className="px-3 py-2 font-medium transition-all duration-300 rounded-full text-slate-600 size-fit hover:bg-slate-700/20 active:bg-slate-700/50"
        >
          Konsultasi
        </a>
        <a
          href=""
          className="px-3 py-2 font-medium transition-all duration-300 rounded-full text-slate-600 size-fit hover:bg-slate-700/20 active:bg-slate-700/50"
        >
          Komunitas
        </a>
      </nav>
      <div className="flex items-center gap-[41px]">
        {' '}
        <Searchbar />
        <Button
          label={'Login'}
          className={
            'px-6 py-3 border border-blue-normal w-fit h-fit rounded-[50px] font-medium text-[18px] hover:bg-blue-normal_hover hover:text-white transition-all duration-200 active:bg-blue-normal_active'
          }
        />
        <Button
          label={'Sign Up'}
          className={
            'px-6 py-3 bg-blue-normal w-fit h-fit rounded-[50px] font-medium text-[18px] text-white hover:bg-white hover:text-blue-normal_hover hover:border-blue-normal transition-all duration-200 border'
          }
        />
      </div>
    </header>
  );
};

export default Navbar;
