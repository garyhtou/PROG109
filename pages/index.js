import Head from "next/head";
import Assignments from "../components/assignments";
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
					Hello <span>PROG 109</span>!
				</h1>
				<p className={styles.description}>My name is Gary Tou</p>

				<Assignments />
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/garyhtou/prog109"
					target="_blank"
					rel="noopener noreferrer"
				>
					@garyhtou/prog109
				</a>
				<span className={styles.footerSep}> / </span>
				<a
					href="https://garytou.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					garytou.com
				</a>
			</footer>
		</div>
	);
}
