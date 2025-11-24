import React from 'react';
import { ASSET_URLS } from '../constants';
import { Task } from '../types';

interface RoadmapItemProps {
  task: Task;
  isComplete: boolean;
  onToggle: (id: string) => void;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ task, isComplete, onToggle }) => {
  const iconUrl = ASSET_URLS.tasks[task.type];

  return (
    <div
      className="group relative flex flex-col items-center cursor-pointer scale-[0.8] origin-bottom"
      onDoubleClick={() => onToggle(task.id)}
    >
      {/* Task Number */}
      <p className="text-sm sm:text-base text-gray-800 mb-1 translate-y-2">{task.number}</p>
      
      {/* Task Icon */}
      <div
        className={`
          h-10 w-10 sm:h-12 sm:w-12
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${isComplete ? 'scale-110' : ''}
          group-hover:scale-110
        `}
      >
        <img
          src={iconUrl}
          alt={task.type}
          className={`
            w-full h-full
            object-contain 
            transition-all duration-300 ease-in-out
            ${isComplete ? 'grayscale-0' : 'grayscale'}
            group-hover:grayscale-0
          `}
        />
      </div>
      
      {/* Tooltip */}
      <div
        className="
          absolute bottom-full mb-3 px-3 py-1.5
          bg-white border-2 border-gray-800 rounded-lg
          text-gray-800 text-base whitespace-nowrap
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 pointer-events-none
          transform translate-y-2 group-hover:translate-y-0
        "
      >
        {task.name}
        <div className="absolute left-1/2 -bottom-2.5 transform -translate-x-1/2 w-0 h-0
          border-l-8 border-l-transparent
          border-r-8 border-r-transparent
          border-t-8 border-t-gray-800
        "></div>
         <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0
          border-l-[7px] border-l-transparent
          border-r-[7px] border-r-transparent
          border-t-[7px] border-t-white
        "></div>
      </div>
    </div>
  );
};

export default RoadmapItem;
