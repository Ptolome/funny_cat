import { useState, useEffect } from "react";
import BlockPicture from "./components/blockPicture/blockPicture";
import useFetch from "./mainPage/hooks/getCats";
import { ApiUrl, headers } from "./mainPage/const/const";
import style from "./mainPage.module.scss";
import Page404 from "./components/picture404/page404";

const MainPage = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const { data, loading, error, fetchData } = useFetch(ApiUrl, headers);
  const handleSwitchOn: () => void = () => {
    setSwitchOn((prev) => !prev);
  };
  const handleAutoRefresh: () => void = () => {
    setAutoRefresh((prev) => !prev);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null;

    if (autoRefresh && switchOn) {
      interval = setInterval(fetchData, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoRefresh, switchOn, fetchData]);

  return (
    <>
      <div className={style.container}>
        <label htmlFor="switchOn">
          <input
            type="checkbox"
            name="switchOn"
            id=""
            onChange={handleSwitchOn}
            checked={switchOn}
          />
          Enebled
        </label>

        <label htmlFor="autoRefresh">
          <input
            type="checkbox"
            name="autoRefresh"
            id=""
            onChange={handleAutoRefresh}
            checked={autoRefresh}
          />
          Auto-refresh every 5 seconds
        </label>

        <button disabled={!switchOn} onClick={fetchData}>
          Get cat
        </button>
        {loading && (
          <p
            style={{
              color: "red",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Loading...
          </p>
        )}
        {error && <Page404 />}
        {data && data.length > 0 && <BlockPicture picture={data?.[0]?.url} />}
      </div>
    </>
  );
};
export default MainPage;
