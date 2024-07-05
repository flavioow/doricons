import React from 'react'
import './style.css'

/* Import all icons */
const importAll = (r) => {
    let icons = {}
    r.keys().forEach((item) => {
        const name = item.replace('./', '').replace('.svg', '')
        icons[name] = r(item)
    })
    return icons
}

const filledIcons = importAll(require.context('./icons/filled', false, /\.svg$/))
const outlineIcons = importAll(require.context('./icons/outline', false, /\.svg$/))

const icons = { ...filledIcons, ...outlineIcons }

const Doricon = ({ name }) => {
    const IconComponent = icons[name]
    if (!IconComponent) {
        console.error(`The ${name} icon was not found`)
        return null
    }
    return (
        React.createElement('span', {
            dangerouslySetInnerHTML: { __html: IconComponent.default },
            className: 'doricon'
        })
    )
}

export default Doricon