import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function Layout(props: Props) {
  return (
    <div class="bg-primary min-h-screen text-primary">
      {props.children}
    </div>
  );
}
