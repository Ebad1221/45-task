"use strict";
function describe_city(city, country = `default`) {
    console.log(`${city} is in ${country}`);
}
describe_city(`karachi`);
describe_city(`tokyo`, `japan`);
describe_city(`california`, `america`);
