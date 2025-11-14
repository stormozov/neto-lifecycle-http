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
export const sendNote = async (data: FormData): Promise<INote | null> => {
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

/**
 * Отправляет DELETE запрос на сервер по ID заметки
 */
export const deleteNote = async (id: number): Promise<boolean> => {
  try {
    const response = await fetch(`${URL}/notes/${id}`, { method: "DELETE" });
    if (response.status !== 204) throw new Error(response.statusText);
    return true;
  } catch (error) {
    console.error("Failed to delete note:", error);
    return false;
  }
};

/**
 * Отправляет DELETE запрос на сервер для удаления всех заметок
 */
export const deleteAllNotes = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${URL}/notes`, { method: "DELETE" });
    if (response.status !== 204) throw new Error(response.statusText);
    return true;
  } catch (error) {
    console.error("Failed to delete all notes:", error);
    return false;
  }
};
