/**
 * Идентификатор часов, может быть числом или строкой.
 */
export type ClockId = number | string;

/**
 * Интерфейс, описывающий данные часов.
 */
export interface IClock {
  id: ClockId;
  city: string;
  offset: number;
}

/**
 * Интерфейс, добавляющий возможность удаления элемента.
 */
export interface IWithDelete {
  onDelete: (id: ClockId) => void;
}

/**
 * Интерфейс, описывающий свойства компонента WorldClock.
 */
export interface IWorldClockProps extends IWithDelete {
  clock: IClock;
}

/**
 * Интерфейс, описывающий состояние компонента WorldClock.
 */
export interface WorldClockState {
  time: Date;
}
