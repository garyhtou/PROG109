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
					Hello <span>PROG 109</span>!
				</h1>

				<p className={styles.description}>My name is Gary Tou</p>

				<div className={styles.grid}>
					<div className={styles.card}>
						<h3>Module 01</h3>
						<a href="/module01">
							<p>Module Webpage &rarr;</p>
						</a>
						<a href="/module01/artifact01.html">
							<p>Artifact 01 &rarr;</p>
						</a>
					</div>
					<div className={styles.card}>
						<h3>Module 02</h3>
						<a href="/module02">
							<p>Module Webpage &rarr;</p>
						</a>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/garyhtou/"
					target="_blank"
					rel="noopener noreferrer"
				>
					@garyhtou
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
