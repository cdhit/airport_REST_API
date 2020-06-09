var express = require("express");
const AirportController = require("../controllers/AirportController");

var router = express.Router();

router.get("/countAirport", AirportController.countAirport);
router.post("/byCode", AirportController.byCode);
router.post("/byName", AirportController.byName);
router.post("/byType", AirportController.byType);
router.post("/byTypeCountry", AirportController.byTypeCountry);
router.post("/getLatLong", AirportController.getLatLong);
router.post("/byService", AirportController.byService
);



module.exports = router;