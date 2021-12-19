import { Button, OutlinedInput, TextField } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
import { TabContext, TabPanel } from '@mui/lab';
import React, { useState, useEffect } from 'react'
import { useStyles } from './css/Analyse.css'
import { STUDENTS } from '../../constants/data/Students';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import LinearBuffer from '../GlobalComponents/LinearLoader';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
const Analyse = () => {
    const classes = useStyles();
    const [admn, setAdmn] = useState();
    const [hasError, setHasError] = useState(false)
    const [students, setStudents] = useState(STUDENTS)
    const [dataToShow, setDataToShow] = useState(null);
    const [isShow, setIsShow] = useState(false);
    const [isShowLoader, setIsShowLoader] = useState(false);
    const [isShowReview, setIsShowReview] = useState(false);
    const [remark, setRemark] = useState("")
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
    const [value, setValue] = useState('1');
    const handleTabsChange = (event, newValue) => {
        setValue(newValue);
    };
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
    const createOptions = (subject) => {
        return {
            width: 100,
            title: {
                text: subject
            },
            series: [{
                type: 'column',
                color: 'rgb(152, 0, 67)',
                data: getMarksArrayForSubject(dataToShow.marks, subject)
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
                },
                min: 0,
                max: 100
            }
        }
    }
    const createChart = (subject) => {
        return (
            <div className={classes.chart}>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={createOptions(subject)}
                />
            </div>
        )
    }
    const handleAnalyseClick = () => {
        setIsShowLoader(true);
        setTimeout(() => {
            setIsShowLoader(false);
            setIsShow(true);
        }, 5000);
    }
    const handleShowRemark = () => {
        setIsShowReview(true);
    }
    const addRemark = (e) => {
        setRemark(e.target.value)
    }
    const calcPercent = (marks) => {

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
                        {!isShow && <Button className={classes.btn} onClick={handleAnalyseClick}>Analyse subject-wise</Button>}
                        {isShowLoader && <LinearBuffer time={5} />}
                        {isShow && <div style={{ bgcolor: 'background.paper', display: "block", height: 'inherit', justifyContent: 'space-between', margin: '20px 0' }}>
                            <TabContext value={value}>
                                <div style={{ background: '#aaa' }}>
                                    <Tabs
                                        orientation={"horizontal"}
                                        value={value}
                                        onChange={handleTabsChange}
                                        aria-label="Horizontal tabs example"
                                        sx={{ borderRight: 1, borderColor: 'divider' }}
                                    >
                                        <Tab label="Maths/Biology" value="1" {...a11yProps(1)} />
                                        <Tab label="English" value="2" {...a11yProps(2)} />
                                        <Tab label="Physics" value="3" {...a11yProps(3)} />
                                        <Tab label="Chemistry" value="4" {...a11yProps(4)} />
                                    </Tabs>
                                </div>
                                <div style={{ width: '80%', }}>
                                    <TabPanel value="1"><div style={{ display: 'flex' }}>{dataToShow.isOptedBio && createChart('Bio')} {dataToShow.isOptedMaths && createChart('Maths')}</div></TabPanel>
                                    <TabPanel value="2">{createChart('Eng')}</TabPanel>
                                    <TabPanel value="3">{createChart('Phy')}</TabPanel>
                                    <TabPanel value="4">{createChart('Chem')}</TabPanel>
                                </div>
                            </TabContext>
                        </div>}
                        {!isShowReview && <Button onClick={handleShowRemark} className={classes.btn}>Add Remarks</Button>}
                        {isShowReview && <div>
                            <OutlinedInput
                                style={{ margin: '10px 40px', width: '90%' }}
                                id="remark"
                                label="Remark"
                                value={remark}
                                helperText="Click to add remark"
                                onChange={addRemark}
                            />
                            <Button className={classes.btn}>Post</Button>
                        </div>}

                    </>
                }
            </div >
        </div >
    )
}

export default Analyse
