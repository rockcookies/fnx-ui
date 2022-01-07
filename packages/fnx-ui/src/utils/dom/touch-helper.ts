export type TouchDirection = 'vertical' | 'horizontal';

export interface TouchData {
	startX: number;
	startY: number;
	deltaX: number;
	deltaY: number;
	offsetX: number;
	offsetY: number;
	direction?: TouchDirection;
}

const DEFAULT_TOUCH_DATA: TouchData = {
	startX: 0,
	startY: 0,
	deltaX: 0,
	deltaY: 0,
	offsetX: 0,
	offsetY: 0,
	direction: undefined,
};

function getDirection(x: number, y: number) {
	if (x > y) {
		return 'horizontal';
	}
	if (y > x) {
		return 'vertical';
	}
}
export default class TouchHelper {
	touchData: TouchData = { ...DEFAULT_TOUCH_DATA };

	reset = (): void => {
		this.touchData = { ...DEFAULT_TOUCH_DATA };
	};

	start = (event: TouchEvent): void => {
		this.reset();
		this.touchData.startX = event.touches[0].clientX;
		this.touchData.startY = event.touches[0].clientY;
	};

	move = (event: TouchEvent): void => {
		const touch = event.touches[0];

		this.touchData.deltaX = touch.clientX - this.touchData.startX;
		this.touchData.deltaY = touch.clientY - this.touchData.startY;
		this.touchData.offsetX = Math.abs(this.touchData.deltaX);
		this.touchData.offsetY = Math.abs(this.touchData.deltaY);

		// lock direction when distance is greater than a certain value
		const LOCK_DIRECTION_DISTANCE = 10;

		if (
			!this.touchData.direction ||
			(this.touchData.offsetX < LOCK_DIRECTION_DISTANCE &&
				this.touchData.offsetY < LOCK_DIRECTION_DISTANCE)
		) {
			this.touchData.direction = getDirection(
				this.touchData.offsetX,
				this.touchData.offsetY,
			);
		}
	};

	isVertical = (): boolean => {
		return this.touchData.direction === 'vertical';
	};

	isHorizontal = (): boolean => {
		return this.touchData.direction === 'horizontal';
	};
}
