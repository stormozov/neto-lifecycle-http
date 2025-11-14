import { useRotatingPlaceholder } from "@hooks/index";
import { type FC } from "react";
import { IoSend } from "react-icons/io5";
import "./NotesForm.scss";

/**
 * Интерфейс, описывающий пропсы компонента NotesForm
 */
export interface INotesFormProps {
  value: string;
  placeholders: string[];
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * Компонент NotesForm, отображающий форму для создания новых заметок
 */
const NotesForm: FC<INotesFormProps> = ({ 
  value: textareaValue,
  onChange,
  onSubmit, 
  placeholders 
}) => {
  const { 
    currentPlaceholder, showPlaceholder 
  } = useRotatingPlaceholder(placeholders);

  return (
    <div className="notes-form-container">
      <form 
        onSubmit={onSubmit} 
        className="notes-form d-flex flex-align-end gap-4"
      >
        <div className="notes-form__group notes-form__group--relative">
          <label className="notes-form__label" htmlFor="notes-textarea">
            Новая заметка *
          </label>

          <textarea
            className="notes-form__textarea"
            name="text"
            id="notes-textarea"
            rows={2}
            value={textareaValue}
            maxLength={500}
            onChange={(e) => onChange(e.target.value)}
            required
          ></textarea>

          {showPlaceholder(textareaValue) && (
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
