# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create([
  { description: "Claire's programming bench", lat: 37.7913592993508, lng: -122.393456697464, seating: 3 },
  { description: "UN plaza, food truck access", lat: 37.77976, lng: -122.41382, seating: 2 },
  { description: "alamo square, many dogs", lat: 37.775769, lng: -122.43496, seating: 4 },
  { description: "Monster Bench", lat: 37.7923694185122, lng: -122.391471862793, seating: 8 },
  { description: "Dolo Classic", lat: 37.7580677190176, lng: -122.427949905396, seating: 4 }
  ])
