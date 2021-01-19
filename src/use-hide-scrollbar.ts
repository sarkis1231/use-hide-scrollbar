import { useEffect } from 'react';

function getScrollbarWidth() : number {
    return window.innerWidth - document.documentElement.clientWidth;
}

function useHideScrollbar(trigger : boolean) : void {
    const body : HTMLElement = document.body
    useEffect(() => {
        if (trigger) {
            body.style.paddingRight = `${getScrollbarWidth()}px`;
            body.style.overflow = 'hidden';
            body.style.touchAction = 'none'
        } else {
            body.style.overflow = 'auto';
            body.style.paddingRight = '0';
            body.style.touchAction = 'auto';
        }
    }, [trigger]);
}

export default useHideScrollbar;