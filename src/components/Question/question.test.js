//import functions from React testing library and Jest
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import userEvent from '@testing-library/user-event';

//import the component to test
import Question1 from './Question1.js';

//test that one question is displayed with 6 answer buttons, and 1 next page button.

test('renders the question on page', () => {
	//create test props
	const props = {
		handleNextQuestion: jest.fn(),
		handleAnswer: jest.fn(),
	};

	//render the component and pass in props
	render(
		<Question1
			handleNextQuestion={props.handleNextQuestion}
			handleAnswer={props.handleAnswer}
		/>
	);

	//screen.debug();

	//get the element on the screen
	const question = screen.getByRole('heading');

	//assert that the element is rendered on page
	expect(question).toBeInTheDocument();

	//get  the answer button
	const buttons = screen.getAllByRole('button');

	//assert that there are 7 buttons on page
	expect(buttons).toHaveLength(7);
});

test('renders 7 buttons on page', () => {
	//create test props
	const props = {
		handleNextQuestion: jest.fn(),
		handleAnswer: jest.fn(),
	};

	//render the component and pass in props
	render(
		<Question1
			handleNextQuestion={props.handleNextQuestion}
			handleAnswer={props.handleAnswer}
		/>
	);

	//get  all the 'answer' buttons and a 'next' button
	const buttons = screen.getAllByRole('button');

	//assert that there are 7 buttons on page
	expect(buttons).toHaveLength(7);
});

//test that function is called when button is clicked.
test('handleAnswer function is called when answer button is clicked', () => {
	//Arrange
	const props = { handleNextQuestion: jest.fn(), handleAnswer: jest.fn() };

	//Act
	render(
		<Question1
			handleNextQuestion={props.handleNextQuestion}
			handleAnswer={props.handleAnswer}
		/>
	);
	const ansButton = screen.getByRole('button', { name: /anaconda/i }); //get a button
	userEvent.click(ansButton); //click on the button

	//Assert
	expect(props.handleAnswer).toHaveBeenCalled();
});

test('handleNextQuestion function is called when next button is clicked', () => {
	//Arrange
	const props = { handleNextQuestion: jest.fn(), handleAnswer: jest.fn() };

	//Act
	render(
		<Question1
			handleNextQuestion={props.handleNextQuestion}
			handleAnswer={props.handleAnswer}
		/>
	);
	const nextButton = screen.getByRole('button', { name: /next/i }); //get the 'next' button
	userEvent.click(nextButton); //click on the button

	//Assert
	expect(props.handleNextQuestion).toHaveBeenCalled();
});
