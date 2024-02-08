import { ChangeEvent, useCallback, useRef } from "react";

export function useDebounce(delay: number, callbackFn: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any) {
  const timerRef = useRef<number | null | any>(null);
  
  const handler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callbackFn(e);
    }, delay);
  }, [callbackFn, delay]);
  
  return handler;
}
