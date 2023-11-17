export interface FontsProps {
    font1: string;
    font2: string;
    font3: string;
    font4: string;
}

export default function Fonts({ font1, font2, font3 , font4 }: FontsProps) {
    return (
        <div className="bg-[#fbffc8]">
            <div className="flex flex-col max-w-[1440px] mx-auto gap-5">
                <p class="font1 text-black font-bold text-4xl">{`${font1}`}</p>
                <p class="font2 text-black font-bold text-4xl">{`${font2}`}</p>
                <p class="font3 text-black font-bold text-4xl">{`${font3}`}</p>
                <p class="font4 text-black font-bold text-4xl">{`${font4}`}</p>
            </div>
        </div>
    );
}

