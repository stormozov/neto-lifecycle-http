/**
 * Форматирует дату в строку времени в формате HH:MM:SS
 * 
 * @param {Date} date - Дата для форматирования
 * @returns {string} Строка времени в формате HH:MM:SS
 */
export const formatTime = (date: Date): string => {
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
};

/**
 * Рассчитывает время для указанного часового пояса
 * 
 * @param {number} offset - Смещение от UTC в часах
 * @param {Date} baseDate - Базовая дата (опционально, по умолчанию текущее 
 * время)
 * 
 * @returns {Date} Объект Date с временем в указанном часовом поясе
 */
export const calculateTimeForTimeZone = (
  offset: number,
  baseDate: Date = new Date()
): Date => {
  return new Date(baseDate.getTime() + offset * 3600000);
};

/**
 * Проверяет корректность смещения часового пояса
 * 
 * @param {number} offset - Смещение от UTC в часах
 * @returns {boolean} true, если смещение в допустимом диапазоне [-12, 14]
 */
export const isValidTimeZoneOffset = (offset: number): boolean => {
  return offset >= -12 && offset <= 14;
};

/**
 * Получает текущее время с учетом часового пояса
 * 
 * @param {number} offset - Смещение от UTC в часах
 * @returns {string} Отформатированная строка времени в формате HH:MM:SS
 */
export const getCurrentTimeForTimeZone = (offset: number): string => {
  const time = calculateTimeForTimeZone(offset);
  return formatTime(time);
};
