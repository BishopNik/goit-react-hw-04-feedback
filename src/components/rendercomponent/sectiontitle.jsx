/** @format */

import PropTypes from 'prop-types';
import './style.css';

function SectionRendering({ title, children }) {
	return (
		<section className='section'>
			<h3 className='title'>{title}</h3>
			{children}
		</section>
	);
}

SectionRendering.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default SectionRendering;
