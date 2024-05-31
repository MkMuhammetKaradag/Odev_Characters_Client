import { useQuery } from "@apollo/client";
import {
  GetCharctersQuery,
  GetCharctersQueryVariables,
} from "../../../gql/graphql";
import { GET_CHARACTERS } from "../../../graphql/queries/getCaracters";

interface useCharacterInterface {
  page: number;
  name: string;
  gender: string;
  species: string;
}

export function useCharacter({
  page,
  name,
  gender,
  species,
}: useCharacterInterface) {
  const { loading, error, data } = useQuery<
    GetCharctersQuery,
    GetCharctersQueryVariables
  >(GET_CHARACTERS, {
    variables: {
      page: page,
      species,
      gender,
      name,
    },
  });
  console.log(data);
  return {
    characters: data?.characters?.results,
    loading,
    error,
    info: data?.characters?.info,
  };
}
