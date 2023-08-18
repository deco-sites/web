import { useState } from "preact/hooks";
import Page1 from "deco-sites/web/components/ui/config/page1.tsx";
import Page2 from "deco-sites/web/components/ui/config/page2.tsx";
import Page3 from "deco-sites/web/components/ui/config/page3.tsx";

export interface Props {
  title: string;
}

export default function PageTest(props: Props) {
  const [currentPage, setCurrentPage] = useState("page1");

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.history.pushState(null, "", `/${page}`);
  };

  const renderButtons = () => {
    switch (currentPage) {
      case "page1":
        return <button onClick={() => navigateToPage("page3")}>Página 3
        </button>;
      case "page2":
        return (
          <div>
            <button onClick={() => navigateToPage("page1")}>Página 1</button>
            <button onClick={() => navigateToPage("page3")}>Página 3</button>
          </div>
        );
      case "page3":
        return (
          <div>
            <button onClick={() => navigateToPage("page1")}>Página 1</button>
            <button onClick={() => navigateToPage("page2")}>Página 2</button>
          </div>
        );
      default:
        return null;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "page1":
        return <Page1 />;
      case "page2":
        return <Page2 />;
      case "page3":
        return <Page3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>{props.title}</h1>
      {renderButtons()}
      <div>{renderPage()}</div>
    </div>
  );
}
