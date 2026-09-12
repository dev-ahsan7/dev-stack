import { ToastContainer } from 'react-toastify';
import Nav from './Components/Nav';
import HeroBanner from './Components/HeroBanner';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Nav />
      <HeroBanner />
      <ToastContainer />

      <Footer />
    </>
  );
}

export default App;
