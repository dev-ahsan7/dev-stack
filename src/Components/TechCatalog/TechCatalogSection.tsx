import { use, useState } from 'react';
import type { TechnologyTypes } from '../../Types/TechnologyTypes';
import TechGrids from './TechGrids';
import { toast, ToastContainer } from 'react-toastify';
import StackSidebar from './StackSidebar';

interface TechCatalogSectionProps {
  technologyPromise: Promise<TechnologyTypes[]>;
}

const TechCatalogSection = ({ technologyPromise }: TechCatalogSectionProps) => {
  const technology = use(technologyPromise);
  // console.log(technology);
  const [stack, setStack] = useState<TechnologyTypes[]>([]);

  // Add to Stack Handler
  const addToStack = (tech: TechnologyTypes) => {
    const alreadyAdded = stack.some((t) => t.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  // Remove Handler
  const removeFromStack = (id: string) => {
    const removeTech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (removeTech) {
      toast.info(`${removeTech.name} remove from your stack.`);
    }
  };

  // Remove all handler
  const removeAll = () => {
    setStack([]);
    toast.info('Stack cleared.');
  };

  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="">
        <h2 className="font-['Inter'] font-extrabold text-[36px]  align-middle">
          <span className="text-gray-900">Explore the </span>
          <span className="bg-[linear-gradient(90deg,#EC4899_0%,#8B5CF6_100%)] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-3 font-['Plus_Jakarta_Sans'] font-normal text-[16px] align-middle text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <TechGrids technology={technology} stack={stack} onAdd={addToStack} />

        <div className="lg:sticky lg:top-6">
          <StackSidebar
            stack={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default TechCatalogSection;
