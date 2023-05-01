import { useRef, useState, useEffect } from "react"

export const useDidMount = () => {
  const didMountRef = useRef(true);

  useEffect(() => {
    didMountRef.current = false;
  }, []);

  return didMountRef.current;
};

export const useMediaQuery = (query: string) => {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setIsWide(!!mql.matches);

    mql.addListener(onChange);
    setIsWide(mql.matches);

    return () => mql.removeListener(onChange);
  }, []);

  return isWide
}