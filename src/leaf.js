export const leafup = (app) => {
    const rootEl = document.getElementById('root');
    rootEl.innerHTML = app;
}

export const render = (leaflet, chlorophyll) => {
    return leaflet(chlorophyll);
}