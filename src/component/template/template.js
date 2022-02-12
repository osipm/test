import { useEffect, useState } from "react";
import balance from "../image/balance.svg";
import image23 from "../image/image-23.svg";
import image25 from "../image/image25.svg";
import image24 from "../image/image24.svg";
import style from "./template.module.css";
import Dropdown from "../dropdown/dropdown";

export default function Templete() {
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [volume, setVolume] = useState(1);
  const [volume1, setVolume1] = useState(1);
  const [volume2, setVolume2] = useState(1);
  const [cost, setCost] = useState(200);
  const [cost1, setCost1] = useState(200);
  const [cost2, setCost2] = useState(200);

  useEffect(() => {
    setCost(200 * counter * volume);
  }, [counter, volume]);
  useEffect(() => {
    setCost1(200 * counter1 * volume1);
  }, [counter1, volume1]);
  useEffect(() => {
    setCost2(200 * counter2 * volume2);
  }, [counter2, volume2]);

  return (
    <>
      <div className={style.block}>
        <ul className={style.listImage}>
          <li>
            <span className={style.spanIcon}>NEW</span>
          </li>
          <li>
            <div className={style.bgIconBalance}>
              <img className={style.iconBalance} src={balance} alt="balance" />
            </div>
          </li>
        </ul>

        <img className={style.imageProduct} src={image23} alt="image23" />

        <h2 className={style.title}>Шампунь</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div className={style.blockColorPrice}>
          <Dropdown />
          <p>{cost} грн</p>
        </div>
        <ul className={style.radioBtn}>
          <li className={style.radioInput}>
            <input
              className={style.checkbox}
              type="radio"
              name="1"
              checked={+volume === 1}
              value={1}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
            />
            <span className={style.textRadioBtn}>100 мл</span>
          </li>
          <li className={style.radioInput}>
            <input
              className={style.checkbox}
              type="radio"
              name="1"
              value={2}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
            />
            <span className={style.textRadioBtn}>200 мл</span>
          </li>
          <li className={style.radioInput}>
            <input
              className={style.checkbox}
              type="radio"
              name="1"
              value={3}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
            />
            <span className={style.textRadioBtn}>300 мл</span>
          </li>
        </ul>
        <div className={style.containerOrder}>
          <div className={style.counter}>
            <button
              className={style.btnCounter}
              onClick={() => {
                counter > 1 ? setCounter(counter - 1) : setCounter(1);
              }}
            >
              -
            </button>
            <p className={style.resultCounter}>{counter}</p>
            <button
              className={style.btnCounter}
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
          </div>
          <button className={style.btnOrder}>КУПИТЬ</button>
        </div>
      </div>

      <div className={style.block}>
        <ul className={style.listImage}>
          <li>
            <span className={style.spanIcon}>NEW</span>
          </li>
          <li>
            <div className={style.bgIconBalance}>
              <img className={style.iconBalance} src={balance} alt="balance" />
            </div>
          </li>
        </ul>

        <div className={style.Imgblock}>
          <div className={style.blockImg}>
            <img src={image24} alt="image24" />
          </div>
        </div>

        <h2 className={style.title}>Шампунь</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div className={style.blockColorPrice}>
          <Dropdown />
          <p>{cost1} грн</p>
        </div>
        <ul className={style.radioBtn}>
          <li className={style.radioInput}>
            <input
              className={style.checkbox}
              type="radio"
              name="2"
              checked={+volume1 === 1}
              value={1}
              onChange={(e) => {
                setVolume1(e.target.value);
              }}
            />
            <span className={style.textRadioBtn}>100 мл</span>
          </li>
          <li className={style.radioInput}>
            <input
              className={style.checkbox}
              type="radio"
              name="2"
              value={2}
              onChange={(e) => {
                setVolume1(e.target.value);
              }}
            />
            <span className={style.textRadioBtn}>200 мл</span>
          </li>
          <li className={style.radioInput}>
            <input
              className={style.checkbox}
              type="radio"
              name="2"
              value={3}
              onChange={(e) => {
                setVolume1(e.target.value);
              }}
            />
            <span className={style.textRadioBtn}>300 мл</span>
          </li>
        </ul>
        <div className={style.containerOrder}>
          <div className={style.counter}>
            <button
              className={style.btnCounter}
              onClick={() => {
                counter > 1 ? setCounter1(counter - 1) : setCounter1(1);
              }}
            >
              -
            </button>
            <p className={style.resultCounter}>{counter1}</p>
            <button
              className={style.btnCounter}
              onClick={() => {
                setCounter1(counter + 1);
              }}
            >
              +
            </button>
          </div>
          <button className={style.btnOrder}>КУПИТЬ</button>
        </div>
      </div>

      <div className={style.block}>
        <ul className={style.listImage}>
          <li>
            <span className={style.spanIcon}>NEW</span>
          </li>
          <li>
            <div className={style.bgIconBalance}>
              <img className={style.iconBalance} src={balance} alt="balance" />
            </div>
          </li>
        </ul>

        <img className={style.imageProduct} src={image25} alt="image23" />

        <h2 className={style.title}>Шампунь</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div className={style.blockColorPrice}>
          <Dropdown />
          <p>{cost2} грн</p>
        </div>
        <ul className={style.radioBtn}>
          <li className={style.radioInput}>
            <input
              className={style.checkbox}
              type="radio"
              name="3"
              checked={+volume2 === 1}
              value={1}
              onChange={(e) => {
                setVolume2(e.target.value);
              }}
            />
            <span className={style.textRadioBtn}>100 мл</span>
          </li>
          <li className={style.radioInput}>
            <input
              className={style.checkbox}
              type="radio"
              name="3"
              value={2}
              onChange={(e) => {
                setVolume2(e.target.value);
              }}
            />
            <span className={style.textRadioBtn}>200 мл</span>
          </li>
          <li className={style.radioInput}>
            <input
              className={style.checkbox}
              type="radio"
              name="3"
              value={3}
              onChange={(e) => {
                setVolume2(e.target.value);
              }}
            />
            <span className={style.textRadioBtn}>300 мл</span>
          </li>
        </ul>
        <div className={style.containerOrder}>
          <div className={style.counter}>
            <button
              className={style.btnCounter}
              onClick={() => {
                counter > 1 ? setCounter2(counter - 1) : setCounter2(1);
              }}
            >
              -
            </button>
            <p className={style.resultCounter}>{counter2}</p>
            <button
              className={style.btnCounter}
              onClick={() => {
                setCounter2(counter + 1);
              }}
            >
              +
            </button>
          </div>
          <button className={style.btnOrder}>КУПИТЬ</button>
        </div>
      </div>
    </>
  );
}
