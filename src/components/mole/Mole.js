import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {
  console.log(props)
  if(props.den.isMoleVisible === true){
    return (
      <div className="den">
        <img src={MoleIcon} className="Mole" alt="Mole" />
      </div>
  )
}
  return null
}

export default Mole
