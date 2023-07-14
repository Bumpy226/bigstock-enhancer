window.addEventListener("keyup", (event) => {
    event.stopImmediatePropagation();
}, true);

window.addEventListener("change", (event) => {
    event.stopImmediatePropagation();
}, true);

document.head.insertAdjacentHTML("beforeend", `
	<style>
	.popover {
		display: none !important;
		pointer-events: none !important;
		user-select: none !important;
	}
	.mosaic_cell img {
		transition: transform .1s ease;
	}
	.mosaic_cell.hover img {
		transform: scale(1.5);
	}
	</style>
`);