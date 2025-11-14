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
    <div className="note">
      <div className="note__content">
        <p className="note__text">{note.text}</p>
      </div>
      <div className="note__actions">
        <button className="note__btn note__btn--delete"><FaTimes /></button>
      </div>
    </div>
  )
};

export default NotesItem;
