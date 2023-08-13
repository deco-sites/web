import Icon from "deco-sites/web/components/ui/Icon.tsx";

interface Props {
  class?: string;
}

const SearchInput = (props: Props) => {
  return (
    <div className="flex items-center w-full lg:pb-0 pb-[70px]">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className={`w-full py-[6px] pr-[16px] pl-[48px] lg:rounded-[52px] border border-[#bababa] placeholder-[#5a5f5d] text-[15px] relative focus:outline-none focus:border-[#64EF74] ${props.class}`}
      />
      <Icon
        id="MagnifyingGlass"
        size={20}
        strokeWidth={0.01}
        className="absolute ml-[16px] w-5 h-5 p-[1.67px] fill-current text-[#424242] focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
