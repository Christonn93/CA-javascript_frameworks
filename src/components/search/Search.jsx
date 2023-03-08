const Search = ({ setSearchResults }) => {
 // Form action
 const submitAction = (e) => e.preventDefault();

 return (
  <>
   <form onSubmit={submitAction}>
    <input type={"text"} id="searchInput" onChange={(e) => setSearchResults(e.target.value)} />
    <button>Search</button>
   </form>
  </>
 );
};

export default Search;