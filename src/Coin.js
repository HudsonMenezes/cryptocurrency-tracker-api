import React from 'react'
import './Coin.css'

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap
}) => {
  // Para colocar o Cifrão da Moeda em Reais no toLocaleString()
  // toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            {price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
          <p className="coin-volume">
            {volume.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
          {priceChange < 0 ? (
            <p className="coint-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coint-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Market Cap:{' '}
            {marketcap.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin
