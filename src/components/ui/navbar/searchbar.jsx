import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  return (
    <div className="relative">
      {' '}
      <input
        className="h-[51px] w-[204px] rounded-[18px] py-[15px] bg-blue-50 text-[14px] font-medium pl-[42px] focus:outline-blue-light_active"
        placeholder="Search"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-[14px] top-[17px]"
      />
    </div>
  );
};

export default Searchbar;
