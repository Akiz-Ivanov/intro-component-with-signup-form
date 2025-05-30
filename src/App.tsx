import Form from "./components/FormComponent"

function App(): React.JSX.Element {
  
  return (
    <main className="px-6 py-8">
      <div className="wrapper text-center max-w-[29rem] md:max-w-[69.5rem] leading-relaxed font-normal
        flex flex-col md:flex-row gap-14 justify-center items-center"
      >

        <header className="flex flex-col gap-6 md:w-[50%] md:text-left">

          <h1 className="text-title font-bold leading-tight text-pretty">
            Learn to code by watching others
          </h1>

          <p className="font-medium tracking-wide">
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable.
          </p>

        </header>

        <section className="md:w-[50%] flex flex-col gap-3 md:gap-6">

          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-black -z-10  
              left-1/2 right-1/2 w-full h-[89.5%] transform -translate-x-1/2 opacity-15"
            />

            <div className="offer mb-4 bg-accent-blue py-16-18 px-8 rounded-lg text-balance">
              <h2 className="font-normal text-white/80">
                <strong className="font-semibold text-white">Try it free 7 days</strong> then $20/mo. thereafter
              </h2>
            </div>
          </div>


          <div className="relative">

            <div className="absolute inset-0 rounded-lg bg-black -z-10  translate-y-[.55rem]
              left-1/2 right-1/2 w-full h-[100%] transform -translate-x-1/2 opacity-15"
            />

            <div className="flex flex-col gap-4 bg-card p-24-40 rounded-lg">

              <Form />

              <p className="text-neutral-grayish-blue text-xs text-pretty px-3">
                By clicking the button, you are agreeing to our&nbsp;
                <a
                  href="#"
                  className="text-primary-red font-bold focus-visible:border-accent-blue focus-visible:border-2 hover:underline focus-visible:outline-none "
                >Terms and Services</a>
              </p>

            </div>
          </div>

        </section>

      </div>
    </main>
  )
}

export default App
