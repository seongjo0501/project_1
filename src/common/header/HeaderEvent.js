let isMobile = window.matchMedia("(max-width: 1024px)").matches;

window.addEventListener("resize", () => {
    isMobile = window.matchMedia("(max-width: 1024px)").matches;
});

// PC
export const gnbMouse = (e, isEnter) => {
    const target = e.currentTarget;
    const depth2 = target.querySelector(".depth2");

    if (!isMobile && depth2) {
        depth2.style.cssText = `
            max-height: ${isEnter ? depth2.scrollHeight + "px" : "0"};
            transition: max-height 0.4s ease;
        `;
    }
};

// Mobile
export const gnbClick = (e, isChecked, setIsChecked) => {
    const target = e.currentTarget.querySelector("a");
    const depth2s = document.querySelectorAll(".depth2");
    const depth2 = target.closest("li").querySelector(".depth2");

    if (!depth2) {
        setIsChecked(false);
        depth2s.forEach(v => v.classList.remove('on'));
    };

    if (depth2) depth2.classList.toggle('on');

    if(target !== e.target) setIsChecked(false);
};