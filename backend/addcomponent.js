const axios = require("axios");

async function add() {
  await axios.post(
    "http://localhost:3000/api/components",
    {
      title: "Notus SaaS",
      description:
        "Complete SaaS landing page with hero, features, pricing and CTA.",
      category: "SaaS",
      slug: "notusLanding",
      isPro: true,
      type: "template",
      downloadUrl: "ka",
    },
    {
      withCredentials: true,
    },
  );

  console.log("Component added");
}

add();
