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
