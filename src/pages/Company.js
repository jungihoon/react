import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import '../css/Company.css'
import sub1_bg from '../images/sub1/sub1_bg.jpg';

import Management from './sub1/Management';
import Ceo from './sub1/Ceo';
import Map from './sub1/Map';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


 function Company(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ComTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
    <section className='sub1'>
     
      <div className='sub1_top'>
        <strong>공사소개</strong>
      </div>
         <div className='title'>
            <h3>공사소개</h3>
            <p>Station Location</p>
          </div>
      <Box>
        <Box sx={{ margin:'100px auto', textAlign:'center'} }>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{width:'40%',fontSize:'1.2rem', fontWeight:'500'}} label="경영가치체계" {...Company(0)} />
            <Tab sx={{width:'40%',fontSize:'1.2rem', fontWeight:'500'}}  label="우리들의 이야기" {...Company(1)} />
            <Tab sx={{width:'40%',fontSize:'1.2rem', fontWeight:'500'}}  label="찾아오시는 길" {...Company(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Management />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Ceo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Map />
        </CustomTabPanel>
      </Box>
    </section>
  

  );
}
