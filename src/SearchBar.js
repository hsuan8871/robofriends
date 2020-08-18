import React from 'react';


const SearchBar = ({searchfield,SearchChange}) => {
  return (
    <div className= 'pa3'>
    <input type='search' className = 'pa3 ma3 b--green bg-lightest-blue'
           placeholder = 'search robots'
          onChange={SearchChange}
    />
    </div>
  );
}

export default SearchBar;
