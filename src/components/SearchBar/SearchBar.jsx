import toast from 'react-hot-toast';
import css from '../SearchBar/SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    onSubmit(form.elements[0].value);
    if (form.elements[0].value === '') {
      toast.error('Enter the value');
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
