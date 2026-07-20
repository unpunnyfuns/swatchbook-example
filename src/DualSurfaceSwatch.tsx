import type { ReactElement } from 'react';
import type { PresenterProps } from '@unpunnyfuns/swatchbook-addon';
import { formatColor } from '@unpunnyfuns/swatchbook-addon';

// swatchbook renders every color token through a presenter. This is a custom
// one: it draws each color over a light and a dark surface so a swatch can be
// judged against either background. The two surfaces are themselves token
// colors (the lightest and darkest neutrals from the palette), so they stay in
// step with the token set instead of being hard-coded here.
const LIGHT_SURFACE = 'var(--sb-color-palette-neutral-0)';
const DARK_SURFACE = 'var(--sb-color-palette-neutral-900)';

const chip = { width: 44, height: 30, borderRadius: 4 };

export function DualSurfaceSwatch({ path, token, cssVar }: PresenterProps<'color'>): ReactElement {
  // The presenter is handed the token already resolved for the active axis
  // tuple. Prefer the live CSS variable so the swatch tracks toolbar flips, and
  // fall back to the realized value when no variable is supplied.
  const paint = cssVar ?? formatColor(token.$value, 'hex').value;
  const name = path.split('.').at(-1) ?? path;
  return (
    <div data-testid="dual-surface-swatch" style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: 6, background: LIGHT_SURFACE }}>
          <div style={{ ...chip, background: paint }} />
        </div>
        <div style={{ padding: 6, background: DARK_SURFACE }}>
          <div style={{ ...chip, background: paint }} />
        </div>
      </div>
      <code style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11 }}>{name}</code>
    </div>
  );
}
