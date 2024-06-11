import { create } from "zustand";
import { State } from "./state";

const initialGroups = [
  {
    id: 1,
    name: "Group 1",
    description: "Description for Group 1",
    createdAt: new Date().toLocaleDateString("en-US"),
  },
  {
    id: 2,
    name: "Group 2",
    description: "Description for Group 2",
    createdAt: new Date().toLocaleDateString("en-US"),
  },
  {
    id: 3,
    name: "Group 3",
    description: "Description for Group 3",
    createdAt: new Date().toLocaleDateString("en-US"),
  },
  {
    id: 4,
    name: "Group 4",
    description: "Description for Group 4",
    createdAt: new Date().toLocaleDateString("en-US"),
  },
  {
    id: 5,
    name: "Group 5",
    description: "Description for Group 5",
    createdAt: new Date().toLocaleDateString("en-US"),
  },
  {
    id: 6,
    name: "Group 6",
    description: "Description for Group 6",
    createdAt: new Date().toLocaleDateString("en-US"),
  },
];

const useStore = create<State>((set) => ({
  groups: [...initialGroups],
  count: 0,
  addGroup: (group) => set((state) => ({ groups: [...state.groups, group] })),
  deleteGroup: (id) =>
    set((state) => ({
      groups: state.groups.filter((group) => group.id !== id),
    })),
  editGroup: (id, updatedGroup) =>
    set((state) => ({
      groups: state.groups.map((group) =>
        group.id === id ? { ...group, ...updatedGroup } : group
      ),
    })),
}));

export default useStore;
