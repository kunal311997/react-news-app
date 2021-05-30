import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NewsItem({ item, index, toggleFavorite, onNewsItemClicked }) {
    return (
        <div className='news-item-div' >

            <div style={{
                display: 'flex', flexDirection: 'column',
                overflow: 'visible', width: '100%', height: '100%'
            }}
                onClick={() => onNewsItemClicked(item.url)}>
                <img alt={item.title} style={{ width: '100%', height: '60%', borderRadius: '10px 10px 0px 0px' }}
                    src={item.urlToImage} />
                <p id="title">{item.title}</p>
                <p id="description"> {item.description}</p>
             </div>
            {item.fav ? <FaHeart className='heart-icon' onClick={() => toggleFavorite(index)} />
                : <FaRegHeart className='heart-icon' onClick={() => toggleFavorite(index)} />}

        </div>
    )
}