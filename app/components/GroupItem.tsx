"use client";
import useStore from "@/@store";
import { CircleUser, UserRound } from "lucide-react";
import React, { useState } from "react";
interface GroupItemProps {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}
function GroupItem({ id, name, description, createdAt }: GroupItemProps) {
  const { addGroup, groups, deleteGroup, editGroup, count } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpatedName] = useState(name);
  const [updatedDesc, setUpdatedDesc] = useState(description);
  // handleUpdate
  const handleUpdate = (e: any) => {
    e.preventDefault();
    setIsEditing(false);
    editGroup(id, { name: updatedName, description: updatedDesc });
  };
  return (
    <div className="border h-auto sm:h-[250px] rounded-md w-full  md:w-[48%] lg:w-[37%] p-3  relative">
      {isEditing ? (
        <form>
          <input
            type="text"
            className="border p-3 w-full rounded-sm"
            value={updatedName}
            onChange={(e) => setUpatedName(e.target.value)}
          />
          <textarea
            className="border w-full mt-5 p-3"
            value={updatedDesc}
            onChange={(e) => setUpdatedDesc(e.target.value)}
          ></textarea>
          <div className="flex flex-wrap justify-between mt-5 gap-5 w-full">
            <button
              className="border px-6 py-2 rounded-md"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="border px-6 py-2 rounded-md"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="">
              <div className="text-[20px] mb-2 font-bold capitalize	">
                {name}
              </div>
              <div className="mb-5 text-gray-600 ">{description}</div>
            </div>
            <div className="italic text-[#95787899]">
             {createdAt}
            </div>
          </div>

          <div className="flex  gap-2 ">
            {[1, 2, 4, 5].map((item, index) => {
              return <UserRound key={index} size={"30px"} />;
            })}
            <div className="bg-[#e3e3e359] rounded-full w-[34px] h-[34px] flex justify-center items-center ">
              +2
            </div>
          </div>

          <div className="flex justify-between sm:absolute bottom-7 mt-5 gap-5 w-full sm:w-[95%]">
            <button
              className="border px-6 py-2 rounded-md"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="border px-6 py-2 rounded-md"
              onClick={() => deleteGroup(id)}
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default GroupItem;
