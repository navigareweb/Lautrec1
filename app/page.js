import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={"/400x600.jpeg"}
        width={600}
        height={600}
        className={styles.img}
        alt="imgLautrec"
      ></Image>
      <div className={styles.description}>
        <h3 className={styles.text}>HENRI DE TOULOUSE-LAUTREC.</h3>
        <h5 className={styles.text}>THE WORLD OF THE CIRCUS AND MONTMARTRE</h5>
        <audio
          controls
          src="/HENRI-DE-TOULOUSE-LAUTREC-1.mp3"
          className={styles.audio}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p className={styles.p}>
          Toulouse-Lautrec has always been considered one of the most iconic
          figures of the Belle Époque, as well as the artist who disrupted the
          world of advertising and conveyed the drift of industrial society
          headed toward the tragic end represented by the Great War of 1914. The
          different and several exhibitions devoted to Lautrec have always
          focused on these aspects, without investigating the author's personal
          dynamics, his philosophy of life, his respect for others, and the
          virtues of an educated man who was able to appreciate, understand and
          translate the complexity of the human being in all its dimensions.
          This exhibition aims to provide a new and different view of the
          artist, of course highlighting his best-known aspects, including the
          invention of the modern poster, the use of advertising as a means of
          mass communication, the exploration of new printing techniques, a
          scientific and industrial challenge of the late 19th century that
          would later inspire artists such as Pablo Picasso and Henry Matisse;
          at the same time, the exhibition aims to give visibility to the
          artist’s lesser-known aspects, such as his focus on respect for others
          and human relationships outside the strict conventions of the time.
          All this through an in-depth research of his aesthetic approach that
          gets rid of the dichotomy of a black-and-white world, showing the full
          spectrum of human emotions, regardless of sex, gender or social
          background. In this context, series such as Elles or Au Cirque, which
          are on display in this exhibition, not only have an artistic value and
          represent a social evidence, but are also differently contextualized
          to show Toulouse-Lautrec's attention to all the deepest and most
          private aspects of the human, regardless of gender or social status.{" "}
        </p>
      </div>
    </main>
  );
}
