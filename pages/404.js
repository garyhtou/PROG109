import styles from "../styles/NotFound404.module.css";
import Image from "next/image";

export default function Custom404() {
	return (
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
			<span>
				go <a href="/">home</a> to find what you're looking for
			</span>
		</div>
	);
}
