import Head from 'next/head'
import styles from '@/styles/index.module.css'
import Navbar from'@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/salecard/saleCard'
import GameCard from '@/components/cards/salecard/gameCard/gameCard'
import { useState } from 'react'

export default function Home() {
  const[cart, setCart] = useState([])
  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }
  const handleRemoveProduct = (pos) =>{
    setCart(cart.filter((obj, posObj) => posObj !== pos))

  } 
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
       < Navbar cart = {cart} onRemove ={handleRemoveProduct} />
       <Container >
        <div className={styles.session}>
        <Subtitle >Promoções</Subtitle>
        <div className={styles.salecontainer}>
          <SaleCard
          image={'league-of-legends.jpg'}
          discount={'50'}
          fullprice={'200,00'}
          discountprice={'100,00'}
          onAdd={() => handleAddProduct({name: 'League Of Legends', price: 100.0, image: 'league-of-legends.jpg'})}/>
          <SaleCard
          image={'dota-2.jpg'}
          discount={'80'}
          fullprice={'180,00'}
          discountprice={'36,00'}
          onAdd={() => handleAddProduct({name: 'Dota 2', price: 36.0, image: 'dota-2.jpg'})}
          />
          <SaleCard
          image={'valorant.jpg'}
          discount={'70'}
          fullprice={'80,00'}
          discountprice={'24,00'}
          onAdd={() => handleAddProduct({name: 'Valorant', price: 24.0, image: 'valorant.jpg'})}/>
        </div>
        </div>
        <div className={styles.session}>
        <Subtitle >Outros Jogos</Subtitle>
        <div className= {styles.gamecontainer}>
          <GameCard onAdd={() => handleAddProduct({name: 'Counter Strike: Global Offensive', price: 99.9, image: 'counter-strike.jpg'})}/>
         
        </div>
        </div>
        </Container>
      </div>
    </>
  )
}
