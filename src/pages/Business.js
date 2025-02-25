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

  const openReport = [
    { open: "2025.01.01.", local: "동해선(영덕∼삼척) 개통", open2: "2024.11.30.", local2: "중부내륙선(충주∼문경) 개통" },
    { open: "2024.11.02.", local: "서해선(서화성∼홍성) 개통", open2: "2021.12.31.", local2: "중부내륙선(부발~충주) 개통" },
    { open: "2021.01.05.", local: "중앙선(원주~제천/도담~단촌)", open2: "2018.01.26.", local2: "동해선(포항~영덕) 개통" },
    { open: "2017.12.22.", local: "강릉선 개통", open2: "2015.04.02.", local2: "호남고속선 · 동해선 개통" },
    { open: "2010.11.01.", local: "경부고속철도 2단계구간 개통", open2: "2010.03.02.", local2: "KTX-산천 영업개시" },
    { open: "2004.04.01.", local: "고속철도(KTX)개통", open2: "2004.03.24.", local2: "호남선복선전철" },
    { open: "1997.02.20.", local: "영동선전철(영주~강릉)", open2: "1980.10.17.", local2: "충북선복선(조치원~봉양)" },
    { open: "1975.12.05.", local: "영동선(철암~북평)	", open2: "1973.10.16.", local2: "태백선(제천~고한)" },
    { open: "1968.02.07.", local: "경전선(진주~광양)	", open2: "1966.11.09.", local2: "경북선(영주~예천)" },
    { open: "1966.01.19.", local: "고한선(예미~고한)", open2: "1965.09.18.", local2: "경인선(영등포~인천)" },
    { open: "1963.08.20.", local: "서울교외선(능곡~의정부)	", open2: "1955.12.31.", local2: "영암선(영주~철암)" },
    { open: "1942.04.01.", local: "중앙선(청량리~경주)	", open2: "1939.07.25.", local2: "경춘선(성동~춘천)" },
    { open: "1936.12.16.", local: "전라선(익산~여수)	", open2: "1931.08.01.", local2: "장항선(천안~장항)" },
    { open: "1929.12.25.", local: "충북선(조치원~충주)", open2: "1914.08.16.", local2: "경원선(용산~원산)" },
    { open: "1914.01.11.", local: "호남선(대전~목포)", open2: "1906.04.03.", local2: "경의선(서울~신의주)" },
    { open: "1905.01.01.", local: "경부선(서울~부산)", open2: "1899.09.18.", local2: "경인선(노량진~제물포)" },
  ];

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

          <div className="business_bot">
            {" "}
            <h4>간선여객 연도별 개통현황</h4>
            <table className="offer table">
              <thead>
                <tr>
                  <th>개통일</th>
                  <th>운행구간</th>
                  <th>개통일</th>
                  <th>운행구간</th>
                </tr>
              </thead>
              <tbody>
                {openReport.map((item, index) => (
                  <tr key={index}>
                    <td>{item.open}</td>
                    <td>{item.local}</td>
                    <td>{item.open2}</td>
                    <td>{item.local2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
