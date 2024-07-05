import Doricon from './Doricon'

class DoriconElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    static get observatedAttributes() {
        return ['name']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name' && oldValue !== newValue) {
            this.render()
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const iconName = this.getAttribute('name')
        const IconComponent = document.createElement('span')
        const iconHTML = Doricon({ name: iconName })
        IconComponent.innerHTML = this.innerHTML.props.dangerouslySetInnerHTML.__html
        this.shadowRoot.innerHTML = ''
        this.shadowRoot.appendChild(IconComponent)
    }
}

customElements.define('doricon', DoriconElement)

export { Doricon }