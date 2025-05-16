import { useEffect, useState } from "react";
import axios from 'axios';


const LocationInfoBox = ({info, onClose}) => {

  const [summary, setSummary] = useState("Loading summary...");

  useEffect(() => {
    const fetchSummary = async () => {
      try{
        const res = await axios.post('http://localhost:5000/generate-summary', {
          title: info.title,
          category: info.type,
          date: info.date,
          location: "Unknown"
        });
        setSummary(res.data.summary);
      } catch(err){
        setSummary("Could not generate summary");
      }
    }

    fetchSummary();
  }, [info]);



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
        <p className="summary"><strong>AI Summary:</strong>{summary}</p>
    </div>
  )
}

export default LocationInfoBox
