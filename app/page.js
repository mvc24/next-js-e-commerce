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
      <section>
        <div>Maybe an image?</div>
        <div>
          Oriana Music editions are Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </div>
      </section>
    </main>
  );
}
