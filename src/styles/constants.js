import { Dimensions } from 'react-native';
import math from 'mathjs';

//Colors
export const gold = '#D4AF37';

//Screen
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;

export let CALC_WIDTH;

if (ASPECT_RATIO > 1.6) {
	CALC_WIDTH = SCREEN_WIDTH * 0.9;
} else {
	CALC_WIDTH = SCREEN_WIDTH * 0.7;
}

//calculator
export const CALC_HEIGHT = CALC_WIDTH * math.phi;
export const RECT_WIDTH = CALC_WIDTH * 0.9;
export const RECT_HEIGHT = RECT_WIDTH / math.phi;
export const RECT_CONTAINER_WIDTH = CALC_WIDTH - 8;
// export const RECT_CONTAINER_HEIGHT = CALC_HEIGHT - 20;
export const TEXT_INPUT_HEIGHT = RECT_HEIGHT / 3 - 15;
export const TEXT_INPUT_WIDTH = TEXT_INPUT_HEIGHT * math.phi;

//Video
export const VIDEO_WIDTH = RECT_WIDTH * 0.7;
export const VIDEO_HEIGHT = VIDEO_WIDTH / math.phi;

//Number Pad
export const NUMBER_PAD_HEIGHT = CALC_HEIGHT - RECT_HEIGHT - 40;
export const BUTTON_HEIGHT = (NUMBER_PAD_HEIGHT - 80) / 5;
export const BUTTON_WIDTH = BUTTON_HEIGHT * math.phi;
// export const BUTTON_WIDTH = (RECT_CONTAINER_WIDTH * 0.7) / 3;
// export const BUTTON_HEIGHT = BUTTON_WIDTH / math.phi;

//Differences
export const CALC_SCREEN_DIFF_HEIGHT = SCREEN_HEIGHT - CALC_HEIGHT;
export const CALC_SCREEN_DIFF_WIDTH = SCREEN_WIDTH - CALC_WIDTH;
