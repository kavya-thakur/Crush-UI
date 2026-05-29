const componentModel = require("../models/component.model");
const userModel = require("../models/user.model");

async function getAllComponent(req, res) {
  try {
    const { type } = req.query;

    const filter = {};

    if (type) {
      filter.type = type;
    }

    const components = await componentModel.find(filter).select("-code");

    return res.status(200).json({
      message: "fetched component successfully",
      components,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to fetch components",
    });
  }
}

async function getSingleComponent(req, res) {
  const id = req.params.id;
  const component = await componentModel.findById(id);
  if (!component) {
    return res.status(404).json({
      message: "component not found",
    });
  }
  return res.status(200).json({
    message: "single component fetched successfully",
    component,
  });
}

async function createComponent(req, res) {
  try {
    const { title, description, code, category, slug, isPro } = req.body;

    if (!title || !description || !slug || !code?.component) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const existing = await componentModel.findOne({ slug });
    if (existing) {
      return res.status(400).json({
        message: "Component with this slug already exists",
      });
    }

    const component = await componentModel.create({
      title,
      description,
      slug,
      isPro,
      code,
      category,
    });

    return res.status(201).json({
      message: "Component created successfully",
      component,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to create component",
    });
  }
}
async function getTheCode(req, res) {
  try {
    const { slug } = req.params;

    const component = await componentModel.findOne({
      slug,
    });

    if (!component) {
      return res.status(404).json({
        message: "Component not found",
      });
    }

    // FREE COMPONENT
    if (!component.isPro) {
      return res.status(200).json({
        code: component.code,
      });
    }

    // LOGIN REQUIRED
    if (!req.user) {
      return res.status(401).json({
        message: "Login required",
      });
    }

    // FETCH FRESH USER
    const user = await userModel.findById(req.user.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // PRO CHECK
    if (user.plan !== "pro") {
      return res.status(403).json({
        message: "Upgrade to Pro",
      });
    }

    return res.status(200).json({
      code: component.code,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}

async function downloadTemplate(req, res) {
  try {
    const { slug } = req.params;

    const template = await componentModel.findOne({
      slug,
      type: "template",
    });

    if (!template) {
      return res.status(404).json({
        message: "Template not found",
      });
    }

    // FREE TEMPLATE
    if (!template.isPro) {
      return res.status(200).json({
        downloadUrl: template.downloadUrl,
      });
    }

    // LOGIN REQUIRED
    console.log("REQ USER:", req.user);
    if (!req.user) {
      return res.status(401).json({
        message: "Login required",
      });
    }

    const user = await userModel.findById(req.user.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    // PRO CHECK
    if (user.plan !== "pro") {
      return res.status(403).json({
        message: "Upgrade to Pro",
      });
    }

    return res.status(200).json({
      downloadUrl: template.downloadUrl,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}

module.exports = {
  getAllComponent,
  getSingleComponent,
  createComponent,
  getTheCode,
  downloadTemplate,
};
