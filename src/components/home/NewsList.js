import NewsItem from './NewsItem'

export default function NewsList({ newsList, toggleFavorite, onNewsItemClicked }) {
    console.log(newsList)
    return (
        <div className='news-div'>
            {
                newsList.map((news, index) =>
                (<NewsItem item={news}
                    key={index} index={index}
                    toggleFavorite={toggleFavorite}
                    onNewsItemClicked={onNewsItemClicked} />)
                )
            }
        </div>
    )
}