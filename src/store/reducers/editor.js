import { screenResolutions } from '../../constants/editor';
import * as Actions from '../constants/actionTypes';

const initialState = {
	screenResolution: {
		width: screenResolutions[0].width,
		height: screenResolutions[0].height
	},
	zoomValue: 0.75
};

export const editor = (state = initialState, action) => {
	switch (action.type) {
		case Actions.CHANGE_SCREEN_RESOLUTION:
			return {
				...state,
				screenResolution: {
					width: action.payload.width,
					height: action.payload.height
				}
			};
		case Actions.CHANGE_ZOOM_VALUE:
			return {
				...state,
				zoomValue: action.payload
			};
		default:
			return state;
	}
};
