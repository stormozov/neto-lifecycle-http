import type { HandleNoteDelete } from "@components/NotesApp";
import type { FC } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "./NotesHeader.scss";
import NotesHeaderIconBtn from "./NotesHeaderIconBtn";

/**
 * Интерфейс, описывающий пропсы компонента NotesHeader
 */
export interface INotesHeaderProps {
  notesLength: number;
  updateHandler: () => void;
  handleDelete: HandleNoteDelete;
}

/**
 * Компонент, отображающий шапку приложения NotesApp
 */
const NotesHeader: FC<INotesHeaderProps> = ({ 
  notesLength,
  updateHandler, 
  handleDelete 
}) => {
  return (
    <header className="notes-header">
      <h1 className="notes-header__title">Notes App</h1>
      <div className="notes-header__actions">
        <NotesHeaderIconBtn 
          icon={<GrUpdate />}
          className="notes-header__btn--update"
          title="Обновить список заметок"
          onClick={updateHandler}
        >
        </NotesHeaderIconBtn>
        <NotesHeaderIconBtn 
          icon={<MdDelete />}
          className="notes-header__btn--delete-all"
          title="Удалить все заметки"
          onClick={() => handleDelete("all")}
          disabled={!notesLength}
        >
        </NotesHeaderIconBtn>
      </div>
    </header>
  )
}

export default NotesHeader;
