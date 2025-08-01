"use client";

type Props = {
  title1: string;
  title2: string;
  selected: number;
  onChange: (val: number) => void;
};

function TitlePage({ title1, title2, selected, onChange }: Props) {
  return (
    <div className="w-full flex">
      <h3
        className={`${selected === 2 ? "bg-purple-600 font-medium" : "bg-purple-400 font-black underline"} w-[50%] p-2 text-center text-pink-50 transition-all duration-100 cursor-pointer`}
        onClick={() => onChange(1)}
      >
        {title1}
      </h3>
      <h3
        className={`${selected === 2 ? "bg-purple-400 font-black underline" : "bg-purple-600 font-medium"} w-[50%] p-2 text-center text-pink-50 transition-all duration-100 cursor-pointer`}
        onClick={() => onChange(2)}
      >
        {title2}
      </h3>
    </div>
  );
}

export default TitlePage;