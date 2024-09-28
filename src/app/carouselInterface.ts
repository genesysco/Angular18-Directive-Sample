export interface ICarouselContext {
	$implicit: string,
	controller : {
		prev : () => void,
		next : () => void
	}
}