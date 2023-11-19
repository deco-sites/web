export interface FontsProps {
  font1: string;
  font2: string;
  font3: string;
  font4: string;
}

export default function Fonts({ font1, font2, font3, font4 }: FontsProps) {
  return (
    <div className="bg-[#fbffc8]">
      <div className="flex flex-col max-w-[1440px] mx-auto gap-5">
        <p class="font-bold font1 text-4xl text-black">{`${font1}`}</p>
        <p class="font-bold font2 text-4xl text-black">{`${font2}`}</p>
        <p class="font-bold font3 text-4xl text-black">{`${font3}`}</p>
        <p class="font-bold font4 text-4xl text-black">{`${font4}`}</p>
      </div>
    </div>
  );
}
