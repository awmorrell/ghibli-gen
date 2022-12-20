import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflow: 'scroll', border: '1px solid #BCBDBF', height: '520px', padding: '30px' }}>
			{props.children}
		</div>
	)
}

export default Scroll;