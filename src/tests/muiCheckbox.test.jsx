import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from '@mui/material';
import { useState } from 'react';


describe("Checkbox tests", () => {

  test('renders unchecked checkbox correctly', () => {
    // Renderiza un Checkbox no marcado
    render(<Checkbox checked={false} />);
    const checkbox = screen.getByRole('checkbox'); // Busca el checkbox por su rol
    expect(checkbox).toBeInTheDocument(); // Verifica que el checkbox está en el documento
    expect(checkbox).not.toBeChecked(); // Verifica que el checkbox no está marcado
  });

  test('renders checked checkbox correctly', () => {
    // Renderiza un Checkbox no marcado
    render(<Checkbox checked={true} />);
    const checkbox = screen.getByRole('checkbox'); // Busca el checkbox por su rol
    expect(checkbox).toBeInTheDocument(); // Verifica que el checkbox está en el documento
    expect(checkbox).toBeChecked(); // Verifica que el checkbox no está marcado
  });

  test('renders checked checkbox disabled correctly', () => {
    // Renderiza un Checkbox no marcado
    render(<Checkbox checked={false} disabled/>);
    const checkbox = screen.getByRole('checkbox'); // Busca el checkbox por su rol
    expect(checkbox).toBeInTheDocument(); // Verifica que el checkbox está en el documento
    expect(checkbox).not.toBeChecked(); // Verifica que el checkbox no está marcado
    expect(checkbox).toBeDisabled(); //Verifica que el checkbox está desabilitado
  });

  test('checkbox toggles state correctly', () => {
    // Renderiza un Checkbox no marcado

    const TestComponent = () => {
        const [checked, setChecked] = useState(false);
        return <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
    }

    render(<TestComponent/>);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument(); // Verifica que el checkbox está en el documento
    expect(checkbox).not.toBeChecked(); // Verifica que el checkbox no está marcado

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});