type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <>
      <input
        className="search__input"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search"
      />
    </>
  );
};

export default Search;
