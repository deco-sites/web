// main.tsx
import { h, render } from 'preact';
import PageTest from "deco-sites/web/components/ui/config/PageTest.tsx";

const root = document.getElementById('root');
if (root) {
  render(<PageTest title="Minhas Rotas" />, root);
}
