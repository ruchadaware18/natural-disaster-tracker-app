
import CategoryFilter from './CategoryFilter'

const Header = ({categories, selectedCategory, setSelectedCategory}) => {

  console.log(selectedCategory);
  
  return (
    <header className='header'>
        <h1 className='header-title'>Natural Disaster Tracker (Powered by NASA (EONET API)) </h1>
        <div>

        </div>
        <CategoryFilter 
          categories = {categories}
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
        />
    </header>
  )
}

export default Header
