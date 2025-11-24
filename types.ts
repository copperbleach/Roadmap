
export enum TaskType {
  Discussion = 'Discussion',
  Peer = 'Peer',
  Assignment = 'Assignment',
  Quiz = 'Quiz',
}

export interface Task {
  id: string;
  number: string;
  type: TaskType;
  name:string;
}

export interface Week {
  weekNumber: number;
  cactusImage: string;
  tasks: Task[];
  date: string;
}
