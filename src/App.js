import React from 'react';
import Draggable3DModel from './Draggable3DModel';

const App = () => {
    // 이미지 파일들이 들어있는 폴더 경로
    const imagesContext = require.context('./images', false, /\.(jpg|jpeg|png|gif)$/);

    // require.context()로 가져온 파일 목록을 배열로 변환
    const images = imagesContext.keys().map(imagesContext);

    return (
        <div>
            <h1>차량 3D 모델 보기</h1>
            <Draggable3DModel images={images} />
        </div>
    );
};

export default App;