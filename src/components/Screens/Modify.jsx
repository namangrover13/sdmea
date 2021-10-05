import React, { useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { useStyles } from './css/Modify.css';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import Popup from '../GlobalComponents/Popup';
import { clearGetAllStudents, getAllStudents } from '../../store/actions/students/get-all-students';
import { clearUpdateStudent, updateStudent } from '../../store/actions/students/update-student';

const ModifyForm = (props) => {
  const data = props.data
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return(
    <div style={{display: 'flex', flexDirection: 'column', padding: 25}}>
      <TextField
          style={{margin: 20}}
          id="name"
          label="Name"
          defaultValue={data.name}
          value={data.name}
          // onChange={handleChange}
          helperText="Click to change Name"
        />
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        <TextField
          style={{margin: 20}}
          id="gender"
          label="Gender"
          defaultValue={data.gender}
          value={data.gender}
          // onChange={handleChange}
          helperText="Click to change Gender"
        />
        <TextField
          style={{margin: 20}}
          id="age"
          label="Age"
          defaultValue={data.age}
          value={data.age}
          // onChange={handleChange}
          helperText="Click to change Age"
        />
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        <TextField
          style={{margin: 20}}
          id="tenthPercent"
          label="10 %"
          defaultValue={data.tenthPercent}
          value={data.tenthPercent}
          // onChange={handleChange}
          helperText="Click to change 10th Percent"
        />
        <TextField
          style={{margin: 20}}
          id="standard"
          label="Standard"
          defaultValue={data.standard}
          value={data.standard}
          // onChange={handleChange}
          helperText="Click to change Standard"
        />
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '50px'}}>
        <Button className={props.btnClass} onClick={props.handleClose}>Cancel</Button>
        <Button className={props.btnClass} onClick={props.handleClose}>Done</Button>
      </div>
    </div>
  )
}

const Modify = ({
  getAllStudentsData,
  getAllStudents,
  clearGetAllStudents,
  updateStudent,
  clearUpdateStudent,
  updateStudentData
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();
  const handleClick = (row) => {
    setSelected(row)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Standard</TableCell>
              <TableCell align="center">10 %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getAllStudentsData.data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className={classes.tableRow}
                onClick={() => handleClick(row)}
              >
                <TableCell align="left" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.standard}</TableCell>
                <TableCell align="center">{row.tenthPercent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup open={open} onClose={handleClose} heading={"Edit Form"} >
              <ModifyForm data={selected} handleClose={handleClose} btnClass={classes.btnClass} />
      </Popup>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    getAllStudentsData: state.getAllStudentsReducer,
    updateStudentData: state.updateStudentReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllStudents: () => dispatch(getAllStudents()),
    clearGetAllStudents: () => dispatch(clearGetAllStudents()),
    updateStudent: (payload) => dispatch(updateStudent(payload)),
    clearUpdateStudent: () => dispatch(clearUpdateStudent()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modify);
