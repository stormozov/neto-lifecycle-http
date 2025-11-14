import type { INote } from "@components/NotesApp";
import { NotesItem } from "@components/NotesApp";
import type { FC } from "react";
import "./NotesList.scss";

/**
 * Интерфейс, описывающий пропсы компонента NotesList
 */
export interface INotesListProps {
  notes: INote[];
}

/**
 * Компонент NotesList, отображающий список заметок
 */
const NotesList: FC<INotesListProps> = ({ notes }) => {
  const renderNotes = () => (
    notes.map((note) => (
      <li key={note.id} className="notes-list__item">
        <NotesItem note={note} />
      </li>
    ))
  );

  const renderEmpty = () => (
    <li className="notes-list__item">
      <p className="notes-list__empty">
        Ваш список заметок пуст. Пора добавить что-нибудь!
      </p>
    </li>
  );

  return (
    <ul className="notes-list">
      {notes.length > 0 ? renderNotes() : renderEmpty()}
    </ul>
  );
};

export default NotesList;
