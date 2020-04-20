import { greenleaf } from './greenleaf';
import { render } from '../leaf';

export const leaflet = (chlorophyll) => {
    return `
        <div>
            I'm a leaflet with nothing to lose and my author is ${chlorophyll.author}
            ${render(greenleaf)}
        </div>
    `
}