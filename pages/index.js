import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Gary Tou - PROG 109</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Hello Professor <span>Brehm</span>!
				</h1>

				<p className={styles.description}>My name is Gary Tou</p>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/garyhtou/"
					target="_blank"
					rel="noopener noreferrer"
				>
					@garyhtou
				</a>
			</footer>
		</div>
	);
}
