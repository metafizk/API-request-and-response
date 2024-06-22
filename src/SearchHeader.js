import { useState } from 'react';

function SearchHeader({ search }) {
  const [value, setValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Search for images..." 
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchHeader;
