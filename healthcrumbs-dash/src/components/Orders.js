import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import GetAppIcon from '@material-ui/icons/GetApp';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Jun, 2019', 'Ved Clinic', 'MS Pandey', 'Metformin', 500),
  createData(1, '23 Jun, 2019', 'Ved Clinic', 'US Pandey', 'Meglitinides', 700),
  createData(2, '30 Jun, 2019', 'TriVed Clinic', 'SS Pandey', 'Meglitinides', 200),
  createData(3, '15 Jul, 2019', 'Ved Clinic', 'LS Pandey', 'Meglitinides', 1000),
  createData(4, '30 Jul, 2019', 'TwoVed Clinic', 'BS Pandey', 'Crocin', 3000),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Visits</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Clinic</TableCell>
            <TableCell>Doctor</TableCell>
            <TableCell>Prescription</TableCell>
            <TableCell align="right">Expenses</TableCell>
            <TableCell align="left">Download Prescription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell><GetAppIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See past presciptions
        </Link>
      </div>
    </React.Fragment>
  );
}