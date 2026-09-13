import { ToastContainer } from 'react-toastify';
import Nav from './Components/Nav';
import HeroBanner from './Components/HeroBanner';
import Footer from './Components/Footer';
import type { TechnologyTypes } from './Types/TechnologyTypes';
import { Suspense } from 'react';
import TechCatalogSection from './Components/TechCatalog/TechCatalogSection';

const TechnologyFetch = async (): Promise<TechnologyTypes[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const technologyPromise = TechnologyFetch();
  return (
    <>
      <Nav />
      <HeroBanner />
      <ToastContainer />

      <Suspense
        fallback={
          <div className="text-3xl container max-w-7xl mx-auto px-4 md:px-8 py-10">
            Loading Data....
          </div>
        }
      >
        <TechCatalogSection technologyPromise={technologyPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
