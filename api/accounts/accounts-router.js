const router = require("express").Router();
const accountsModel = require("./accounts-model");
const mw = require("./accounts-middleware");

router.get("/", async (req, res, next) => {
  try {
    const allAccounts = await accountsModel.getAll();
    res.json(allAccounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", mw.checkAccountId, (req, res, next) => {
  try {
    res.json(req.existAccount);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  mw.checkAccountPayload,
  mw.checkAccountNameUnique,
  async (req, res, next) => {
    try {
      const insertedRecord = await accountsModel.create({
        name: req.body.name,
        budget: req.body.budget,
      });
      res.status(201).json(insertedRecord);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  mw.checkAccountId,
  mw.checkAccountPayload,
  async (req, res, next) => {
    try {
      const updateRecord = await accountsModel.updateById(req.params.id, {
        name: req.body.name,
        budget: req.body.budget,
      });
      res.json(updateRecord);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", mw.checkAccountId, async (req, res, next) => {
  try {
    await accountsModel.deleteById(req.params.id);
    res.json(req.existAccount);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    cutomMessage: "Global handler tarafında hata alındı",
    message: err.message,
  });
});

module.exports = router;
