(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { const c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); const a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } const p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { const n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
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
  }, { '..': 2 }],
  2: [function (require, module, exports) {
    module.exports = input_integer

    const sheet = new CSSStyleSheet()
    const theme = get_theme()
    sheet.replaceSync(theme)

    function input_integer (opts) {
      const { min, max } = opts
      const el = document.createElement('div')
      const shadow = el.attachShadow({ mode: 'closed' })

      const input = document.createElement('input')
      input.type = 'number'
      input.min = min
      input.max = max
      input.onkeyup = (e) => handle_onkeyup(e, input, min, max)
      input.onmouseleave = (e) => handle_onmouseleave_and_blur(e, input, min)
      input.onblur = (e) => handle_onmouseleave_and_blur(e, input, min)

      shadow.append(input)
      shadow.adoptedStyleSheets = [sheet]
      return el
    }

    function get_theme () {
      return `
		:host {
  		--b: 0, 0%;
  		--color-white: var(--b), 100%;
  		--color-black: var(--b), 0%;
  		--color-grey: var(--b), 85%;
  		--bg-color: var(--color-grey);
  		--shadow-xy: 0 0;
			--shadow-blur: 8px;
			--shadow-color: var(--color-white);
			--shadow-opacity: 1;
			--shadow-opacity-focus: 0.65;
		}
		input {
			text-align: left;
			align-items: center;
			font-size: 1.4rem;
			font-weight: 200;
			color: hsla(var(--color-black), 1);
			background-color: hsla(var(--bg-color), 1);
			padding: 8px 12px;
			box-shadow: var(--shadow-xy) var(--shadow-blur) hsla(var(--shadow-color), var(--shadow-opacity));
			transition: font-size 0.3s, color 0.3s, background-color 0.3s, box-shadow 0.3s ease-in-out;
			outline: none;
			border: 1px solid hsla(var(--bg-color), 1);
			border-radius: 8px;

			-moz-appearance: textfield;
		}
		input:focus {
			--shadow-color: var(--color-black);
			--shadow-opacity: var(--shadow-opacity-focus);
			--shadow-xy: 4px 4px;
			box-shadow: var(--shadow-xy) var(--shadow-blur) hsla(var(--shadow-color), var(--shadow-opacity));
		}
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
		}
    `
    }

    function handle_onkeyup (e, input, min, max) {
      const val = Number(e.target.value)

      const val_len = val.toString().length
      const min_len = min.toString().length

      if (val > max) input.value = ''
      else if (val_len === min_len && val < min) input.value = ''
    }

    function handle_onmouseleave_and_blur (e, input, min, max) {
      const val = Number(e.target.value)
      if (val < min) input.value = ''
    }
  }, {}]
}, {}, [1])
