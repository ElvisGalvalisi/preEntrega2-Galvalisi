import silueta from '../assets/silueta.png'

export const SobreMi = () => {
  return (
    <div className='container' >
      <img className="foto-silueta" src={silueta} alt="fotografo" />
       <h2 className="sobreMi">Mi nombre es Elvis Galvalisi</h2>
       <p>Soy fotógrafo deportivo desde hace 7 años. Actualmente cubro eventos deportivos durante los fines de semana.</p>
    </div>
   
  )
}
