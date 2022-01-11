import { Button, OutlinedInput, TextField } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
import { TabContext, TabPanel } from '@mui/lab';
import React, { useState, useEffect, useRef } from 'react'
import { useStyles } from './css/Analyse.css'
import { STUDENTS } from '../../constants/data/Students';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import LinearBuffer from '../GlobalComponents/LinearLoader';
import ReactToPrint from "react-to-print";
import {useHistory} from 'react-router-dom';
import emailjs from '@emailjs/browser';
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
    const [email,setEmail] = useState('');
    const redirect = useHistory();
    let componentRef = useRef();
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
        console.log(dataToShow)
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
    const createChart = (subject, width = '45%') => {
        return (
            <div className={classes.chart} style={{width: width}} >
                <HighchartsReact
                    highcharts={Highcharts}
                    options={createOptions(subject)}
                />
            </div>
        )
    }
 
    function sendMail() {
        const replyTo = 'sdmea@sdmea.com';
       const  details = {
        "name":dataToShow.name,   
        "email":dataToShow.tenthPercent,
    "reply_to":replyTo,
    "score" : 20,
    };
    
        emailjs
          .send(
            "service_6aed515",
            "template_xf3fx9k",
            details,
            "user_mjBe7qTYY8dr33SPkrIUE"
          )
          .then(
            response => {
              redirect.push("/dashboard");
             
            },
            err => {
            console.error(err);
            
            }
          );
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
    const Printable = () => {
        return (
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
            <div>
            <div style={{ display: 'flex' }}>{dataToShow.isOptedBio && createChart('Bio', '100%')} {dataToShow.isOptedMaths && createChart('Maths', '100%')}</div>
            {createChart('Eng', '100%')}
            {createChart('Phy', '100%')}
            {createChart('Chem', '100%')}
            </div>
            </>
        )
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
                                <div style={{textAlign:'center' ,margin: 10}}>
                                    <TextField  style={{width:300,margin:10}} type='email' placeHolder='student@email.com' onChange={(e)=>(setEmail(e.target.value))}></TextField>
                                    <Button onClick={()=>sendMail()} variant='contained' color='primary'>SEND REPORT</Button>
                                </div>
                                <div style={{ width: '80%', }}>
                                    <TabPanel value="1"><div style={{ display: 'flex' }}>{dataToShow.isOptedBio && createChart('Bio')} {dataToShow.isOptedMaths && createChart('Maths')}</div></TabPanel>
                                    <TabPanel value="2">{createChart('Eng')}</TabPanel>
                                    <TabPanel value="3">{createChart('Phy')}</TabPanel>
                                    <TabPanel value="4">{createChart('Chem')}</TabPanel>
                                </div>
                            </TabContext>
                            <div style={{ display: "none" }}>
                                <div ref={(el) => (componentRef = el)}>
                                <Printable />
                                </div>
                            </div>
                            <ReactToPrint
                                trigger={() => <Button className={classes.btn}>Generate Report</Button>}
                                content={() => componentRef}
                            />
                            
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
