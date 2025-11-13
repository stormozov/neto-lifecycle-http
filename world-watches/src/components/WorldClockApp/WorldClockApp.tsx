import type { ClockId, IClock } from "@/components/WorldClockApp";
import { AddClockForm, WorldClockList } from "@/components/WorldClockApp";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./WorldClockApp.scss";

/**
 * Главный компонент приложения
 * 
 * @description
 * Компонент отображает форму для добавления часов и список добавленных часов.
 * Если часы отсутствуют, отображается соответствующее сообщение.
 */
const WorldClockApp = () => {
  const [clocks, setClocks] = useState<IClock[]>([]);

  const addClock = (city: string, offset: number) => {
    const newClock: IClock = { id: uuidv4(), city, offset };
    setClocks((prev) => [...prev, newClock]);
  };

  const deleteClock = (id: ClockId) => {
    setClocks((prev) => prev.filter((clock) => clock.id !== id));
  };
  
  return (
    <div className="world-clock-app">
      <div className="world-clock">
        <AddClockForm onAdd={addClock} />
        <WorldClockList clocks={clocks} onDelete={deleteClock} />
      </div>
    </div>
  )
}

export default WorldClockApp;
