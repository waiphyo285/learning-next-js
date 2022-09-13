import { useCallback, useEffect, useState } from "react";
import ClickCount from "../../components/clickCount";
import styles from "../../styles/Hello.module.css";

function throwError() {
  // console.log(
  //   // The function body() is not defined
  //   document.body()
  // );
}

function Counter() {
  const [count, setCount] = useState(0);

  // onclick event to increate count
  const increment = useCallback(() => {
    setCount((value) => value + 1);
  }, [setCount]);

  useEffect(() => {
    const r = setInterval(() => {
      increment();
    }, 1000);

    return () => {
      clearInterval(r);
    };
  }, [increment]);

  return (
    <div className={styles.hello}>
      <h2>Eg - Fast Refresh</h2>
      <p>URL: `/static/image`</p>

      <br />

      <div>
        <p>
          Fast Refresh is a Next.js feature that gives you instantaneous
          feedback on edits made to your React components, without ever losing
          component state.
        </p>
      </div>

      <hr />

      <div>
        <p>
          Auto incrementing value. The counter will not reset after edits or if
          there are errors.
        </p>
        <p>Current value: </p>
        <h2>{count}</h2>
      </div>

      <hr />

      <div>
        <p>Component with state.</p>
        <ClickCount />
      </div>

      <hr />

      <div>
        <p>
          The button below will throw 2 errors. You will see the error overlay
          to let you know about the errors but it will not break the page or
          reset your state.
        </p>
        <button
          type="button"
          className={"btn btn-danger"}
          onClick={(e) => {
            // setTimeout(() => document.parentNode(), 0);
            throwError();
          }}
        >
          Throw an Error
        </button>
      </div>

      <hr />
    </div>
  );
}

export default Counter;
