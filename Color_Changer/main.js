
const rgbColors = [[255, 87, 51],[255, 189, 51],[219, 255, 51],[117, 255, 51],[51, 255, 87]]
const hexColors = ['#FF5733','#FFBD33','#DBFF33','#75FF33','#33FF57']

// when the page loads
// select a random color and load as the page's background
// display the selected color in the color-text paragraph

//once the change background button is clicked, 
// step 2 and 3 are repeated


// generate random rgb
const randomRgb = () => {
    const rand_num = Math.floor(Math.random()*5)
    return rgbColors[rand_num]
}

const randomHex = () => {
    const rand_num = Math.floor(Math.random()*5)
    return hexColors[rand_num]
}


const setBackground = (color,page) => {
    const body = document.getElementsByTagName('body')[0]
    body.style.background = page === 'rgb_color.html' ? `rgb(${color.join(',')})` : color
}

const updateText = (colorText,page) => {
    const paragraph = document.querySelector(".color-text")
    paragraph.innerHTML = page === 'rgb_color.html' ? `rgb(${colorText.join(',')})`: colorText
}

const setProperties = () => {
    const url = document.location.pathname
    const fileName = url.split('/').pop()
    // set the color based on the html file
    const color = fileName === 'rgb_color.html' ? randomRgb(): randomHex()
    updateText(color,fileName)
    setBackground(color,fileName)

}

document.addEventListener('DOMContentLoaded',() => {
    setProperties()
})

const colorChanger = document.querySelector('.color-changer')

colorChanger.addEventListener('click', () => {
    setProperties()
})