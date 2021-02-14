import styles from "../styles/Assignments.module.css";

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
		links: [
			{ title: "Module Assignment", url: "/module03" },
			{ title: "Artifact #2", url: "/chess" },
		],
	},
	{
		title: "Module 04",
		links: [{ title: "Module Assignment", url: "/module04" }],
	},
	{
		title: "Module 05",
		links: [
			{ title: "Module Assignment", url: "/module05" },
			{ title: "Portfolio", url: "/portfolio" },
		],
	},
	{
		title: "Module 06",
		links: [
			{ title: "Module Assignment", url: "/module06" },
			{ title: "Artifact #3", url: "/module06/rhombus" },
		],
	},
];

export default function Assignments(props) {
	return (
		<div
			className={styles.grid}
			style={props.color ? { color: props.color } : null}
		>
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
	);
}
