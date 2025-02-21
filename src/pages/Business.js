import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../css/sub2.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Business() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="sub2">
      <div className="visual">
        <img src={require("../images/business/business06.jpg")} alt="" />
        <div className="visual_tit">
          <strong>주요사업</strong>
        </div>
      </div>
      <h2 className="hidden">주요사업</h2>
      <Box sx={{ width: "100%", margin: "0 auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="여객사업" {...a11yProps(0)} />
            <Tab label="광역사업" {...a11yProps(1)} />
            <Tab label="물류수송" {...a11yProps(2)} />
            <Tab label="해외사업" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="business_top">
            <div className="business_intro_txt">
              <span>
                지역과 지역을 연결하는 일반열차를 통해 <br />
                안전하고 편리한 여객 서비스를 제공합니다.
              </span>
              <p>
                2004년 4월 1일, 세계에서 다섯 번째로 개통한 고속열차는 ‘속도혁명, 경제혁명’을 예고하며 대한민국을 2시간대 생활권으로 만들었습니다.
                지난
                <br />
                20년간 시속 300km 이상의 속도로 쉼 없이 달려온 KTX는 1일 평균 이용객 23만 명의 대한민국 대표 교통수단입니다. 전국 100여개 간선 및
                <br />
                지선에서 운행하고 있는 일반열차는 지역과 지역을 촘촘하게 연결하고 지역 주민의 이동권을 보장하는 등 철도 공공성 확보에 기여하고
                있습니다.
                <br />
                여객사업본부는 고객 가치를 창출하고 미래 교통을 선도하여 ‘사람·세상·미래를 잇는 대한민국 철도’를 만들겠습니다.
              </p>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          광역사업
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          물류수송
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          해외사업
        </CustomTabPanel>
      </Box>
    </section>
  );
}

export default Business;
