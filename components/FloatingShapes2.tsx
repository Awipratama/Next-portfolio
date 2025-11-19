import styles from "@/app/style/floatingShapes2.module.css";

export default function FloatingShapes2() {
  return (
    <div className={styles.shapeContainer}>
      {/* Zigzag */}
      <svg
        className={`${styles.shape} ${styles.zigzag}`}
        width="60"
        height="20"
        viewBox="0 0 60 20"
        fill="none"
        stroke="white"
        strokeWidth="3"
      >
        <polyline points="0,15 10,5 20,15 30,5 40,15 50,5 60,15" />
      </svg>

      {/* Triangle */}
      <svg
        className={`${styles.shape} ${styles.triangle}`}
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        stroke="white"
        strokeWidth="3"
      >
        <polygon points="25,5 45,45 5,45" />
      </svg>

      {/* Circle outline */}
      <svg
        className={`${styles.shape} ${styles.circle}`}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="white"
        strokeWidth="3"
      >
        <circle cx="20" cy="20" r="18" />
      </svg>

      {/* Plus sign */}
      <div className={`${styles.shape} ${styles.plus}`}>+</div>

      {/* Square (tilted box) */}
      <svg
        className={`${styles.shape} ${styles.square}`}
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        stroke="white"
        strokeWidth="3"
      >
        <rect x="5" y="5" width="40" height="40" transform="rotate(12 25 25)" />
      </svg>

      {/* Diamond */}
      <svg
        className={`${styles.shape} ${styles.diamond}`}
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        stroke="white"
        strokeWidth="3"
      >
        <polygon points="25,5 45,25 25,45 5,25" />
      </svg>

      {/* Wave line */}
      <svg
        className={`${styles.shape} ${styles.wave}`}
        width="80"
        height="20"
        viewBox="0 0 80 20"
        fill="none"
        stroke="white"
        strokeWidth="3"
      >
        <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10" />
      </svg>
    </div>
  );
}
