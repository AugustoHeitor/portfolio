import { createGlobalStyle } from 'styled-components'; 

const ResetStyles = createGlobalStyle`

	/*Reset*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video, input, textarea{
		margin: 0;
		padding: 0;
		border: 0;
	  	box-sizing: border-box;
		user-select: none;
	}

	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section{
		display: block;
	}

	html{
		scroll-behavior: smooth;
	}

	body {
		line-height: 1;
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	a{
	    text-decoration: none;
	}

	button{
		cursor: pointer;
		border: none;
	}	
` 

export default ResetStyles



