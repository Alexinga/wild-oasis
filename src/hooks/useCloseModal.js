import { useEffect, useRef } from "react";

export function useCloseModal(handler) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          //   console.log("click outside");
          handler();
        }
      }
      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler, ref]
  );
  return { ref };
}
