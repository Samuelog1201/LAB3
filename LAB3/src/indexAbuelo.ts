import { data } from './data/data';
import './components/indexPadre';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback(){
       this.render();
    }

    render(){
        if(this.shadowRoot)
            this.shadowRoot.innerHTML = `
            
            `
    }
}

customElements.define('app-container', AppContainer)