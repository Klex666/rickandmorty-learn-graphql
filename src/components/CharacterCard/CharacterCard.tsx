import React from 'react';
import styles from './CharacterCard.module.scss';
import { IDataAllCharacter } from '../../utils/types';
import Button from '../../utilsComponents/Button/Button';
import { useActions } from '../../hooks/useActions';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const CharacterCard: React.FC<IDataAllCharacter> = ({ id, name, gender, image }) => {
  const { saveCurrentData } = useActions();
  const { currentData } = useTypedSelector((store) => store.readMoreSlice);

  return (
    <section className={styles.CharacterCard}>
      <img className={styles.ImageCard} src={image} alt="ImageCharacter"></img>
      <p>{name}</p>
      <p>{gender}</p>
      <div onClick={() => saveCurrentData({ id, name })}>
        <Link to={`/character/${currentData.id}/${currentData.name}`}>
          <Button desc="Read more" />
        </Link>
      </div>
    </section>
  );
};

export default CharacterCard;
