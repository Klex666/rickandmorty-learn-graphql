import { useQuery } from '@apollo/client';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './CharacterPage.module.scss';
import { ONE_CHARACTER } from '../../apollo/requests/charactersRequest';
import CharacterFullCard from '../../components/CharacterFullPage/CharacterFullCard';
import Spinner from '../../utilsComponents/Spinner/Spinner';
import Button from '../../utilsComponents/Button/Button';
import { Link } from 'react-router-dom';

const CharacterPage = () => {
  const { currentData } = useTypedSelector((store) => store.readMoreSlice);

  const { loading, error, data } = useQuery(ONE_CHARACTER, {
    variables: { id: currentData.id },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <section className={styles.CharacterPage}>
        <Link to={'/'}>
          <Button desc="Back" />
        </Link>
        <CharacterFullCard
          status={data.character.status}
          species={data.character.species}
          type={data.character.type}
          gender={data.character.gender}
          image={data.character.image}
          created={data.character.created}
          origin={data.character.origin}
        />
      </section>
    </>
  );
};

export default CharacterPage;
