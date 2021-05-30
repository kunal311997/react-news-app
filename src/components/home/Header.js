import { FaBars, FaHome, FaSearch } from 'react-icons/fa'
import * as constants from '../../constants/Constants'

export default function Header({ onToggleChange, handleChange, onSearchClicked, searchText }) {

    const username=localStorage.getItem(constants.USERNAME)
    return (
        <div className='header-div'>
            <div id='nav-icon'>
                <FaBars className='icons-style' onClick={onToggleChange} />
                <h3>Hi, {username} !</h3>
            </div>

            <div className='search-div'>
                <input
                    className='search-input'
                    type="text"
                    id="serachText"
                    name="searchText"
                    placeholder="Search.."
                    value={searchText}
                    onChange={handleChange} />
                <div className='search-icon' onClick={onSearchClicked}><FaSearch /></div>
            </div>

            <div>
                <FaHome className='icons-style' />
                <img alt='Profile image' className='circular-image'
                    src='https://yt3.ggpht.com/yti/ANoDKi4oAivNqRn4Pt9DdGOFqJfZQcoxOCGbXLMwcHpBFg=s88-c-k-c0x00ffffff-no-rj-mo' />
            </div>
        </div>
    )
}