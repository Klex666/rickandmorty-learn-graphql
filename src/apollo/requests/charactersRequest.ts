import { gql } from '@apollo/client';

export const ALL_CHARACTERS = gql`
  query allCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
        count
      }
      results {
        id
        name
        gender
        image
      }
    }
  }
`;

export const ONE_CHARACTER = gql`
  query oneCharacter($id: ID!) {
    character(id: $id) {
      status
      species
      type
      gender
      image
      created
      origin {
        id
        name
        dimension
      }
    }
  }
`;
