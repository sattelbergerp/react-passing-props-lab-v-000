import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null,
    };
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render(){
    return (<FruitBasket filters={this.state.filters} fruit={this.state.fruit} selectedFilter={this.state.currentFilter} onFilterChange={this.handleFilterChange}/>);
  }

}

//;

export default App;
