import classnames from 'classnames';
import type { ButtonHTMLAttributes, FC, JSX } from 'react';

/**
 * Интерфейс, описывающий пропсы компонента NotesHeaderIconBtn
 */
export interface IconButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  title: string;
  ariaLabel?: string;
}

/**
 * Компонент, отображающий кнопку с иконкой в шапке приложения
 */
const NotesHeaderIconBtn: FC<IconButtonProps> = ({
  icon, // Чтобы можно было добавить только одну иконку
  title,
  ariaLabel,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      type="button"
      className={classnames("notes-header__btn", className)}
      title={title}
      aria-label={ariaLabel || title}
    >
      {icon}
    </button>
  );
};

export default NotesHeaderIconBtn;
