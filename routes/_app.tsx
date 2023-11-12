import { AppProps } from "$fresh/server.ts";
import GlobalTags from "../components/GlobalTags.tsx";

function App({ Component }: AppProps) {
  return (
    <>
      <GlobalTags />
      <Component />
    </>
  );
}

export default App;