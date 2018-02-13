"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _courier_info;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
    courier_info: (_courier_info = {
        ups: new RegExp(/\b(1Z ?[0-9A-Z]{3} ?[0-9A-Z]{3} ?[0-9A-Z]{2} ?[0-9A-Z]{4} ?[0-9A-Z]{3} ?[0-9A-Z]|T\d{3} ?\d{4} ?\d{3})\b/i),
        usps: new RegExp(/\b((420 ?\d{5} ?)?(91|92|93|94|01|03|04|70|23|13)\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{4}( ?\d{2,6})?)\b/i)
    }, _defineProperty(_courier_info, "usps", new RegExp(/\b((M|P[A-Z]?|D[C-Z]|LK|E[A-C]|V[A-Z]|R[A-Z]|CP|CJ|LC|LJ) ?\d{3} ?\d{3} ?\d{3} ?[A-Z]?[A-Z]?)\b/i)), _defineProperty(_courier_info, "usps", new RegExp(/\b(82 ?\d{3} ?\d{3} ?\d{2})\b/i)), _defineProperty(_courier_info, "ontrac", new RegExp(/\b(C\d{14})\b/i)), _defineProperty(_courier_info, "dhl", new RegExp(/\b(\d{4}[- ]?\d{4}[- ]?\d{2}|\d{3}[- ]?\d{8}|[A-Z]{3}\d{7})\b/i)), _defineProperty(_courier_info, "fedex", new RegExp(/\b(((96\d\d|6\d)\d{3} ?\d{4}|96\d{2}|\d{4}) ?\d{4} ?\d{4}( ?\d{3})?)\b/i)), _courier_info)
};