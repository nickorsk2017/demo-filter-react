import {useEffect, useRef} from 'react';

type OnChangeThrottle = (e: React.ChangeEvent<HTMLInputElement>, timeout?: number) => void;
type OnBlurThrottle = (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
type UpdateValueThrottle = (value: string) => React.RefObject<HTMLInputElement>;

export function useThrottle({callback}: {callback: (value: string) => void}): {onChangeThrottle: OnChangeThrottle; onBlurThrottle: OnBlurThrottle; updateValueThrottle: UpdateValueThrottle} {
  let timerHandler: ReturnType<typeof setTimeout> | null = null;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeThrottle: OnChangeThrottle = (e, timeout) => {
    if (timerHandler) {
      clearTimeout(timerHandler);
    }
    const cachedValue = e.target.value;
    timerHandler = setTimeout(() => {
      callback(cachedValue);
    }, timeout || 300);
  };
  const onBlurThrottle: OnBlurThrottle = (e, value) => {
    if (timerHandler) {
      clearTimeout(timerHandler);
    }
    if (inputRef && inputRef.current && value !== inputRef.current.value) {
      callback(e.target.value);
    }
  };
  const updateValueThrottle: UpdateValueThrottle = (value) => {
    if (inputRef && inputRef.current && value !== inputRef.current.value) {
      inputRef.current.value = value;
    }
    return inputRef;
  };

  useEffect(() => {
    return (): void => {
      if (timerHandler) {
        clearTimeout(timerHandler);
      }
    };
  }, []);

  return {onChangeThrottle, onBlurThrottle, updateValueThrottle};
}
