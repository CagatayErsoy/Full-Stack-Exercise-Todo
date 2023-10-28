type Todos = {
  id:number;
  task: string;
  completed: boolean;
  notes: string;
};
export type {Todos}

const Tododb: Todos[] = [
  { id:1 ,task: "go gym", completed: false, notes: " time 8.30"  },
  { id:2, task: "React exercise finish", completed: false, notes: " Today" },
  { id:3, task: "Amazon return", completed: false, notes: " Today" },
];
export default Tododb;
