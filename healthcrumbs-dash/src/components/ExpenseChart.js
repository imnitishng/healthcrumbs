import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {Label, AreaChart, Area, XAxis, ResponsiveContainer, YAxis, CartesianGrid, Tooltip} from 'recharts';
import Title from './Title';

const data = [
  {week: 1, app: 500, meds: 300, misc: 100},
  {week: 2, app: 0, meds: 900, misc: 0},
  {week: 3, app: 0, meds: 600, misc: 50},
  {week: 4, app: 0, meds: 500, misc: 220},
  {week: 5, app: 1000, meds: 100, misc: 300},
  {week: 6, app: 500, meds: 300, misc: 50},
  {week: 7, app: 500, meds: 300, misc: 100},
  {week: 8, app: 300, meds: 400, misc: 30},
  {week: 9, app: 100, meds: 100, misc: 100},
  {week: 10, app: 0, meds: 400, misc: 500},
  {week: 11, app: 0, meds: 1200, misc: 100},
  {week: 12, app: 10, meds: 0, misc: 520},
  {week: 13, app: 30, meds: 1400, misc: 50},
  {week: 14, app: 50, meds: 1000, misc: 0},
  {week: 15, app: 0, meds: 800, misc: 10},
  {week: 16, app: 0, meds: 400, misc: 50},
  {week: 17, app: 60, meds: 500, misc: 30},
  {week: 18, app: 90, meds: 1300, misc: 100},
  {week: 19, app: 0, meds: 1200, misc: 100}
]

export default function ExpenseChart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Expenses </Title>
      <ResponsiveContainer>
        <AreaChart width={600} height={400} data={data}
                margin={{top: 10, right: 30, left: 0, bottom: 10}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="week">
                <Label value="Week" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis/>
            <Tooltip/>
            <Area type='monotone' dataKey='app' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area type='monotone' dataKey='meds' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='misc' stackId="1" stroke='#ffc658' fill='#ffc658' />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
