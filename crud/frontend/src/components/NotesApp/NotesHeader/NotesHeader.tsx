import { GrUpdate } from "react-icons/gr";
import "./NotesHeader.scss";
import type { FC } from "react";

/**
 * Интерфейс, описывающий пропсы компонента NotesHeader
 */
export interface INotesHeaderProps {
  updateHandler: () => void;
}

/**
 * Компонент, отображающий шапку приложения NotesApp
 */
const NotesHeader: FC<INotesHeaderProps> = ({ updateHandler }) => {
  return (
    <header className="notes-header">
        <h1>Notes App</h1>
        <div className="notes-header__actions">
          <button 
            type="button"
            className="notes-header__btn"
            title="Обновить список заметок"
            aria-label="Обновить список заметок"
            onClick={updateHandler}
          >
            <GrUpdate />
          </button>
        </div>
      </header>
  )
}

export default NotesHeader;
