import resume from '../document/Vikas_resume_fed.pdf'
import './sliderpage.css'

import Project from './Projects'
import Contact from './Contact'

// this will close the resume/project/contact page 
const close = () => {

    document.getElementById('intro').style.filter = 'blur(0px)'
    document.getElementById('sec1').style.flex = '50%'
    document.getElementById('sec2').style.flex = '50%'
    document.getElementById('skills').style.display = 'flex'

    var rpc = document.getElementsByClassName('rpcDiv')
    for (let i = 0; i < rpc.length; i++) {
        rpc[i].style.left = '-80vw'
    }
}

// this fixes a bug (intro remain blurry if screen width is changed to less then 850px while any of resume/project/contact button is active)
window.addEventListener('resize', close)

const Sliderpage = () => {

    return (
        <>
            <div className='resumeDiv rpcDiv' id='resumeDiv'>
                <div className='textANDcancel'>
                    <h2 className='resumeText'>Resume</h2>
                    <button className='closeButton' onClick={close}><i class="far fa-times-circle"></i></button>
                </div>
                <div className='resumeHolder'>
                    <embed src={resume} type="application/pdf" />
                    <a href={resume} download="Vikas_resume" className="downloadBtn" target="blank">Download <i className="fa fa-download"></i></a>
                </div>
            </div>
            <div className='projectDiv rpcDiv' id='projectDiv'>
                <div className='textANDcancel'>
                    <h2 className='projectText'>Projects</h2>
                    <button className='closeButton' onClick={close}><i class="far fa-times-circle"></i></button>
                </div>
                <div className='projectHolder'><Project/></div>
            </div>
            <div className='contactDiv rpcDiv' id='contactDiv'>
                <div className='textANDcancel'>
                    <h2 className='contactText'>Contact</h2>
                    <button className='closeButton' onClick={close}><i class="far fa-times-circle"></i></button>
                </div>
                <div className='contactHolder'><Contact/></div>
            </div>
        </>
    )
}
export default Sliderpage;