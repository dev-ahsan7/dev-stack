import { ToastContainer } from 'react-toastify';
import Nav from './Components/Nav';
import HeroBanner from './Components/HeroBanner';

function App() {
  return (
    <>
      <Nav />
      <HeroBanner />
      <ToastContainer />
    </>
  );
}

export default App;
