
import Header from "./components/Header";
import Filter from "./components/Filter";
import Pages from "./components/Pages";
import { Pagination } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "./context/hooks";
import { setPage } from "./context/RickAndMorty/RickAndMortySlice";

const App = () => {
  ;
  const dispatch = useAppDispatch();
  const info = useAppSelector((state) => state.app.info);
  const page = useAppSelector((state) => state.app.page);
  const onPageChange = (page: number) => {
    
    dispatch(setPage({ page }));
  };
  return (
    <div className="containe   ">
      <Header></Header>
      <div className="flex min-w-96 overflow-x-auto sm:justify-center">
        {info && info.pages ? (
          <Pagination
            currentPage={page}
            totalPages={info?.pages || 0}
            onPageChange={onPageChange}
          />
        ) : (
          <div>no page</div>
        )}
      </div>
      <div className="grid grid-cols-4 gap-4  mx-80 my-14 ">
        <div className="">
          <Filter></Filter>
        </div>
        <div className="col-span-3 ">
          <Pages></Pages>
        </div>
      </div>
    </div>
  );
};

export default App;
