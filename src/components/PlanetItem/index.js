// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {imageUrl, name, description} = planet
  return (
    <div>
      <img src={imageUrl} alt={`planet ${name}`} height={100} width={100} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
