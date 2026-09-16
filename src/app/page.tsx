import { Colophon } from "@/components/Colophon/Colophon";
import { Dispatches } from "@/components/Dispatches/Dispatches";
import { EditorLetter } from "@/components/EditorLetter/EditorLetter";
import { LeadStory } from "@/components/LeadStory/LeadStory";
import { Masthead } from "@/components/Masthead/Masthead";
import { SidebarGrid } from "@/components/SidebarGrid/SidebarGrid";
import { edition } from "@/content/edition";

export default function Home() {
  return (
    <main className="min-h-screen bg-newsprint px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl border-2 border-ink bg-newsprint px-4 py-8 shadow-lg md:px-8 md:py-12">
        <Masthead masthead={edition.masthead} />
        <LeadStory leadStory={edition.leadStory} />
        <Dispatches dispatches={edition.dispatches} />
        <SidebarGrid
          sidebarColumns={edition.sidebarColumns}
          nicknames={edition.nicknames}
          hebrewNicknames={edition.hebrewNicknames}
        />
        <EditorLetter editorLetter={edition.editorLetter} />
        <Colophon colophon={edition.colophon} />
      </div>
    </main>
  );
}
