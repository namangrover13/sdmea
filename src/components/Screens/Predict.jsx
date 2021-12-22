import React, { useState } from 'react'
import { useStyles } from './css/Predict.css'
import Button from '@material-ui/core/Button';
import { Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs } from '@material-ui/core';
import { TabContext, TabPanel } from '@mui/lab';
import { connect } from 'react-redux';
import { getAllStudents } from '../../store/actions/students/get-all-students';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const Predict = ({ getAllStudentsData }) => {
  const classes = useStyles();
  const [value, setValue] = useState('1');
  const [dataToShow, setDataToShow] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const createStudentsArray = (data, standard) => {

    const students = [];
    data.forEach((student) => {
      if (student.standard === standard)
        students.push(student);
    })
    return students;
  }
  const calcPercent = (utOne, utTwo, halfYearly, utThree, utFour, final) => {
    const keys = Object.keys(utOne);
    const marks = [];
    let percent = 1
    keys.forEach((key) => marks.push(utOne[key]))
    keys.forEach((key) => marks.push(utTwo[key]))
    keys.forEach((key) => marks.push(halfYearly[key]))
    keys.forEach((key) => marks.push(utThree[key]))
    keys.forEach((key) => marks.push(utFour[key]))
    keys.forEach((key) => marks.push(final[key]))
    let sum = 0;
    marks.forEach((mark) => {
      sum += mark;
    })
    percent = sum / marks.length;
    return percent
  }
  const topTenPerformers = (data) => {
    const topTen = []
    data.forEach((student) => {
      if (calcPercent(student.marks.utOne, student.marks.utTwo, student.marks.halfYearly, student.marks.utThree, student.marks.utFour, student.marks.finalYearly) > 83)
        topTen.push(student);
    })
    return topTen;
  }
  const topTen = topTenPerformers(getAllStudentsData.data)
  const eleventhStudents = createStudentsArray(getAllStudentsData.data, 'XI')
  const twelfthStudents = createStudentsArray(getAllStudentsData.data, 'XII')
  const sortAccordingToPercent = (data) => {
    let students = []
    data.forEach((student) => {
      const percent = calcPercent(student.marks.utOne, student.marks.utTwo, student.marks.halfYearly, student.marks.utThree, student.marks.utFour, student.marks.finalYearly);
      const percentChange = percent - student.tenthPercent;
      students.push({...student, percent, percentChange})
    })
    students.sort((a, b) => {
      var keyA = a.percent, keyB = b.percent;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    return students;
  }
  const eleventhSorted = sortAccordingToPercent(eleventhStudents);
  const twelfthSorted = sortAccordingToPercent(twelfthStudents);
  const StudentsTable = ({ data }) => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Standard</TableCell>
              <TableCell align="center">10 %</TableCell>
              <TableCell align="center">Current %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className={classes.tableRow}
              >
                <TableCell align="left" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.standard}</TableCell>
                <TableCell align="center">{row.tenthPercent}</TableCell>
                <TableCell align="center">{row.percent.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const MainScreen = ({students}) => {
    const [isShowTopTen, setIsShowTopTen] = useState(false);
    const [isShowTopTenImprovers, setIsShowTopTenImprovers] = useState(false);
    const [isShowTopTenLosers, setIsShowTopTenLosers] = useState(false);
    const [isShowConstant, setIsShowConstant] = useState(false);
    const [isShowScholars, setIsShowScholars] = useState(false);
    const sortAccordingToPercentChange = (data) => {
      const filtered = data.filter((student) => student.tenthPercent < student.percent)
      filtered.sort((a,b) => {
        var keyA = a.percentChange, keyB = b.percentChange;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
      });
      return filtered;
    }
    return (
      <>
      {!isShowTopTen && !isShowTopTenImprovers && !isShowTopTenLosers && !isShowConstant && !isShowScholars &&<div className={classes.btnsContainer}>
        <Button onClick={()=>setIsShowTopTen(true)} className={classes.btn}>Top 10 Performers</Button>
        <Button onClick={()=>setIsShowTopTenLosers(true)} className={classes.btn}>Top 10 Losers</Button>
        <Button onClick={()=>setIsShowTopTenImprovers(true)} className={classes.btn}>Top Improvers</Button>
        <Button onClick={()=>setIsShowConstant(true)} className={classes.btn}>Constant Performers</Button>
        <Button onClick={()=>setIsShowScholars(true)} className={classes.btn}>Scholarship Candidates</Button>
      </div>}
      {isShowTopTen && <StudentsTable data={students.slice(0,10)} />}
      {isShowTopTenLosers && <StudentsTable data={students.slice(-10,-1)} />}
      {isShowTopTenImprovers && <StudentsTable data={sortAccordingToPercentChange(students)} />}
      {isShowConstant && <StudentsTable data={students.filter(student => (student.tenthPercent - student.percent) < 5)} />}
      {isShowScholars && <StudentsTable data={students.filter(student => student.percent > 80 && student.tenthPercent > 75)} />}
      </>
    )
  }
  return (
    <div>
      {getAllStudentsData.data && <div style={{ bgcolor: 'background.paper', display: "block", height: 'inherit', justifyContent: 'space-between' }}>
        <TabContext value={value}>
          <div>
            <Tabs
              orientation={"horizontal"}
              value={value}
              onChange={handleChange}
              aria-label="Horizontal tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="Class 11" value="1" {...a11yProps(1)} />
              <Tab label="Class 12" value="2" {...a11yProps(2)} />
            </Tabs>
          </div>
          <div style={{ width: '80%', }}>
            <TabPanel value="1"><MainScreen students={eleventhSorted} /></TabPanel>
            <TabPanel value="2"><MainScreen  students={twelfthSorted} /></TabPanel>
          </div>
        </TabContext>
      </div>}

    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    getAllStudentsData: state.getAllStudentsReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllStudents: () => dispatch(getAllStudents()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Predict);
