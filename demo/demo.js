const input_integer = require('..')

const opts1 = { min: 1, max: 150 }
const opts2 = { min: 1872, max: 2025 }

const input1 = input_integer(opts1)
const input2 = input_integer(opts2)

const title = 'My demo form'
const sub_title = 'Please fill out the form'

const page = document.createElement('div')
page.innerHTML = `
		<h1>${title}</h1>
		<h2>${sub_title}</h2>
		<h3>Enter your age</h3>
		<x></x>   
		<h3>Enter your age of birth</h3>
		<y></y>   
`
page.querySelector('x').replaceWith(input1)
page.querySelector('y').replaceWith(input2)

document.body.append(page)
