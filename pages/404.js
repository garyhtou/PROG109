import styles from "../styles/NotFound404.module.css";
import Image from "next/image";
import Assignments from "../components/assignments";

export default function Custom404() {
	return (
		<div style={{ overflowX: "hidden" }}>
			<div className={styles.container}>
				<div className={styles.ufoImageWrapper}>
					<Image
						src="/undraw_Taken_re_yn20.svg"
						alt="404 - Page Not Found"
						width={500}
						height={500}
						layout="responsive"
					/>
				</div>
				<p>Oh gosh! Something went wrong 😧</p>
				<h3>404 - Page Not Found</h3>
				<div className={styles.arrowWrapper}>
					<a href="#assignments">
						<div className={styles.arrow}></div>
					</a>
				</div>
			</div>
			<div
				className={`${styles.container} ${styles.assignmentsContainer}`}
				id="assignments"
			>
				<h1>Maybe I have what you're looking for!</h1>
				<Assignments color={"white"} />
			</div>
		</div>
	);
}
