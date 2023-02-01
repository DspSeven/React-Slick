// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    dotsClass: 'slick-dots slick-thumb',
  }
  return (
    <div className="bg-image" data-testid="planets">
      <h1>PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <PlanetItem planet={planet} key={planet.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
