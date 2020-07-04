import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { ButtonGroup } from '@material-ui/core';

function preventDefault(event) {
  event.preventDefault();
}

export default function Medicines() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  
  const addMed1 = () => {
    setVal1(val1+1)
  }
  const remMed1 = () => {
    setVal1(val1-1)
  }
  const addMed2 = () => {
    setVal2(val2+1)
  }
  const remMed2 = () => {
    setVal2(val2-1)
  }
  const addMed3 = () => {
    setVal3(val3+1)
  }
  const remMed3 = () => {
    setVal3(val3-1)
  }
  const style = makeStyles({
    titleItemRight: {
      color: "white",
      backgroundColor: "blue",
      top: "50%",
      height: 30,
      float: "right",
      position: "relative",
      transform: "translateY(-50%)"
    }
  });

  return (
    <React.Fragment>
      <Title>Today's Dosage</Title>
      <Typography component="span" variant="body1">
        Paracetamol: {val1}     
      </Typography>
      <ButtonGroup size="small" disableElevation className={style.titleItemRight} variant="contained" color="primary">
        <Button onClick={addMed1}>Add</Button>
        <Button onClick={remMed1}>Remove</Button>
      </ButtonGroup>     
      <Typography component="span" variant="body1">
        Metformin: {val2}     
      </Typography>
      <ButtonGroup size="small" disableElevation variant="contained" color="primary">
        <Button onClick={addMed2}>Add</Button>
        <Button onClick={remMed2}>Remove</Button>
      </ButtonGroup>  
      <Typography component="span" variant="body1">
        Meglitinides: {val3}     
      </Typography>
      <ButtonGroup size="small" disableElevation variant="contained" color="primary">
        <Button onClick={addMed3}>Add</Button>
        <Button onClick={remMed3}>Remove</Button>
      </ButtonGroup>  
      <br/><br/>
      <div>
        <Link component="h3" color="primary" href="#" onClick={preventDefault}>
          Submit
        </Link>
      </div>           
    </React.Fragment>
  )
}