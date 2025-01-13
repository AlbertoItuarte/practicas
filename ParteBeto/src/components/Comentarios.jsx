import { useState } from "react";

const Comentarios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const comentarios = [
    {
      texto:
        "Stands out as the best choice for password management. As an open-source solution, it offers a complete transparency and works seamlessly across all platforms.",
      nombre: "John Doe",
      puesto: "Software Engineer",
    },
    {
      texto:
        "I'm very impressed with the level of security that this password manager offers. It's easy to use and has a clean interface that makes it easy to manage passwords.",
      nombre: "Jane Smith",
      puesto: "Product Manager",
    },
    {
      texto:
        "I've been using this password manager for a few months now and I'm very happy with it. It's easy to use and has a clean interface that makes it easy to manage passwords.",
      nombre: "Alice Johnson",
      puesto: "UX Designer",
    },
    {
      texto:
        "Its so easy to use and has a clean interface that makes it easy to manage passwords. I'm very impressed with the level of security that this password manager offers.",
      nombre: "Bob Brown",
      puesto: "Frontend Developer",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comentarios.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === comentarios.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="pt-10 pb-20">
      <div className="xs:pl-20 xs:pr-6 sm:px-20 ">
        <div className="flex w-full justify-between items-center pb-6">
          <p className="text-[#3A9676] text-xl">Our clients</p>
        </div>
        <div className="border-b-2 border-[#3A9676] w-full mb-6"></div>
        <div className="flex md:flex-row xs:flex-col justify-between pb-10">
          <h2 className="font-bold xs:text-3xl xs:self-center md:self-start md:text-4xl lg:text-5xl md:w-8/12 xl:w-5/12">
            What our customers say about collaborating with us
          </h2>
          <div className="flex xs:space-x-3 xs:pr-6 md:space-x-8 justify-end font-semibold items-end xs:pt-6 md:pt-0">
            <div className="flex space-x-2 items-center">
              <img
                src="flechaIzquierda.png"
                alt="flecha izquierda"
                className="md:w-6 xs:w-10 cursor-pointer"
                onClick={handlePrevious}
              />
              <p
                className="xs:text-lg md:text-xl cursor-pointer xs:hidden md:block"
                onClick={handlePrevious}
              >
                Previous
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <p
                className="xs:text-lg text-xl cursor-pointer xs:hidden md:block"
                onClick={handleNext}
              >
                Next
              </p>
              <img
                src="flechaDerecha.png"
                alt="flecha derecha"
                className="md:w-6 xs:w-10 cursor-pointer"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-50 xs:-ml-6 xs:-mr-6 sm:mr-0 sm:ml-0 rounded-xl p-10">
          <div className="xs:wfull sm:w-8/12">
            <p className="2xl:text-6xl xl:text-5xl md:text-3xl xs:text-2xl font-semibold">
              {comentarios[currentIndex].texto}
            </p>
            <p className="2xl:text-3xl xl:text-2xl md:text-xl xs:text-lg pt-6 font-semibold">
              {comentarios[currentIndex].nombre}
            </p>
            <p className="2xl:text-2xl xl:text-xl md:text-lg xs:text-base font-semibold text-[#1a7426]">
              {comentarios[currentIndex].puesto}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comentarios;
