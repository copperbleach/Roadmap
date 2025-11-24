
import React, { useState, useRef, useEffect } from 'react';
import { ASSET_URLS, ROADMAP_DATA } from './constants';
import RoadmapItem from './components/RoadmapItem';
import { Week } from './types';

const App: React.FC = () => {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [currentWeek, setCurrentWeek] = useState<number>(1);

  const [playerX, setPlayerX] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const weekRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const targetWeekEl = weekRefs.current[currentWeek - 1];
    if (targetWeekEl) {
      const newX = targetWeekEl.offsetLeft + targetWeekEl.offsetWidth / 2;
      setPlayerX(newX);
      if (isInitialLoad) {
        setIsInitialLoad(false);
      }
    }
  }, [currentWeek]);

  const handleToggleComplete = (taskId: string) => {
    if (!completedTasks[taskId]) {
      const audio = new Audio('https://github.com/copperbleach/Course-Roadmap/raw/refs/heads/main/Dino%20Run%20Assets/bing-short.wav');
      audio.play();
    }
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const totalTasks = ROADMAP_DATA.reduce((acc, week) => acc + week.tasks.length, 0);

  const getTrophy = () => {
    if (completedCount >= totalTasks) {
      return ASSET_URLS.trophies.gold;
    }
    if (completedCount >= 16) {
      return ASSET_URLS.trophies.silver;
    }
    if (completedCount >= 14) {
      return ASSET_URLS.trophies.bronze;
    }
    return ASSET_URLS.trophies.stone;
  };

  return (
    <div className="bg-white min-h-screen w-full overflow-hidden flex flex-col select-none">
      <header className="text-center py-8 px-4">
        <h1 className="text-3xl text-gray-800">
          Unity Game Development Course Roadmap
        </h1>
      </header>
      
      <main className="w-full flex-grow flex items-center justify-center">
        <div className="relative w-full max-w-7xl h-[400px] bottom-[200px]">
          {/* Player */}
          <div
            className="absolute z-20"
            style={{
              left: 0,
              bottom: '-8px',
              transform: `translateX(${playerX}px)`,
              transition: isInitialLoad ? 'none' : 'transform 0.5s ease-in-out',
              opacity: playerX === 0 ? 0 : 1,
            }}
          >
            <div style={{ transform: 'translateX(-50%)', marginLeft: '-20px' }}>
              <img src={ASSET_URLS.player} alt="Player Dino" className="h-16 w-auto object-contain" />
            </div>
          </div>

          {/* Background Road */}
          <img
            src={ASSET_URLS.road}
            alt="Road background"
            className="absolute bottom-[-30px] left-0 w-full h-auto z-0"
          />

          {/* Content Layer */}
          <div className="absolute inset-0 z-10 flex items-end justify-between px-4 sm:px-6 lg:px-8">
            {/* Weeks and Tasks */}
            <div className="flex-grow flex items-end justify-between">
              {ROADMAP_DATA.map((week: Week) => (
                <div key={week.weekNumber} className="flex items-end gap-2 sm:gap-4 md:gap-6">
                  {/* Cactus and Week Title */}
                  <div
                    // FIX: The ref callback should not return a value. Changed from an expression body to a block body.
                    ref={el => { weekRefs.current[week.weekNumber - 1] = el; }}
                    className="text-center relative flex-shrink-0 transform translate-y-[30px] cursor-pointer"
                    onClick={() => setCurrentWeek(week.weekNumber)}
                  >
                    <p className="text-lg text-gray-800 mb-2">Week {week.weekNumber}</p>
                    <img
                      src={week.cactusImage}
                      alt={`Cactus for week ${week.weekNumber}`}
                      className={`h-24 w-auto object-contain transition-all duration-500 ${week.weekNumber > currentWeek ? 'grayscale' : ''}`}
                    />
                    <p className="text-sm text-gray-600 mt-1">{week.date}</p>
                  </div>
                  {/* Tasks */}
                  <div className="flex items-end gap-0 transform translate-y-[15px] ml-[-50px]">
                    {week.tasks.map(task => (
                      <RoadmapItem
                        key={task.id}
                        task={task}
                        isComplete={!!completedTasks[task.id]}
                        onToggle={handleToggleComplete}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Destination Trophy */}
            <div className="z-10 mb-[-10px] relative right-[-20px]">
              <img src={getTrophy()} alt="Destination Trophy" className="h-14 w-auto object-contain" />
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-6 px-4">
        <p className="text-gray-600 text-sm">
          Double click the icons to mark as done.
        </p>
      </footer>
    </div>
  );
};

export default App;
