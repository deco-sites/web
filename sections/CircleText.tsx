interface CircleTextProps {
  text: string;
}

export default function CircleText({ text }: CircleTextProps) {
  return (
    <div class="m-0">
      <div class="circle absolute left-[45%] overflow-hidden w-full lg:top-0 top-[60%]">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enable-background="new 0 0 300 300"
          xmlSpace="preserve"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <circle cx="150" cy="100" r="75" fill="#000000" class="circle-color" />
          <g>
            <use xlinkHref="#circlePath" fill="#22c489" />
            <text fill="#ffffff" class="text-[15px] font-bold">
              <textPath xlinkHref="#circlePath">
                {text}
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
