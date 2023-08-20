import Header from "./components/Header";
import Layanan from "./components/Layanan";
import Navbar from "./components/Navbar";
import Tentang from "./components/Tentang";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Tentang />
      <Layanan />
    </div>
  );
};

export default App;
