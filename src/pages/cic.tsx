import {
  faLine,
  faLinkedin,
  faYoutube,
  faTiktok,
  faInstagram,
  faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import axios from "axios";

const navigations = [
  {
    name: "Event",
    to: "#event",
  },
  {
    name: "Tentang",
    to: "#about",
  },
  {
    name: "Timeline",
    to: "#timeline",
  },
  {
    name: "Registrasi",
    to: "#register",
  },
  {
    name: "FAQ",
    to: "#faq",
  },
  {
    name: "Kontak",
    to: "#contact",
  },
];

function Navbar() {
  return (
    <div>
      <div className="block sm:hidden fixed w-full backdrop-brightness-50 z-50">
        <Disclosure>
          <div className="flex justify-between px-5">
            <a href={"/"}>
              <img
                src={"/logo.png"}
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
            <nav className="flex flex-col sm:flex-row items-center text-white font-semibold">
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
      <header className="hidden sm:flex flex-col sm:flex-row justify-between items-center px-20 py-4 fixed w-full backdrop-brightness-50 z-50">
        <a href={"/"}>
          <img
            src={"/logo.png"}
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
}

export default function CIC() {
  return (
    <div className="overflow-hidden">
      <head>
        <title>Civil Innovation Challenge | CIA UGM</title>
        <meta
          name="description"
          content="Civil In Action (CIA) adalah kerja kolektif tahunan yang diprakarsai oleh mahasiswa Departemen Teknik Sipil dan Lingkungan, Universitas Gadjah Mada dengan tujuan menjadi media bagi para mahasiswa dan pelajar seluruh Indonesia untuk mengembangkan potensi dan ilmu pengetahuan di bidang ketekniksipilan dan lingkungan.
Pada tahun ini, 11th Civil In Action membawakan tema “Wujudkan Bangsa Perkasa, Indonesia Tangguh Bencana”."
        />
      </head>
      <Navbar />
      <div className=" bg-[#FEE1B3] min-h-screen">
        <div
          className="min-h-screen flex flex-col justify-center items-center space-y-5 bg-[url('/cic/bg-1.png')] bg-contain bg-no-repeat  py-64"
          id="event"
        >
          <div className="flex flex-col lg:flex-row gap-5 items-center md:mt-28 px-10">
            <div className=" relative">
              <img
                src={"/cic/logo.png"}
                width={200}
                height={100}
                alt="Civil Innovation Challenge"
                //className="mt-[-135px]"
              />
            </div>
            <div className="border-l-4 border-black h-full rounded-full"></div>
            <h1 className=" text-4xl md:text-5xl font-bold text-center lg:text-start">
              CIVIL
              <br />
              INNOVATION
              <br />
              CHALLENGE
            </h1>
          </div>
          <p className=" text-xl xl:text-2xl w-full md:w-1/3 text-center">
            Inovasi Solutif sebagai Langkah Antisipasi terhadap Ketidakstabilan
            Tanah untuk Merealisasikan Daerah Tangguh Bencana
          </p>
          <div className="space-x-5 pt-10">
            <a
              href={"https://form.ciaugm.com/cic/"}
              className=" bg-[#0173BC] py-3 px-5 font-semibold shadow-lg drop-shadow-lg text-white"
            >
              Register
            </a>
            <a
              href={"#tor"}
              className=" bg-red-500 shadow-lg py-3 px-5 font-bold text-white"
            >
              TOR
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#FCB342] clip-path-polygon-[0_0,_100%_10px,_100%_100%,_0_100%] md:clip-path-polygon-[0_1px,_100%_24px,_100%_100%,_0_100%] lg:clip-path-polygon-[0_5px,_100%_32px,_100%_100%,_0_100%] -mt-24">
        <div className="bg-[url('/cic/bg-2.png')] bg-no-repeat bg-[length:120%_350px] md:bg-[length:120%_700px] lg:bg-[length:120%_1000px] bg-top flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-8xl lg:text-[8rem] xl:text-[11rem] 2xl:text-[12rem] font-bold arotate-12 mt-32 md:mt-64 text-transparent text-stroke-white text-stroke-2 lg:text-stroke-8 text-black"></h1>
          <div className=" relative w-5/6 h-20 md:h-28 lg:h-48 md:mt-28 lg:mt-40">
            <img
              className=" w-full h-full"
              src={"/cic/op-reg.png"}
              alt="Open rgistration CIC"
            />
          </div>

          <div
            className=" mt-36 lg:mt-[20rem] bg-[url('/cic/bg-3.png')] bg-no-repeat bg-[length:100%_400px] md:bg-[length:100%_700px] lg:bg-[length:100%_1300px] w-screen z-20 relative h-[150vh]"
            id="about"
          >
            <div className="flex flex-col lg:flex-row gap-20 justify-center items-center py-20 lg:py-80">
              <div className=" w-full lg:w-1/2 px-10 py-5">
                <h2 className=" text-3xl lg:text-5xl font-bold mb-10 text-center">
                  TENTANG CIC
                </h2>
                <p className=" text-lg lg:text-xl text-center">
                  <strong>Civil Innovation Challenge (CIC)</strong> merupakan
                  salah satu rangkaian kegiatan Civil In Action yang berfokus
                  pada segmen karya tulis ilmiah. Kegiatan ini mengajak
                  mahasiswa dan mahasiswi seluruh Indonesia terutama yang
                  berasal dari program studi teknik sipil untuk ikut
                  berpartisipasi dalam memberikan ide-ide terbaiknya
                  menyelesaikan suatu permasalahan pada bidang ilmu teknik sipil
                  dan lingkungan.
                </p>
              </div>
            </div>
          </div>

          <div className=" bg-[url('/cic/bg-4.png')] bg-no-repeat bg-[length:100%_100%] w-screen py-40 z-10 relative -mt-96">
            <div className=" flex flex-col gap-5  items-center">
              <h2 className=" text-9xl font-bold text-center">TEMA</h2>
              <p className=" text-center text-3xl max-w-4xl">
                “Inovasi Solutif sebagai Langkah Antisipasi terhadap
                Ketidakstabilan Tanah untuk Merealisasikan Daerah Tangguh
                Bencana”
              </p>
              <div className=" space-y-10 max-w-3xl px-10">
                <div className="flex gap-5 items-center">
                  <div className=" relative">
                    <img
                      src={"/cic/lamp.png"}
                      width={100}
                      height={100}
                      alt="Civil Innovation Challenge"
                      //className="mt-[-135px]"
                    />
                  </div>
                  <div>
                    <h3 className=" text-2xl font-bold">INOVASI</h3>
                    <p className=" text-justify text-lg">
                      Berfokus pada inovasi suatu pernyelesaian masalah
                      tertentu, khususnya di bidang keteknisipilan dan
                      lingkungan. Inovasi tersebut tentunya juga harus menjadi
                      solusi dari permasalahan yang sedang diangkat.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <div>
                    <h3 className=" text-2xl font-bold">ANTISIPASI</h3>
                    <p className=" text-justify text-lg">
                      Diharapkan dari solusi tersebut dapat menjadi langkah
                      antisipasi terhadap permasalahan khususnya di bidang
                      geoteknik yaitu ketidakstabilan tanah. Langkah
                      antisipastif ini diharapkan bisa menjamin keamanan proyek
                      ataupun kegiatan yang dilakukan di atasnya.
                    </p>
                  </div>
                  <div className=" relative">
                    <img
                      src={"/cic/crack.png"}
                      width={300}
                      height={300}
                      alt="Civil Innovation Challenge"
                      //className="mt-[-135px]"
                    />
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <div className=" relative">
                    <img
                      src={"/cic/danger.png"}
                      width={100}
                      height={100}
                      alt="Civil Innovation Challenge"
                      //className="mt-[-135px]"
                    />
                  </div>
                  <div>
                    <h3 className=" text-2xl font-bold">TANGGUH BENCANA</h3>
                    <p className=" text-justify text-lg">
                      Solusi yang ditawarkan dapat memberikan dampak secara
                      nyata dalam menyelesaikan permasalahan bencana alam dan
                      menjadikan suatu daerah tangguh terhadap bencana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" -mt-14 lg:-mt-48" id="timeline">
            <div className=" relative w-screen h-96 md:h-[44rem] lg:h-[140vh]">
              <img
                src={"/cic/timeline.png"}
                className=" w-full h-full"
                alt="Civil Innovation Challenge Timeline"
                //className="mt-[-135px]"
              />
            </div>
          </div>
          <div className="w-screen relative z-50">
            <div className="absolute z-10 -top-20 left-16">
              <div className=" relative w-40 h-40 lg:w-96 lg:h-96">
                <img
                  src={"/cic/safety.png"}
                  className=" w-full h-full"
                  alt="First prize"
                  //className="mt-[-135px]"
                />
              </div>
            </div>
            <div className=" bg-[url('/cic/bg-5.png')] bg-no-repeat bg-[length:100%_600px] lg:bg-[length:100%_1200px] flex justify-center relative z-50 -mt-[4rem] lg:-mt-[13rem] pt-20 lg:py-44">
              <div className="lg:w-1/2 flex flex-col items-center gap-2 lg:gap-5 bg-[url('/cic/bg-10.png')] bg-no-repeat bg-top lg:bg-center bg-[length:100%_100%] lg:bg-[length:100%_100%] py-20 lg:py-52 px-40 lg:px-44">
                <h2 className=" text-2xl lg:text-5xl font-bold">
                  TOTAL&nbsp;HADIAH
                </h2>
                <h3 className=" w-full text-start -mt-2 text-gray-600">
                  *Include&nbsp;Sertifikat&nbsp;+&nbsp;Plakat
                </h3>
                <div className="flex flex-col gap-4 lg:gap-10 w-full">
                  <div className="flex gap-5 items-center justify-end">
                    <div className=" space-y-3">
                      <h4 className=" font-bold text-lg lg:text-2xl">
                        Juara 1
                      </h4>
                      <p className=" text-2xl lg:text-3xl">
                        IDR&nbsp;10.000.000,00
                      </p>
                    </div>
                    <div className=" relative">
                      <img
                        src={"/cic/thropy-1.png"}
                        width={100}
                        height={100}
                        alt="First prize"
                        //className="mt-[-135px]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className=" relative">
                      <img
                        src={"/cic/thropy-2.png"}
                        width={100}
                        height={100}
                        alt="First prize"
                        //className="mt-[-135px]"
                      />
                    </div>
                    <div className=" space-y-3">
                      <h4 className=" font-bold text-lg lg:text-2xl">
                        Juara 2
                      </h4>
                      <p className=" text-2xl lg:text-3xl">
                        IDR&nbsp;7.000.000,00
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center justify-end">
                    <div className=" space-y-3">
                      <h4 className=" font-bold text-lg lg:text-2xl">
                        Juara 3
                      </h4>
                      <p className=" text-2xl lg:text-3xl">
                        IDR&nbsp;4.500.000,00
                      </p>
                    </div>
                    <div className=" relative">
                      <img
                        src={"/cic/thropy-3.png"}
                        width={100}
                        height={100}
                        alt="First prize"
                        //className="mt-[-135px]"
                      />
                    </div>
                  </div>
                </div>
                <a
                  href={"https://form.ciaugm.com/cic"}
                  className=" p-4 font-bold lg:text-2xl outline mt-10"
                >
                  REGISTER NOW
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[url('/cic/bg-6.png')] bg-[length:100%_100%] bg-no-repeat w-screen h-[270vh] lg:h-[230vh]  relative z-40 -mt-80">
            <div
              className=" mt-80 flex flex-col lg:flex-row gap-5 justify-center"
              id="tor"
            >
              <a href="https://files.ciaugm.com/tors/cic-umum.pdf">
                <div className=" flex flex-col gap-5 p-10 lg:p-20 hover:bg-white w-full lg:w-max items-center rounded">
                  <div className=" relative w-20 h-20 lg:w-40 lg:h-40">
                    <img
                      src={"/cic/book.png"}
                      className=" w-full h-full"
                      alt="First prize"
                      //className="mt-[-135px]"
                    />
                  </div>
                  <h2 className=" text-2xl lg:text-4xl font-bold rounded outline p-3">
                    TOR UMUM
                  </h2>
                </div>
              </a>
              <a href="https://files.ciaugm.com/tors/cic-soal.pdf">
                <div className=" flex flex-col gap-5 p-10 lg:p-20 hover:bg-white w-full lg:w-max items-center rounded">
                  <div className=" relative w-20 h-20 lg:w-40 lg:h-40">
                    <img
                      src={"/cic/book.png"}
                      className=" w-full h-full"
                      alt="First prize"
                      //className="mt-[-135px]"
                    />
                  </div>
                  <h2 className=" text-2xl lg:text-4xl font-bold rounded outline outline-black p-3 bg-blue-500 text-white">
                    TOR SOAL
                  </h2>
                </div>
              </a>
            </div>

            <div
              className="flex flex-col items-center mt-32 gap-10 px-10 lg:px-0"
              id="register"
            >
              <h2 className=" text-center text-4xl font-bold">PENDAFTARAN</h2>
              <div className=" bg-[#FCB342] rounded p-5 outline outline-black max-w-3xl bg-opacity-50 text-lg lg:text-xl">
                <ol className=" list-decimal space-y-3 text-sm">
                  <li>
                    Peserta lomba melakukan pendaftaran timnya mulai dari
                    tanggal 13 Februari - 12 Maret 2023.
                  </li>
                  <li>
                    Peserta lomba mengisi formulir pendaftaran dengan menekan
                    tombol “Register now” di atas.
                  </li>
                  <li>
                    Peserta akan dikenakan biaya pendaftaran sebesar
                    Rp250.000,00/tim melalui rekening:1370021763731 (Mandiri)
                    a.n Maria Credisia I N T A dengan menambahkan kode unik 27
                    (nominal yang dibayarkan menjadi Rp250.027,00)
                  </li>
                  <li>
                    Tim yang berhasil melakukan pendaftaran akan mendapatkan
                    balasan email untuk diarahkan ke tahap selanjutnya.
                  </li>
                  <li>
                    Bagi tim yang sudah melakukan pendaftaran dan belum
                    mendapatkan balasan email diharapkan segera konfirmasi
                    melalui CP : 088229693500 (Manjula)
                  </li>
                  <li>
                    Dalam melakukan pendaftaran, peserta diharapkan menyiapkan
                    berkas-berkas berikut:
                    <ul className=" list-disc list-inside">
                      <li>Kartu Tanda Mahasiswa (KTM)</li>
                      <li>Surat keterangan sebagai mahasiswa aktif</li>
                      <li>Bukti pembayaran</li>
                    </ul>
                  </li>
                  <li>
                    Apabila peserta membatalkan keikutsertaan dalam lomba, uang
                    yang telah dibayarkan tidak dapat dikembalikan.
                  </li>

                  <li>
                    Masing-masing peserta diwajibkan untuk mengunggah Twibbon
                    (Slide 1) dan Poster CIC (Slide 2) yang dapat diakses
                    melalui{" "}
                    <a
                      href="https://bit.ly/TwibbondanPosterCIC11thCIA"
                      className="underline"
                    >
                      https://bit.ly/TwibbondanPosterCIC11thCIA
                    </a>{" "}
                    di akun instagram masing masing dan menyertakan bukti berupa
                    tautan unggahan pada formulir registrasi.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div
            className=" bg-white bg-[url('/cic/bg-paper.png')] bg-[length:100%_100%] bg-no-repeat w-screen py-60 relative z-0 -mt-60"
            id="faq"
          >
            <div className="flex flex-col items-center gap-10">
              <h2 className=" text-5xl font-bold">F.A.Q</h2>
              <div className=" flex flex-col gap-5 text-lg lg:text-xl max-w-3xl px-10 lg:px-0">
                <Disclosure>
                  <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center">
                    Apakah peserta dapat mengikuti lebih dari satu cabang lomba
                    11th Civil in Action?
                    <FontAwesomeIcon icon={faPlus} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    Tidak bisa. Pelaksanaan babak final setiap cabang lomba pada
                    11th CIA dilaksanakan secara bersamaan sehingga tidak
                    memungkinkan bagi peserta untuk mengikuti lebih dari satu
                    cabang lomba.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center">
                    Apa saja tahap perlombaan CIC 2023?{" "}
                    <FontAwesomeIcon icon={faPlus} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    CIC 2023 terdiri dari dua tahap, yaitu:
                    <ul className=" list-inside list-disc">
                      <li>Tahap full paper</li>
                      <li>Tahap final</li>
                    </ul>
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center">
                    Bagaimana presentasi tahap final akan dilaksanakan?
                    <FontAwesomeIcon icon={faPlus} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    Presentasi tahap final akan dilaksanakan secara luring di
                    Yogyakarta.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center">
                    Apakah kompetisi akan dilakukan secara individu atau
                    berkelompok?
                    <FontAwesomeIcon icon={faPlus} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    Kompetisi akan dilakukan secara berkelompok yang terdiri
                    dari 3 - 4 orang.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center">
                    Apakah dalam satu tim boleh terdiri dari peserta dengan
                    program studi yang berbeda-beda?
                    <FontAwesomeIcon icon={faPlus} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    Tentu! Selama peserta satu tim masih dalam satu kampus.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center">
                    Apakah kompetisi ini hanya boleh diikuti oleh mahasiswa
                    program studi Teknik Sipil?
                    <FontAwesomeIcon icon={faPlus} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    Kompetisi ini dapat diikuti juga oleh peserta dari program
                    studi lain, tetapi dalam satu tim diharuskan terdapat
                    minimal satu peserta dari jurusan Teknik Sipil.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center">
                    Bagaimana jika saya salah mengisi data pada formulir
                    pendaftaran?
                    <FontAwesomeIcon icon={faPlus} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    Segera hubungi contact person yang ada dengan memperhatikan
                    SOP.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center">
                    SOP Menghubungi Contact Person
                    <FontAwesomeIcon icon={faPlus} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="">
                    <ol className="list-inside list-decimal space-y-3">
                      <li>
                        Rentang waktu menghubungi CP pukul 08.00-20.00 WIB.
                      </li>
                      <li>
                        Diluar rentang waktu tersebut, pesan tidak akan dibalas.
                      </li>
                      <li>
                        Saat menghubungi CP, sertakan identitas berupa nama
                        lengkap dan asal universitas.
                      </li>
                      <li>Gunakan bahasa Indonesia yang baik dan sopan.</li>
                      <li>
                        Pesan ditulis dengan lugas. Bila jumlah pertanyaan lebih
                        dari satu, pertanyaan ditulis dalam bentuk poin-poin.
                      </li>

                      <li>
                        Dilarang melakukan spam chat, pesan akan dibalas sesuai
                        urutan yang masuk.
                      </li>
                    </ol>
                  </Disclosure.Panel>
                </Disclosure>
              </div>
            </div>
          </div>

          <div
            className="bg-[url('/cic/bg-7.png')] bg-[length:100%_100%] bg-no-repeat w-screen flex flex-col gap-10 items-center py-10 lg:py-20 -mt-52 relative z-50"
            id="contact"
          >
            <div className="flex flex-col gap-5 items-center outline outline-black p-20 mt-28">
              <h1 className="text-4xl font-bold">KONTAK</h1>
              <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
                <div className="flex flex-col space-y-3 font-semibold text-lg text-center">
                  <span className="text-2xl font-bold">Manjula Mumtaz</span>
                  <span className="flex items-center gap-5">
                    <FontAwesomeIcon icon={faPhone} />
                    088229693500
                  </span>
                  <span className="flex items-center gap-5">
                    <FontAwesomeIcon icon={faLine} />
                    @manjulamn
                  </span>
                </div>
                <div className="flex flex-col space-y-3 font-semibold text-lg text-center">
                  <span className="text-2xl font-bold">Keysha Ayuning</span>
                  <span className="flex items-center gap-5">
                    <FontAwesomeIcon icon={faPhone} />
                    08122890219
                  </span>
                  <span className="flex items-center gap-5">
                    <FontAwesomeIcon icon={faLine} />
                    @keyshaayuning
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-10 items-center px-10 flex-wrap justify-center">
              <img
                src={"/sbc/logo-cia-small.png"}
                alt="11th Civil In Action"
                width={150}
                height={10}
              />
              <img
                src={"/cic/logo-dept.png"}
                alt="11th Civil In Action"
                width={40}
                height={40}
              />
              <img
                src={"/cic/logo-uni.png"}
                alt="11th Civil In Action"
                width={40}
                height={40}
              />
              <img
                src={"/cic/logo-kmtsl.png"}
                alt="11th Civil In Action"
                width={40}
                height={40}
              />
              <img
                src={"/cic/logo-cic-bawah.png"}
                alt="11th Civil In Action"
                width={150}
                height={10}
              />
            </div>

            <div className="flex flex-col gap-10 items-center">
              <h1 className=" text-2xl font-bold">Our Social Media</h1>
              <div className="flex gap-5">
                <a href="https://www.aedin.com/company/civil-in-action/">
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
        </div>
      </div>
    </div>
  );
}
