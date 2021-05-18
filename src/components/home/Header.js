import { FaBars, FaHome, FaSearch } from 'react-icons/fa'

export default function Header({ onToggleChange }) {

    return (
        <div className='header-div'>
            <div id='nav-icon'>
                <FaBars className='icons-style' onClick={onToggleChange} />
                <h3>News App</h3>
            </div>

            <div className='search-div'>
                <input className='search-input' type="text" id="serachText" name="searchText" placeholder="Search.." />
                <div className='search-icon'><FaSearch /></div>
            </div>

            <div>
                <FaHome className='icons-style' />
                <img className='circular-image'
                    src='https://yt3.ggpht.com/yti/ANoDKi4oAivNqRn4Pt9DdGOFqJfZQcoxOCGbXLMwcHpBFg=s88-c-k-c0x00ffffff-no-rj-mo' />
            </div>
        </div>
    )
}