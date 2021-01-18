import Head from "next/head";
import styles from "../styles/Home.module.css";

const links = [
	{
		title: "Module 01",
		links: [
			{ title: "Module Webpage", url: "/module01" },
			{ title: "Artifact #1", url: "/module01/artifact01.html" },
		],
	},
	{
		title: "Module 02",
		links: [{ title: "Module Assignment", url: "/module02" }],
	},
	{
		title: "Module 03",
		links: [{ title: "Coming Soon!", url: "/module03" }],
	},
];

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
					{links.map((card) => (
						<div className={styles.card} key={card.title}>
							<h3>{card.title}</h3>
							{card.links.map((link) => (
								<a href={link.url} key={link.title}>
									<p>{link.title} &rarr;</p>
								</a>
							))}
						</div>
					))}
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
