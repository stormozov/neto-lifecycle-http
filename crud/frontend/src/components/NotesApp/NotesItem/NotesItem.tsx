import type { FC } from "react";
import { FaTimes } from "react-icons/fa";
import "./NotesItem.scss";
import type { INote, INoteAttrs } from "./types";

/**
 * Интерфейс, описывающий пропсы компонента NotesItem
 */
export interface INotesItemProps {
  attrs?: INoteAttrs;
  note: INote;
}

/**
 * Компонент NotesItem, отображающий одну заметку
 */
const NotesItem: FC<INotesItemProps> = ({ attrs, note }) => {
  return (
    <div className="note">
      <div className="note__content">
        <p className="note__text">{note.text}</p>
      </div>
      <div className="note__actions">
        <button 
          type="button"
          className="note__btn note__btn--delete"
          title="Удалить заметку"
          aria-label="Удалить заметку"
          onClick={() => attrs?.handleDelete("single", note.id)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  )
};

export default NotesItem;
