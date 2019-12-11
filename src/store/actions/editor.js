import * as Actions from '../constants/actionTypes';

export const changeScreenResolution = ({ width, height }) => {
	return {
		type: Actions.CHANGE_SCREEN_RESOLUTION,
		payload: {
			width,
			height
		}
	};
};

export const changeZoomValue = payload => {
	return {
		type: Actions.CHANGE_ZOOM_VALUE,
		payload
	};
};
