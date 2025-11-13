/**
 * Рассчитывает угол часовой стрелки
 * 
 * @param {Date} date - Объект Date
 * @returns {number} угол в градусах
 */
export const getHourAngle = (date: Date): number => {
  const hours = date.getUTCHours() % 12;
  const minutes = date.getUTCMinutes();
  return (hours * 30) + (minutes * 0.5); // 30° на час + 0.5° на минуту
};

/**
 * Рассчитывает угол минутной стрелки
 * 
 * @param {Date} date - Объект Date
 * @returns {number} угол в градусах
 */
export const getMinuteAngle = (date: Date): number => {
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  return (minutes * 6) + (seconds * 0.1); // 6° на минуту + 0.1° на секунду
};

/**
 * Рассчитывает угол секундной стрелки
 * 
 * @param {Date} date - Объект Date
 * @returns {number} угол в градусах
 */
export const getSecondAngle = (date: Date): number => {
  return date.getUTCSeconds() * 6; // 6° на секунду
};
