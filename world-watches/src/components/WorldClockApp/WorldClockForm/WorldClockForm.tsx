import {
  WorldClockFormActions,
  WorldClockFormInputGroup
} from "./WorldClockForm.parts";
import "./WorldClockForm.scss";

/**
 * Интерфейс, описывающий свойства компонента WorldClockForm
 */
interface IWorldClockFormProps {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent) => void
}

/**
 * Компонент WorldClockForm
 * 
 * @description
 * Интерфейс отображает форму для создания нового часового пояса
 */
const WorldClockForm = ({ children, handleSubmit }: IWorldClockFormProps) => {  
  return (
    <form onSubmit={handleSubmit} className="world-clock-form">{children}</form>
  )
}

WorldClockForm.InputGroup = WorldClockFormInputGroup;
WorldClockForm.Actions = WorldClockFormActions;

export default WorldClockForm;
