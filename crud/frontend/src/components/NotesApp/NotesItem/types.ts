/**
 * Тип для удаления заметки
 */
export type DeleteNoteAction = "single" | "all";

/**
 * Тип функции, обрабатывающий удаление заметки
 */
export type HandleNoteDelete = (action: DeleteNoteAction, id?: number) => void;

/**
 * Интерфейс, описывающий объект заметки
 */
export interface INote {
  id: number;
  text: string;
}

/**
 * Интерфейс, описывающий атрибуты для компонента NotesItem
 */
export interface INoteAttrs {
  handleDelete: HandleNoteDelete;
}
