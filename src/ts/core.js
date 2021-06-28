"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//    Stack by GrowStocks
//    Made by Matteu#0001
//
//    Copyright 2021 (c) Matteu and the GrowStocks Development Group
//
//    The Design System for building quick, beautiful, responsive, and flexible user interfaces.
//
//
var HeaderScrollable_1 = require("./structs/HeaderScrollable");
var PredictiveSearch_1 = require("./structs/PredictiveSearch");
new HeaderScrollable_1.default().call({ breakingPoint: ".your-mom" });
new PredictiveSearch_1.default().call({});
// CHIP__OPTIONS
//
//  PLEASE HELP ME CONVERT THIS JQUERY CRINGE TO TS THANKS <3
//
// @ts-ignore
$(document).ready(function () {
    // @ts-ignore
    $('.chip__options__trigger').on("click", function () {
        // @ts-ignore
        $(this).parent().children('.chip__options').slideToggle("fast");
        // @ts-ignore
        var option = $(this).next();
        if (option.hasClass("visible")) {
            // @ts-ignore
            $(this).html("menu");
            option.removeClass("visible");
        }
        else {
            // @ts-ignore
            $(this).html("close");
            option.addClass("visible");
        }
    });
});
