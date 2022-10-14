import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getNoteListItems } from "~/models/note.server";
import Header from "~/components/header";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";


export async function loader ({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
};

export default function NotesPage() {
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main className="flex justify-center h-full bg-white">

        <div className="py-20">
          Welcome {user.email}
        </div>

      </main>
    </div>
  );
}
