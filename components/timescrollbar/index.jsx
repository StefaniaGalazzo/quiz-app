import style from "./timescrollbar.module.scss";

export default function TimeScrollBar() {
  const timeTot = 30;
  const dividendo = 100 / timeTot;

  const timeDyn = 17; //questo è il tempo che passa che prenderemo dallo store
  const timePast = timeDyn * dividendo;

  const styleBar = {
    width: `${timePast}%`,
  };

  return (
    <div className={style.container}>
      <div style={styleBar} className={style.timebar}></div>
    </div>
  );
}
