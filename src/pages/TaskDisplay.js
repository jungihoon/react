import React from 'react'
//import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import KakaoMap from './sub5/kakaoMap';

const TaskDisplay = ({ station }) => {
    const itemData = [
        {
            img: `./sub5/${station.place1img}`,
            title: station.place1name,
            author: `위치 : ${station.place1address}\n 안내전화 : ${station.place1tel}`,
        },
        {
            img: `./sub5/${station.place2img}`,
            title: station.place2name,
            author: `위치 : ${station.place2address}\n 안내전화 : ${station.place2tel}`,
        },
        {
            img: `./sub5/${station.place3img}`,
            title: station.place3name,
            author: `위치 : ${station.place3address}\n 안내전화 : ${station.tel}`,
        },
        {
            img: `./sub5/${station.place4img}`,
            title: station.place4name,
            author: `위치 : ${station.place4address}\n 안내전화 : ${station.tel}`,
        },
    ];


    return (
        <div className="output_box">
            <h4 className='staName'>{station.stationName}</h4>

            <div className='output_map'>
                <p className='subtitle'>출입구정보</p>
                <div className="map_container">
                    <KakaoMap address={station.address} />
                </div>
            </div>

            <div className='output_info'>
                <p className='subtitle'>기본정보</p>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">주소</th>
                            <th scope="col">연락처</th>
                            <th scope="col">노선</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{station.address}</td>
                            <td>{station.tel}</td>
                            <td>{station.line}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className='output_facility'>
                <p className='subtitle'>층별 시설안내</p>
        
                <ul className="facility_list">
                    {itemData.map((item, index) => (
                        <li key={index} className="facility_item">
                            <img
                                src={item.img}
                                alt={item.title}
                            />
                            <div className="facility_info">
                                <dl>
                                    <dt>{item.title}</dt>
                                    <dd>{item.author}</dd>
                                </dl>
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    
    );
}



export default TaskDisplay;



