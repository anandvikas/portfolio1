import cr1 from '../assets/images/cosmoRace/cr1.JPG'
import cr2 from '../assets/images/cosmoRace/cr2.JPG'
import cr3 from '../assets/images/cosmoRace/cr3.JPG'
import ci1 from '../assets/images/covidinfo/ci1.JPG'
import ci2 from '../assets/images/covidinfo/ci2.JPG'
import ci3 from '../assets/images/covidinfo/ci3.JPG'
import fi1 from '../assets/images/fake3Dimg/fi1.JPG'
import fi2 from '../assets/images/fake3Dimg/fi2.JPG'
import fk1 from '../assets/images/foodcart/fk1.JPG'
import fk2 from '../assets/images/foodcart/fk2.JPG'
import fk3 from '../assets/images/foodcart/fk3.JPG'
import ts1 from '../assets/images/typeSpeed/ts1.JPG'
import ts2 from '../assets/images/typeSpeed/ts2.JPG'
import ts3 from '../assets/images/typeSpeed/ts3.JPG'
import ws1 from '../assets/images/wordScramble/ws1.JPG'
import ws2 from '../assets/images/wordScramble/ws2.JPG'
import ws3 from '../assets/images/wordScramble/ws3.JPG'
import mp1 from '../assets/images/musicPlayer/mp1.JPG'
import mp2 from '../assets/images/musicPlayer/mp2.JPG'
import kp1 from '../assets/images/keeper/kp1.JPG'
import kp2 from '../assets/images/keeper/kp2.JPG'


const Games = [
    {
        img: [cr1, cr2, cr3],
        title: 'Cosmo Race',
        descripion: 'A simple game created using HTML, CSS, JavaScript. Player can use arrow keys to move the space craft in space.',
        site : 'https://anandvikas.github.io/cosmoRace1/',
        code : 'https://github.com/anandvikas/cosmoRace1.git'
    },
    {
        img: [ts1, ts2, ts3],
        title: 'Typing speed test',
        descripion: 'Test your typing speed and see results (words per minute, accuracy, errors).',
        site : 'https://codepen.io/anandvikas/pen/yLPreaE?editors=0110',
        code : 'https://codepen.io/anandvikas/pen/yLPreaE?editors=0110'
    },
    {
        img: [ws1, ws2, ws3],
        title: 'Word Scramble Game',
        descripion: 'In this game user has to type the correct spelling of the given word.',
        site : 'https://codepen.io/anandvikas/pen/RwxKagb',
        code : 'https://codepen.io/anandvikas/pen/RwxKagb'
    }
]

const Websites = [
    {
        img: [fk1, fk2, fk3],
        title: 'Food Kart',
        descripion: 'E-commerce website of a restaurent, where client can order food of their choice. There are various filter options such as. By catagory, By release date, By popularity etc.',
        site : 'https://anandvikas.github.io/foodkart3/',
        code : 'https://github.com/anandvikas/foodkart3.git'
    },
    {
        img: [ci1, ci2, ci3],
        title: 'Covid Info',
        descripion: 'In this website you can see the covid19 cases across the world. It also display the countries with most number of cases. You can search for available vaccination slots by entering pin code of the region (India only).',
        site : 'https://anandvikas.github.io/covidinfo/',
        code : 'https://github.com/anandvikas/covidinfo.git'
    },
]

const Other = [
    {
        img: [mp1, mp2],
        title: 'Music Player',
        descripion: 'It is a music player with some pre-loaded audio files. Is has basic features like play, pause, skip next, skip previous, progress bar etc.',
        site : 'https://anandvikas.github.io/musicplayer1/',
        code : 'https://github.com/anandvikas/musicplayer1.git'
    },
    {
        img: [kp1, kp2],
        title: 'Keeper',
        descripion: 'It is a note keeping app.',
        site : 'https://anandvikas.github.io/keeper1/',
        code : 'https://github.com/anandvikas/keeper1.git'
    },
    {
        img: [fi1, fi2],
        title: 'Floating Image',
        descripion: 'Fake 3D Image , tilts on mouse hover',
        site : 'https://codepen.io/anandvikas/pen/yLPQBVo',
        code : 'https://codepen.io/anandvikas/pen/yLPQBVo'
    }
]

export {Games, Websites, Other}