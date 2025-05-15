import Map from "./components/Map";
import { useState, useEffect} from "react";
import Header from "./components/Header";


function App() {

  const [eventData, seteventData] = useState([])
  const [loading, setLoading] = useState(true)

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(8);


  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');

      const {events} = await res.json();

      console.log(events);

      seteventData(events);
      setLoading(false);
    }

    const fetchCategories = async () => {
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/categories');
      const {categories} = await res.json();

      console.log('Fetched categories', categories);
      
      setCategories(categories);
    }


    fetchEvents();
    fetchCategories();
    
  }, []);


  return (
    <div>
      <Header 
        categories = {categories}
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
      />
      
      <Map eventData={eventData} selectedCategory = {selectedCategory} />
    </div>
  )
}

export default App;
