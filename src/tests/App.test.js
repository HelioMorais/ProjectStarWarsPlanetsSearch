import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mock from './mock';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

describe('Testes do App', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock)
    });
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Project/i);
  expect(linkElement).toBeInTheDocument();
});


  test('Verifica o filtro ascendente', async () => {
    const mockSort = ['Bespin', 'Tatooine', 'Yavin IV', 'Dagobah', 'Endor', 'Naboo', 'Alderaan', 'Hoth', 'Kamino', 'Coruscant'];

    await act(() => render(<App />));

    const columnSort = await screen.findByTestId("column-sort");
    const inputAsc = await screen.findByTestId("column-sort-input-asc");
    const btnSort = await screen.findByTestId("column-sort-button");

    act(() => {
      userEvent.selectOptions(columnSort, 'surface_water');
      userEvent.click(inputAsc);
      expect(inputAsc).toBeChecked();
      userEvent.click(btnSort);
    });

    const mock = await screen.findAllByTestId('planet-name');
    expect(mock).toHaveLength(10);
    mock.forEach((element, index) => expect(element).toHaveTextContent(mockSort[index]));
  });

  // test('Verifica o filtro descendente', async () => {
  //   const mockSort = ['Hoth', 'Kamino', 'Alderaan', 'Naboo', 'Yavin IV', 'Dagobah', 'Endor', 'Tatooine', 'Bespin', 'Coruscant'];

  //   await act(() => render(<App />));

  //   const columnSort = await screen.findByTestId("column-sort");
  //   const inputDesc = await screen.findByTestId("column-sort-input-desc");
  //   const btnSort = await screen.findByTestId("column-sort-button");

  //   act(() => {
  //     userEvent.selectOptions(columnSort, 'surface_water');
  //     userEvent.click(inputDesc);
  //     expect(inputDesc).toBeChecked();
  //     userEvent.click(btnSort);
  //   });

  //   const mock = await screen.findAllByTestId('planet-name');
  //   expect(mock).toHaveLength(10);
  //   mock.forEach((element, index) => expect(element).toHaveTextContent(mockSort[index]));
  // });

  test('Verifica se os planetas são renderizados na tela', async () => {
    const mockName = ['Tatooine', 'Alderaan', 'Yavin IV', 'Hoth', 'Dagobah', 'Bespin', 'Endor', 'Naboo', 'Coruscant', 'Kamino'];

    await act(() => render(<App />));

    const mock = await screen.findAllByTestId('planet-name');
    expect(mock).toHaveLength(10);
    mock.forEach((element, index) => expect(element).toHaveTextContent(mockName[index]));
  });
});
