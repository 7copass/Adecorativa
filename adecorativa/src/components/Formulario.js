import styles from './Formulario.module.css'
function Formulario () {
  return (
    
    <div className={styles.formContainer}>
      <div>
      <h1>Fale conosco</h1>
      </div>
      <form>
        <label>Nome:</label>
        <input type='text' name='nome' placeholder='João da Silva...' required></input> 
        <label>E-mail:</label>     
        <input type='email' name='email' placeholder='joãodaSilva@hotmail.com' required></input>        
        <label>Telefone:</label>
        <input type='tel' name='tel' placeholder='"(xx) xxxxx-xxxx"' required></input>
        <label>Motivo do contato:</label>
        <textarea placeholder='descreva como podemos te ajudar de forma resumida'></textarea>        
        <button type='submit'>Enviar</button>
        
      </form>
    
    </div>
    
  )
}

export default Formulario