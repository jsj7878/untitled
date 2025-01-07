import React from 'react';
import React360 from "./React360";

const App = () => {
    // 이미지 파일들이 들어있는 폴더 경로

    return (
        <div>
            <h1>차량 3D 모델 보기</h1>
            {/*<Draggable3DModel images={images} />*/}
            <React360 dir="images" numImages={24} />

        </div>
    );
};

export default App;