import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflow: 'scroll', border: '1px solid #BCBDBF', height: '500px', padding: '30px', position: 'relative' }} className="tc mt1">
			{props.children}
		</div>
	)
}

export default Scroll;