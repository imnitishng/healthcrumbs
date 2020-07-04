import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Label, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import Title from './Title';

const data = [
  {date: 1, You: 8, World: 7.9},
  {date: 2, You: 6, World: 2.3},
  {date: 3, You: 1, World: 2.3},
  {date: 4, You: 5, World: 3.45},
  {date: 5, You: 4, World: 4},
  {date: 6, You: 3, World: 3.0},
  {date: 7, You: 2, World: 9.1},
  {date: 8, You: 8, World: 7},
  {date: 9, You: 9, World: 7.4},
  {date: 10, You: 9, World: 7.3},
  {date: 11, You: 8, World: 6.2},
  {date: 12, You: 3, World: 2.3},
  {date: 13, You: 3, World: 3.0},
  {date: 14, You: 2, World: 9.1},
  {date: 15, You: 8, World: 6},
  {date: 16, You: 8, World: 7.4},
  {date: 17, You: 2, World: 7.3},
  {date: 18, You: 5, World: 6.2},
  {date: 19, You: 4, World: 2.3}
]

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>This Month</Title>
      <ResponsiveContainer>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date">
            <Label value="Day" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'Score', angle: -90, position: 'insideLeft', offset: 10 }}/>
          <Tooltip />
          <Area type="monotone" dataKey="You" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="World" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}