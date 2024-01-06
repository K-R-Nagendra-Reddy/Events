// Write your code here
import './index.css'

const EventItem = props => {
  const {details, changeRegistrationStatus} = props
  const {id, imageUrl, name, location, registrationStatus} = details
  console.log(id)
  console.log(registrationStatus)
  const onClickEvent = () => {
    changeRegistrationStatus(registrationStatus)
  }

  return (
    <li className="li-container">
      <button type="button">
        <img
          src={imageUrl}
          alt="event"
          className="event-image"
          onClick={onClickEvent}
        />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
