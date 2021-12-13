import { Button, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { useStyles } from './css/Analyse.css'
import {STUDENTS} from '../../constants/data/Students';

const Analyse = () => {
    const classes = useStyles();
    const [admn, setAdmn] = useState();
    const [hasError, setHasError] = useState(false)
    const [students, setStudents] = useState(STUDENTS)
    const [dataToShow, setDataToShow] = useState(null);
    useEffect(() => {
        setStudents(STUDENTS);
    },[])
    const handleChange = (e) => {
        setAdmn(e.target.value);
        if(isNaN(admn))
            setHasError(true)
        else
            setHasError(false)
    }
    const handleSearch = () => {
        const result = students.find(data => data.admnNo == admn)
        setDataToShow(result);
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
                {dataToShow && <div className={classes.studentDetailsContainer}>
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
                }
            </div>
        </div>
    )
}

export default Analyse
