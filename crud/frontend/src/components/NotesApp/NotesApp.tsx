import { deleteNote, getNotes, sendNote } from "@api/formApi";
import type { INote } from "@components/NotesApp";
import { NotesForm, NotesHeader, NotesList } from "@components/NotesApp";
import placeholders from "@data/placeholders.json";
import { useEffect, useState } from "react";
import "./NotesApp.scss";

/**
 * Основной компонент приложения заметок.
 * 
 * @description
 * Компонент отображает форму для создания новых заметок, список заметок
 * и заголовок страницы.
 */
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

  const updateNotesList = async () => {
    const notesData = await getNotes();
    setNotes(notesData);
    setTextareaValue('');
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await sendNote(formData);

    if (response) {
      setNotes([...notes, response]);
      setTextareaValue('');
    }
  };

  const onDelete = async (id: number) => {
    if (!window.confirm("Вы действительно хотите удалить заметку?")) return;

    const isDeleted = await deleteNote(id);
    if (!isDeleted) return;

    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="notes-app">
      <div className="container">
        <NotesHeader updateHandler={updateNotesList} />
        <NotesList itemAttrs={{ onDelete }} notes={notes} />
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
