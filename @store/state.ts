type Group = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
};
export type State = {
  groups: Group[];
  count: number;
  addGroup: (group: Group) => void;
  deleteGroup: (id: number) => void;
  editGroup: (id: number, updatedGroup: Partial<Group>) => void;
};
