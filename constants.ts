
import { TaskType, Week } from './types';

export const ASSET_URLS = {
  road: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Road.png',
  player: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Dino.png',
  trophies: {
    stone: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Trophy-Stone.png',
    bronze: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Trophy-Bronze.png',
    silver: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Trophy-Silver.png',
    gold: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Trophy-Gold.png',
  },
  cactuses: [
    'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/1.png',
    'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/2.png',
    'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/3.png',
    'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/4.png',
    'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/5.png',
    'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/6.png',
  ],
  tasks: {
    [TaskType.Discussion]: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Coin.png',
    [TaskType.Peer]: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Star.png',
    [TaskType.Assignment]: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Gem.png',
    [TaskType.Quiz]: 'https://raw.githubusercontent.com/copperbleach/Course-Roadmap/refs/heads/main/Dino%20Run%20Assets/Ham.png',
  },
};

export const ROADMAP_DATA: Week[] = [
  {
    weekNumber: 1,
    cactusImage: ASSET_URLS.cactuses[0],
    date: 'Jan 2',
    tasks: [
      { id: '1.1.2', number: '1.1.2.', type: TaskType.Discussion, name: 'Development flow' },
      { id: '1.2.3', number: '1.2.3.', type: TaskType.Assignment, name: 'Try out Unity' },
      { id: '1.2.4', number: '1.2.4.', type: TaskType.Quiz, name: 'Quiz' },
    ],
  },
  {
    weekNumber: 2,
    cactusImage: ASSET_URLS.cactuses[1],
    date: 'Jan 9',
    tasks: [
      { id: '2.1.3', number: '2.1.3.', type: TaskType.Discussion, name: 'Analyze and share' },
      { id: '2.2.2', number: '2.2.2.', type: TaskType.Assignment, name: 'Build your levels' },
      { id: '2.2.3', number: '2.2.3.', type: TaskType.Discussion, name: 'Early Ideas' },
      { id: '2.2.4', number: '2.2.4.', type: TaskType.Peer, name: 'Early ideas review' },
    ],
  },
  {
    weekNumber: 3,
    cactusImage: ASSET_URLS.cactuses[2],
    date: 'Jan 16',
    tasks: [
      { id: '3.1.2', number: '3.1.2.', type: TaskType.Discussion, name: 'Pinboard' },
      { id: '3.2.3', number: '3.2.3.', type: TaskType.Assignment, name: 'Visual update' },
    ],
  },
  {
    weekNumber: 4,
    cactusImage: ASSET_URLS.cactuses[3],
    date: 'Jan 23',
    tasks: [
      { id: '4.1.1', number: '4.1.1.', type: TaskType.Discussion, name: 'Wrapper' },
      { id: '4.1.2', number: '4.1.2.', type: TaskType.Peer, name: 'Wrapper review' },
      { id: '4.1.5', number: '4.1.5.', type: TaskType.Assignment, name: 'Project submission 1' },
      { id: '4.1.6', number: '4.1.6.', type: TaskType.Assignment, name: 'Portfolio layout' },
    ],
  },
  {
    weekNumber: 5,
    cactusImage: ASSET_URLS.cactuses[4],
    date: 'Jan 30',
    tasks: [
      { id: '5.1.3', number: '5.1.3.', type: TaskType.Discussion, name: 'Coding with AI' },
      { id: '5.2.2', number: '5.2.2.', type: TaskType.Assignment, name: 'Project submission 2' },
      { id: '5.2.3', number: '5.2.3.', type: TaskType.Peer, name: 'Peet Playtest' },
    ],
  },
  {
    weekNumber: 6,
    cactusImage: ASSET_URLS.cactuses[5],
    date: 'Feb 6',
    tasks: [
      { id: '6.1.2', number: '6.1.2.', type: TaskType.Assignment, name: 'Publish your game' },
      { id: '6.1.3', number: '6.1.3.', type: TaskType.Assignment, name: 'Project submission 3' },
    ],
  },
];
