const template = document.createElement('template');
template.innerHTML = `
  <style>
  .card-type {
		font-family: 'Arial', sans-serif;
		background: var(--bg-color);
        padding: 20px;
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		border: #ACC0DE 2px solid;
        margin: 50px;
	}

	.card-type img {
		width: 100%;
	}

    h3 {
        color: var(--hl-color);
    }

    p {
        color: var(--p-color)
    }
  </style>
  <div class="card-type">
    <img/>
    <div>
        <h3></h3>
        <p><slot name="main"/></p>
    </div>
  </div>
`;

class CardType extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('headline');
        this.shadowRoot.querySelector('img').src = this.getAttribute('dog');
    }
}

window.customElements.define('card-type', CardType);