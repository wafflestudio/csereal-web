export default function HTMLEditorFallback() {
  return (
    <div className="mx-[3.75rem] mt-3 flex h-[400px] animate-pulse flex-col">
      <div className="flex flex-col gap-2">
        <div className="h-4 w-2/5 rounded bg-[#ffffff] opacity-30"></div>
        <div className="h-4 w-2/5 rounded bg-[#ffffff] opacity-30"></div>
      </div>
      <div className="mt-4 flex w-3/5 flex-1 flex-col gap-2">
        <div className="h-4 rounded bg-[#ffffff] opacity-30"></div>
        <div className="h-4 rounded bg-[#ffffff] opacity-30"></div>
        <div className="h-4 rounded bg-[#ffffff] opacity-30"></div>
      </div>
    </div>
  );
}
