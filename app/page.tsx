import CreateForm from "@/app/components/Form";
import React from "react";
import GroupList from "./components/GroupList";

function page() {
  return (
    <div className="p-4">
    <div className="container mt-3">
      <CreateForm />
      <GroupList />
    </div>
  </div>
  );
}

export default page;
