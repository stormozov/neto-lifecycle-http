import type { INote } from "@components/NotesApp";

const URL = "http://localhost:7070";

/**
 * Получает все заметки с сервера
 */
export const getNotes = async (): Promise<INote[]> => {
  try {
    const response = await fetch(`${URL}/notes`);
    if (response.status !== 200) throw new Error(response.statusText);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return [];
  }
};

/**
 * Отправляет POST запрос на сервер с данными формы
 */
export const sendForm = async (data: FormData): Promise<INote | null> => {
  try {
    const response = await fetch(`${URL}/notes`, {
      method: "POST",
      body: data,
    });
    if (response.status !== 201) throw new Error(response.statusText);
    return await response.json();
  } catch (error) {
    console.error("Failed to send form:", error);
    return null;
  }
};
