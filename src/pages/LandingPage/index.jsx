import HeaderContent from './HeaderContent';
import SectionFiturSinergi from './SectionFiturSinergi';
import SectionKonsultasi from './SectionKonsultasi';
import SectionPemasaran from './SectionPemasaran';

const index = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <HeaderContent />
      <SectionFiturSinergi />
      <SectionKonsultasi />
      <SectionPemasaran />
    </main>
  );
};

export default index;
