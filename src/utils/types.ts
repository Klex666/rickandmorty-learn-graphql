export interface IDataAllCharacter {
  id: string;
  name: string;
  gender: string;
  image: string;
}

export interface IButton {
  desc: string;
  onClick?: () => void;
}

export interface ICharacterFullCard {
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
  origin: {
    id: string;
    name: string;
    dimension: string;
  };
}
