
import { useAppDispatch } from "../context/hooks";
import {
  delFilter,
  setFilter,
  setPage,
} from "../context/RickAndMorty/RickAndMortySlice";
import FilterCheckBox from "./FilterCheckBox";
const filterValus = [
  {
    value: "gender",
    ids: [
      { id: 1, name: "Male" },
      { id: 2, name: "female" },
      { id: 3, name: "unknown" },
      { id: 4, name: "Genderless" },
    ],
  },
  {
    value: "species",
    ids: [
      { id: 1, name: "human" },
      { id: 2, name: "Alien" },
      { id: 3, name: "Humanoid" },
      { id: 4, name: "Animal" },
      { id: 5, name: "Robot" },
      { id: 6, name: "Cronenberg" },
      { id: 7, name: "Poopybutthole" },
      { id: 8, name: "Mytholog" },
      { id: 9, name: "vampire" },
      { id: 10, name: "unknown" },
    ],
  },
];

const Filter = () => {
  const dispatch = useAppDispatch();
  
  const filterChange = (key: string, val: string, checked: boolean) => {
    if (checked) {
      dispatch(setFilter({ key, val }));
      dispatch(setPage({ page: 0 }));
    } else {
      dispatch(delFilter({ key, val }));
      dispatch(setPage({ page: 0 }));
    }
  };

  return (
    <div>
      {filterValus.map((item, index) => {
        return (
          <FilterCheckBox
            key={index}
            item={item}
            filterChange={filterChange}
          ></FilterCheckBox>
        );
      })}

      {/* <ul className="">
        <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              onChange={(e) =>
                filterChange(e.target.value, e.target.id, e.target.checked)
              }
              id="Male"
              type="checkbox"
              value="gender"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
            >
              Male
            </label>
          </div>
        </li>
        <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="Fermale"
              onChange={(e) =>
                filterChange(e.target.value, e.target.id, e.target.checked)
              }
              type="checkbox"
              value="gender"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
            >
              Fermale
            </label>
          </div>
        </li>
        <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="unknown"
              onChange={(e) =>
                filterChange(e.target.value, e.target.id, e.target.checked)
              }
              type="checkbox"
              value="gender"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
            >
              Unknown
            </label>
          </div>
        </li>
        <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="Genderless"
              type="checkbox"
              onChange={(e) =>
                filterChange(e.target.value, e.target.id, e.target.checked)
              }
              value="gender"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
            >
              Genderles
            </label>
          </div>
        </li>
      </ul> */}
      <h3 className="mb-4 font-semibold border-b-2 mt-2 text-gray-900">
        SPECIES
      </h3>
    </div>
  );
};

export default Filter;
