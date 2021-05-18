import { FaRegHeart, FaHeart, FaSearch } from 'react-icons/fa'


export default function NewsItem({ item, index, toggleFavorite }) {
    return (
        <div className='news-item-div'>
            <img style={{ width: '100%', height: '60%', borderRadius: '10px 10px 0px 0px' }} src={item.urlToImage} />
            <p id="title">{item.title}</p>
            <p id="description"> {item.description}</p>
            {item.fav ? <FaRegHeart className='heart-icon' onClick={() => toggleFavorite(index)} /> 
            : <FaHeart className='heart-icon' onClick={() => toggleFavorite(index)} />}
        </div>
    )
}