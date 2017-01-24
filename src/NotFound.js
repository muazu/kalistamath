import React, { Component } from 'react'

const style = {
	image: {
		textAlign: 'center',
		marginTop: 100
	}
}

export default class NotFound extends Component {
	render() {
		return(
			<div style={style.image}>
				<img src="http://files.sharenator.com/fun_with404_errors_78_uphaa_com-s450x329-82547-1020.jpg" alt=""/>
			</div>
		)
	}
}