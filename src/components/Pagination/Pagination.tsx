import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../../utilsComponents/Button/Button';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const { prevPage, nextPage } = useActions();
  const { page } = useTypedSelector((store) => store.pagesSlice);

  return (
    <header className={styles.Pagination}>
      <Button desc="Prev" onClick={prevPage} />
      <p className={styles.PageNumber}>{page}</p>
      <Button desc="Next" onClick={nextPage} />
    </header>
  );
};

export default Pagination;
