import { WithRedux, WithTheme } from './providers';

import { HomePage } from '../pages';

function App() {
  console.log('$c Render');

  return (
    <WithTheme>
      <HomePage />
    </WithTheme>
  );
}

export function AppWithRedux() {
  return <WithRedux children={<App />} />;
}
