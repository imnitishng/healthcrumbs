import React from 'react';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();

  const [value, setValue] = React.useState({
    radio1: 'no',
    radio2: 'no',
    radio3: 'no',
    radio4: 'no'
  });
  const [numval, setNumValue] = React.useState(1);

  const handleChange = (event) => {
    // setValue(event.target.value);
    console.log(event.target.name)
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleNumChange = (event) => {
    // setValue(event.target.value);
    console.log(event.target.value)
    setNumValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Title>Daily check in</Title>
      <Typography component="span" variant="body1">
        1. Did you feel drowsy or tired while doing normal activities today?<br/>
        <FormControl component="fieldset">
          <RadioGroup aria-label="choice" name="radio1" value={value.name} onChange={handleChange} row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Typography>
      <Typography component="span" variant="body1">
        2. Did you feel excessive thirst today?<br/>
        <FormControl component="fieldset">
          <RadioGroup aria-label="choice" name="radio2" value={value.name} onChange={handleChange} row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Typography>
      <Typography component="span" variant="body1">
        3. Did you urinate more often today?<br/>
        <FormControl component="fieldset">
          <RadioGroup aria-label="choice" name="radio3" value={value.name} onChange={handleChange} row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Typography>
      <Typography component="span" variant="body1">
        4. Did you feel numbness or tingling sensation on your palm or toes?<br/>
        <FormControl component="fieldset">
          <RadioGroup aria-label="choice" name="radio4" value={value.name} onChange={handleChange} row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Typography>
      <Typography component="span" variant="body1">
        5. How would you rate your health throughout the day?<br/>
        <FormControl component="fieldset">
          <RadioGroup aria-label="choice" name="radio5" value={numval} onChange={handleNumChange} row>
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />
          </RadioGroup>
        </FormControl>
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        15 April, 2019
      </Typography>
      <div>
        <Link component="h4" color="primary" href="#" onClick={preventDefault}>
          Submit
        </Link>
      </div>
    </React.Fragment>
  );
}