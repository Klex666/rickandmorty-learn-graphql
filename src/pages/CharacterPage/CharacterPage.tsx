import { useQuery } from '@apollo/client';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './CharacterPage.module.scss';
import { ONE_CHARACTER } from '../../apollo/requests/charactersRequest';

const CharacterPage = () => {
  const { currentData } = useTypedSelector((store) => store.readMoreSlice);

  const { loading, error, data } = useQuery(ONE_CHARACTER, {
    variables: { id: currentData.id },
  });

  return (
    <>
      <section>
        <p className={styles.Name}>{data?.character.name}</p>
      </section>
    </>
  );
};

export default CharacterPage;
