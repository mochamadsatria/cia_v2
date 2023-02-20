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
}

export default function FCEC() {
  return (
    <div className="overflow-hidden">
      <head>
        <title>Future Civil Engineer Challenge | CIA UGM</title>
        <meta
          name="description"
          content="Civil In Action (CIA) adalah kerja kolektif tahunan yang diprakarsai oleh mahasiswa Departemen Teknik Sipil dan Lingkungan, Universitas Gadjah Mada dengan tujuan menjadi media bagi para mahasiswa dan pelajar seluruh Indonesia untuk mengembangkan potensi dan ilmu pengetahuan di bidang ketekniksipilan dan lingkungan.
Pada tahun ini, 11th Civil In Action membawakan tema “Wujudkan Bangsa Perkasa, Indonesia Tangguh Bencana”."
        />
      </head>
      <Navbar />
      <div className="bg-[#0173BC]">
        <div
          id="information"
          className="bg-[url('/imgs/fcec/bg-1.png')] bg-[length:100%_400px] sm:bg-[length:100%_600px] lg:bg-[length:100%_1000px] bg-no-repeat h-[64vh] sm:h-screen lg:h-[130vh]"
        >
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 justify-center items-center  px-10 pb-10 pt-10 sm:pt-32 lg:pt-56">
            <div className=" relative w-36 h-36 lg:w-80 lg:h-80">
              <img
                src={"/imgs/fcec/logo.png"}
                className=" w-full h-full"
                alt="Civil Innovation Challenge"
                //className="mt-[-135px]"
              />
            </div>

            <div className=" lg:max-w-3xl space-y-5 flex flex-col items-center lg:items-start">
              <h1 className=" text-2xl lg:text-5xl font-bold  px-20  text-center lg:text-start">
                FUTURE CIVIL <br />
                ENGINEER <br />
                CHALLENGE
              </h1>

              <div className="flex gap-10 justify-center backdrop-brightness-50 lg:backdrop-filter-none w-screen lg:w-full py-5">
                <a
                  href={"https://form.ciaugm.com/fcec/"}
                  className="px-7 py-3 bg-[#FCB342] rounded-full lg:text-lg font-bold"
                >
                  REGISTER
                </a>
                <a
                  href={"#tor"}
                  className="px-14 py-3 outline outline-[#FCB342] rounded-full lg:text-lg font-bold bg-[#FEECD4]"
                >
                  TOR
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-60 bg-[url('/imgs/fcec/bg-2.png')] bg-[length:100%_200px] md:bg-[length:100%_400px] lg:bg-[length:100%_600px] bg-no-repeat bg-center">
          <div className=" relative h-36 md:h-56 w-[75vw] lg:h-96 mt-40 lg:mt-20">
            <img
              src={"/imgs/fcec/coming-soon.png"}
              className=" w-full h-full"
              alt="Civil Innovation Challenge"
              //className="mt-[-135px]"
            />
          </div>
          <div
            className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-center"
            id="about"
          >
            <div className=" max-w-4xl space-y-5 p-20 lg:p-20 bg-[#003E66] rounded-lg overflow-hidden">
              <h2 className=" text-5xl text-white font-bold text-center">
                Tentang FCEC
              </h2>
              <p className="text-white text-center">
                <strong>FCEC (Future Civil Engineer Challenge)</strong>{" "}
                merupakan sebuah kompetisi karya tulis ilmiah di bidang teknik
                sipil dan lingkungan untuk tingkatan SMA dan/atau sederajat.
                Pada tahun ini, FCEC mengusung tema “Peran Generasi Muda dalam
                Mengendalikan Bencana Alam Antropogenik dengan Solusi Inovatif”.
                <br />
                <br />
                Kompetisi ini nantinya bertujuan untuk menjadi wadah bagi
                siswa/siswi SMA/SMK/MA sederajat agar dapat mengembangkan pola
                pikir kreatif dan inovatif dalam menghadapi permasalahan terkait
                bencana alam antropogenik dengan melakukan penelitian dan
                pengembangan ilmu pengetahuan dalam bentuk karya tulis ilmiah.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[url('/imgs/fcec/bg-3.png')] bg-[length:100%_500px] lg:bg-[length:100%_2000px] bg-no-repeat h-[185vh] sm:h-[125vh] md:h-[125vh] lg:h-[190vh] flex flex-col items-center pt-56 lg:pt-96 ">
          <h2 className=" text-8xl font-bold text-white">TEMA</h2>
          <p className=" text-center max-w-lg text-white text-xl">
            <em>
              {" "}
              Peran Generasi Muda dalam Mengendalikan
              <br />
              Bencana Alam Antropogenik dengan Solusi Inovatif
            </em>
          </p>
          <div className="flex gap-5 flex-wrap justify-center mt-20 bg-[#035B94] lg:bg-transparent w-screen py-10 ">
            <div className=" w-40 lg:w-52 flex flex-col items-center bg-[#FEECD4] gap-7 p-5 rounded">
              <h3 className=" text-xl font-bold text-center">LIMBAH CAIR</h3>
              <p className=" text-center">
                Dapat mengatasi masalah pencemaran air yang membawa dampak
                merugikan bagi lingkungan dan kesehatan.
              </p>
            </div>
            <div className=" w-40 lg:w-52 flex flex-col items-center bg-[#FEECD4] gap-7 p-5 rounded">
              <h3 className=" text-xl font-bold text-center">SAMPAH</h3>
              <p className=" text-center">
                Dapat mengatasi masalah pengelolaan sampah yang kurang baik yang
                nantinya dapat menyebabkan suatu bencana akibat adanya timbulan
                sampah.
              </p>
            </div>
            <div className=" w-40 lg:w-52 flex flex-col items-center bg-[#FEECD4] gap-7 p-5 rounded">
              <h3 className=" text-xl font-bold text-center">POLUSI UDARA</h3>
              <p className=" text-center">
                Dapat menanggulangi dampak dari masalah polusi udara yang
                diakibatkan oleh emisi karbon dan gas rumah kaca lainya.
              </p>
            </div>
            <div className=" w-40 lg:w-52 flex flex-col items-center bg-[#FEECD4] gap-7 p-5 rounded">
              <h3 className=" text-xl font-bold text-center">
                ALIH FUNGSI LAHAN
              </h3>
              <p className=" text-center">
                Dapat memanfaatkan penggunaan lahan yang lebih efektif dan
                maksimal sehingga mengurangi masalah deforestasi atau alih
                fungsi lahan
              </p>
            </div>
          </div>
        </div>

        <div
          id="timeline"
          className="bg-[url('/imgs/fcec/bg-4.png')] bg-contain md:bg-[length:100%_700px] lg:bg-[length:100%_900px] xl:bg-[length:100%_1000px] bg-no-repeat h-[40vh] md:h-[100vh] lg:h-[150vh] mt-36 sm:mt-96 md:mt-0 lg:-mt-48"
        ></div>

        <div className="bg-[url('/imgs/fcec/bg-5.png')] bg-[length:100%_500px] lg:bg-[length:100%_800px] bg-no-repeat h-[90vh] lg:h-[110vh] relative">
          <h2 className=" text-6xl text-white font-bold absolute right-2 lg:right-28">
            <div className=" relative w-[20rem] h-14 sm:w-[40rem] sm:h-28">
              <img
                src={"/imgs/fcec/total-hadiah.png"}
                className=" w-full h-full"
                alt="Total hadiah"
                //className="mt-[-135px]"
              />
            </div>
          </h2>
          <div className="flex flex-col items-center gap-10 pt-40">
            <div className="flex gap-5 items-center justify-end">
              <div className=" relative">
                <img
                  src={"/imgs/fcec/thropy-1.png"}
                  width={150}
                  height={150}
                  alt="First prize"
                  //className="mt-[-135px]"
                />
              </div>
              <span className=" text-2xl lg:text-6xl py-3 px-10 rounded-full bg-[#035B94] text-white font-semibold">
                Rp5.000.000,00
              </span>
            </div>
            <div className="flex gap-5 items-center justify-end">
              <div className=" relative">
                <img
                  src={"/imgs/fcec/thropy-2.png"}
                  width={100}
                  height={100}
                  alt="Second prize"
                  //className="mt-[-135px]"
                />
              </div>
              <span className=" text-xl lg:text-5xl py-3 px-10 rounded-full bg-[#035B94] text-white font-semibold">
                Rp3.250.000,00
              </span>
            </div>
            <div className="flex gap-5 items-center justify-end">
              <div className=" relative">
                <img
                  src={"/imgs/fcec/thropy-3.png"}
                  width={75}
                  height={75}
                  alt="Third prize"
                  //className="mt-[-135px]"
                />
              </div>
              <span className=" text-lg lg:text-4xl py-3 px-10 rounded-full bg-[#035B94] text-white font-semibold">
                Rp2.000.000,00
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 py-10 ">
          <div className=" relative w-3/4 lg:w-1/2 h-36 lg:h-72">
            <img
              src={"/imgs/fcec/free.png"}
              className=" w-full h-full"
              alt="Third prize"
              //className="mt-[-135px]"
            />
          </div>

          <a
            href="https://form.ciaugm.com/fcec"
            className=" w-full flex justify-center"
          >
            <div className=" relative w-1/2 lg:w-1/4 h-8 lg:h-16">
              <img
                src={"/imgs/fcec/register-button.png"}
                className=" w-full h-full"
                alt="Third prize"
                //className="mt-[-135px]"
              />
            </div>
          </a>
        </div>

        <div className="bg-[url('/imgs/fcec/bg-7.png')] bg-[length:100%_2000px] bg-no-repeat h-[400vh]">
          <div className="flex flex-col items-center pt-48 gap-10" id="tor">
            <h2 className=" text-4xl lg:text-6xl font-bold">
              TERM OF REFERENCE
            </h2>
            <div className=" relative w-52 h-52">
              <img
                src={"/imgs/fcec/book.png"}
                className=" w-full h-full"
                alt="Third prize"
                //className="mt-[-135px]"
              />
            </div>
            <a
              href="https://files.ciaugm.com/tors/fcec-peserta.pdf"
              className=" text-xl font-semibold bg-[#FCB342] rounded-full px-10 py-3"
            >
              TOR PESERTA
            </a>
          </div>
          <div
            id="register"
            className="flex flex-col items-center gap-20 mt-40 bg-[url('/imgs/fcec/bg-6.png')] bg-[length:100%_2000px]"
          >
            <h2 className=" text-4xl font-bold">PENDAFTARAN</h2>
            <div className=" max-w-3xl w-full space-y-5 bg-[#F4DAA4] p-5 rounded">
              <div className="flex gap-5">
                <div>
                  <div className="relative w-10 h-10">
                    <img
                      src={"/imgs/fcec/1.png"}
                      className=" w-full h-full"
                      alt="Pendaftaran fcec 1"
                      //className="mt-[-135px]"
                    />
                  </div>
                </div>
                <p>
                  Peserta dapat melakukan pendaftaran timnya pada rentang
                  tanggal 13 Februari 2023 hingga tanggal 12 Maret 2023 pukul
                  23:59 WIB.
                </p>
              </div>

              <div className="flex gap-5">
                <div>
                  {" "}
                  <div className="relative w-10 h-10">
                    <img
                      src={"/imgs/fcec/2.png"}
                      className=" w-full h-full"
                      alt="Pendaftaran fcec 1"
                      //className="mt-[-135px]"
                    />
                  </div>
                </div>
                <div>
                  <p>
                    Peserta tidak dikenai biaya sama sekali pada tahap
                    pendaftaran dan pengumpulan abstrak.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  {" "}
                  <div className="relative w-10 h-10">
                    <img
                      src={"/imgs/fcec/3.png"}
                      className=" w-full h-full"
                      alt="Pendaftaran fcec 1"
                      //className="mt-[-135px]"
                    />
                  </div>
                </div>
                <p>
                  Peserta akan dikenai biaya sebesar Rp150.000,00/tim apabila
                  dinyatakan lolos ke tahap full paper sebagai syarat untuk
                  dapat lanjut pada tahapan berikutnya. Pembayaran dapat
                  dilakukan melalui rekening Mandiri 1370021763731 atas nama
                  Maria Credisia I N T A dengan menuliskan nama tim pada
                  keterangan transfer. Dengan menambahkan kode unik 77 (nominal
                  yang dibayarkan menjadi Rp150.077,00)
                </p>
              </div>

              <div className="flex gap-5">
                <div>
                  <div className="relative w-10 h-10">
                    <img
                      src={"/imgs/fcec/4.png"}
                      className=" w-full h-full"
                      alt="Pendaftaran fcec 1"
                      //className="mt-[-135px]"
                    />
                  </div>
                </div>
                <div>
                  <span>
                    Dengan melakukan pendaftaran, peserta diharapkan menyiapkan
                    berkas-berkas berikut:
                  </span>
                  <ul className=" list-inside">
                    <li>a. Kartu Tanda Pengenal (KTP atau Kartu pelajar)</li>
                    <li>b. Pas foto 3 x 4 dengan latar polos warna bebas</li>
                    <li>
                      c. Surat pernyataan orisinalitas (template dapat diunduh
                      dengan mengeklik link tersebut)
                    </li>
                    <li>d. Surat pernyataan siswa aktif dari sekolah</li>
                    <li>
                      e. Bukti posting twibbon pada akun Instagram masing-masing
                      peserta
                    </li>
                  </ul>
                  <span>
                    Semua berkas dikirimkan dalam format JPG/JPEG/PNG dengan
                    ukuran maksimal 10 MB pada setiap file
                  </span>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  {" "}
                  <div className="relative w-10 h-10">
                    <img
                      src={"/imgs/fcec/5.png"}
                      className=" w-full h-full"
                      alt="Pendaftaran fcec 1"
                      //className="mt-[-135px]"
                    />
                  </div>
                </div>
                <p>
                  Masing-masing peserta diwajibkan untuk mengunggah postingan
                  twibbon pada slide pertama dan poster Future Civil Engineer
                  Challenge pada slide kedua yang dapat diakses melalui link{" "}
                  <a href="https://bit.ly/TwibbonFCEC11thCIA">
                    https://bit.ly/TwibbonFCEC11thCIA
                  </a>{" "}
                  di akun instagram masing-masing dan menyertakan link bukti
                  postingan pengunggahan twibbon pada formulir registrasi.
                </p>
              </div>

              <div className="flex gap-5">
                <div>
                  {" "}
                  <div className="relative w-10 h-10">
                    <img
                      src={"/imgs/fcec/6.png"}
                      className=" w-full h-full"
                      alt="Pendaftaran fcec 1"
                      //className="mt-[-135px]"
                    />
                  </div>
                </div>
                <p>
                  Tim yang berhasil melakukan pendaftaran akan mendapatkan
                  balasan email untuk diarahkan ke tahapan selanjutnya. Tim yang
                  telah mengumpulkan berkas-berkas di atas dapat menghubungi
                  panitia melalui contact person yang tersedia untuk konfirmasi.
                  Bagi tim yang sudah melakukan pendaftaran tetapi belum
                  mendapatkan email konfirmasi, diharapkan untuk segera
                  menghubungi panitia Future Civil Engineer Challenge (FCEC)
                  pada contact person yang tersedia.
                </p>
              </div>

              <div className="flex gap-5">
                <div>
                  {" "}
                  <div className="relative w-10 h-10">
                    <img
                      src={"/imgs/fcec/7.png"}
                      className=" w-full h-full"
                      alt="Pendaftaran fcec 1"
                      //className="mt-[-135px]"
                    />
                  </div>
                </div>
                <p>
                  Apabila peserta membatalkan keikutsertaannya dalam kompetisi,
                  maka uang yang telah dibayarkan tidak dapat dikembalikan.
                </p>
              </div>

              <div className="flex gap-5">
                <div>
                  {" "}
                  <div className="relative w-10 h-10">
                    <img
                      src={"/imgs/fcec/8.png"}
                      className=" w-full h-full"
                      alt="Pendaftaran fcec 1"
                      //className="mt-[-135px]"
                    />
                  </div>
                </div>
                Detail format penamaan masing-masing file adalah sebagai
                berikut. <br />
                a. Kartu Tanda Pengenal: FCEC_Kartu Identitas_Nama Tim_Nama
                Peserta <br />
                b. Pas Foto: FCEC_Pas Foto_Nama Tim_Nama Peserta <br />
                c. Surat Pernyataan Orisinalitas: FCEC_Surat Pernyataan
                Orisinalitas_Nama Tim <br />
                d. Surat Keterangan Siswa Aktif: FCEC_Surat Keterangan
                Aktif_Nama Tim_Nama Peserta <br />
                e. File abstrak: FCEC_Abstrak_Nama Tim <br />
                *Halaman file identitas tim diurutkan Ketua, Anggota 1, dan
                Anggota 2
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center gap-20 mt-20 lg:mt-64 h-screen md:h-full"
            id="faq"
          >
            <h2 className=" text-5xl font-bold text-white">F.A.Q.</h2>
            <div className=" flex flex-col gap-5 text-lg lg:text-xl max-w-3xl px-10 lg:px-0 w-full">
              <Disclosure>
                <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center font-semibold">
                  Di mana seluruh rangkaian acara akan diselenggarakan ?
                  <FontAwesomeIcon icon={faPlus} />
                </Disclosure.Button>
                <Disclosure.Panel className="text-white">
                  Rangkaian acara FCEC akan diselenggarakan secara daring
                  sedangkan tahap final akan diselenggarakan secara luring di
                  Universitas Gadjah Mada, Yogyakarta.
                </Disclosure.Panel>
              </Disclosure>

              <Disclosure>
                <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center font-semibold">
                  Apa saja manfaat yang akan diperoleh peserta saat mengikuti
                  FCEC ?
                  <FontAwesomeIcon icon={faPlus} />
                </Disclosure.Button>
                <Disclosure.Panel className="text-white">
                  Peserta akan mendapatkan benefit berupa booklet KTI dan
                  Booklet DTSL ketika lolos dan registrasi ulang di tahap full
                  paper. Selain itu, manfaat yang akan diperoleh peserta yang
                  lolos tahap final adalah fasilitas tambahan berupa sesi
                  &quot;Educational Session&quot;
                </Disclosure.Panel>
              </Disclosure>

              <Disclosure>
                <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center font-semibold">
                  Apakah semua peserta akan mendapatkan e-certificate?
                  <FontAwesomeIcon icon={faPlus} />
                </Disclosure.Button>
                <Disclosure.Panel className="text-white">
                  Ya, seluruh peserta yang mendaftar dari tahap abstrak akan
                  mendapatkan e-certificate dengan titel pencapaian berbeda
                  untuk tiap tahapannya dan peserta yang lolos tahap final akan
                  mendapatkan sertifikat berbentuk fisik.
                </Disclosure.Panel>
              </Disclosure>

              <Disclosure>
                <Disclosure.Button className="py-2 bg-white outline outline-black shadow-lg rounded text-start px-10 flex justify-between items-center font-semibold">
                  Siapakah juri kompetisi FCEC tahun ini?
                  <FontAwesomeIcon icon={faPlus} />
                </Disclosure.Button>
                <Disclosure.Panel className="text-white">
                  Semua file pengerjaan peserta akan dinilai oleh juri yang
                  berkompeten di bidangnya.
                </Disclosure.Panel>
              </Disclosure>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center lg:mt-20 text-white gap-10 bg-[url('/imgs/fcec/bg-8.png')] bg-[length:100%_400px] bg-no-repeat h-[90vh] lg:h-[80vh] bg-[#03293E] bg-center py-20 mt-96">
          <h2 className=" text-4xl lg:text-6xl font-bold">kontak</h2>
          <div className="flex gap-5 lg:gap-20 flex-col lg:flex-row items-center">
            <div className="flex flex-col gap-3">
              <span className=" text-xl text-center">Syaafa</span>
              <span className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faPhone} />
                083869541772
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className=" text-xl text-center">Raihan</span>
              <span className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faLine} />
                @raihanadityaputra12
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center text-white">
            <h1 className=" text-2xl font-bold">Social Media</h1>
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

          <div className=" w-full h-max flex justify-center mb-5">
            <div className="relative w-3/4 lg:w-1/2 h-16 lg:h-28">
              <img
                src={"/imgs/fcec/logoss.png"}
                className=" w-full h-full"
                alt="Pendaftaran fcec 1"
                //className="mt-[-135px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
