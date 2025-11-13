import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import "./WorldClockChange.scss";

/**
 * Тип отображения списка часов
 */
export type DisplayClockList = "list" | "grid";

/**
 * Интерфейс, описывающий свойства компонента WorldClockChange
 */
export interface IWorldClockChangeProps {
  displayType: DisplayClockList;
  changeDisplay: () => void;
}

/**
 * Компонент для переключения отображения списка часов
 */
const WorldClockChange: React.FC<IWorldClockChangeProps> = ({ 
  displayType, 
  changeDisplay 
}) => {
  return (
    <button 
      type="button" 
      className="world-clock-change-display" 
      aria-label="Переключить отображение списка часов"
      title="Переключить отображение списка часов"
      onClick={changeDisplay}
    >
      {displayType === "list" ? <FaThList /> : <BsFillGrid3X3GapFill />}
    </button>
  )
}

export default WorldClockChange;
