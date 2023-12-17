import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bg">
        <Links/>
      </div>
      <ToggleButton/>
    </div>
  )
}

export default Sidebar