import activegym from '../../Assets/Images/activegym.jpg'
import python from '../../Assets/svg/python.svg'
import flask from '../../Assets/svg/flask.svg'
import postgresql from '../../Assets/svg/postgresql.svg'
import worldtravel from '../../Assets/Images/worldtravel.jpg'
import javascript from '../../Assets/svg/javascript.svg'
import react from '../../Assets/svg/react.svg'
import api from '../../Assets/svg/api.svg'
import holyshiitake from '../../Assets/Images/HolyShiitake.png'
import mongodb from '../../Assets/svg/mongodb.svg'
import nodejs from '../../Assets/svg/nodejs.svg'
import velorepo from '../../Assets/Images/velorepo.jpg'
import java from '../../Assets/svg/java.svg'
import firebase from '../../Assets/svg/firebase.svg'
import portfolio from '../../Assets/Images/portfolio.jpg'

export const sampleProjects = [
    {
    id:1,
    title: "Active Gym",
    tech: "Python, Flask and Postgresql.",
    summary: "My first ever coding project completed solo over 6 days. This Python web app is for admin use at a gym to manage classes, members and instructors using RESTful routes and a relational database.",
    github: "https://github.com/HelenLangers/CC_Gym_App_Project",
    live: null,
    image: activegym,
    lang1: {langIcon: python,
            langName: "Python"},
    lang2: {langIcon: flask,
            langName: "Flask"},
    lang3: {langIcon: postgresql,
            langName: "Postgresql"}
    },
    {
    id:2,
    title: "World Country Check List",
    tech: "React, Javascript, REST Countries API, React-Simple-Maps, React-Router-Dom and deployed using Vercel.",
    summary: "A homework assignment from CodeClan which I just kept running with. The starting brief was to understand useState and useEffect hooks when using APIs in React. I used the REST Countries API and React-Simple-Maps to render out a world map that colours in as you add countries you've travelled to.",
    github: "https://github.com/HelenLangers/CC_Visited_Countries_App",
    live: "https://cc-week7-weekendhw-countriesapp.vercel.app/",
    image: worldtravel,
    lang1: {langIcon: javascript,
            langName: "Javascript"},
    lang2: {langIcon: react,
            langName: "React"},
    lang3: {langIcon: api,
            langName: "API"}
    },
    {
    id:3,
    title: "Holy Shiitake",
    tech: "React, Javascript, MongoDB, Express, NodeJS and the Edamam API.",
    summary: "A group project at CodeClan built over 6 days. Holy Shiitake uses a recipe API to allow searches and diary entries to track how often you're cooking meals at home.",
    github: "https://github.com/HelenLangers/Holy_Shiitake_habit_tracker_project",
    live: null,
    image: holyshiitake,
    lang1: {langIcon: react,
            langName: "React"},
    lang2: {langIcon: mongodb,
            langName: "MongoDB"},
    lang3: {langIcon: nodejs,
            langName: "Node JS"}
    },
    {
        id:4,
        title: "Velo Repo",
        tech: "React, Javascript, Java, Spring, SQL and used Firebase's authorisation tooling.",
        summary: "A group project at CodeClan built over 13 days. Velo Repo was the first draft of a circular economy platform for bikepacking/bike travel kit. This is an ongoing project that has since been taken back to the drawing board involving a bigger team since I've finished CodeClan.",
        github: "https://github.com/HelenLangers/VeloRepo-Client",
        live: null,
        image: velorepo,
        lang1: {langIcon: react,
                langName: "React"},
        lang2: {langIcon: java,
                langName: "Java"},
        lang3: {langIcon: firebase,
                langName: "Firebase"}
        },
        {
            id:5,
            title: "Portfolio Website",
            tech: "React, Javascript and deployed using Firebase.",
            summary: "I've changed and added sections to this website over my time at CodeClan and afterwards as I learn more and more.",
            github: "https://github.com/HelenLangers/new_portfolio",
            live: null,
            image: portfolio,
            lang1: {langIcon: react,
                    langName: "React"},
            lang2: {langIcon: javascript,
                    langName: "Javascript"},
            lang3: {langIcon: firebase,
                    langName: "Firebase"}
            }
]