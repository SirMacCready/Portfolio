export default function Home() {
  const projects = [
    { name: "Portfolio Website", completion: 100, link: "/" },
    //{ name: "French Tech Jobs Board", completion: 0, link: "#" },
    //{ name: "French Language Learning Platform", completion: 0, link: "#" },
    //{ name: "Digital Identity Verification System", completion: 0, link: "#" },
    { name: "Open Data Dashboard", completion: 0, link: "#" },
    {
      name: "French Local Government Services Aggregator",
      completion: 0,
      link: "#",
    },
    {
      name: "Government Transparency Budget Tracker",
      completion: 100,
      link: "https://france-transparence.vercel.app/",
    },

    { name: "Government Data Analyst Dashboard", completion: 0, link: "#" },
    { name: "French Economic Trend Analyzer", completion: 0, link: "#" },
    //{ name: "French Tech Jobs Board", completion: 0, link: "#" },
    //{ name: "French Language Learning Platform", completion: 0, link: "#" },
    //{ name: "Civic Engagement Platform", completion: 0, link: "#" },
    { name: "Environmental Impact Tracker", completion: 0, link: "#" },
    //{ name: "Infrastructure as Code", completion: 0, link: "#" },
    //{ name: "Docker & Kubernetes Multi-Service", completion: 0, link: "#" },
    //{ name: "CI/CD Pipeline", completion: 0, link: "#" },
    //{ name: "Web Application Vulnerability Scanner", completion: 0, link: "#" },
    { name: "Password Security Analyzer", completion: 0, link: "#" },
    //{ name: "Encrypted File Sharing Platform", completion: 0, link: "#" },
    //{ name: "French Text Classification Model", completion: 0, link: "#" },
    // {
    //   name: "Predictive Analytics for Government Services",
    //   completion: 0,
    //   link: "#",
    // },
    //{ name: "Document Summarization Tool", completion: 0, link: "#" },
    //{ name: "Open-Source Tool for French Tech", completion: 0, link: "#" },
    //{ name: "SaaS Application", completion: 0, link: "#" },
  ];
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold mb-12">What I'm Building:</h1>
      <div className="w-full max-w-2xl space-y-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex justify-between items-center bg-gray-800 p-4 rounded transform transition delay-20 btn-hover"
          >
            <span className="text-xl underline hover:text-amber-500">
              <a href={project.link}>{project.name}</a>
            </span>
            <span className="text-lg font-bold text-blue-400">
              {project.completion}%
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
