import styles from "./Logo.module.css";
// import styles from "./HeaderBar.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.top}>Build</span>

      <span className={styles.bottom}>Supply Express</span>
      {/* <div classNameName={styles.top}>Build</div>
      <div classNameName={styles.bottom}>Supply Express</div> */}
    </div>
  );
}

export default Logo;
