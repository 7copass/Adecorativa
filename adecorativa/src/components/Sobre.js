import styles from './Sobre.module.css'
import chueira from '../images/chueira.jpg'


function Sobre() {
  return (

    <div>
      <h1>Sobre nós</h1>

      <section className={styles.container}>

        <div className={styles.sobrenos}>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
             in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
              a Latin professor at Hampden-Sydney College in Virginia, looked up one of the 
              more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going 
              through the cites of the word in classical literature, discovered the undoubtable
               source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" 
              a treatise on the theory of ethics.  </p>

          <img src={chueira} alt="cachoeira"></img>
        </div>


      </section>
    </div>

  )
}

export default Sobre