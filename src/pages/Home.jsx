import React from 'react';
import Card from '../components/Card';

function Home({
  items, 
  searchValue, 
  setSearchValue, 
  // onAddToCart, 
  // onAddToFavorite, 
  onChangeSearchInput, 
  isLoading 
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) => 
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(12)] : filteredItems)
    .map((item, index) => 
      <Card
        // onFavourite={(obj) => onAddToFavotite(obj)}
        // onPlus={(obj) => onAddToCart(obj)}
        key={index}
        loading={isLoading}
        {...item}
      />
  )
  }  
  return ( 
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search"></img>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
            { searchValue && 
              <img 
                onClick={() => setSearchValue('')}
                width={22} 
                height={22} 
                src="/img/btn-remove.svg" 
                alt="Clear" 
              />
            }
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {renderItems()}
        </div>  
      </div>
    );
}

export default Home;