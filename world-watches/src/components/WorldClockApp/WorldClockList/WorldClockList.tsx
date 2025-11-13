import type { IClock, IWithDelete } from "@/components/WorldClockApp";
import { WorldClock } from "@/components/WorldClockApp";
import classnames from "classnames";
import "./WorldClockList.scss";

/**
 * Интерфейс, описывающий свойства компонента WorldClockList
 */
export interface IWorldClockListProps extends IWithDelete {
  clocks: IClock[];
  classes?: string | string[];
}

/**
 * Компонент для отображения списка часов
 * 
 * @description
 * Компонент отображает список часов, которые были добавлены пользователем.
 * Если список пуст, отображается соответствующее сообщение.
 */
const WorldClockList: React.FC<IWorldClockListProps> = ({ 
  clocks, 
  classes, 
  onDelete 
}) => {
  const classList = classes instanceof Array ? classes : [classes];
  return (
    <ul className={classnames("clock-list", ...classList)}>
      {clocks.length === 0 ? (
        <li className="clock-list__item">
          <p className="empty-message">
            Нет добавленных часов. Добавьте часы через форму выше.
          </p>
        </li>
      ) : (
        clocks.map((clock) => (
          <li className="clock-list__item" key={clock.id}>
            <WorldClock clock={clock} onDelete={onDelete} />
          </li>
        ))
      )}
    </ul>
  );
};

export default WorldClockList;
