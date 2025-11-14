import { getNotes, sendForm } from "@api/formApi";
import type { INote } from "@components/NotesApp";
import { NotesForm, NotesHeader, NotesList } from "@components/NotesApp";
import placeholders from "@data/placeholders.json";
import { useEffect, useState } from "react";
import "./NotesApp.scss";

const NotesApp = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [textareaValue, setTextareaValue] = useState<string>('');

  useEffect(() => {
    const fetchNotes = async () => {
      const notesData = await getNotes();
      setNotes(notesData);
    };

    fetchNotes();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const response = await sendForm(formData);

    if (response) {
      setNotes([...notes, response]);
      setTextareaValue('');
    }
  };

  return (
    <div className="notes-app">
      <div className="container">
        <NotesHeader />
        <NotesList notes={notes} />
        <NotesForm
          value={textareaValue}
          placeholders={placeholders}
          onChange={setTextareaValue}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
};

export default NotesApp;
