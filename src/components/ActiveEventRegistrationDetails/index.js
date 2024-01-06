// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status, constants} = props

  const renderRegisteredEvent = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered"
      />
      <h1 className="registered">You have already registered for the event</h1>
    </div>
  )

  const renderYetToRegisteredEvent = () => (
    <div className="yet-to-register">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )
  const renderRegistrationsClosed = () => (
    <div className="registration-closed">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  switch (status) {
    case constants.registered:
      return renderRegisteredEvent()
    case constants.yetToRegister:
      return renderYetToRegisteredEvent()
    case constants.registrationsClosed:
      return renderRegistrationsClosed()
    default:
      return <p>'Click on an event, to view its registration details'</p>
  }
}

export default ActiveEventRegistrationDetails
