export const Cuadrado = ({children, isSelected, actualizarTablero, index})=> {
  
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      actualizarTablero(index)
    }
  
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }