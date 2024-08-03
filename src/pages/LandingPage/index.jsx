import HeaderContent from './HeaderContent';
import SectionFiturSinergi from './SectionFiturSinergi';
import SectionKonsultasi from './SectionKonsultasi';

const index = () => {
  return (
    <main className="flex flex-col gap-[60px] w-full items-center">
      <HeaderContent />
      <SectionFiturSinergi />
      <SectionKonsultasi />
    </main>
  );
};

export default index;
