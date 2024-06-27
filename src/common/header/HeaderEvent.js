import { useEffect, useState } from 'react';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1024px)').matches);

    useEffect(() => {
        const resizeChk = () => setIsMobile(window.matchMedia('(max-width: 1024px)').matches);

        window.addEventListener('resize', resizeChk);
        
        return () => window.removeEventListener('resize', resizeChk);
    }, []);

    return isMobile;
};

export const gnbMouse = (e, isEnter, isMobile) => {
    const target = e.currentTarget;
    const depth2 = target.querySelector('.depth2');

    if (!isMobile && depth2) {
        depth2.style.cssText = `
        max-height: ${isEnter ? depth2.scrollHeight + 'px' : '0'};
        transition: max-height 0.4s ease;
      `;
    }
};

export const gnbClick = (e, setIsChecked) => {
    const target = e.currentTarget.querySelector('a');
    const depth2s = document.querySelectorAll('.depth2');
    const depth2 = target.closest('li').querySelector('.depth2');

    if (!depth2) {
        setIsChecked(false);
        depth2s.forEach(v => v.classList.remove('on'));
    } else {
        depth2.classList.toggle('on');
    }

    if (target !== e.target) setIsChecked(false);
};
