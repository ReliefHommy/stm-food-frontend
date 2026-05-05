import Link from 'next/link';
import Image from 'next/image';



export default function PartnerCallout() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Är Du en Thailändsk Restaurang eller Livsmedelsbutik
          </h2>
          <p className="text-gray-700 mb-6">
          "Bli en del av vårt växande nätverk av pålitliga partners och hjälp oss sprida autentiska thailändska smaker till ännu fler hem. STM Food gör det enkelt för dig att nå lokala kunder online – helt utan krångel."
          </p>
          <Link
            href="/partner"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition"
          >
            Gå Med i Vårt Partnernätverk


          </Link>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2">
          <Image
            src="/partner-callout.png"
            alt="Partner Illustration"
            width={500}
            height={400}
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

