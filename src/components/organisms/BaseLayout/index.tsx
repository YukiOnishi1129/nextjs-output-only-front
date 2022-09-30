/**
 * BaseLayout
 *
 * @package components
 */
import { FC, ReactNode } from 'react';
import { Navigation } from '../../molecules/Navigation';
import styles from './styles.module.css';

type Props = {
  children: ReactNode,
  title: string
}
/**
 * BaseLayout
 * @param children
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
export const BaseLayout: FC<Props> =
  ({ children, title }) => (
    <div className={styles.container}>
      <section className={styles.common}>
        <Navigation />
      </section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
