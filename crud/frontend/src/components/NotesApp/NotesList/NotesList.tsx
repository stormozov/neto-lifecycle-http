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
  return (
    <ul className="notes-list">
      {notes.map((note) => (
        <li key={note.id} className="notes-list__item">
          <NotesItem attrs={itemAttrs} note={note} />
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
