import { useCallback, useState } from "react";

function ClickCount() {
  const [count, setCount] = useState(0);

  // onclick event to increate count
  const increment = useCallback(() => {
    setCount((value) => value + 1);
  }, [setCount]);

  return (
    <button type="button" className={"btn btn-dark"} onClick={increment}>
      Clicks: {count}
    </button>
  );
}

export default ClickCount;
