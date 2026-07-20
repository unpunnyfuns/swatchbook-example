import type { ReactElement } from 'react';

export interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps): ReactElement {
  return (
    <button type="button" data-testid="example-button">
      {label}
    </button>
  );
}
