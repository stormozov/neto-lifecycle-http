import "./NotesApp.scss";
import { NotesForm, NotesHeader, NotesList } from "@/components/NotesApp";
import placeholders from "@/data/placeholders.json";

const NotesApp = () => {
  return (
    <div className="notes-app">
      <div className="container">
        <NotesHeader />
        <NotesList />
        <NotesForm placeholders={placeholders} />
      </div>
    </div>
  )
};

export default NotesApp;
