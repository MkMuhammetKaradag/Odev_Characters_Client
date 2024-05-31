import { useEffect } from "react";
import Card from "./Card";

import { useAppDispatch, useAppSelector } from "../context/hooks";
import { useCharacter } from "../hooks/graphql/characters/getCharacter";

import { setInfo } from "../context/RickAndMorty/RickAndMortySlice";
const Pages = () => {
  
  const filterChange = useAppSelector((state) => state.app.filter);
  const page = useAppSelector((state) => state.app.page);
  const dispatch = useAppDispatch();
  const { characters, info } = useCharacter({
    gender: filterChange.gender,
    name: filterChange.name,
    species: filterChange.species,
    page: page,
  });

  useEffect(() => {
    if (info?.pages) {
      dispatch(
        setInfo({
          info: {
            pages: info?.pages,
          },
        })
      );
    }
  }, [info]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {characters &&
        characters.map((item, index) => (
          <Card
            image={item?.image}
            species={item?.species}
            name={item?.name}
            location={item?.location?.name}
            key={index}
          ></Card>
        ))}
    </div>
  );
};

export default Pages;
