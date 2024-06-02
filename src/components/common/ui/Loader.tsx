import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div
      aria-busy="true"
      aria-label="Loading"
      role="progressbar"
      className={`${styles.container}`}
    >
      <div className={`${styles.swing}`}>
        <div className={`${styles.swingL}`}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={`${styles.swingR}`}></div>
      </div>
      <div className={`${styles.shadow}`}>
        <div className={`${styles.shadowL}`}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={`${styles.shadowR}`}></div>
      </div>
    </div>
  );
};

export default Loader;
