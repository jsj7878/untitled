import React from 'react';
import React360 from "./React360";
const App = () => {
    // 이미지 파일들이 들어있는 폴더 경로
    const carImages = [
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_200.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_201.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_202.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_203.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_204.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_205.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_206.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_207.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_208.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_209.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_210.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_211.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_212.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_213.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_214.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_215.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_216.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_217.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_218.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_219.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_220.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_221.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_222.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_223.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_224.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_225.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_226.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_227.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_228.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_229.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_230.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_231.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_232.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_233.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_234.JPG/dims/crop/3464x1520+188+840",
        "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/GJJ240620006906/PRD602_235.JPG/dims/crop/3464x1520+188+840"
    ];

    return (
        <div>
            <h1>차량 3D 모델 보기</h1>
            {/*<Draggable3DModel images={images} />*/}
            <React360 images={carImages} numImages={36} />
            {/*<React360Viewer*/}
            {/*    amount={24}*/}
            {/*    imagePath="./images"*/}
            {/*    fileName="image{index}.jpg"*/}
            {/*    boxShadow*/}
            {/*/>*/}
        </div>
    );
};


export default App;