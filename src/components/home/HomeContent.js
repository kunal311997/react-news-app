import { useState, useEffect } from 'react'
import React from 'react'
import NewsList from './NewsList'


export default function HomeContent({ openNav }) {

    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        const getTaks = async () => {
            const tasksFromServer = await fetchTasks()
            const completeList = [];
            tasksFromServer.articles.map((article) => (
                completeList.push({ ...article, fav: true })
            ))
            setNewsList(completeList)
        }
        getTaks()
    }, [])

    const toggleFavorite = (ind) => {
        setNewsList(newsList.map((news, index) => index == ind ? { ...news, fav: !news.fav } : news))
    }

    const fetchTasks = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=abc6b4fc64604e54b57a51e741dae072')
        const data = await res.json()
        console.log(data)
        return data
    }
    return (
        <div style={{ height: '100vh' }}>
            { <div className='sidenav' style={{ width: openNav ? '0px' : '250px' }}>
                <a href="#" className="active">Top Headlines</a>
                <a href="#">Categories</a>
                <a href="#">Favourites</a>
                <a href="#">About</a>
                <a href="#">Help</a>
                <a href="#">Contact Us</a>
                <a href="#">Sign Out</a>

            </div>
            }
            <div id="main" style={{ marginLeft: openNav ? '0px' : '250px' }}>
                <NewsList newsList={newsList} toggleFavorite={toggleFavorite} />
            </div>

        </div>
    )
}