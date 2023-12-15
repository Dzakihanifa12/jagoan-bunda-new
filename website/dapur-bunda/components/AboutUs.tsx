const AboutUs = () => {
  return (
    <section id="AboutUs" className="py-20 bg-white w-full mt-7">
      <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md">
              <h2 className="text-xl font-bold">Tentang Kami</h2>
              <h2 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                WHY CHOOSE US?
              </h2>

              <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                Sejak 2019, Warung Jagoan Bunda telah menjadi andalan yang dicari oleh berbagai kalangan. Dikenal dengan hidangan
                lezat dan keramahan pelayanannya, warung ini telah menjadi favorit bagi masyarakat setempat dan pengunjung. Kehadirannya
                bukan hanya sekadar tempat makan, tetapi juga menjadi simbol kebersamaan dan kenangan yang menyenangkan bagi banyak orang.
                Menu-menu spesial yang disajikan di Warung Jagoan Bunda telah menjadi pilihan tak terbantahkan bagi mereka yang mencari cita rasa
                autentik dengan sentuhan kehangatan layanan yang mengesankan.
              </p>
              <ul>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                  <span className="font-medium text-gray-500">Proses cepat dan layanan pesan antar yang cepat</span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="font-medium text-gray-500">Kemudahan pembayaran</span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span className="font-medium text-gray-500">
                    100% Terjamin higenis dan bersih
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <img
              className="mx-auto sm:max-w-sm lg:max-w-full"
              src="logo.svg"
              alt="feature image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
