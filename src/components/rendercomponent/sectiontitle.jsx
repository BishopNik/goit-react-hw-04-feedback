/** @format */

import './style.css';

function SectionRendering({ title, children }) {
	return (
		<section className='section'>
			<h3 className='title'>{title}</h3>
			{children}
		</section>
	);
}

export default SectionRendering;
