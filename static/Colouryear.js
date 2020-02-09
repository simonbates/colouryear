function yearProgress(startOfYear, startOfNextYear, now) {
    if (now < startOfYear || now >= startOfNextYear) {
        return 0;
    }
    return (now - startOfYear) / (startOfNextYear - startOfYear);
}

function quantize(val, bins) {
    return Math.floor(val * bins);
}

function calculateColourNumNow(numColours) {
    const now = new Date();
    const year = now.getUTCFullYear();
    const progress = yearProgress(
        Date.UTC(year, 0, 1),
        Date.UTC(year + 1, 0, 1),
        now.getTime()
    );
    return quantize(progress, numColours);
}

function red(colourNum) {
    return (colourNum >> 16) & 0xFF;
}

function green(colourNum) {
    return (colourNum >> 8) & 0xFF;
}

function blue(colourNum) {
    return colourNum & 0xFF;
}

function luminance(colourNum) {
    const r = channelLuminance(red(colourNum) / 255);
    const g = channelLuminance(green(colourNum) / 255);
    const b = channelLuminance(blue(colourNum) / 255);
    return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
}

function channelLuminance(channelVal) {
    if (channelVal <= 0.03928) {
        return channelVal / 12.92;
    } else {
        return Math.pow(((channelVal + 0.055) / 1.055), 2.4);
    }
}

export {
    yearProgress,
    quantize,
    calculateColourNumNow,
    red,
    green,
    blue,
    luminance
};
