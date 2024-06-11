"use client";
import useStore from "@/@store";
import GroupItem from "./GroupItem";
function GroupList() {
  const { groups } = useStore();
  return (
    <div className="flex flex-wrap gap-3 w-full  mt-4">
      {groups.length < 0 ? (
        <div className="">No groups found create more groups...</div>
      ) : (
        groups.map((group, index) => {
          return (
            <GroupItem
              key={index}
              id={group.id}
              name={group.name}
              description={group.description}
              createdAt={group.createdAt}
            />
          );
        })
      )}
    </div>
  );
}
export default GroupList;
