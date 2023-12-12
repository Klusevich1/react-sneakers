import React from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../App';
import styles from './Card.module.scss';

function Card ({onFavourite, title, imageUrl, price, onPlus, id, loading = false}) {
  const {isItemAdded, isItemFavorited, onAddToCart, onAddToFavorite} = React.useContext(AppContext);    

  const onClickPlus = () => {
    onAddToCart({id, title, imageUrl, price});
  }

  const onClickFavorite = () => {
    console.log('aaaa');
    onAddToFavorite({id, title, imageUrl, price});
  }

    return (  
        <div onClick={() => {console.log(title, id)}} className={styles.card}>
          {
            loading ? (<ContentLoader 
            speed={2}
            width={150}
            height={265}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="10" ry="10" width="155" height="155" /> 
            <rect x="0" y="167" rx="5" ry="5" width="150" height="15" /> 
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
            <rect x="0" y="234" rx="5" ry="5" width="80" height="25" /> 
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>) : (
            <>
            <div className={styles.favourite}>
              <img 
                src={isItemFavorited(id) ? "/img/liked.svg" : "/img/unliked.svg"} 
                onClick={onClickFavorite}
                alt="Favorites"/>
            </div>
            <img className="d-block m-auto" width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>{price} руб.</b>
              </div>
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                alt="Plus"
              />
            </div>
            </>
          )
          }
          
        </div>
    );
}

export default Card;