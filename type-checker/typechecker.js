

const sentenceTag = document.querySelector(`input[type="text"]`)
const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector('.typesize-output')
const outputTag = document.querySelector('textarea.output')
const originalText = outputTag.value

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector('.lineheight-output')

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector('.fontweight-output')

const colorTags = document.querySelectorAll(`div.colors div`)


//when I type in my sentence tag update the output tag accordingly
//if there's no value, put in the original text
sentenceTag.addEventListener("keyup", function () {
    if (this.value) {
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

/*
^^^ Changed to value because text area, was innerHTML when it was 
just a section tag
*/

//when I type in the outputTag, update the sentenceTag accordingly
outputTag.addEventListener("keyup", function () {
    sentenceTag.value = this.value
})


//when change typesize slider, typesize text
//change outputTag font size

typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + "px"
})

lineheightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})


//when I change my checkbox, update the font style to normal or italic
italicTag.addEventListener("change", function () {
    if (this.checked) {
        outputTag.style.fontStyle = 'italic'
    } else {
        outputTag.style.fontStyle = 'normal'
    }
})

//when typeface is selected, update the output
typefaceTag.addEventListener("input", function () {
    outputTag.style.fontFamily = this.value
})

//when you change fontweight slider, change text weight of output
fontweightTag.addEventListener("input", function () {
    outputTag.style.fontWeight = this.value
    fontweightOutput.innerHTML = this.value
})

//go through all color tags...
//when you select a color tag, change the background color and text color of output
//make the tag selected
colorTags.forEach(tag => {
    tag.addEventListener("click", function () {
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color

        //reset the classes
        colorTags.forEach(tag => {
            tag.classList.remove('selected')
        })

        //adds class to only this selection
        this.classList.add('selected')
    })
})