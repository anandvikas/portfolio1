import './mainpage.css'

const MainPage = () => {

    // this will show the resume/project/contact page 
    const open = (div) => {

        document.getElementById('skills').style.display = 'none'
        document.getElementById('sec2').style.flex = '20%'
        document.getElementById('sec1').style.flex = '80%'
        document.getElementById('intro').style.filter = 'blur(8px)'

        var rpc = document.getElementsByClassName('rpcDiv')
        for (let i = 0; i < rpc.length; i++) {
            rpc[i].style.left = '-80vw'
            rpc[i].style.boxShadow = 'none'
        }

        document.getElementById(div).style.left = '0px'
        document.getElementById(div).style.boxShadow = '0px 0px 10px 1px #62757f'
    }

    return (
        <div className="mainPage">
            <div className="sec1" id="sec1">
                <div className="intro" id="intro">
                    <p id="sec1P">hello, I am</p>
                    <h1>Vikas Anand</h1>
                    <h2>Front end developer</h2>
                    <div className="contactLinksM">
                        <a href="https://www.linkedin.com/in/vikas-anand-2821b381/" target="_blank"><i className="fab fa-linkedin-in"></i><br />LinkedIn</a>
                        <a href="https://github.com/anandvikas" target="_blank"><i className="fab fa-github"></i><br />GitHub</a>
                    </div>
                </div>
            </div>
            <div className="sec2" id="sec2">
                <div className="skills" id="skills">
                    <h2>I make websites using</h2>
                    <div className="tools">
                        <a href="https://en.wikipedia.org/wiki/HTML" className="links" target="blank"><i
                            className="fab fa-html5"></i><br />HTML</a>
                        <a href="https://en.wikipedia.org/wiki/CSS" className="links" target="blank"><i
                            className="fab fa-css3-alt"></i><br />CSS</a>
                        <a href="https://en.wikipedia.org/wiki/ECMAScript" className="links" target="blank"><i
                            className="fab fa-js"></i><br />JS</a>
                        <a href="https://reactjs.org/" className="links" target="blank"><i
                            className="fab fa-react"></i><br />React</a>
                    </div>
                </div>
                <div className="tabsCon">
                    <button id="resumeBtn" onClick={() => { open('resumeDiv') }}>Resume</button>
                    <button id="projectBtn" onClick={() => { open('projectDiv') }}>Projects</button>
                    <button id="contactBtn" onClick={() => { open('contactDiv') }}>Contact</button>
                </div>
            </div>
        </div>
    )
}
export default MainPage;