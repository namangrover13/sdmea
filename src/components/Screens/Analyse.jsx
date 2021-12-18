import { Button, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { useStyles } from './css/Analyse.css'
import { STUDENTS } from '../../constants/data/Students';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const Analyse = () => {
    const classes = useStyles();
    const [admn, setAdmn] = useState();
    const [hasError, setHasError] = useState(false)
    const [students, setStudents] = useState(STUDENTS)
    const [dataToShow, setDataToShow] = useState(null);
    useEffect(() => {
        setStudents(STUDENTS);
    }, [])
    const handleChange = (e) => {
        setAdmn(e.target.value);
        if (isNaN(admn))
            setHasError(true)
        else
            setHasError(false)
    }
    const handleSearch = () => {
        // eslint-disable-next-line eqeqeq
        const result = students.find(data => data.admnNo == admn)
        setDataToShow(result);
    }
    const getMarksArrayForSubject = (marksObject, subjectName) => {
        var marksArray = []
        Object.keys(marksObject).forEach((exam) => {
            marksArray.push(marksObject[exam][subjectName])
        })
        return marksArray;
    }
    var marks =  {
        utOne: {'Maths': 96, 'Eng': 90, 'Phy': 96, 'Chem': 92, 'Bio': null},
        utTwo: {'Maths': 96, 'Eng': 90, 'Phy': 96, 'Chem': 92, 'Bio': null},
        halfYearly:{'Maths': 96, 'Eng': 90, 'Phy': 96, 'Chem': 92, 'Bio': null},
        utThree: {'Maths': 96, 'Eng': 90, 'Phy': 96, 'Chem': 92, 'Bio': null},
        utFour: {'Maths': 96, 'Eng': 90, 'Phy': 96, 'Chem': 92, 'Bio': null},
        finalYearly :{'Maths': 96, 'Eng': 90, 'Phy': 96, 'Chem': 92, 'Bio': null},
    }
    const options = {
        width: 100,
        title: {
            text: 'Maths'
        },
        series: [{
            type: 'column',
            color: 'rgb(152, 0, 67)',
            data: getMarksArrayForSubject(marks, 'Maths')
        }],
        xAxis: {
            categories: ['UT 1', 'UT 2', 'Half Yearly', 'UT 3', 'UT 4', 'Finals'],
            title: {
                text: 'Examinations',
                style: {
                    fontSize: 20,
                    color: '#000'
                }
            }
        },
        yAxis: {
           title: {
            text: 'Marks',
            style: {
                fontSize: 20,
                color: '#000'
            }
           }
        }
    }
    return (
        <div className={classes.root}>
            <div className={classes.searchDiv}>
                <TextField
                    error={hasError}
                    id="outlined-error-helper-text"
                    label="Admn No."
                    variant="outlined"
                    value={admn}
                    onChange={handleChange}
                />
                <Button
                    onClick={handleSearch}
                    disabled={hasError}
                    className={classes.searchBtn}
                >Search</Button>
            </div>
            <div>
                {dataToShow &&
                    <>
                        <div className={classes.studentDetailsContainer}>
                            <div className={classes.detailContainer}>
                                <h2 className={classes.detailsTxt}>Name: </h2><span className={classes.detail}>{dataToShow.name}</span>
                            </div>
                            <div className={classes.detailContainer}>
                                <h2 className={classes.detailsTxt}>Class: </h2><span className={classes.detail}>{dataToShow.standard}</span>
                            </div>
                            <div className={classes.detailContainer}>
                                <h2 className={classes.detailsTxt}>Age: </h2><span className={classes.detail}>{dataToShow.age}</span>
                            </div>
                            <div className={classes.detailContainer}>
                                <h2 className={classes.detailsTxt}>Gender: </h2><span className={classes.detail}>{dataToShow.gender === 'M' ? "Male" : "Female"}</span>
                            </div>
                            <div className={classes.detailContainer}>
                                <h2 className={classes.detailsTxt}>Percentage in class 10: </h2><span className={classes.detail}>{dataToShow.tenthPercent}%</span>
                            </div>
                        </div>
                        <div className={classes.chart}>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                            />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Analyse
