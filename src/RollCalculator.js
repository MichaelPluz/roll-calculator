const math = require('mathjs');


/**
 * CalculateRollWeight
 *  The formula for the roll weight is: Length x Width x (Thickness x 0.00001) x (Core Diameter squared) x Film Type x 0.4335
 *
 * @param length {number}
 * @param thickness {number}
 * @param diameter {number}
 * @param width {number}
 * @param filmType {number}
 * @return {number}
 */
export function CalculateRollWeight(length, thickness, diameter, width, filmType) {

    return math.multiply(math.bignumber(length),
        math.bignumber(width),
        math.bignumber(thickness),
        math.bignumber('0.00001'),
        math.bignumber(diameter),
        math.bignumber(diameter),
        math.bignumber(filmType),
        math.bignumber('0.4335'));
}

/**
 * CalculateRollDiameter
 * Square Root of ( ( (Roll Length x (Thickness x 0.00001) ) / 0.06545) + (Core Diameter Squared) )
 *
 * @param length {number}
 * @param thickness {number}
 * @param diameter {number}
 * @return {number}
 */
export function CalculateRollDiameter(length, thickness, diameter) {

    return math.sqrt(
        math.add(
            math.divide(math.multiply(math.bignumber(length),
                math.bignumber(thickness),
                math.bignumber('0.00001')), math.bignumber('0.06545')),
            math.square(math.bignumber(diameter))
        ));

}

export function CalculateRollDiameterPlain(length, thickness, diameter) {

    return Math.sqrt((length * thickness * 0.00001 / 0.06545) + (diameter * diameter));
}


/**
 * CalculateRollLength
 * The formula for Roll Length is: Roll Weight / Roll Width x (27.68 / Film Type / (Thickness x 0.00001)) / 12
 *
 * @param weight {number}
 * @param width {number}
 * @param filmType {number}
 * @param thickness {number}
 * @return {number}
 */
export function CalculateRollLength(weight, width, filmType, thickness) {

    let bnWeight = math.bignumber(weight);
    let bnWidth = math.bignumber(width);
    let bn27_68 = math.bignumber('27.68');
    let bnFilmType = math.bignumber(filmType);
    let bnThickness = math.bignumber(thickness);
    let bn0_00001 = math.bignumber('0.00001');
    let bn12 = math.bignumber('12');

    return math.divide(
        math.divide(bnWeight,
            math.multiply(bnWidth,
                math.divide(math.divide(bn27_68, bnFilmType), math.multiply(bnThickness, bn0_00001)))),
        bn12
    );
}

export function CalculateRollLengthPlain(weight, width, filmType, thickness) {

    return (weight / (width * (27.68 / filmType / (thickness * 0.00001))) / 12);
}

/**
 * format
 * @param res {number} Number to round
 * @param precision: -1 - do not round; 0 - round to Integer; >0 - precision (number of signs after dot)
 * @returns {string}
 */
export function format(res, precision) {
    if (precision < 0) precision = 16; // don't  round

    if (precision === 0)
        res = math.round(res).toString(); // round to integer
    else
        res = math.format(res, {notation: 'fixed', precision: precision});

    return res;
}