import styles from './Card.module.css'
import React from 'react'

function Card({ image, name, position, biography }) {
    console.log('Rendering card:', name)
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <h4 className={styles.position}>{position}</h4>
      <p className={styles.biography}>{biography}</p>
    </div>
  )
}

export default React.memo(Card)
