import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/NoteContext";
import { useContext } from "react";
import Controls from "../components/Controls";
const NotesPage = () => {
  const { notes, setNotes } = useContext(NoteContext);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} setNotes={setNotes} key={note.$id} />
      ))}
      <Controls />
    </div>
  );
};
export default NotesPage;
