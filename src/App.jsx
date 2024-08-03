import Navbar from './components/ui/navbar/navbar';
import Footer from './components/ui/footer';
import Routers from './Routers/Routers';

function App() {
  return (
    <div className="flex flex-col gap-[60px] items-center w-full">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
