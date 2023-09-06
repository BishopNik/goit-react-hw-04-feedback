/** @format */

import Statictics from './statistics';
import FeedbackOptions from './feedbackoptions';
import SectionRendering from './rendercomponent/sectiontitle';
import Notification from './rendercomponent/notification';
import { useState } from 'react';

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const buttons = ['good', 'neutral', 'bad'];
	const SECTIONFIRST = 'Please leave feedback';
	const SECTIONSECOND = 'Statistics';

	const handlerChangeFeedback = newFeed => {
		switch (newFeed) {
			case buttons[0]:
				setGood(state => state + 1);
				break;

			case buttons[1]:
				setNeutral(state => state + 1);
				break;

			case buttons[2]:
				setBad(state => state + 1);
				break;

			default:
				break;
		}
	};

	const sumFeedback = good + neutral + bad;

	return (
		<>
			<SectionRendering title={SECTIONFIRST}>
				<FeedbackOptions valueButtons={buttons} onLeaveFeedback={handlerChangeFeedback} />
			</SectionRendering>
			<SectionRendering title={SECTIONSECOND}>
				{sumFeedback ? (
					<Statictics goodValue={good} neutralValue={neutral} badValue={bad} />
				) : (
					<Notification />
				)}
			</SectionRendering>
		</>
	);
}

export default App;
