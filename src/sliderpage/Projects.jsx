import { Games, Websites, Other } from '../data/data'

const Project = () => {
    return (
        <>
            {/* WEBSITES ================================================================================ */}
            <div className="websites">
                <h2 className="websitesTitle">Websites</h2>
                <div className="websitesList">
                    {
                        Websites.map((val, index) => {
                            return (
                                <div className="wlCardSpace" key={index}>
                                    <div className="wlCard">
                                        <div className="wlCardImgDiv">
                                            <img src={val.img[0]} />
                                        </div>
                                        <div className="wlCardTextDiv">
                                            <h3>{val.title}</h3>
                                            <p>{val.descripion}</p>
                                            <a href={val.site} target='_blank'>Site</a>
                                            <a href={val.code} target='_blank'>Code</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* GAMES ======================================================================= */}
            <div className="games">
                <h2 className="gamesTitle">Games</h2>
                <div className="gamesList">
                    {
                        Games.map((val, index) => {
                            return (
                                <div className="glCardSpace" key={index}>
                                    <div className="glCard">
                                        <div className="glCardImgDiv">
                                            <img src={val.img[0]} />
                                        </div>
                                        <div className="glCardTextDiv">
                                            <h3>{val.title}</h3>
                                            <p>{val.descripion}</p>
                                            <a href={val.site} target='_blank'>Site</a>
                                            <a href={val.code} target='_blank'>Code</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* MINI PROJECTS ======================================================================= */}
            <div className="mini">
                <h2 className="miniTitle">Other Projects</h2>
                <div className="miniList">
                    {
                        Other.map((val, index) => {
                            return (
                                <div className="mlCardSpace" key={index}>
                                    <div className="mlCard">
                                        <div className="mlCardImgDiv">
                                            <img src={val.img[0]} />
                                        </div>
                                        <div className="mlCardTextDiv">
                                            <h3>{val.title}</h3>
                                            <p>{val.descripion}</p>
                                            <a href={val.site} target='_blank'>Site</a>
                                            <a href={val.code} target='_blank'>Code</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }                    
                </div>
            </div>
        </>
    )
}
export default Project;