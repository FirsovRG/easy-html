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
