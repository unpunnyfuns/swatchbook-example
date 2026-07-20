import type { ReactElement } from 'react';
import type { PresenterProps } from '@unpunnyfuns/swatchbook-addon';
import { formatColor } from '@unpunnyfuns/swatchbook-addon';

const chip = { width: 44, height: 30, borderRadius: 4 };

export function DualSurfaceSwatch({ path, token, cssVar }: PresenterProps<'color'>): ReactElement {
  const paint = cssVar ?? formatColor(token.$value, 'hex').value;
  return (
    <div data-testid="dual-surface-swatch" style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: 6, background: '#ffffff' }}>
          <div style={{ ...chip, background: paint }} />
        </div>
        <div style={{ padding: 6, background: '#16161d' }}>
          <div style={{ ...chip, background: paint }} />
        </div>
      </div>
      <code style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11 }}>{path.split('.').at(-1)}</code>
    </div>
  );
}
