

const LocationInfoBox = ({info, onClose}) => {
  return (
    <div className="location-info">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Event Location Info:</h2>
        <ul>
            <li>Type:<strong>{info.type}</strong></li>
            <li>Date: <strong>{info.date}</strong></li>
            <li>ID: <strong>{info.id}</strong></li>
            <li>Title: <strong>{info.title}</strong></li>

        </ul>
    </div>
  )
}

export default LocationInfoBox
