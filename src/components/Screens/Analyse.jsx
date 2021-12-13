import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useStyles } from './css/Analyse.css'

const Analyse = () => {
    const classes = useStyles();
    const [admn, setAdmn] = useState();
    const [hasError, setHasError] = useState(false)
    const handleChange = (e) => {
        setAdmn(e.target.value);
        if(isNaN(admn))
            setHasError(true)
        else
            setHasError(false)
    }
    const handleSearch = () => {

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
        </div>
    )
}

export default Analyse
