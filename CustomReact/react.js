function coustmRender(reactElement,container){
    const domELement  = document.createElement(reactElement.type)
    // domELement.innerHTML = reactElement.children
    // domELement.setAttribute("href", reactElement.props.href)
    // domELement.setAttribute("target", reactElement.props.target)
    // container.appendChild(domELement)

    domELement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
      domELement.setAttribute(prop, reactElement.props[prop])  
    }
    container.appendChild(domELement)
}

const reactElement = {
    type: "a",
    props:{
        href:"http://www.google.com",
        target:'_blank',
    },
    children : "click me to visit google"
}

const main = document.querySelector("#root")

coustmRender(reactElement,main)