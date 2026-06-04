const componentModel = require("../models/component.model");
const userModel = require("../models/user.model");

async function getAllComponent(req, res) {
  try {
    const { type } = req.query;

    const filter = {};

    if (type) {
      filter.type = type;
    }

    const components = await componentModel
      .find(filter)
      .select("title description slug type isPro category demoUrl createdAt")
      .lean();

    return res.status(200).json({
      components,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch components",
    });
  }
}

async function getSingleComponent(req, res) {
  try {
    const component = await componentModel.findById(req.params.id).lean();

    if (!component) {
      return res.status(404).json({
        message: "Component not found",
      });
    }

    return res.status(200).json({
      component,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch component",
    });
  }
}

async function createComponent(req, res) {
  try {
    const {
      title,
      description,
      code,
      category,
      slug,
      isPro,
      type,
      downloadUrl,
      demoUrl,
    } = req.body;

    const component = await componentModel.create({
      title,
      description,
      slug,
      isPro,
      code,
      category,
      type,
      downloadUrl,
      demoUrl,
    });

    return res.status(201).json({
      message: "Component created successfully",
      component,
    });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(409).json({
        message: "Slug already exists",
      });
    }

    return res.status(500).json({
      message: "Failed to create component",
    });
  }
}
async function getTheCode(req, res) {
  try {
    const component = await componentModel
      .findOne({
        slug: req.params.slug,
      })
      .select("code isPro")
      .lean();

    if (!component) {
      return res.status(404).json({
        message: "Component not found",
      });
    }

    if (!component.isPro) {
      return res.status(200).json({
        code: component.code,
      });
    }

    if (!req.user) {
      return res.status(401).json({
        message: "Login required",
      });
    }

    const user = await userModel.findById(req.user.id).select("plan").lean();

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

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
    const template = await componentModel
      .findOne({
        slug: req.params.slug,
        type: "template",
      })
      .select("downloadUrl isPro")
      .lean();

    if (!template) {
      return res.status(404).json({
        message: "Template not found",
      });
    }

    if (!template.isPro) {
      return res.status(200).json({
        downloadUrl: template.downloadUrl,
      });
    }

    if (!req.user) {
      return res.status(401).json({
        message: "Login required",
      });
    }

    const user = await userModel.findById(req.user.id).select("plan").lean();

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

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
