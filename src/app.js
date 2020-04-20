import { render, leafup } from "./leaf";
import { leaflet } from "./components/leaflet";

var content = render(leaflet, {author: 'faisal'});

leafup(content);