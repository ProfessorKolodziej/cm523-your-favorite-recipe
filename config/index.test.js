import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import "html-validate/jest"

const html = fs.readFileSync(path.resolve('', './src/index.html'), 'utf8'),
		dom = new JSDOM( html ),
		container = dom.window.document.body;

describe('index.html', () => {
	test('All HTML is valid', () => {
		expect( html ).toHTMLValidate( {
			extends: ["html-validate:standard"],
			root: true
		} );
	} );

	test('Your recipe includes a heading which tells the user what the title of the recipe is. (Hint: do you have a heading tag? What level is it?)', () => {
		expect( container.querySelector( 'h1' ) ).not.toBeNull();
	} );

	test('Your recipe includes an introduction paragraph.', () => {
		expect( container.querySelector( 'p' ) ).not.toBeNull();
	} );

	test('Your recipe includes ingredients. (Hint: what kind of list are you using?)', () => {
		expect( container.querySelector( 'ul' ) ).not.toBeNull();
	} );

	test('Your recipe includes directions. (Hint: what kind of list are you using?)', () => {
		expect( container.querySelector( 'ol' ) ).not.toBeNull();
	} );
});
