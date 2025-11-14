import type { INote, INoteAttrs } from "@components/NotesApp";
import { NotesItem } from "@components/NotesApp";
import type { FC } from "react";
import "./NotesList.scss";

/**
 * Интерфейс, описывающий пропсы компонента NotesList
 */
export interface INotesListProps {
  itemAttrs: INoteAttrs;
  notes: INote[];
}

/**
 * Компонент NotesList, отображающий список заметок
 */
const NotesList: FC<INotesListProps> = ({ itemAttrs, notes }) => {
  const renderNotes = () => (
    notes.map((note) => (
      <li key={note.id} className="notes-list__item">
        <NotesItem attrs={itemAttrs} note={note} />
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
