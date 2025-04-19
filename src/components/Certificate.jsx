const certificates = [
  {
    image: "/src/assets/udemycertificate.jpg",
    title: "Udemy Certificate of MERN Stack",
    description:
      "Creating fully customized web applications from scratch to meet your unique requirements.",
    link: "https://www.udemy.com/certificate/UC-b3bbdde9-5545-411f-b9ae-a4f3ef360761/",
    date: "2022",
    badge: "MERN"
  },
  {
    image: "/src/assets/school.png",
    title: "School Event and Library with Admin Panel",
    description:
      "Designing websites and web applications that adapt to various devices and screen sizes.",
    link: "http://bindhyeshwori.netlify.app/",
    date: "2023",
    badge: "Full Stack"
  },
  {
    image: "/src/assets/nodejscertificate.png",
    title: "Certificate of NodeJS from HackerRank",
    description:
      "Covers topics like Package Management, Event Loop, Buffers, Streams, and File Systems.",
    link: "https://www.hackerrank.com/certificates/081d9eea2337",
    date: "2022",
    badge: "Backend"
  },
  {
    image: "/src/assets/sqlcertificate.png",
    title: "Certificate of SQL from HackerRank",
    description:
      "Covers topics like queries, relationships, and aggregators.",
    link: "https://www.hackerrank.com/certificates/081d9eea2337",
    date: "2022",
    badge: "Database"
  },
];

const Certificate = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Certificates</h2>
          <p className="text-xl text-white/80">Professional Achievements & Qualifications</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((certificate, index) => (
            <a 
              key={index} 
              href={certificate.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block certificate-card transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                <div className="relative">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Verified
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{certificate.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{certificate.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 text-xs font-medium">Issued: {certificate.date}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {certificate.badge}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
