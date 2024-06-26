// import { useEffect, useState } from "react";

// const HeaderEvent = () => {
//     const [screenSize, setScreenSize] = useState(window.innerWidth);
//     const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 1024px)").matches);

//     const updateScreenSize = () => {
//         setScreenSize(window.innerWidth);
//         setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
//     };

//     const mouseEvent = (e, action) => {
//         const target = e.currentTarget;
//         const depth2 = target.querySelector('.depth2');

//         if (screenSize > 1024 && !isMobile && depth2) {
//             // PC일 때
//             depth2.classList.toggle('on', action === 'add');
//             depth2.style.maxHeight = action === 'add' ? `${depth2.scrollHeight}px` : '0';
//         }
//     };

//     const clickEvent = (e) => {
//         const target = e.currentTarget;
//         const depth2Elements = document.querySelectorAll('.depth2');

//         if (screenSize <= 1024 && isMobile && depth2Elements) {
//             // Mobile일 때
//             depth2Elements.forEach((depth2) => {
//                 depth2.classList.remove('on');
//             });

//             const depth2 = target.querySelector('.depth2');
//             if (depth2) {
//                 depth2.classList.toggle('on');
//             }
//         }
//     };

//     useEffect(() => {
//         const navLinks = document.querySelectorAll("#gnb > li");

//         const addEventListeners = () => {
//             navLinks.forEach((link) => {
//                 if (!isMobile) {
//                     link.addEventListener("mouseenter", (e) => mouseEvent(e, 'add'));
//                     link.addEventListener("mouseleave", (e) => mouseEvent(e, 'remove'));
//                 }

//                 link.addEventListener("click", clickEvent);
//             });
//         };

//         const removeEventListeners = () => {
//             navLinks.forEach((link) => {
//                 if (!isMobile) {
//                     link.removeEventListener("mouseenter", (e) => mouseEvent(e, 'add'));
//                     link.removeEventListener("mouseleave", (e) => mouseEvent(e, 'remove'));
//                 }

//                 link.removeEventListener("click", clickEvent);
//             });
//         };

//         addEventListeners();

//         window.addEventListener('resize', updateScreenSize);

//         return () => {
//             removeEventListeners();
//             window.removeEventListener('resize', updateScreenSize);
//         };
//     }, [isMobile]);

//     useEffect(() => {
//         const navLinks = document.querySelectorAll("#gnb > li");

//         const addEventListeners = () => {
//             navLinks.forEach((link) => {
//                 if (!isMobile) {
//                     link.addEventListener("mouseenter", (e) => mouseEvent(e, 'add'));
//                     link.addEventListener("mouseleave", (e) => mouseEvent(e, 'remove'));
//                 }
//                 link.addEventListener("click", clickEvent);
//             });
//         };

//         const removeEventListeners = () => {
//             navLinks.forEach((link) => {
//                 if (!isMobile) {
//                     link.removeEventListener("mouseenter", (e) => mouseEvent(e, 'add'));
//                     link.removeEventListener("mouseleave", (e) => mouseEvent(e, 'remove'));
//                 }
//                 link.removeEventListener("click", clickEvent);
//             });
//         };

//         // 이벤트 리스너 재설정
//         removeEventListeners();
//         addEventListeners();
//     }, [isMobile]);

//     return null;
// };

// export default HeaderEvent;
