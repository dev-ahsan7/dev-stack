import { IoCloseOutline } from 'react-icons/io5';
import type { TechnologyTypes } from '../../Types/TechnologyTypes';

interface StackSidebarProps {
  stack: TechnologyTypes[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <aside className="w-full mt-10 md:w-72 shrink-0 bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
      <h3 className="text-2xl font-bold text-gray-900">Your Stack</h3>
      <p className="mt-1 text-base text-gray-400">
        {stack.length === 0
          ? 'No technologies selected yet.'
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 border border-dashed border-gray-200 rounded-xl py-8 text-center text-sm text-gray-400">
          Your Stack is empty
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 mt-6">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 border border-gray-100 rounded-xl p-4"
              >
                <img src={tech.icon} className="w-8 h-8" />
                <div className="flex-1">
                  <strong className="block text-sm font-semibold text-gray-900">
                    {tech.name}
                  </strong>
                  <span className="text-xs text-gray-400">{tech.category}</span>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <IoCloseOutline className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-6 py-3 rounded-xl border border-red-200 text-red-500 text-sm font-semibold hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default StackSidebar;
