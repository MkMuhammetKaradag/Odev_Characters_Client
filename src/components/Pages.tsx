import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../context/hooks";
import { useCharacter } from "../hooks/graphql/characters/getCharacter";
import { Pagination } from "flowbite-react";
import { setInfo } from "../context/RickAndMorty/RickAndMortySlice";
const Pages = () => {
  const result = useAppSelector((state) => state.app.characters);
  const filterChange = useAppSelector((state) => state.app.filter);
  const page = useAppSelector((state) => state.app.page);
  const dispatch = useAppDispatch();
  const { characters, error, info, loading } = useCharacter({
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
