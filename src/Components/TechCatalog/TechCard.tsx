import { IoStar } from 'react-icons/io5';
import type { TechnologyTypes } from '../../Types/TechnologyTypes';

interface TechCardProps {
  tech: TechnologyTypes;
  isAdded: boolean;
  onAdd: (tech: TechnologyTypes) => void;
}

const BADGE_PALETTE = [
  { bg: 'bg-rose-50', text: 'text-rose-600' },
  { bg: 'bg-amber-50', text: 'text-amber-600' },
  { bg: 'bg-sky-50', text: 'text-sky-600' },
  { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  { bg: 'bg-violet-50', text: 'text-violet-600' },
];

const getBadgeColor = (label: string) => {
  let hash = 0;
  for (let i = 0; i < label.length; i++) {
    hash = label.charCodeAt(i) + ((hash << 5) - hash);
  }
  return BADGE_PALETTE[Math.abs(hash) % BADGE_PALETTE.length];
};

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
  const badgeColor = getBadgeColor(tech.badge);
  return (
    <div className="border border-gray-100 rounded-2xl p-5 flex flex-col gap-4">
      {/* Image & Badge */}
      <div className="flex items-center justify-between">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <span
          className={`text-[11.5px] font-semibold px-3 py-1.5 rounded-full border-gray-100 ${badgeColor.bg} ${badgeColor.text}`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Tittle & Deskcription */}

      <div className="flex flex-col gap-2">
        <h3 className="text-[18px] font-bold text-gray-900">{tech.name}</h3>
        <p className="text-sm text-gray-500">{tech.description}</p>
      </div>

      {/* Rating + Dificalty */}

      <div className="flex justify-between items-center gap-3 text-[11px] text-gray-500 border-t border-gray-100 pt-4">
        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md text-xs font-medium">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-medium text-gray-900">
          <span className="text-amber-400">
            <IoStar />
          </span>
          {tech.rating}
        </span>
      </div>

      <button
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`w-full py-3 text-sm rounded-lg font-semibold transition-colors ${isAdded ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-900 cursor-pointer  text-white hover:bg-gray'}`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;
