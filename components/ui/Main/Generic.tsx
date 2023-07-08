export interface Props {
  text?: string;
}

export default function Generic(props: Props) {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(#d8c5a8, #eccb88 50%, #3678e9 50%, #5d9bb8 100%, #5d9bb8 100%)",
  };
  return (
    <div
      class="w-full min-h-[770px]"
      style={gradientStyle}
    >
      <div class="max-w-[1440px] mx-auto w-full md:py-[80px] py-[40px] flex flex-col items-center justify-center">
        <h2>{props.text}</h2>
      </div>
    </div>
  );
}
