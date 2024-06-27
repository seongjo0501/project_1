// 1024px기준으로 Tablet 변경
// Tablet부터 Mobile 이벤트 발생 (click 등등)
let isMobile = window.matchMedia("(max-width: 1024px)").matches;

window.addEventListener("resize", () => {
    isMobile = window.matchMedia("(max-width: 1024px)").matches;
});

// PC 마우스 이벤트
export const gnbMouse = (e, isEnter) => {
    const target = e.currentTarget;
    const depth2 = target.querySelector(".depth2");

    if (depth2) setDepth2(depth2, isEnter);
};

const setDepth2 = (el, isEnter) => {
    if (isEnter && !isMobile) {
        el.style.cssText = `
            max-height: ${el.scrollHeight}px;
        `;
    } else if (!isEnter && !isMobile) {
        el.style.cssText = `
            max-height: 0px;
        `;
    }
};

// Mobile 클릭 이벤트
export const gnbClick = (e) => {
    const target = e.currentTarget;

    const depth2All = document.querySelectorAll(".depth2");
    const depth2 = target.querySelector(".depth2");

    if (isMobile && depth2) {
        depth2All.forEach((v) => v.classList.remove("on"));
        depth2.classList.add("on");
    } else {
        depth2All.forEach((v) => v.classList.remove("on"));
    }
};
