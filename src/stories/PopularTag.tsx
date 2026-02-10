import styles from './PopularTag.module.css';

export const PopularTag = () => {
  return (
    <div className={styles.popularTagContainer}>
      <span data-test-id="popular-tag">POPULAR</span>
    </div>
  );
};