import { deleteAllNotes, deleteNote, getNotes, sendNote } from "@api/formApi";
import type { DeleteNoteAction, INote } from "@components/NotesApp";
import { NotesForm, NotesHeader } from "@components/NotesApp";
import placeholders from "@data/placeholders.json";
import { useEffect, useState } from "react";
import "./NotesApp.scss";
import NotesListView from "./NotesList/NotesListView";

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

  const handleDelete = async (action: DeleteNoteAction, id?: number) => {
    if (notes.length === 0) return;

    const isSingle = action === "single";

    const confirmMessage = isSingle
      ? "Вы действительно хотите удалить заметку?"
      : "Вы действительно хотите удалить все заметки?";

    if (!window.confirm(confirmMessage)) return;

    const isDeleted = isSingle
      ? await deleteNote(id!)
      : await deleteAllNotes();

    if (!isDeleted) return;

    setNotes((prev) => isSingle ? prev.filter((note) => note.id !== id) : []);
  };

  return (
    <div className="notes-app">
      <div className="container">
        <NotesHeader 
          notesLength={notes.length}
          updateHandler={updateNotesList} 
          handleDelete={handleDelete}
        />
        <NotesListView itemAttrs={{ handleDelete }} notes={notes} />
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
