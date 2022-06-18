import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ThemedSuspense from "../components/ThemedSuspense";

function Sub() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <main className="container mx-auto h-full overflow-y-auto px-6 pt-8 pb-36">
        <Suspense fallback={<ThemedSuspense />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Sub;
