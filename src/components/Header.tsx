import React from "react";
import { useAppDispatch } from "../context/hooks";
import { setFilter } from "../context/RickAndMorty/RickAndMortySlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const addFilter = (key: string, val: string) => {
    dispatch(setFilter({ key, val }));
  };
  return (
    <header className="bg-hero w-full  min-h-96 bg-no-repeat bg-cover bg-center flex  justify-center items-center flex-col">
      <h1 className="flex text-5xl mt-28 text-white">Wubba Lubba Dub Dub.</h1>
      <form className="max-w-max mx-auto mt-4 flex ">
        <div className="relative flex  max-h-16">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => addFilter(e.target.id, e.target.value)}
            type="search"
            id="name"
            className="block min-w-[500px]  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
