import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query getCharcters(
    $page: Int
    $name: String
    $gender: String
    $species: String
  ) {
    characters(
      page: $page
      filter: { name: $name, gender: $gender, species: $species }
    ) {
      results {
        id
        name
        gender
        species
        image
        location {
          name
        }
      }
      info {
        pages
      }
    }
  }
`;
