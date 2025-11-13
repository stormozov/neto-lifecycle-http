import React from "react";
import { getHourAngle, getMinuteAngle, getSecondAngle } from "./utils";
import "./AnalogClock.scss";

/**
 * Интерфейс, описывающий свойства компонента AnalogClock
 */
export interface AnalogClockProps {
  time: Date;
}

/**
 * Компонент для отображения аналоговых часов
 * 
 * @description
 * Отображает аналоговые часы со стрелками для часов, минут и секунд
 */
const AnalogClock: React.FC<AnalogClockProps> = ({ time }) => {
  const hourAngle = getHourAngle(time);
  const minuteAngle = getMinuteAngle(time);
  const secondAngle = getSecondAngle(time);

  return (
    <div className="analog-clock" role="img" aria-label="Аналоговые часы">
      <div className="analog-clock__face">
        {/* Деления для часов */}
        {[...Array(12)].map((_, i) => (
          <React.Fragment key={`hour-marker-${i}`}>
            <div 
              className="analog-clock__marker analog-clock__marker--hour"
              style={{ 
                transform: `rotate(${i * 30}deg) translate(0, -50%)`,
                transformOrigin: '0 50%'
              }}
            />
            {i % 3 === 0 && (
              <span 
                className="analog-clock__number"
                style={{ 
                  transform: `rotate(${-i * 30}deg) translate(0, -80%)`,
                  transformOrigin: '0 50%'
                }}
              >
                {i || 12}
              </span>
            )}
          </React.Fragment>
        ))}
        
        {/* Часовая стрелка */}
        <div 
          className="analog-clock__hand analog-clock__hand--hour"
          style={{ transform: `rotate(${hourAngle}deg)` }}
        />
        
        {/* Минутная стрелка */}
        <div 
          className="analog-clock__hand analog-clock__hand--minute"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
        />
        
        {/* Секундная стрелка */}
        <div 
          className="analog-clock__hand analog-clock__hand--second"
          style={{ transform: `rotate(${secondAngle}deg)` }}
        />
        
        {/* Центральная точка */}
        <div className="analog-clock__center" />
      </div>
    </div>
  );
};

export default AnalogClock;
