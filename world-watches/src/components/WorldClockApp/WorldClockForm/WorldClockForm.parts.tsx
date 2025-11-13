/**
 * Интерфейс, описывающий свойства компонента WorldClockFormInputGroup
 */
interface IWorldClockFormInputGroupProps {
  label?: string | null;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Компонент WorldClockFormInputGroup
 * 
 * @description
 * Интерфейс отображает группу для формы, содержащую label и input
 */
export const WorldClockFormInputGroup = ({ 
  label = null,
  inputProps = {}
}: IWorldClockFormInputGroupProps) => {
  return (
    <div className="world-clock-form__input-group">
      {label && (
        <label 
          className="world-clock-form__label"
          htmlFor={inputProps.id}
        >
          {label}
          {inputProps.required && (
            <span 
              className="world-clock-form__required" 
              title="Обязательное поле"
            >
              *
            </span>
          )}
        </label>
      )}
      <input 
        type="text" 
        className="world-clock-form__input" 
        {...inputProps}
      />
    </div>
  )
}

/**
 * Интерфейс, описывающий свойства компонента WorldClockFormActions
 */
interface IWorldClockFormActionsProps {
  children: React.ReactNode;
}

/**
 * Компонент WorldClockFormActions
 * 
 * @description
 * Интерфейс отображает дополнительные действия для формы
 */
export const WorldClockFormActions = ({ 
  children 
}: IWorldClockFormActionsProps) => {
  return <div className="world-clock-form__actions">{children}</div>
}
