import type { FC } from "react";
import { FaTimes } from "react-icons/fa";
import "./NotesItem.scss";

/**
 * Интерфейс, описывающий объект заметки
 */
export interface INote {
  id: number;
  text: string;
}

/**
 * Интерфейс, описывающий пропсы компонента NotesItem
 */
export interface INotesItemProps {
  note: INote;
}

/**
 * Компонент NotesItem, отображающий одну заметку
 */
const NotesItem: FC<INotesItemProps> = ({ note }) => {
  return (
    <>
      <div className="note-content">
        <p>{note.text}</p>
      </div>
      <div className="note-actions">
        <button className="note-delete"><FaTimes /></button>
      </div>
    </>
  )
};

export default NotesItem;
