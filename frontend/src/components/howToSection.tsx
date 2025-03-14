import { UploadCloud, Server, CheckCircle, Repeat } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload Your Spec",
    description:
      "Use a simple JSON file to define your API structure (endpoints, methods, and responses).",
    icon: <UploadCloud className="w-8 h-8 text-red-400" />,
  },
  {
    id: 2,
    title: "Generate Mock APIs",
    description: "QuickAPI instantly spins up mock endpoints for testing. Your dev life becomes a lot easier :)",
    icon: <Server className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 3,
    title: "Start Using It",
    description: (
      <>
        Get a base URL (e.g.,{" "}
        <code className="px-2 py-1 bg-gray-200 rounded">
          http://localhost:8000
        </code>
        ) and integrate it into your app.
      </>
    ),
    icon: <CheckCircle className="w-8 h-8 text-green-400" />,
  },
  {
    id: 4,
    title: "Test & Iterate",
    description:
      "Play around with the mock API using a browser, Postman, or Swagger UI.",
    icon: <Repeat className="w-8 h-8 text-purple-400" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        🔧{" "}
        <span className="bg-gradient-to-r from-red-500 to-pink-400 text-transparent bg-clip-text">
          How it works tho?
        </span>
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
      Simply upload a JSON file, and within minutes, your API endpoints will be ready to use.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white/10 backdrop-blur-xl border border-transparent shadow-lg p-8 flex flex-col items-center text-center  hover:scale-105 relative transition-transform duration-300 hover:-translate-y-10 hover:shadow-xl cursor-pointer"
            style={{
              borderImage:
                "linear-gradient(135deg, rgba(255, 0, 150, 0.5), rgba(0, 200, 255, 0.5)) 1",
              borderWidth: "1px",
              backdropFilter: "blur(20px)",
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
            }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-black">
              {step.title}
            </h3>
            <p className="text-gray-700 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-sm shadow-lg p-6 text-center">
        <p className="text-gray-700 italic text-sm">
          <strong>Example Spec:</strong> Define an endpoint like{" "}
          <code className="px-2 py-1 bg-gray-200 rounded text-black">
            GET /products
          </code>{" "}
          to return fake product data or{" "}
          <code className="px-2 py-1 bg-gray-200 rounded text-black">
            POST /orders
          </code>{" "}
          for order confirmation.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
