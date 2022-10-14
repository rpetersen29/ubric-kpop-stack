import { Outlet } from "@remix-run/react";
import Header from "~/components/header";

export default function NotesPage() {

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main className="flex h-full bg-white">

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
