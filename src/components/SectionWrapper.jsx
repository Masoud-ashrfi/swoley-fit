import React from "react";

export default function SectionWrapper(props) {
  const { children, header, title, id } = props;
  return (
    <section id={id} className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 flex flex-col justify-center items-center gap-2 py-10 p-4">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title[0]} <span className="uppercase text-blue-400">{title[1]}</span>{" "}
          {title[2]}
        </h2>
      </div>
      <div className="flex flex-col w-full  mx-auto max-w-[800px] gap-10 p-4">
        {children}
      </div>
    </section>
  );
}
