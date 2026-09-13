import type { TechnologyTypes } from '../../Types/TechnologyTypes';
import TechCard from './TechCard';

interface TechGridsProps {
  technology: TechnologyTypes[];
  stack: TechnologyTypes[];
  onAdd: (tech: TechnologyTypes) => void;
}

const TechGrids = ({ technology, stack, onAdd }: TechGridsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
      {technology.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((t) => t.id === tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default TechGrids;
