import type { FC } from 'react';
import { createFileRoute } from '@tanstack/react-router';

const HomePage: FC = () => {
  return <div>Hello</div>;
};

export const Route = createFileRoute('/(app)/_layout/')({
  component: HomePage,
});
