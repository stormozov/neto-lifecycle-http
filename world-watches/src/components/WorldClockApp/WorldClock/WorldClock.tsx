import { calculateTimeForTimeZone, formatTime } from "@/utils/timeUtils";
import React from "react";
import "./WorldClock.scss";
import type { IWorldClockProps, WorldClockState } from "./types";

/**
 * Компонент для отображения одного элемента часов
 * 
 * @description
 * Компонент отображает элемент часов, управляет таймером для обновления 
 * времени, а также предоставляет возможность удаления часов.
 */
export default class WorldClock 
  extends React.Component<IWorldClockProps, WorldClockState> {
  private _timerId: number | null = null;
  private _intervalId: number = 1000;

  constructor(props: IWorldClockProps) {
    super(props);
    this.state = { time: calculateTimeForTimeZone(props.clock.offset) };
  }

  /**
   * Метод вызывается после монтирования компонента в DOM.
   */
  componentDidMount() {
    this.startTimer();
  }

  /**
   * Метод вызывается после обновления свойств компонента.
   */
  componentDidUpdate(prevProps: IWorldClockProps) {
    // Перезапускаем таймер при изменении временного пояса
    if (prevProps.clock.offset !== this.props.clock.offset) {
      this.stopTimer();
      this.startTimer();
    }
  }

  /**
   * Метод вызывается перед удалением компонента из DOM.
   */
  componentWillUnmount() {
    this.stopTimer();
  }

  /**
   * Метод, который запускает таймер
   */
  startTimer() {
    this.updateTime();
    this._timerId = window.setInterval(() => {
      this.updateTime();
    }, this._intervalId);
  }

  /**
   * Метод, который останавливает таймер
   */
  stopTimer() {
    if (!this._timerId) return;
    clearInterval(this._timerId);
    this._timerId = null;
  }

  /**
   * Метод, который обновляет время
   */
  updateTime = () => {
    const cityTime = calculateTimeForTimeZone(this.props.clock.offset);
    this.setState({ time: cityTime });
  };

  /**
   * Метод для рендеринга компонента
   */
  render() {
    const { clock, onDelete } = this.props;
    const { time } = this.state;

    return (
      <div className="clock-item">
        <div className="clock-item__content">
          <span className="clock-item__name">{clock.city}</span>
          <span className="clock-item__time-display">{formatTime(time)}</span>
        </div>
        <div className="clock-item__actions">
          <button 
            className="clock-item__delete-btn"
            onClick={() => onDelete(clock.id)}
            aria-label={`Удалить часы для ${clock.city}`}
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}
