import { NotesList, type INote, type INoteAttrs } from "@components/NotesApp";
import type { FC } from "react";

/**
 * Интерфейс, описывающий пропсы компонента NotesListView
 */
export interface INotesListViewProps {
  itemAttrs: INoteAttrs;
  notes: INote[];
}

/**
 * Компонент, описывающий список заметок и их отображение
 */
const NotesListView: FC<INotesListViewProps> = ({ itemAttrs, notes }) => {
  return notes.length !== 0 ? (
    <NotesList itemAttrs={itemAttrs} notes={notes} />
  ) : (
    <div className="notes-empty">
      <p className="notes-empty__text">
        Ваш список заметок пуст. Пора добавить что-нибудь!
      </p>
    </div>
  )
};

export default NotesListView;
