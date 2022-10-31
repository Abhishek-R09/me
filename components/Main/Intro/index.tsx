const Intro = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen max-w-5xl flex-col items-start justify-center"
    >
      <div>
        <p className="text-md mb-3 font-mono leading-snug text-emerald-300 xsm:text-lg">
          Hi, My name is
        </p>
        <h1 className="mb-3 text-2xl font-bold text-slate-300 xsm:text-4xl">
          Abhishek Ramasubramanian.
        </h1>
        <h1 className="mb-3 text-2xl font-bold text-slate-400 xsm:text-4xl">
          I build things for the web.
        </h1>
        <p className="text-md mb-6 text-slate-400 xsm:text-lg">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <a
          href="/"
          className="b-1 mt-3 rounded-md border border-emerald-300 px-6 py-3 font-mono text-emerald-300 transition ease-linear hover:bg-emerald-100 hover:bg-opacity-10 focus-visible:bg-emerald-100 focus-visible:bg-opacity-10 focus-visible:outline-none"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Intro;
