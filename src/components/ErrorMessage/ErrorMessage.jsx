import css from '../ErrorMessage/ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p>There was an error, please reload the page</p>
    </div>
  );
}
