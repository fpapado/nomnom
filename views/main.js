var html = require('choo/html');
var items = require('../data/places');

var TITLE = 'Nomnomnom';

module.exports = view;

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);

  return html`
    <body class="sans-serif bg-washed-yellow near-black">
      <div class="pa3 mw7-ns center">
        <div class="pv3-ns mt3 mb4">
          <h1 class="ma0 f-headline-ns f1 tracked lh-title ttu">
            Nom Nom Nomicon
          </h1>
        </div>

        ${viewItems(items)}

        ${viewFooter()}
      </div>
    </body>
  `;

  function handleClick() {
    emit('clicks:add', 1);
  }
}

function viewItems(items) {
  return html`
    <div class="">
      <ul class="list mv4 pl0 measure f4 f3-ns">
        ${items.map(viewItem)}
      </ul>
    </div>
  `;
}

function viewItem(item) {
  return html`
    <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 flex justify-between items-center">
      ${item.name}
      ${viewRating(item.rating)}
    </li>
  `;
}

function viewRating(rating) {
  // This is silly, but cba to import a library for this
  return !!rating
    ? html`
    <div class="code">
      ${[0, 1, 2, 3, 4].map(i => (i < rating ? '+' : '-'))}
    </div>
  `
    : html`<p class="mv0 f6 silver">not yet visited</p>`;
}

function viewFooter() {
  return html`
  <div class="pt4 pr2 pb3 flex items-center justify-between">
    <p class="mw5 mw7-ns f6 lh-copy">
      Made with 🍕 by <span class="b">Fotis Papadogeorgopoulos</span>
    </p>

    <div class="grow">
        ${viewContribution()}
    </div>
  </div>
  `;
}

function viewContribution() {
  return html`
    <a href="https://github.com/fpapado/nomnom/blob/master/data/places.js" class="link near-black hover-light-red">
      <p class="w4 pa3 ma0 f6 fw6 lh-copy ba bw1 b--near-black" style="transform: rotate3d(0, 0, 1, 10deg)">
          Have a suggestion?
      </p>
    </a>
  `;
}
