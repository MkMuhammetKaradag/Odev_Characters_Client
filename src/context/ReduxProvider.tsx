import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./RickAndMorty/RickAndMortySlice";
import { useQuery } from "@apollo/client";
import { GetCharctersQuery, GetCharctersQueryVariables } from "../gql/graphql";
import { GET_CHARACTERS } from "../graphql/queries/getCaracters";


interface ReduxProvider {
  children: React.ReactElement<any>;
}
const ReduxProvider = ({ children }: ReduxProvider) => {
  //AuthSlicer State Value
  const {  data } = useQuery<
    GetCharctersQuery,
    GetCharctersQueryVariables
  >(GET_CHARACTERS);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const reducer = {
    app: appReducer,
  };
  const store = configureStore({
    reducer: reducer,
    preloadedState: {
      app: {
        characters: data?.characters?.results || [],
        filter: { name: "", gender: "", species: "", location: "" },
        page: 1,
        info: data?.characters?.info || undefined,
      },
    },
  });
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
