import AbstractView from '../framework/view/abstract-view.js';

function createListTemplate() {
  return `<ul class="trip-events__list">
  </ul>`;
}

export default class WaypointListView extends AbstractView {
  get template() {
    return createListTemplate();
  }
}
