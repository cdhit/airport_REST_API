const Airports = require("../models/AirportModel");
const { body, validationResult } = require("express-validator");

exports.countAirport = [
  function(req, res) {
    try {
		
		Airports.aggregate(
        [
          {
            $group: {
              _id: "$iso_country",
              count: { $sum: 1 }
            }
          }
        ],
        function(err, result) {
          return res.json({ msg: "Airport Count by country", data: result });
        }
      );
    } catch (err) {
      //throw error in json response with status 500.
      return res.send(res, err);
    }
  }
];



exports.byCode = [
	function(req, res) {
	  try {
		  Airports.
		  find({iata_code:req.body.iata_code}).
		  select('name').
		  exec(function(err,result){
			if(result.length !== 0){
		  return res.json({ msg: "Airport Name by Code", data: result });
			}
			return res.json({msg:"no Airport Found"})
		  });	
	  } catch (err) {
		//throw error in json response with status 500.
		return res.send(res, err);
	  }
	}
  ];
  


exports.byName = [
	function(req, res) {
	  try {
		  Airports.
		  find({name:req.body.name}).
		  select('iata_code').
		  exec(function(err,result){
			console.log(result.length)
			if(result.length !== 0){
				return res.json({ msg: "Airport Code by Name", data: result });
	
			}
			return res.json("No Airport Found")			
		  });	
	  } catch (err) {
		//throw error in json response with status 500.
		return res.send(res, err);
	  }
	}
  ];
  
exports.byType = [
	function(req, res) {
	  try {
		  Airports.
		  find({type:req.body.type}).
		  exec(function(err,result){
			console.log(result.length)
			if(result.length !== 0){
				return res.json({ msg: "Airport  by Type", data: result });
	
			}
			return res.json("No Airport Found")			
		  });	
	  } catch (err) {
		//throw error in json response with status 500.
		return res.send(res, err);
	  }
	}
  ];
  


  exports.byTypeCountry = [
	function(req, res) {
	  try {
		  Airports.
		  find({type:req.body.type,iso_country:req.body.iso_country}).
		  exec(function(err,result){
			console.log(result.length)
			if(result.length !== 0){
				return res.json({ msg: "Airport  by Type And Country", data: result });
	
			}
			return res.json("No Airport Found")			
		  });	
	  } catch (err) {
		//throw error in json response with status 500.
		return res.send(res, err);
	  }
	}
  ];
  


  exports.getLatLong = [
	function(req, res) {
	  try {
		  Airports.
		  find({name:req.body.name}).
		  select('latitude_deg longitude_deg').
		  exec(function(err,result){
			console.log(result.length)
			if(result.length !== 0){
				return res.json({ msg: "Airport  With lat and long by Type", data: result });
	
			}
			return res.json("No Airport Found")			
		  });	
	  } catch (err) {
		//throw error in json response with status 500.
		return res.send(res, err);
	  }
	}
  ];
  


  exports.byService = [
	function(req, res) {
	  try {
		  Airports.
		  find({iso_country:req.body.iso_country,scheduled_service:"yes"}).
		  exec(function(err,result){
			console.log(result.length)
			if(result.length !== 0){
				return res.json({ msg: "Airport  by County With scheduled_service", data: result });
			}
			return res.json("No Airport Found")			
		  });	
	  } catch (err) {
		//throw error in json response with status 500.
		return res.send(res, err);
	  }
	}
  ];
  