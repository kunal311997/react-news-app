import { useState, useEffect } from 'react'
import React from 'react'
import NewsList from './NewsList'
import * as constants from '../../constants/Constants'
import BarLoader from 'react-spinners/SyncLoader'
import CategoriesList from '../categories/CategoriesList'

export default function HomeContent({ openNav, searchText,
    isSearchClicked, changeButtonClickState, onNavigationItemClick }) {

    const [isLoading, setIsLoading] = useState(false);
    const [newsList, setNewsList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const getTopHeadlines = async () => {
            const tasksFromServer = await fetchTopHeadlines()
            const completeList = [];
            tasksFromServer.articles.map((article) => (
                completeList.push({ ...article, fav: true })
            ))
            setNewsList(completeList)
            getSources()
        }

        const getSources = async () => {
            const res = await fetchSources()
            setIsLoading(false)
            /* var sourceMap = {};
             res.sources.map((source) => {
                 // add a item
                 sourceMap[source.category] = source;
             })
             console.log(sourceMap)   
             var output = Object.keys(sourceMap).map(function(key) {
                 return {type: key, name: sourceMap[key]};
              });  
              console.log(output)*/
            const completeList = [];
            res.sources.map((sources) => (
                completeList.push({ ...sources, isSelected: false })
            ))
            console.log(completeList)
            setCategoriesList(completeList)
        }
        getTopHeadlines()
    }, [])

    useEffect(() => {
        const callEverything = async () => {
            let res
            if (searchText === '' && category === '') {
                res = await fetchTopHeadlines()
            } else {
                res = await callSearchEverythingApi()
            }

            if (isSearchClicked) {
                if (searchText !== '') {
                    res = await callSearchEverythingApi()
                }
            }
            console.log(res.status)
            if (res.status === "ok") {
                const completeList = [];
                res.articles.map((article) => (
                    completeList.push({ ...article, fav: false })
                ))
                setNewsList(completeList)
                changeButtonClickState()
            }

            setIsLoading(false)
        }
        callEverything()

    }, [isSearchClicked, searchText, category])



    const toggleFavorite = (ind) => {
        setNewsList(newsList.map((news, index) => index === ind ? { ...news, fav: !news.fav } : news))
    }

    const fetchTopHeadlines = async () => {
        setIsLoading(true)
        const res = await fetch(constants.TOP_HEADLINES_BASE_URL + `?language=en&apiKey=${constants.API_KEY}`)
        const data = await res.json()
        console.log(data)
        return data
    }

    const callSearchEverythingApi = async () => {
        setIsLoading(true)

        var query = searchText === '' ? query = '' : query = `&q=${searchText}`
        var sources = category === '' ? sources = '' : sources = `&sources=${category}`

        console.log("query - " + searchText + " category - " + category)
        const res = await fetch(constants.EVERYTHING_BASE_URL +
            `?apiKey=${constants.API_KEY}` + query + sources)
        const data = await res.json()
        console.log(data)
        return data
    }

    const fetchSources = async () => {
        const res = await fetch(constants.SOURCES_BASE_URL + `?apiKey=${constants.API_KEY}`)
        const data = await res.json()
        console.log(data)
        return data
    }

    const onNewsItemClicked = (url) => {
        window.open(url, '_blank');
    }
    const onCategoryClicked = (c) => {
        setCategory(c)
        categoriesList.map((category) => (category.isSelected = false))
        
        setCategoriesList(categoriesList.map((category) => category.id === c ? {
            ...category,
            isSelected: !category.isSelected
        } : category))
    }

    return (
        <div style={{ height: '100vh' }}>
            { <div className='sidenav' style={{ width: openNav ? '0px' : '220px' }}>
                <a href="#" className="active">Top Headlines</a>
                <a href="#">Favourites</a>
                <a onClick={() => onNavigationItemClick('about')}>About</a>
                <a href="#">Help</a>
                <a href="#">Contact Us</a>
                <a onClick={() => onNavigationItemClick('signout')} >Sign Out</a>

            </div>
            }
            {isLoading && <div style={{
                marginLeft: openNav ? '0px' : '220px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: '90vh'
            }}>
                <BarLoader color='#000000' loading={isLoading} css={""} size={10} />
            </div>}

            {!isLoading && <div id="main" style={{ marginLeft: openNav ? '0px' : '220px' }}>
                <CategoriesList
                    categoriesList={categoriesList}
                    onCategoryClicked={onCategoryClicked} />
                <NewsList
                    newsList={newsList}
                    toggleFavorite={toggleFavorite}
                    onNewsItemClicked={onNewsItemClicked} />
            </div>}

        </div>
    )
}