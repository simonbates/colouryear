import test from "tape";
import * as colouryear from "../static/Colouryear";

test("yearProgress", (t) => {
    t.plan(6);

    t.equal(colouryear.yearProgress(512, 1536, 511), 0);
    t.equal(colouryear.yearProgress(512, 1536, 512), 0);
    t.equal(colouryear.yearProgress(512, 1536, 1024), 0.5);
    t.equal(colouryear.yearProgress(512, 1536, 1535), 0.9990234375);
    t.equal(colouryear.yearProgress(512, 1536, 1536), 0);
    t.equal(colouryear.yearProgress(512, 1536, 1537), 0);
});

test("quantize", (t) => {
    t.plan(6);

    t.equal(colouryear.quantize(0, 8), 0);
    t.equal(colouryear.quantize(0.125, 8), 1);
    t.equal(colouryear.quantize(0.24, 8), 1);
    t.equal(colouryear.quantize(0.25, 8), 2);
    t.equal(colouryear.quantize(0.875, 8), 7);
    t.equal(colouryear.quantize(0.99, 8), 7);
});

test("red", (t) => {
    t.plan(3);

    t.equal(colouryear.red(0x000000), 0);
    t.equal(colouryear.red(0x123456), 0x12);
    t.equal(colouryear.red(0xFFFFFF), 0xFF);
});

test("green", (t) => {
    t.plan(3);

    t.equal(colouryear.green(0x000000), 0);
    t.equal(colouryear.green(0x123456), 0x34);
    t.equal(colouryear.green(0xFFFFFF), 0xFF);
});

test("blue", (t) => {
    t.plan(3);

    t.equal(colouryear.blue(0x000000), 0);
    t.equal(colouryear.blue(0x123456), 0x56);
    t.equal(colouryear.blue(0xFFFFFF), 0xFF);
});

test("luminance", (t) => {
    t.plan(7);

    t.equal(colouryear.luminance(0x000000), 0);
    t.equal(colouryear.luminance(0xFF0000), 0.2126);
    t.equal(colouryear.luminance(0x00FF00), 0.7152);
    t.equal(colouryear.luminance(0x0000FF), 0.0722);
    t.equal(Math.round(colouryear.luminance(0x0A0A0A) * 100000), 304);
    t.equal(Math.round(colouryear.luminance(0x808080) * 100000), 21586);
    t.equal(colouryear.luminance(0xFFFFFF), 1);
});
