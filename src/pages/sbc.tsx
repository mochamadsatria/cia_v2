import {
  faInstagram,
  faInternetExplorer,
  faLine,
  faLinkedin,
  faTiktok,
  faYoutube,
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

export default function SBC() {
  return (
    <div className=" bg-sbc-red overflow-hidden">
      <head>
        <title>Sustainable Bridge Competition | CIA UGM</title>
        <meta
          name="description"
          content="Civil In Action (CIA) adalah kerja kolektif tahunan yang diprakarsai oleh mahasiswa Departemen Teknik Sipil dan Lingkungan, Universitas Gadjah Mada dengan tujuan menjadi media bagi para mahasiswa dan pelajar seluruh Indonesia untuk mengembangkan potensi dan ilmu pengetahuan di bidang ketekniksipilan dan lingkungan.
Pada tahun ini, 11th Civil In Action membawakan tema “Wujudkan Bangsa Perkasa, Indonesia Tangguh Bencana”."
        />
      </head>
      <div className="bg-[url('/sbc/bg-pattern-1.png')] bg-[length:150px_150px]">
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

        <div className="bg-[url('/sbc/bg-1.png')] bg-contain lg:bg-[length:100%_1000px] bg-no-repeat">
          <div className="lg:h-screen" id="event">
            <div className="flex gap-3 md:gap-5 xl:gap-10 justify-end py-8 sm:py-24 md:py-32 lg:py-44 xl:py-36">
              <div className="relative w-32 h-28 md:w-44 md:h-40 lg:w-60 lg:h-56 xl:w-80 xl:h-78 2xl:w-96 2xl:h-80">
                <img
                  src={"/sbc/logo.png"}
                  alt="Sustainable Bridge Competition 11th Civil In Action"
                  className=" w-full h-full mr-3 md:mr-5 lg:mr-10"
                  sizes="(max-width: 768px) 20vw, (max-width: 1200px) 10vw, 2 3vw"
                />
              </div>
              <div className="border-l-4 border-black" />
              <div className="w-1/3 flex flex-col justify-center gap-5">
                <h1 className="text-lg md:text-2xl lg:text-4xl xl:text-6xl font-bold">
                  SUSTAINABLE
                  <br />
                  BRIDGE
                  <br />
                  COMPETITION
                </h1>
                <div className="hidden sm:flex gap-5 ">
                  <a
                    href={"https://form.ciaugm.com/sbc"}
                    className=" bg-sbc-red px-4 py-2 rounded text-white"
                  >
                    Daftar&nbsp;Sekarang
                  </a>
                  <a
                    href={"#tor"}
                    className="border border-sbc-red rounded px-4 py-2 font-semibold"
                  >
                    TOR
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-center sm:hidden bg-black bg-opacity-20 py-5">
              <a
                href={"https://form.ciaugm.com/sbc"}
                className=" bg-sbc-red px-4 py-2 rounded text-white outline outline-white shadow-lg"
              >
                Daftar&nbsp;Sekarang
              </a>
              <a
                href="#tor"
                className="outline outline-sbc-red rounded px-4 py-2 font-semibold bg-white shadow-lg"
              >
                TOR
              </a>
            </div>
          </div>

          <div className="relative my-44 md:my-64 lg:my-80 flex justify-center">
            <div className="relative w-3/4 h-28 md:h-40 lg:h-52">
              <img
                src={"/sbc/open regis.png"}
                alt="Open registration SBC"
                className=" w-full h-full"
              />
            </div>
          </div>
        </div>
        <div
          className=" bg-gradient-to-b from-transparent to-sbc-red"
          id="about"
        >
          <div className="bg-[url('/sbc/bg-2.png')] bg-[length:100%_630px] xl:bg-[length:100%_730px] bg-no-repeat h-screen relative">
            <div className="z-0 pt-60 md:pt-56 lg:pt-52 xl:pt-40 flex justify-center">
              <h1 className=" text-stroke-white text-stroke-2 text-transparent text-7xl md:text-[10rem] lg:text-[11rem] xl:text-[15.5rem] 2xl:text-[18rem] font-bold">
                TENTANG&nbsp;SBC
              </h1>
            </div>

            <div className="flex justify-center mt-[-200px] md:mt-[-280px] lg:mt-[-280px] xl:mt-[-280px] z-10">
              <div className=" w-full mx-5 md:w-1/2 bg-sbc-red bg-opacity-20 backdrop-blur text-white p-5 lg:p-10 rounded shadow-lg">
                <div className="flex justify-center">
                  <h3 className="font-semibold text-4xl">TENTANG SBC</h3>
                </div>
                <p className="mt-10 text-center">
                  <em> Sustainable Bridge Competition</em> 2023 merupakan salah
                  satu sub event dari 11th Civil in Action yang berupa lomba
                  rancang jembatan tingkat nasional yang dapat diikuti oleh
                  tim-tim mahasiswa dari seluruh perguruan tinggi di Indonesia.
                  <br />
                  <em> Sustainable Bridge Competition</em> bertujuan untuk
                  meningkatkan jiwa kompetitif dan kreatif yang dimiliki oleh
                  mahasiswa/i dalam perancangan desain jembatan untuk
                  meningkatkan pembangunan infrastruktur di Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sbc-red">
          <div className="bg-[url('/sbc/bridge-1.png')] bg-contain md:bg-[length:180%_1000px] lg:bg-[length:100%_1000px] bg-no-repeat py-36 relative">
            <span className="absolute z-0 right-0 rotate-90 text-[20rem] mt-[-70px] mr-[-300px] text-stroke-white text-stroke-2 text-transparent opacity-30 font-bold">
              TEMA
            </span>

            <div className="flex flex-col items-center z-20">
              <span className=" text-xl text-center font-semibold">
                <span className=" text-red-200">“Wujud nyata&nbsp;</span>
                <span className="text-white">
                  Pilar Pembangunan Berkelanjutan&nbsp;
                </span>
                <span className=" text-red-200">
                  dengan perancangan desain
                  <br /> jembatan yang&nbsp;
                </span>
                <span className=" text-white">efisien&nbsp;</span>
                <span className=" text-red-200">dan&nbsp;</span>
                <span className=" text-white">inovatif&nbsp;</span>
                <span className=" text-red-200">”</span>
              </span>

              <div className="flex flex-col lg:flex-row text-white w-full md:w-1/2 rounded overflow-hidden mt-10 shadow-lg outline outline-white">
                <div className="flex flex-col gap-3 items-center p-5 bg-blue-500">
                  <img
                    src={"/sbc/time-icon.png"}
                    width={40}
                    height={40}
                    alt="Efisien"
                  />
                  <h3 className="text-2xl font-semibold">Efisien</h3>
                  <p className="text-center">
                    Rancangan jembatan yang efisien dalam penggunaan sumber
                    daya, waktu pengerjaan, bahan material, dan biaya yang
                    dikeluarkan.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-center p-5 bg-yellow-500">
                  <img
                    src={"/sbc/lamp-icon.png"}
                    width={40}
                    height={40}
                    alt="Inovatif"
                  />
                  <h3 className="text-2xl font-semibold">Inovatif</h3>
                  <p className="text-center">
                    Rancangan jembatan yang memiliki inovasi pada konfigurasi
                    struktur, sambungan, metode perakitan, dan metode perawatan.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-center p-5 bg-red-500">
                  <img
                    src={"/sbc/bridge-icon.png"}
                    width={40}
                    height={40}
                    alt="Pilar Pembangunan Berkelanjutan"
                  />
                  <h3 className="text-2xl font-semibold text-center">
                    Pilar Pembangunan Berkelanjutan
                  </h3>
                  <p className="text-center">
                    Rancangan jembatan yang meminimalkan dampak negatif pada
                    aspek sosial, aspek ekonomi, dan aspek lingkungan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div
              className="w-screen h-[45vh] md:h-[85vh] lg:h-screen relative mt-[-120px]"
              id="timeline"
            >
              <img
                src={"/sbc/timeline.png"}
                className=" w-full h-full z-0"
                alt="Timeline SBC"
              />
            </div>
            <div className="h-20 bg-gradient-to-b from-transparent to-black mt-[-70px] z-10 text-white absolute w-full"></div>
            <div className=" bg-black text-white py-20 z-20">
              <div className="relative">
                <div className=" z-0 flex justify-center">
                  <h2 className="font-bold text-5xl sm:text-6xl lg:text-8xl text-stroke-yellow-100 text-stroke-2 text-transparent opacity-30">
                    INFORMASI&nbsp;JURI
                  </h2>
                </div>
                <div className="z-10 mt-[-40px] sm:mt-[-50px] lg:mt-[-70px] flex justify-center">
                  <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-yellow-100 ">
                    INFORMASI JURI
                  </h3>
                </div>
              </div>

              <h3 className="text-center text-lg font-semibold mt-10">
                Akan segera diumumkan
              </h3>
              <div className="flex justify-center mt-5">
                <ul className="flex gap-5 overflow-x-scroll md:overflow-x-hidden py-5 px-5 scrollbar-thin">
                  {[1, 2, 3, 4].map((judge) => (
                    <li key={judge}>
                      <div className=" w-44 h-44 outline-white outline-dashed rounded flex justify-center items-center">
                        <span className="text-9xl font-bold">?</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-black">
              <div className="bg-[url('/sbc/bg-3.png')] bg-contain md:bg-[length:100%_450px] lg:bg-[length:100%_720px] bg-bottom bg-no-repeat h-80 md:h-screen">
                <div className="flex justify-center lg:items-center h-full">
                  <div className=" bg-blue-500 text-white p-5 rounded flex flex-col gap-4 pt-[-60px] md:mt-36 shadow-lg h-min lg:scale-150">
                    <h2 className="text-2xl font-bold text-center ">
                      Biaya Pendaftaran
                    </h2>
                    <span className="flex gap-0 justify-center items-center">
                      <h3 className="text-xl font-bold">Rp300.000,00</h3>
                      <h4 className="text-lg font-bold text-blue-200">/tim</h4>
                    </span>
                    <p className=" text-center font-semibold">
                      Jangan ragu untuk tingkatkan potensimu,
                      <br />
                      SEGERA daftarkan timmu sekarang juga!
                    </p>
                    <a
                      href={"https://form.ciaugm.com/sbc"}
                      className="bg-red-500 px-10 py-3 rounded text-center"
                    >
                      Daftar Sekarang!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[url('/sbc/bridge-2.png')] bg-cover bg-no-repeat bg-bottom">
          <div className="bg-[url('/sbc/bg-4.png')] bg-contain md:bg-[length:180%_500px] lg:bg-[length:100%_600px] bg-no-repeat h-[100vh] bg-top py-20 relative">
            <h2 className=" font-bold text-9xl absolute mt-[-80px] ml-6 opacity-0">
              PRIZE
            </h2>
            <div className="bg-[url('/sbc/bg-5.png')] bg-[length:80%_400px] md:bg-[length:50%_400px] lg:bg-[length:35%_500px] bg-no-repeat bg-top h-[100vh]">
              <div className="flex justify-center pb-10 ">
                <h1 className="text-4xl font-bold mt-[-15px]">HADIAH</h1>
              </div>
              <div className="flex flex-col gap-4 items-center lg:scale-125">
                <div className="flex items-center relative">
                  <img
                    src={"/sbc/thropy-1.png"}
                    width={80}
                    height={80}
                    alt="Juara 1"
                    className=" mr-[-40px] z-10"
                  />
                  <div className="flex flex-col items-center font-bold text-lg z-0">
                    <span>Juara 1</span>
                    <span className="bg-gray-800 text-white text-2xl px-10 py-2 rounded">
                      Rp15.000.000,00
                    </span>
                  </div>
                </div>

                <div className="flex items-center relative">
                  <img
                    src={"/sbc/thropy-2.png"}
                    width={60}
                    height={60}
                    alt="Juara 2"
                    className=" mr-[-30px] z-10"
                  />
                  <div className="flex flex-col items-center font-bold z-0">
                    <span>Juara 2</span>
                    <span className="bg-gray-800 text-white text-xl px-10 py-2 rounded">
                      Rp12.000.000,00
                    </span>
                  </div>
                </div>

                <div className="flex items-center relative">
                  <img
                    src={"/sbc/thropy-3.png"}
                    width={50}
                    height={50}
                    alt="Juara 3"
                    className=" mr-[-25px] z-10"
                  />
                  <div className="flex flex-col items-center text-sm font-bold z-0">
                    <span>Juara 3</span>
                    <span className="bg-gray-800 text-white text-lg px-10 py-2 rounded">
                      Rp8.000.000,00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center py-20" id="tor">
            <h1 className="text-white font-bold text-5xl md:text-7xl">TOR</h1>
            <h2 className="text-white font-semibold text-3xl md:text-5xl">
              Terms of Reference
            </h2>
            <div className="flex flex-col md:flex-row gap-20 mt-32">
              <a href="https://files.ciaugm.com/tors/sbc-umum.pdf">
                <div className="bg-white p-10 rounded">
                  <img
                    src={"/sbc/book.png"}
                    width={200}
                    height={100}
                    alt="TOR Umum"
                    className="mt-[-135px]"
                  />
                  <h2 className="font-bold text-3xl text-center">TOR UMUM</h2>
                </div>
              </a>
              <a href="https://files.ciaugm.com/tors/sbc-soal.pdf">
                <div className="bg-white p-10 rounded">
                  <img
                    src={"/sbc/book.png"}
                    width={200}
                    height={100}
                    alt="TOR Soal"
                    className="mt-[-135px]"
                  />
                  <h2 className="font-bold text-3xl text-center">TOR SOAL</h2>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-20 px-10" id="register">
          <div className=" w-full md:w-2/3 xl:w-1/2 backdrop-blur rounded p-5 lg:p-10 outline outline-white">
            <h1 className="text-2xl md:text-4xl text-center text-white font-bold">
              PENDAFTARAN
            </h1>
            <ol className=" list-decimal list-inside text-white space-y-3 mt-10 font-medium text-justify">
              <li>
                <strong>
                  Peserta diharapkan untuk membayar biaya pendaftaran sebesar
                  Rp300.000/tim yang dapat dilakukan dengan cara transfer ke
                  nomor rekening 1370021763731 Bank Mandiri atas nama Maria
                  Credisia I N T A dengan menambahkan kode unik 13 (nominal yang
                  dibayarkan menjadi Rp300.013,00){" "}
                </strong>
              </li>
              <li>
                Dalam proses transaksi/transfer, peserta diharapkan untuk
                menambahkan keterangan “Registrasi SBC 2023” pada kolom
                keterangan/catatan pembayaran.
              </li>
              <li>
                Setelah transfer berhasil dilakukan, peserta wajib menyimpan
                bukti pembayaran.
              </li>

              <li>
                Peserta dapat mengisi formulir pendaftaran dengan cara klik
                tombol “form pendaftaran” di atas.
              </li>
              <li>
                <strong>
                  Masing masing peserta diwajibkan untuk mengunggah postingan
                  twibbon pada slide pertama dan poster Sustainable Bridge
                  Competition pada slide kedua yang dapat diakses melalui
                  a&nbsp;
                  <a
                    href="https://bit.ly/TwibbonSBC11thCIA"
                    className="underline"
                  >
                    https://bit.ly/TwibbonSBC11thCIA
                  </a>{" "}
                  di akun instagram masing masing dan menyertakan a bukti
                  postingan pengunggahan twibbon pada formulir registrasi.
                </strong>
              </li>
              <li>
                Perwakilan tim dapat mengisi formulir dan mengunggah dokumen
                persyaratan yang telah tercantum dalam TOR.
              </li>
              <li>
                Peserta yang berhasil registrasi akan mendapatkan konfirmasi
                berupa email dari pihak panitia SBC 2023.
              </li>
              <li>
                Ketua tim diharapkan untuk bergabung pada grup WhatsApp dan
                Google Classroom melalui tautan yang tercantum dalam email dari
                pihak panitia SBC 2023.
              </li>
              <li>
                Apabila peserta tidak menerima balasan email dalam waktu 1x24
                jam, maka peserta dapat menghubungi <em>contact person</em> (CP)
                yang tersedia.
              </li>
              <li>
                Biaya pendaftaran yang telah dibayarkan tidak dapat ditarik
                kembali
              </li>
            </ol>
          </div>
        </div>

        <div className="flex flex-col items-center py-20" id="faq">
          <div>
            <h1 className="text-4xl text-center text-white font-bold">FAQ</h1>
          </div>
          <div className="mt-10 w-full px-5 md:px-20 lg:px-52 flex flex-col gap-5">
            <Disclosure>
              <Disclosure.Button className="py-2 bg-white w-full shadow-lg rounded text-start px-5 flex justify-between items-center">
                Apakah mahasiswa di luar bidang ilmu teknik sipil dapat
                mengikuti Sustainable Bridge Competition?
                <FontAwesomeIcon icon={faPlus} />
              </Disclosure.Button>
              <Disclosure.Panel className=" bg-white p-5 rounded bg-opacity-80 backdrop-blur">
                Bisa. Setiap tim terdiri dari dua mahasiswa/i aktif jenjang
                D3/D4/S1 dari Perguruan Tinggi Negeri atau Swasta di Indonesia
                dengan setiap tim minimal beranggotakan satu mahasiswa/i Program
                Studi Teknik Sipil dan/atau peserta lain berasal dari program
                studi yang berkaitan dengan perancangan/modeling jembatan
              </Disclosure.Panel>
            </Disclosure>

            <Disclosure>
              <Disclosure.Button className="py-2 bg-white w-full shadow-lg rounded text-start px-5 flex justify-between items-center">
                Apakah peserta boleh mengikuti lebih dari satu tim?
                <FontAwesomeIcon icon={faPlus} />
              </Disclosure.Button>
              <Disclosure.Panel className=" bg-white p-5 rounded bg-opacity-80 backdrop-blur">
                Tidak. Setiap peserta hanya boleh terdaftar dalam satu tim
              </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
              <Disclosure.Button className="py-2 bg-white shadow-lg w-full rounded text-start px-5 flex justify-between items-center">
                Kapan periode pendaftaran Sustainable Bridge Competition?
                <FontAwesomeIcon icon={faPlus} />
              </Disclosure.Button>
              <Disclosure.Panel className=" bg-white p-5 rounded bg-opacity-80 backdrop-blur">
                Periode pendaftaran dilakasanakan pada tanggal 13 Februari 2023
                - 12 Maret 2023
              </Disclosure.Panel>
            </Disclosure>

            <Disclosure>
              <Disclosure.Button className="py-2 bg-white shadow-lg w-full rounded text-start px-5 flex justify-between items-center">
                Kapan TOR Soal akan dirilis?
                <FontAwesomeIcon icon={faPlus} />
              </Disclosure.Button>
              <Disclosure.Panel className=" bg-white p-5 rounded bg-opacity-80 backdrop-blur">
                Peserta akan mendapatkan detail soal dan mulai melakukan
                pengerjaan proposal mulai tanggal 13 Maret 2023 – 16 April 2023
              </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
              <Disclosure.Button className="py-2 bg-white shadow-lg w-full rounded text-start px-5 flex justify-between items-center">
                Bagaimana tahapan perlombaan Sustainable Bridge Competition?
                <FontAwesomeIcon icon={faPlus} />
              </Disclosure.Button>
              <Disclosure.Panel className=" bg-white p-5 rounded bg-opacity-80 backdrop-blur">
                Perlombaan terdiri atas dua tahap, yaitu tahap penyisian berupa
                seleksi proposal perancangan desain jembatan dan tahap final
                berupa presentasi dan perakitan dihadapan dewan juri mengenai
                rancangan jembatan yang telah dibuat. Kemudian, dilakukan
                pengujian pembebanan pada <em>prototype</em> jembatan oleh dewan
                juri
              </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
              <Disclosure.Button className="py-2 bg-white shadow-lg w-full rounded text-start px-5 flex justify-between items-center">
                <span>
                  Pelaksanaan <em>Sustainable Bridge Competition</em>{" "}
                  dilaksanakan secara
                  <em> offline</em> atau <em>online</em>?
                </span>
                <FontAwesomeIcon icon={faPlus} />
              </Disclosure.Button>
              <Disclosure.Panel className=" bg-white p-5 rounded bg-opacity-80 backdrop-blur">
                Tahap penyisihan dilaksanakan secara <em>online</em>. sementara
                itu, tahap final dilaksanakan secara <em>offline</em> di
                Fakultas Teknik Universitas Gadjah Mada
              </Disclosure.Panel>
            </Disclosure>
            <Disclosure>
              <Disclosure.Button className="py-2 bg-white shadow-lg w-full rounded text-start px-5 flex justify-between items-center">
                Berapa tim yang akan lanjut ke tahap final?
                <FontAwesomeIcon icon={faPlus} />
              </Disclosure.Button>
              <Disclosure.Panel className=" bg-white p-5 rounded bg-opacity-80 backdrop-blur">
                Tim yang akan masuk ke tahap final sebanyak 8 tim berdasarkan
                hasil perolehan terbaik dari tahap penyisihan
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </div>
      </div>

      <div
        className=" bg-white flex flex-col gap-10 items-center py-10 lg:py-20"
        id="contact"
      >
        <h1 className="text-4xl font-bold">KONTAK</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col space-y-3 font-semibold text-lg text-center">
            <span className="text-2xl font-bold">Farrel</span>
            <span className="flex items-center gap-5">
              <FontAwesomeIcon icon={faPhone} />
              081380693008
            </span>
            <span className="flex items-center gap-5">
              <FontAwesomeIcon icon={faLine} />
              @farrelhabibie2
            </span>
          </div>
          <div className="flex flex-col space-y-3 font-semibold text-lg text-center">
            <span className="text-2xl font-bold">Astra</span>
            <span className="flex items-center gap-5">
              <FontAwesomeIcon icon={faPhone} />
              085225902354
            </span>
            <span className="flex items-center gap-5">
              <FontAwesomeIcon icon={faLine} />
              @astratat69
            </span>
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
            src={"/sbc/logo-dept.png"}
            alt="11th Civil In Action"
            width={40}
            height={40}
          />
          <img
            src={"/sbc/logo-ugm.png"}
            alt="11th Civil In Action"
            width={100}
            height={40}
          />
          <img
            src={"/sbc/logo-kmtsl.png"}
            alt="11th Civil In Action"
            width={40}
            height={40}
          />
          <img
            src={"/sbc/logo-sbc.png"}
            alt="11th Civil In Action"
            width={150}
            height={10}
          />
        </div>

        <div className="flex flex-col gap-10 items-center">
          <h1 className=" text-2xl font-bold">Social Media</h1>
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
  );
}
