import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "No Backend Delays",
      description:
        "Stop waiting for backend teams to finish their work. Define your API structure with a simple JSON spec and get fully functional endpoints in seconds, letting your team work in parallel.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      ),
    },
    {
      title: "Instant Mock Endpoints",
      description:
        "⚡ QuickAPI dynamically generates API endpoints from your specs. No need for manual setup—just upload and start using a live base URL for testing.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
        </svg>
      ),
    },
    {
      title: "Real API Behavior",
      description:
        "✅ Test real-world API responses, errors, delays, and multiple states—all without needing an actual backend!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Everything you need to{" "}
        <span className="gradient-text">start mocking APIs</span>
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        QuickAPI gives you everything you need to instantly mock APIs. No manual
        setup—just upload your spec and start testing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="feature-glass p-8 flex flex-col">
            <div className="mb-6">
              <div className="icon-gradient text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;