import React, { useState, useEffect } from 'react';
import '../css/sub5.css';

import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';
import TaskDisplay from './TaskDisplay';


function Place() {
  const [stations, setStations] = useState([]); //데이터베이스의 전체 문서들 저장
  const [station, setStation] = useState({}); //데이터베이스의  seoul 문서들 저장
  const [searchtext, setSearchtext] = useState(''); //검색 text 저장
  const [notext, setNotext] = useState(true); //검색데이터의 유무체크 

  const changeHandler = (e) => {
    setSearchtext(e.target.value);  //검색어 입력처리
  }

  useEffect(() => {
    getDocs(collection(db, "station")).then((snapshot) => {
      const loadObj = snapshot.docs.map((doc) => ({ ...doc.data() }));
      setStations(loadObj);
      const seoul = loadObj.find((s) => s.stationName === "서울역");
      setStation(seoul ?? loadObj[0]);
    });
  }, []);

  const searchHandler = (st, e) => {
    e.preventDefault();
    if (!st) {
      alert('검색어를 입력하세요.');
      return;
    }
    const filtered = stations.filter(
      (el) => el?.stationName?.includes(st)
    );
    if (filtered.length > 0) {
      setStation(filtered[0]);
      setNotext(true);
    } else {
      setNotext(false);
    }
    setSearchtext('');
  }

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      searchHandler(searchtext, e);
    }
  }

  return (
    <section className="sub5">
      <div className='sub5_top'>
      </div>
      
      <div className='sub5_wrap'>
        <div className="station">
          <div className='title'>
            <h3>역 위치정보</h3>
            <p>Station Information</p>
          </div>
        
          <div className="serch_box">
            <form>
              {/* <label htmlFor="title">역 명</label> */}
              <div className='search_nameWrap'>
                <input id="title" type="text" placeholder="찾으시는 역명을 입력하세요." value={searchtext} onChange={changeHandler} onKeyDown={(e) => enterHandler(e)} />
                  <div className='search_name'>
                    <span>서울역</span>
                    <span>부산역</span>
                    <span>동대구역</span>
                    <span>광주송정역</span>
                  </div>
              </div>

              <button id="btn" type="button" onClick={(e) => searchHandler(searchtext, e)}>검색</button>    
            </form>
        
            
            {
              notext ? <TaskDisplay station={station} /> : <p className='message'>검색된 역이 없습니다.</p>
            }
            
          </div>
        </div>
      </div>
    </section>
  );
}



export default Place;