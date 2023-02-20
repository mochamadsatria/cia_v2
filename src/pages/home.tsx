import {
  faInstagram,
  faInternetExplorer,
  faLine,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";

const navigations = [
  {
    name: "Informasi",
    to: "#information",
  },
  {
    name: "Tentang",
    to: "#about",
  },
  {
    name: "Events",
    to: "#events",
  },
  {
    name: "Merchandise",
    to: "#merch",
  },
  {
    name: "Kontak",
    to: "#contact",
  },
];

const Navbar = () => (
  <div className="fixed w-full z-50">
    <div className="block sm:hidden backdrop-brightness-50">
      <Disclosure>
        <div className="flex justify-between px-5">
          <a href={"/"}>
            <img
              src={"/imgs/logo.png"}
              alt="11th Civil In Action"
              width={150}
              height={10}
            />
          </a>
          <Disclosure.Button className="py-2">
            <div className="space-y-2">
              <span className="block w-5 h-1 rounded-full bg-white"></span>
              <span className="block w-8 h-1 rounded-full bg-white"></span>
              <span className="block w-8 h-1 rounded-full bg-white"></span>
            </div>
          </Disclosure.Button>
        </div>
        <Disclosure.Panel className="text-gray-500">
          <nav className="flex flex-col md:flex-row items-center text-white font-semibold">
            {navigations.map((item) => (
              <a
                key={"nav." + item.name}
                className="hover:backdrop-brightness-75 py-4 w-full px-10"
                href={item.to}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </Disclosure.Panel>
      </Disclosure>
    </div>
    <header className="hidden sm:flex flex-row gap-10 items-center px-20 py-4 relative  backdrop-brightness-50">
      <a href={"/"}>
        <img
          src={"/imgs/logo.png"}
          alt="11th Civil In Action"
          width={150}
          height={10}
        />
      </a>

      <nav className="flex flex-col sm:flex-row gap-5 items-center text-white font-semibold">
        {navigations.map((item) => (
          <a key={"nav." + item.name} href={item.to}>
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  </div>
);

export default function Index() {
  return (
    <div className="">
      <head>
        <title>Civil In Action | UGM</title>
      </head>
      <div className=" bg-[#FEECD4]">
        <div>
          <div className="bg-[url('/imgs/bg-1.png')] bg-no-repeat bg-contain h-[500vh]">
            <Navbar />

            <div className="flex flex-col items-center justify-center relative top-32 lg:top-64">
              <div className=" w-80 h-24 xl:w-[60rem] xl:h-[18rem] relative rounded">
                <img
                  src={"/imgs/logo-big.png"}
                  alt="11th Civil In Action"
                  className=" w-full h-full"
                />
              </div>
              <h1 className=" lg:text-xl xl:text-3xl font-bold text-center mt-7 px-10">
                WUJUDKAN BANGSA PERKASA, INDONESIA TANGGUH BENCANA
              </h1>

              <div
                id="information"
                className="my-36 w-full flex flex-col items-center mt-24 sm:mt-48 lg:mt-96"
              >
                <h2 className="text-center font-bold text-4xl mb-10">
                  INFORMASI
                </h2>
                <div className="relative w-10/12 sm:w-6/12 lg:w-10/12 xl:w-8/12 h-[40vh] lg:h-[100vh]">
                  <img
                    src={"/imgs/information.png"}
                    className=" w-full h-full"
                    alt="Informasi"
                  />
                </div>
              </div>

              <div className=" clip-path-polygon-[0_5%,_100%_0,_100%_100%,_0_100%] bg-[#4E97C4] w-full flex flex-col">
                <div
                  id="about"
                  className=" my-40 text-white  w-screen flex flex-col items-center"
                >
                  <h2 className=" text-center font-bold text-4xl mb-10">
                    TENTANG CIA
                  </h2>
                  <p className=" text-justify px-10 max-w-4xl">
                    Civil In Action (CIA) adalah kerja kolektif tahunan yang
                    diprakarsai oleh mahasiswa Departemen Teknik Sipil dan
                    Lingkungan, Universitas Gadjah Mada dengan tujuan menjadi
                    media bagi para mahasiswa dan pelajar seluruh Indonesia
                    untuk mengembangkan potensi dan ilmu pengetahuan di bidang
                    ketekniksipilan dan lingkungan. Tiap tahunnya, Civil In
                    Action selalu menghadirkan inovasi-inovasi guna mengasah
                    kemampuan calon insinyur bangsa dengan berbagai tema yang
                    ditawarkan. Pada tahun ini, 11th Civil In Action membawakan
                    tema “Wujudkan Bangsa Perkasa, Indonesia Tangguh Bencana”.
                  </p>
                  <div className="flex gap-10 items-start justify-center mt-28 bg-[url('/imgs/bg-9.png')] w-full bg-no-repeat bg-center bg-contain lg:bg-cover h-[50vh] sm:h-[100vh] lg:h-[120vh]">
                    <div className="flex flex-col space-y-2 items-center font-semibold text-xl w-24">
                      <div className=" relative w-14 h-14">
                        <img
                          src={"/imgs/calendar.png"}
                          className=" w-full h-full"
                          alt="Event counter"
                        />
                      </div>
                      <span className=" text-sm">3</span>
                      <span className=" text-sm">Event</span>
                    </div>
                    <div className="flex flex-col space-y-2 items-center font-semibold text-xl w-24">
                      <div className=" relative w-14 h-14">
                        <img
                          src={"/imgs/people.png"}
                          className=" w-full h-full"
                          alt="Event counter"
                        />
                      </div>
                      <span className=" text-sm">60+</span>
                      <span className=" text-sm">Tim</span>
                    </div>
                    <div className="flex flex-col space-y-2 items-center font-semibold text-xl w-24">
                      <div className=" relative w-14 h-14">
                        <img
                          src={"/imgs/thropy.png"}
                          className=" w-full h-full"
                          alt="Event counter"
                        />
                      </div>
                      <span className=" text-sm">Rp 80++ Juta</span>
                      <span className=" text-sm">Total hadiah</span>
                    </div>
                  </div>
                </div>

                <div
                  className=" -mt-28 lg:my-20 flex flex-col items-center text-white"
                  id="events"
                >
                  <h2 className=" text-center font-bold text-4xl mb-20">
                    Events
                  </h2>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-14">
                    <div className="">
                      <a href="/fcec">
                        <div className="flex flex-col justify-between h-72 w-64 items-center p-10 bg-[#0173BC] rounded-lg outline-dashed">
                          <div className=" relative w-40 h-28">
                            <img
                              src={"/imgs/logo-fcec-white.png"}
                              className=" w-full h-full"
                              alt="SUSTAINABLE BRIDGE COMPETITION"
                            />
                          </div>
                          <h3 className=" text-xl font-semibold text-center">
                            FUTURE
                            <br />
                            CIVIL
                            <br />
                            ENGINEERING
                            <br />
                            CHALLENGE
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div className="lg:scale-125">
                      <a href="/sbc">
                        <div className="flex flex-col justify-between h-72 w-64 items-center p-10 bg-[#EC4E21] rounded-lg outline-dashed">
                          <div className=" relative w-40 h-28">
                            <img
                              src={"/imgs/logo-sbc-white.png"}
                              className=" w-full h-full"
                              alt="SUSTAINABLE BRIDGE COMPETITION"
                            />
                          </div>
                          <h3 className=" text-xl font-semibold text-center">
                            SUSTAINABLE
                            <br />
                            BRIDGE
                            <br />
                            COMPETITION
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div className="">
                      <a href="/cic">
                        <div className="flex flex-col justify-between items-center h-72 w-64 p-10 bg-[#FCB342] rounded-lg outline-dashed">
                          <div className=" relative w-20 h-28">
                            <img
                              src={"/imgs/logo-cic-white.png"}
                              className=" w-full h-full"
                              alt="SUSTAINABLE BRIDGE COMPETITION"
                            />
                          </div>
                          <h3 className=" text-xl font-semibold text-center">
                            CIVIL
                            <br />
                            INNOVATION
                            <br />
                            CHALLENGE
                            <br />
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  id="merch"
                  className="text-white mt-20 flex flex-col items-center pb-10"
                >
                  <h2 className=" text-center font-bold text-4xl mb-20">
                    MERCHANDISE
                  </h2>
                  <div className="flex flex-col gap-5 [&>*]:text-2xl lg:[&>*]:text-6xl font-bold">
                    <span>COMING SOON</span>
                    <span>COMING SOON</span>
                    <span>COMING SOON</span>
                    <span>COMING SOON</span>
                  </div>
                </div>
              </div>
              <div className="bg-[url('/imgs/bg-8.png')] bg-[length:100%_100px] md:bg-[length:100%_200px] w-full bg-no-repeat h-[30vh] -mt-1 bg-[#FEECD4]"></div>

              <div
                id="contact"
                className="bg-[#FEECD4] w-full flex flex-col items-center py-20"
              >
                <h1 className="text-4xl font-bold mb-20">KONTAK</h1>
                <div className="flex flex-col lg:flex-row gap-20">
                  <div className="flex flex-col space-y-3 font-semibold text-lg text-center">
                    <span className="text-2xl font-bold">Naufal</span>
                    <span className="flex items-center gap-5">
                      <FontAwesomeIcon icon={faPhone} />
                      082137192763
                    </span>
                    <span className="flex items-center gap-5">
                      <FontAwesomeIcon icon={faLine} />
                      @ahsannaufal_
                    </span>
                  </div>
                  <div className="flex flex-col space-y-3 font-semibold text-lg text-center">
                    <span className="text-2xl font-bold">Daffa</span>
                    <span className="flex items-center gap-5">
                      <FontAwesomeIcon icon={faPhone} />
                      085848139165
                    </span>
                    <span className="flex items-center gap-5">
                      <FontAwesomeIcon icon={faLine} />
                      @daffa_agil3
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#FEECD4] w-full">
                <div className="flex flex-col gap-10 items-center">
                  <h1 className=" text-2xl font-bold">SOSIAL MEDIA</h1>
                  <div className="flex gap-5">
                    <a href="https://www.linkedin.com/company/civil-in-action/">
                      <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    </a>
                    <a href="https://www.youtube.com/@civilinaction3399">
                      <FontAwesomeIcon icon={faYoutube} size="2xl" />
                    </a>
                    <a href="https://www.tiktok.com/@cia.ugm">
                      <FontAwesomeIcon icon={faTiktok} size="2xl" />
                    </a>
                    <a href="https://www.instagram.com/civilinaction/">
                      <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    </a>
                    <a href="https://www.ciaugm.com">
                      <FontAwesomeIcon icon={faInternetExplorer} size="2xl" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#FEECD4] w-full flex flex-col items-center py-32">
                <h2 className=" text-center font-bold  text-2xl lg:text-4xl my-20">
                  DISELENGGARAKAN OLEH
                </h2>
                <div>
                  <div className="flex gap-10 items-center px-10 flex-wrap justify-center">
                    <img
                      src={"/imgs/logo-dtsl.png"}
                      alt="11th Civil In Action"
                      width={100}
                      height={100}
                    />
                    <img
                      src={"/imgs/logo-ugm.png"}
                      alt="Universitas Gadjah Mada"
                      width={100}
                      height={100}
                    />
                    <img
                      src={"/imgs/logo-kmtsl.png"}
                      alt="KMTSL"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[url('/imgs/bg-10.png')] bg-contain lg:bg-[length:100%_500px] bg-no-repeat w-full h-[50vh] -mt-1 bg-[#FEECD4]">
                <div className="flex flex-col items-center mt-40">
                  <h2 className=" font-bold text-2xl lg:text-4xl text-white hidden"></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
