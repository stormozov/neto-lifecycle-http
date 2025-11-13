import { useState } from "react";
import { WorldClockForm } from "@/components/WorldClockApp";

/**
 * Интерфейс, описывающий свойства компонента AddClockForm
 */
export interface IAddClockFormProps {
  onAdd: (city: string, offset: number) => void;
}

/**
 * Компонент для добавления нового часового пояса
 */
const AddClockForm: React.FC<IAddClockFormProps> = ({ onAdd }) => {
  const [city, setCity] = useState<string>('');
  const [offset, setOffset] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() && offset) {
      onAdd(city.trim(), parseFloat(offset));
      setCity('');
      setOffset('');
    }
  };

  const handleSubmitBtnVisibility = () => city.trim() && offset ? true : false;

  return (
    <WorldClockForm handleSubmit={handleSubmit}>
      <WorldClockForm.InputGroup
        label="Название"
        inputProps={{
          id: "city",
          type: "text",
          value: city,
          placeholder: "Напр., Москва",
          autoComplete: "off",          
          required: true,
          onChange: (e) => setCity(e.target.value),
        }}
      />
      
      <WorldClockForm.InputGroup
        label="Смещение UTC (часы)"
        inputProps={{
          id: "offset",
          type: "number",
          step: "0.5",
          value: offset,
          placeholder: "Напр., 3",
          autoComplete: "off",
          min: -12,
          max: 14,
          required: true,
          onChange: (e) => setOffset(e.target.value),
        }}
      />
      
      <WorldClockForm.Actions>
        <button 
          type="submit" 
          className="btn add-clock-btn"
          disabled={!handleSubmitBtnVisibility()}
        >
          Добавить часы
        </button>
      </WorldClockForm.Actions>
    </WorldClockForm>
  );
};

export default AddClockForm;
