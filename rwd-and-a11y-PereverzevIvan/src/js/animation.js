function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
    return `rgb(${generateRandomInteger(0, 255)}, ${generateRandomInteger(0, 255)}, ${generateRandomInteger(0, 255)})`
}

class AnimatingElement {
    constructor(el) {
        this.el = el;
        this.properties = {}
    }

    setAnimationParams(params) {
        this.properties = Object.assign({}, { targets: this.el }, params)
    }

    addClass(className) {
        this.el.classList.add(className)
    }

    addInParent(parentEl) {
        parentEl.appendChild(this.el)
    }

    animate() {
        anime(this.properties)
        console.log(this.el)
        setTimeout(()=>{
            this.el.style.opcity = '0'
            this.el.parentNode.removeChild(this.el);
        }, this.properties.duration + 300)
    }
}

const btnStart = document.querySelector('.btn-start')
const animBox = document.querySelector('.anim-box')

if (btnStart) {
    btnStart.addEventListener('click', (e) => {
        let params = {
            background: generateRandomColor(),
            translateX: generateRandomInteger(100, 700),
            scale: generateRandomInteger(9, 15) / 10,
            rotate: '1turn',
            delay: generateRandomInteger(200, 500),
            duration: generateRandomInteger(2000, 5000),
        }
        let newEl = new AnimatingElement(document.createElement('div'))
        newEl.addClass('anim-box__el')
        newEl.addInParent(animBox)
        newEl.setAnimationParams(params)
        newEl.animate()
    })
}