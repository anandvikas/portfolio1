import foodcart1 from "../document/foodcart/foodcart1.JPG"
import covidinfo1 from '../document/covidinfo/covidinfo1.JPG'

const Project = () => {
    return (
        <>
            {/* WEBSITES ================================================================================ */}
            <div className="websites">
                <h2 className="websitesTitle">Websites</h2>
                <div className="websitesList">
                    <div className="wlCardSpace">
                        <div className="wlCard">
                            <div className="wlCardImgDiv">
                                <img src={foodcart1} />
                            </div>
                            <div className="wlCardTextDiv">
                                <h3>Food Cart</h3>
                                <p>E-commerce website of a restaurent, where client can order food of their choice. There are various filter options such as. By catagory, By release date, By popularity etc.</p>
                                <a href="https://anandvikas.github.io/foodkart/" target='_blank'>Site</a>
                                <a href="https://github.com/anandvikas/foodkart.git" target='_blank'>Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="wlCardSpace">
                        <div className="wlCard">
                            <div className="wlCardImgDiv">
                                <img src={covidinfo1} />
                            </div>
                            <div className="wlCardTextDiv">
                                <h3>Covid Info</h3>
                                <p>In this website you can see the covid19 cases across the world. It also display the countries with most number of cases. You can search for available vaccination slots by entering pin code of the region (India only).</p>
                                <a href="https://anandvikas.github.io/covidinfo/" target='_blank'>Site</a>
                                <a href="https://github.com/anandvikas/covidinfo.git" target='_blank'>Code</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* GAMES ======================================================================= */}
            <div className="games">
                <h2 className="gamesTitle">Games</h2>
                <div className="gamesList">
                    <div className="glCardSpace">
                        <div className="glCard">
                            <div className="glCardImgDiv">
                                <img src={foodcart1} />
                            </div>
                            <div className="glCardTextDiv">
                                <h3>Food Cart</h3>
                                <p>E-commerce website of a restaurent, where client can order food of their choice. There are various filter options such as. By catagory, By release date, By popularity etc.</p>
                                <a href="https://anandvikas.github.io/foodkart/" target='_blank'>Site</a>
                                <a href="https://github.com/anandvikas/foodkart.git" target='_blank'>Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="glCardSpace">
                        <div className="glCard">
                            <div className="glCardImgDiv">
                                <img src={foodcart1} />
                            </div>
                            <div className="glCardTextDiv">
                                <h3>Food Cart</h3>
                                <p>E-commerce website of a restaurent, where client can order food of their choice. There are various filter options such as. By catagory, By release date, By popularity etc.</p>
                                <a href="https://anandvikas.github.io/foodkart/" target='_blank'>Site</a>
                                <a href="https://github.com/anandvikas/foodkart.git" target='_blank'>Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;