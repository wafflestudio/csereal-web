export default function Header() {
  return (
    <header className="h-[8.75rem] mb-[20px] bg-neutral-200 sticky top-0 z-40 pt-12 px-[3.75rem] flex">
      <div>
        <h2 className="font-yoon text-[1.375rem] font-bold tracking-[.03438rem] mb-[0.31rem]">
          서울대학교 컴퓨터공학부
        </h2>
        <h3 className="font-yoon text-[.875rem] font-bold tracking-[-0.04375rem]">
          Seoul National University
          <br />
          Dept. of Computer Science and Engineering
        </h3>
      </div>
    </header>
  );
}
