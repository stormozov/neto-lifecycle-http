import { useEffect, useState, type FC } from "react";
import { IoSend } from "react-icons/io5";
import "./NotesForm.scss";

/**
 * Интерфейс, описывающий пропсы компонента NotesForm
 */
export interface INotesFormProps {
  placeholders: string[];
}

/**
 * Компонент NotesForm, отображающий форму для создания новых заметок
 */
const NotesForm: FC<INotesFormProps> = ({ placeholders }) => {
  const [textareaValue, setTextareaValue] = useState<string>('');
  const [
    currentPlaceholderIndex, setCurrentPlaceholderIndex
  ] = useState<number>(0);

  const PLACEHOLDER_INTERVAL = 3000;
  const PLACEHOLDER_LENGTH = placeholders.length;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDER_LENGTH);
    }, PLACEHOLDER_INTERVAL);

    return () => clearInterval(interval);
  }, [PLACEHOLDER_LENGTH]);

  const currentPlaceholder = placeholders[currentPlaceholderIndex];

  // Проверяем, пусто ли поле — тогда показываем кастомный placeholder
  const showPlaceholder = !textareaValue;

  return (
    <div className="notes-form-container">
      <form className="notes-form d-flex flex-align-end gap-4">
        <div className="notes-form__group notes-form__group--relative">
          <label className="notes-form__label" htmlFor="notes-textarea">
            Новая заметка *
          </label>

          <textarea
            className="notes-form__textarea"
            name="notes-textarea"
            id="notes-textarea"
            rows={2}
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            required
          ></textarea>

          {showPlaceholder && (
            <div className="notes-form__custom-placeholder">
              {currentPlaceholder}
            </div>
          )}
        </div>

        <div className="notes-form__actions">
          <button
            className="notes-form__button"
            type="submit"
            title="Сохранить заметку"
            disabled={!textareaValue}
          >
            <IoSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotesForm;
