import css from '../Loader/Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="slateblue"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperClass={css.loader}
    />
  );
}
