var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AirportSchema = new Schema(
  {
    id: { type:Number },
    ident: { type: String },
    type: { type: String },
    name: { type: String },
    latitude_deg: { type: Number },
    longitude_deg: { type: Number },
    elevation_ft: { type: Number },
    continent: { type: String },
    iso_country: { type: String },
    iso_region: { type: String },
    municipality: { type: String },
    scheduled_service: { type: String },
    gps_code: { type: String },
    iata_code: { type: String },
    local_code: { type: String },
    home_link: { type: String },
    wikipedia_link: { type: String },
    keywords: { type: String }
  }
);

module.exports = mongoose.model("Airports", AirportSchema,"Airports" );
