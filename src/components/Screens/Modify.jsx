import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { useStyles } from './css/Modify.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const Modify = ({
    students
}) => {
    const classes = useStyles();
    
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
          {students.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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

        </div>
    )
}

const mapStateToProps = state => {
    return{
        students: state.students
    }
}

export default withRouter(connect(mapStateToProps)(Modify));
