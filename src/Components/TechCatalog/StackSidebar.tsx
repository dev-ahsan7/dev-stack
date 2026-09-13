import { IoCloseOutline } from 'react-icons/io5';
import type { TechnologyTypes } from '../../Types/TechnologyTypes';

interface StackSidebarProps {
  stack: TechnologyTypes[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <aside className="w-full mt-10 md:w-72 shrink-0 bg-white border border-gray-200 rounded-xl p-5">
      <h3 className="text-lg font-semibold text-gray-900">Your Stack</h3>
      <p>
        {stack.length === 0
          ? 'No technologies selected yet.'
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 border border-dashed border-gray-200 rounded-lg py-8 text-center text-sm text-gray-400">
          Your Stack is empty
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 mt-4">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 border border-gray-200 rounded-lg p-3"
              >
                <img src={tech.icon} className="w-6 h-6" />
                <div className="flex-1">
                  <strong className="block text-sm font-medium text-gray-900">
                    {tech.name}
                  </strong>
                  <span className="text-xs text-gray-400">{tech.category}</span>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <IoCloseOutline className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 rounded-lg border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default StackSidebar;
