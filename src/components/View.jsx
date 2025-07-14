import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'
import { Link } from 'react-router-dom'

const View = () => {
    const [news, changeNews] = useState(
        {
            "status": "ok",
            "totalResults": 34,
            "articles": [

            ]
        }
    )
    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (response) => {
                changeNews(response.data)

            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])
    return (

        <div  style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSka4waCZ53H8Bena1G4H4oLsjDr_hVzauFrQ&s")`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'1000vh'

        }}>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h2 style={{textAlign:"center"}}>Live News</h2>
                            {news.articles.map((value, index) => {
                                return (
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card h-100">
                                            <img src={value.urlToImage} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.title}</h5>
                                                <p class="card-text">{value.description}</p>
                                                <Link class="nav-link active" aria-current="page" target="_blank" rel="noopener noreferrer" to={value.url}>More Updates</Link>                                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View