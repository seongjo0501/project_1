import React, { memo } from "react";
import { useLocation } from "react-router-dom";

const View = memo(() => {
    const location = useLocation();
    const { item } = location.state || {}; // 전달된 데이터를 받음

    return (
        <div>
            <h2>View</h2>
            {item ? (
                <div>
                    <p>상품명: {item.name}</p>
                    <p>가격: {item.price} 원</p>
                    <img src={item.thumb} alt={item.name} />
                </div>
            ) : (
                <p>데이터가 없습니다.</p>
            )}
        </div>
    );
});

export default View;
