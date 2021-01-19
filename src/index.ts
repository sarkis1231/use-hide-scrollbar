import { useEffect } from 'react';

export function useHideScrollbar(trigger : boolean) : void {
    const body : HTMLElement = document.body
    useEffect(() => {
        if (trigger) {
            body.style.overflow = 'hidden';
            body.style.touchAction = 'none'
        } else {
            body.style.overflow = 'auto';
            body.style.touchAction = 'auto';
        }
    }, [trigger]);
}
