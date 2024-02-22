// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {description, imageUrl, name} = planetDetails

  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
