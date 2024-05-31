

const FilterCheckBox = ({
  item,
  filterChange,
}: {
  item: {
    value: string;
    ids: {
      id: number;
      name: string;
    }[];
  };
  filterChange: (key: string, val: string, checked: boolean) => void;
}) => {
  return (
    <div>
      <h3 className="mb-4 font-semibold border-b-2 text-gray-900">
        {item.value}
      </h3>
      <ul className="">
        {item.ids.map((filter_val) => {
          return (
            <li
              key={filter_val.id}
              className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  onChange={(e) =>
                    filterChange(e.target.value, e.target.id, e.target.checked)
                  }
                  id={filter_val.name}
                  type="checkbox"
                  value={item.value}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                >
                  {filter_val.name}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterCheckBox;
