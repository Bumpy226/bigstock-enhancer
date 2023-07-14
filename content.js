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
	</style>
`);