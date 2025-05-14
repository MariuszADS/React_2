
import SmallLogo from '../Components/SmallLogo';
import Navbar_white from '../Components/Navbar_white';
import Footer from '../Components/Footer';
import { miejsca } from '../data/miejsca';
import Miejsce from '../Components/Miejsce';
import '../App.css'

const Miejsca_warte_uwagi = () => {
  return (
    <div className="linear-gradient">
      <SmallLogo />
      <Navbar_white />
      <h3 className="main_header">
        Miejsca warte uwagi w Oslo, które warto odwiedzić:</h3>
      <div className="flex-container-miejsca">
        {miejsca.map((miejsce, index) => (
          <Miejsce key={index} miejsce={miejsce} />
        ))}
        
      </div>
      <Footer />
    </div>
  );
};

export default Miejsca_warte_uwagi;
