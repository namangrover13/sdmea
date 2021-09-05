import React from 'react'
import { useStyles } from './css/Features.css'
import manage from './images/manage.jpg'
import evaluate from './images/evaluate.jpg'
import analyse from './images/analyse.jpg'

const Cards = ({classes, imgUrl, name, tagline}) => {
    return(
        <div className={classes.cardContainer}>
            <img src={imgUrl} alt="Feature" className={classes.img} />
            <p className={classes.name}>{name}</p>
            <p className={classes.tagline}>{tagline}</p>
        </div>
    )
}
const FEATURES = [
    {imgUrl: manage, name: 'Manage', tagline: 'Manage all your data related to academics, fees, sports, etc easily and efficiently.'},
    {imgUrl: evaluate, name: 'Evaluate', tagline: 'Evaluate performance of students and staffs based on entered data.'},
    {imgUrl: analyse, name: 'Analyse', tagline: 'Analyse the evaluation to increase chances of desired results.'},
]
const Features = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>Why you should choose SDMEA?</h1>
            <div className={classes.container}>
                {FEATURES.map((feature) => (
                    <Cards
                        classes={classes}
                        imgUrl={feature.imgUrl}
                        name={feature.name}
                        tagline={feature.tagline}
                    />
                ))}
            </div>
        </div>
    )
}

export default Features
