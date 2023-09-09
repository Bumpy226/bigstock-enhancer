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
	.modal.hide.in {
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
	}
	.modal-image, .modal-crop, .modal-body {
		width: 100% !important;
		height: 100% !important;
	}
	.modal-image {
		object-fit: contain !important;
	}
	</style>
`);