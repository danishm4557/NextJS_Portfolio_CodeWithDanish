// import { useEffect, useState, useMemo, RefObject } from "react";

// const ElementInViewport = (ref: RefObject<HTMLElement>) => {
//   const [isIntersecting, setIntersecting] = useState(false);

//   const observer = useMemo(
//     () => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)),
//     [ref]
//   );

//   useEffect(() => {
//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return isIntersecting;
// };

// export default ElementInViewport;
