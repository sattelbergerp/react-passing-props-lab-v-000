import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

let FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
      <Filter handleChange={props.onFilterChange} filters={props.filters}/>
      <FilteredFruitList
        filter={props.selectedFilter} fruit={props.fruit}/>
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: ()=>{},
}

export default FruitBasket;
