import styles from './CardsList.module.scss';
import CharacterCard from '../CharacterCard/CharacterCard';

import { useQuery } from '@apollo/client';
import { ALL_CHARACTERS } from '../../apollo/requests/charactersRequest';
import Spinner from '../../utilsComponents/Spinner/Spinner';

import { IDataAllCharacter } from '../../utils/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const CardsList = () => {
  const { page } = useTypedSelector((store) => store.pagesSlice);

  const { loading, error, data } = useQuery(ALL_CHARACTERS, {
    variables: { page: page },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  return (
    <>
      <section className={styles.CardsList}>
        {data?.characters.results.map((data: IDataAllCharacter) => {
          return (
            <CharacterCard
              key={data.id}
              id={data.id}
              name={data.name}
              gender={data.gender}
              image={data.image}
            />
          );
        })}
      </section>
    </>
  );
};

export default CardsList;
