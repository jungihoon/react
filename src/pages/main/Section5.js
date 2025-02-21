import React from 'react';
import '../../css/Section5.css';
// import train from "../../images/vr/Train.png";
import { RiArrowRightUpLine } from "react-icons/ri";

function Section5() {
    return (
        <section className='vr'>
            <h3 className='hidden'>VR 투어</h3>   
              <div className='inner'>
                  <p className='text1'>VR Tour</p>
                  <p className='text2'>VR로 체험하는<br/>
                                생생한 기차 내부 시설</p>
              </div>
            <div className='test'>
                <div></div>
                        <ul>
                            <li>
                                <a href='#none' >KTX 실내 VR<span><RiArrowRightUpLine /></span></a>
                                    <div className="map_point">
                                        <span></span>
                                        <span></span>
                                        <em></em>
                                    </div>
                            </li>

                            <li>
                                <a href='#none' >KTX-이음<span><RiArrowRightUpLine /></span></a>                                  
                                     <div className="map_point">
                                        <span></span>
                                        <span></span>
                                        <em></em>
                                    </div>
                            </li>

                            <li>
                                <a href='#none' >KTX-산천 VR<span><RiArrowRightUpLine /></span></a>
                                    <div className="map_point">
                                        <span></span>
                                        <span></span>
                                        <em></em>
                                    </div>
                            </li>

                        </ul>  
            </div>
        </section>
    );
  }

  export default Section5;

  