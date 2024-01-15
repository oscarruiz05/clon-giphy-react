import {useState} from 'react';
export default function Search({filterGif}) {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    filterGif(inputValue);
    setInputValue('');
  }

  const changeInput = ({target: {value}}) => {
    setInputValue(value);
  }

  return (
    <>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Buscar un gif"
        value={inputValue}
        onChange={changeInput}
      />
    </form>
    </>
  );
}
