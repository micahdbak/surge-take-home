"use client";

export function Button(props) {
  const { children, href, isSubmit } = props;

  if (isSubmit) {
    return (
      <button type="submit" className="hover:cursor-pointer relative p-[1px] bg-gradient-to-b from-red-400 to-red-600 rounded-[9px]">
        <div className="flex flex-row justify-center items-center gap-3 h-10 text-white p-4 bg-red-500 hover:bg-red-600 rounded-[8px]">
          {children}
        </div>
      </button>
    );
  } else {
    return (
      <a href={href}>
        <div className="relative p-[1px] bg-gradient-to-b from-red-400 to-red-600 rounded-[9px]">
          <div className="flex flex-row justify-center items-center gap-3 h-10 text-white p-4 bg-red-500 hover:bg-red-600 rounded-[8px]">
            {children}
          </div>
        </div>
      </a>
    );
  }
}

export function SecondaryButton(props) {
  const { children, href } = props;

  return (
    <a href={href}>
      <div className="relative p-[1px] bg-gradient-to-b from-red-400 to-red-600 rounded-[9px]">
        <div className="flex flex-row justify-center items-center gap-2 h-10 text-black p-4 bg-white hover:bg-red-200 rounded-[8px]">
          {children}
        </div>
      </div>
    </a>
  );
}