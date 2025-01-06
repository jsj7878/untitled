import React, { useState, useRef, useEffect } from 'react';

const Draggable3DModel = ({ images }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = images.length;
    const containerRef = useRef(null);

    const startDrag = (e) => {
        setIsDragging(true);
        setStartX(e.pageX || e.touches[0].pageX);
    };

    const drag = (e) => {
        if (!isDragging) return;

        const x = e.pageX || e.touches[0].pageX;
        const move = x - startX;  // 드래그된 거리 계산

        // 이미지 이동에 따른 인덱스 변경
        const indexChange = Math.round(move / (containerRef.current.offsetWidth / totalImages));
        const newIndex = (currentImageIndex + indexChange) % totalImages;

        // 인덱스를 0과 (totalImages - 1) 사이로 조정
        setCurrentImageIndex((newIndex + totalImages) % totalImages);

        setStartX(x);  // 시작 x값을 계속 업데이트
    };

    const stopDrag = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('mousedown', startDrag);
        container.addEventListener('touchstart', startDrag);
        container.addEventListener('mousemove', drag);
        container.addEventListener('touchmove', drag);
        container.addEventListener('mouseup', stopDrag);
        container.addEventListener('touchend', stopDrag);
        container.addEventListener('mouseleave', stopDrag);

        return () => {
            container.removeEventListener('mousedown', startDrag);
            container.removeEventListener('touchstart', startDrag);
            container.removeEventListener('mousemove', drag);
            container.removeEventListener('touchmove', drag);
            container.removeEventListener('mouseup', stopDrag);
            container.removeEventListener('touchend', stopDrag);
            container.removeEventListener('mouseleave', stopDrag);
        };
    }, [isDragging, startX, currentImageIndex]);

    return (
        <div
            ref={containerRef}
            style={{
                width: '400px',
                height: '400px',
                overflow: 'hidden',
                cursor: isDragging ? 'grabbing' : 'grab',
                position: 'relative',
                background: '#f0f0f0',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    transition: 'transform 0.1s ease-out',
                }}
            >
                <img
                    src={images[currentImageIndex]}  // 현재 이미지 인덱스를 사용하여 이미지 변경
                    alt="3D Model"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.1s ease-out',
                        display: 'block',
                    }}
                />
            </div>
        </div>
    );
};

export default Draggable3DModel;
