import { useState } from 'react';

export default function useField(type, initialValue) {
  const [value, setValue] = useState(initialValue || '');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
}
