import error from '../../assets/error.svg'

export default function TodoError () {
  return (
    <>
      <h2>No hay resultados con su busqueda</h2>
      <img src={error} alt='Error Icon' />
    </>
  )
};
