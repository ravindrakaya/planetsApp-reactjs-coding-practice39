// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets-slider-container" data-testid="planets">
      <h1 className="planets-slider-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planetDetails => (
          <PlanetItem key={planetDetails.id} planetDetails={planetDetails} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
