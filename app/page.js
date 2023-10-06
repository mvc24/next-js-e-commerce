import Image from 'next/image';
import header from '../public/images/header.png';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div className={styles.heroImageContainer}>
        <h1>Oriana Music</h1>
        <div className={styles.heroImage}>
          <Image
            src={header}
            alt="an image of a viol bridge"
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </main>
  );
}
