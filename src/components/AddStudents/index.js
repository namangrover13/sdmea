import React, {useState} from 'react';
import {Button, CircularProgress, Grid, TextField, Typography} from "@material-ui/core";
import './index.css'
import {Toolbar} from "@mui/material";
import axios from "axios";

const currencies = [
    {
        value: 'Male',
        label: '🙎🏼‍',

    },
    {
        value: 'Female',
        label: '👩'

    },
    {
        value: 'Others',
        label: '🏳‍🌈'
    }
];


function AddForm() {
    const [currentIndex, setCurrentindex] = useState();
    const [name, setName] = useState();
    const [Gender, setGender] = useState('Male');
    const [Age, setAge] = useState();
    const [tenthPer, setTenthPerc] = useState();
    const [optedBio, setOptedBio] = useState(false);
    const [optedMath, setOptedMath] = useState(false);
    const [loading, setloading] = useState(false);
    const [ut1, setut1] = useState({math: null, bio: null, phy: "", chem: "", eng: ""});
    const [ut2, setut2] = useState({math: null, bio: null, phy: "", chem: "", eng: ""});
    const [ut3, setut3] = useState({math: null, bio: null, phy: "", chem: "", eng: ""});
    const [ut4, setut4] = useState({math: null, bio: null, phy: "", chem: "", eng: ""});
    const [halfyearly, sethalfyearly] = useState({math: null, bio: null, phy: "", chem: "", eng: ""});
    const [finals, setfinals] = useState({math: null, bio: null, phy: "", chem: "", eng: ""});
    const handleChangeMar = e => {
        const {name, value} = e.target;
        setut1(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeMarUt2 = e => {
        const {name, value} = e.target;
        setut2(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeMarUt3 = e => {
        const {name, value} = e.target;
        setut3(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeMarUt4 = e => {
        const {name, value} = e.target;
        setut4(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeMarHy = e => {
        const {name, value} = e.target;
        sethalfyearly(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeMarFinals = e => {
        const {name, value} = e.target;
        setfinals(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleSubmit = async () => {
        setloading(!loading);

        await axios.get('http://localhost:3090/marks').then((data) => {
            let length = data.data.length;
            let lastindex = data.data[length - 1].admnNo;
            setCurrentindex(lastindex + 1);
        })
        const details = {
            "admnNo": currentIndex,
            "name": name,
            "gender": Gender,
            "age": Age,
            "tenthPercentage": tenthPer,
            "standard": "XI",
            "isOptedBio": optedBio,
            "isOptedMath": optedMath,
            "marks": {
                "utOne": ut1,
                "utTwo": ut2,
                "utThree": ut3,
                "utFour": ut4,
                "halfYearly": halfyearly,
                "final": finals
            }
        }
        await axios.post(
            'http://localhost:3090/marks',
            details,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            if (response.statusText == 'Created') setloading(!loading)

        }).catch(error => {
            setloading(false)
            window.alert('Please specify all fields');
        })
    }

    return (
        <>
            <Grid container spacing={2}>

                <Grid item xs={12}><Typography style={{textAlign: 'center', fontWeight: 900, fontSize: 'larger'}}>ADD
                    STUDENTS</Typography></Grid>

                <Grid item xs={6}>
                    <TextField type={'text'} name={'name'} variant={'outlined'} fullWidth
                               onChange={(e) => setName(e?.target?.value)}
                               label={'Name'}></TextField>

                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        label="Gender"
                        variant={'outlined'}

                        value={Gender}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label} {option.name}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField type={'number'} name={'Age'} variant={'outlined'} fullWidth
                               onChange={(e) => setAge(e?.target?.value)}
                               label={'Age'}></TextField>

                </Grid>
                <Grid item xs={6}>
                    <TextField type={'number'} name={'tenthPerc'} variant={'outlined'}
                               onChange={(e) => setTenthPerc(e?.target?.value)}
                               label={'10th %'}></TextField>

                </Grid>
                <Grid item xs={3} alignContent={'center'}>

                    <Button variant={'contained'} onClick={() => setOptedBio(!optedBio)}
                            className={optedBio ? 'green' : 'red'}>Opted Bio</Button>
                </Grid>
                <Grid item xs={3} alignContent={'center'}>
                    <Button variant={'contained'} onClick={() => setOptedMath(!optedMath)}
                            className={optedMath ? 'green' : 'red'}>Opted Math</Button>
                </Grid>
                <Grid item xs={6}></Grid>

                <Grid item xs={2} alignItems={'center'} justifyContent={'center'} style={{marginTop: 10}}><Typography
                    variant={'h5'} style={{marginTop: 10}}>Unit Test I</Typography></Grid>
                {optedMath ? <Grid item xs={2}> <TextField type={'number'} name={'math'} variant={'outlined'} fullWidth
                                                           onChange={handleChangeMar}
                                                           label={'Math'}></TextField></Grid> :
                    <Grid item xs={2}></Grid>}
                <Grid item xs={2}> <TextField type={'number'} name={'eng'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMar}
                                              label={'English'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'chem'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMar}
                                              label={'Chem'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'phy'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMar}
                                              label={'Physics'}></TextField></Grid>
                {optedBio ? <Grid item xs={2}> <TextField type={'number'} name={'bio'} variant={'outlined'} fullWidth
                                                          onChange={handleChangeMar}
                                                          label={'Bio'}></TextField></Grid> : <Grid item xs={2}></Grid>}

                <Grid item xs={2} alignItems={'center'} justifyContent={'center'}><Typography variant={'h5'}
                                                                                              style={{marginTop: 10}}>Unit
                    Test II</Typography></Grid>
                {optedMath ? <Grid item xs={2}> <TextField type={'number'} name={'math'} variant={'outlined'} fullWidth
                                                           onChange={handleChangeMarUt2}
                                                           label={'Math'}></TextField></Grid> :
                    <Grid item xs={2}></Grid>}
                <Grid item xs={2}> <TextField type={'number'} name={'eng'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarUt2}
                                              label={'English'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'chem'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarUt2}
                                              label={'Chem'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'phy'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarUt2}
                                              label={'Physics'}></TextField></Grid>
                {optedBio ? <Grid item xs={2}> <TextField type={'number'} name={'bio'} variant={'outlined'} fullWidth
                                                          onChange={handleChangeMarUt2}
                                                          label={'Bio'}></TextField></Grid> : <Grid item xs={2}></Grid>}

                <Grid item xs={2} alignItems={'center'} justifyContent={'center'}><Typography variant={'h5'}
                                                                                              style={{marginTop: 10}}>Half
                    Yearly</Typography></Grid>
                {optedMath ? <Grid item xs={2}> <TextField type={'number'} name={'math'} variant={'outlined'} fullWidth
                                                           onChange={handleChangeMarHy}
                                                           label={'Math'}></TextField></Grid> :
                    <Grid item xs={2}></Grid>}
                <Grid item xs={2}> <TextField type={'number'} name={'eng'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarHy}
                                              label={'English'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'chem'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarHy}
                                              label={'Chem'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'phy'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarHy}
                                              label={'Physics'}></TextField></Grid>
                {optedBio ? <Grid item xs={2}> <TextField type={'number'} name={'bio'} variant={'outlined'} fullWidth
                                                          onChange={handleChangeMarHy}
                                                          label={'Bio'}></TextField></Grid> : <Grid item xs={2}></Grid>}

                <Grid item xs={2} alignItems={'center'} justifyContent={'center'}><Typography variant={'h5'}
                                                                                              style={{marginTop: 10}}>Unit
                    Test III</Typography></Grid>
                {optedMath ? <Grid item xs={2}> <TextField type={'number'} name={'math'} variant={'outlined'} fullWidth
                                                           onChange={handleChangeMarUt3}
                                                           label={'Math'}></TextField></Grid> :
                    <Grid item xs={2}></Grid>}
                <Grid item xs={2}> <TextField type={'number'} name={'eng'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarUt3}
                                              label={'English'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'chem'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarUt3}
                                              label={'Chem'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'phy'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarUt3}
                                              label={'Physics'}></TextField></Grid>
                {optedBio ? <Grid item xs={2}> <TextField type={'number'} name={'bio'} variant={'outlined'} fullWidth
                                                          onChange={handleChangeMarUt3}
                                                          label={'Bio'}></TextField></Grid> : <Grid item xs={2}></Grid>}

                <Grid item xs={2} alignItems={'center'} justifyContent={'center'}><Typography variant={'h5'}
                                                                                              style={{marginTop: 10}}>Unit
                    Test IV</Typography></Grid>
                {optedMath ? <Grid item xs={2}> <TextField type={'number'} name={'math'} variant={'outlined'} fullWidth
                                                           onChange={handleChangeMarUt4}
                                                           label={'Math'}></TextField></Grid> :
                    <Grid item xs={2}></Grid>}
                <Grid item xs={2}> <TextField type={'number'} name={'eng'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarUt4}
                                              label={'English'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'chem'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarUt4}
                                              label={'Chem'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'phy'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarUt4}
                                              label={'Physics'}></TextField></Grid>
                {optedBio ? <Grid item xs={2}> <TextField type={'number'} name={'bio'} variant={'outlined'} fullWidth
                                                          onChange={handleChangeMarUt4}
                                                          label={'Bio'}></TextField></Grid> : <Grid item xs={2}></Grid>}

                <Grid item xs={2} alignItems={'center'} justifyContent={'center'}><Typography variant={'h5'}
                                                                                              style={{marginTop: 10}}>Final</Typography></Grid>
                {optedMath ? <Grid item xs={2}> <TextField type={'number'} name={'math'} variant={'outlined'} fullWidth
                                                           onChange={handleChangeMarFinals}
                                                           label={'Math'}></TextField></Grid> :
                    <Grid item xs={2}></Grid>}
                <Grid item xs={2}> <TextField type={'number'} name={'eng'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarFinals}
                                              label={'English'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'chem'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarFinals}
                                              label={'Chem'}></TextField></Grid>
                <Grid item xs={2}> <TextField type={'number'} name={'phy'} variant={'outlined'} fullWidth
                                              onChange={handleChangeMarFinals}
                                              label={'Physics'}></TextField></Grid>
                {optedBio ? <Grid item xs={2}> <TextField type={'number'} name={'bio'} variant={'outlined'} fullWidth
                                                          onChange={handleChangeMarFinals}
                                                          label={'Bio'}></TextField></Grid> : <Grid item xs={2}></Grid>}

                <Grid item xs={6}>
                    <Button variant={'outlined'} className={'btn-bl'} onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>
            {loading ? (<div className={'pgbar'}>
                <CircularProgress/></div>) : (<></>)

            }
        </>

    )

}

export default AddForm;
