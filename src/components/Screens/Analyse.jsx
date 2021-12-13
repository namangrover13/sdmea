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
                {dataToShow && dataToShow.admnNo}
            </div>
        </div>
    )
}

export default Analyse
