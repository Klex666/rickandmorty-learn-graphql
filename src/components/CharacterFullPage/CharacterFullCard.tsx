import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ICharacterFullCard } from '../../utils/types';
import styles from './CharacterFullCard.module.scss';

const CharacterFullCard: React.FC<ICharacterFullCard> = ({
  status,
  species,
  type,
  gender,
  image,
  created,
  origin,
}) => {
  const { currentData } = useTypedSelector((store) => store.readMoreSlice);

  return (
    <div className={styles.CharacterFullCard}>
      <img className={styles.CardImage} src={image}></img>
      <p className={styles.Name}>{currentData.name}</p>
      <p className={styles.Name}>Gender: {gender}</p>
      <p className={styles.Name}>Status: {status}</p>
      <p className={styles.Name}>Type: {type}</p>
      <p className={styles.Name}>Species: {species}</p>
      <p className={styles.Name}>Origin: {origin.name}</p>
    </div>
  );
};

export default CharacterFullCard;
