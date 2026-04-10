import React, {
  useEffect,
  useRef,
} from 'react';
import '../../css/sub1/Map.css';

const Map = () => {
  const container = useRef(null);

  useEffect(() => {
    const script =
      document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=e0a173553c1adb6e5c66e72946c70112&autoload=false';
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const options = {
          center:
            new window.kakao.maps.LatLng(
              36.3317082508479,
              127.435993263371,
            ),
          level: 3,
        };

        const map =
          new window.kakao.maps.Map(
            container.current,
            options,
          );

        const marker =
          new window.kakao.maps.Marker({
            position: options.center,
          });

        marker.setMap(map);
      });
    };
  }, []);

  return (
    <div className="mapInner">
      <div
        className="mapBox"
        ref={container}
      ></div>
    </div>
  );
};

export default Map;
