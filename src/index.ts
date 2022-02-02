import { Vector } from './vector';

export const almostPi = (resolution: number): number => {
	let radius = 1;
	let counter = 0;
	Array.from({ length: resolution }).forEach(() => {
		if (
			distance(
				new Vector(0, 0),
				new Vector(
					Math.random() * 2 * radius - radius,
					Math.random() * 2 * radius - radius
				)
			) < 1
		) {
			counter++;
		}
	});
	    return (counter * 4) / resolution
};

const distance = (point1: Vector, point2: Vector) => {
	return Math.sqrt(
		Math.abs(
			Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
		)
	);
};

export default almostPi;
