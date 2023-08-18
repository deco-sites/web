import { useEffect, useState } from "preact/hooks";
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
    window.history.pushState(null, "", `/test/${page}`);
    renderPage(page);
  };

  useEffect(() => {
    const handlePopstate = () => {
      const path = window.location.pathname;
      const slug = path.split("/").pop();
      if (slug && slug !== "") {
        setCurrentPage(slug);
      }
    };

    addEventListener("popstate", handlePopstate);

    const path = window.location.pathname;
    const slug = path.split("/").pop();
    if (slug && slug !== "") {
      setCurrentPage(slug);
    }

    return () => {
      removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const renderPage = (page: string) => {
    switch (page) {
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
      <div>
        <button onClick={() => navigateToPage("page1")}>Página 1</button>
        <button onClick={() => navigateToPage("page2")}>Página 2</button>
        <button onClick={() => navigateToPage("page3")}>Página 3</button>
      </div>
      <div class="w-[300px] h-full bg-[#e1f1b6]">
        {renderPage(currentPage)}
      </div>
    </div>
  );
}
