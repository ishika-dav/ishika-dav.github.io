export default function Footer() {
  function toTop() {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="mt-14 flex items-end justify-between px-5 py-4 sm:flex text-body-4 md:text-body-3">
      <div className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between">
        <div className="flex space-x-1" >
          <span>&copy;</span>
          <span>2024</span>
          <span className="font-extrabold uppercase 2xl:text-body-1">Ishika Dav</span>
        </div>
      </div>
      <button onClick={toTop} className="col-span-2 flex items-center space-x-2 w-fit group 2xl:text-body-1">
        <span className="font-extrabold uppercase hover:font-black duration-200">BACK TO TOP</span>
        <span className="group-hover:-translate-y-3 duration-300 ease-in-out">
        </span>
      </button>
    </footer>
  );
}
