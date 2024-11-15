import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleClickBack = () => {
		setActiveIndex(activeIndex - 1);
	};
	const handleClickForward = () => {
		setActiveIndex(activeIndex + 1);
		if (activeIndex + 1 === steps.length) {
			setActiveIndex(0);
		}
	};

	const handleClickOnStep = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => {
							return (
								<li
									key={step.id}
									className={
										styles['steps-item'] +
										(activeIndex === index ? ' ' + styles.active : '') +
										(activeIndex > index ? ' ' + styles.done : '')
									}
								>
									<button
										onClick={() => handleClickOnStep(index)}
										className={styles['steps-item-button']}
									>
										{index + 1}
									</button>
									Шаг {index + 1}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button onClick={handleClickBack} className={styles.button} disabled={activeIndex === 0}>
							Назад
						</button>
						<button onClick={handleClickForward} className={styles.button}>
							{activeIndex + 1 === steps.length ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
