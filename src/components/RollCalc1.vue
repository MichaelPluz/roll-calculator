<template src="./RollCalc1.vue.html"></template>

<script>
    import {currency, roundCur} from "../helper"
    import {CalculateRollWeight, CalculateRollDiameter, format} from "../RollCalculator"
    import RollCalcResult from "./RollCalcResult";

    //const fields = ['length', 'thickness', 'diameter', 'width', 'filmType'];
    /**
     * Precision: -1 - do not round; 0 - round to Integer; >0 - precision (number of signs after dot)
     * @type {number}
     */
    const precision = 4;

    export default {
        name: "roll-calc-1",
        components: {
           RollCalcResult
        },
        data: function () {
            return {
                length: 1,
                thickness: 1,
                diameter: '3',
                width: 2,
                filmType: 2,
                message: '',
                sheet: true,
                valid: false,
                numberRules: [
                    v => !!v || 'Is required',
                    v => v > 0 || 'Must be greater than 0',
                ],
                requiredRules: [
                    v => !!v || 'Is required',
                ],
                dialog: false,
            }
        },
        methods:
            {
                roundCur,
                currency,

                Calculate() {

                    if(!this.$refs.form.validate()) return;

                    let resultRollWeight = CalculateRollWeight(this.length, this.thickness, this.diameter, this.width, this.filmType);
                    let resultRollDiameter = CalculateRollDiameter(this.length, this.thickness, this.diameter);

                    this.message = 'Roll Weight: ' + format(resultRollWeight, precision) + ' pounds';
                    this.message += '<br />';
                    this.message += 'Outside Roll Diameter: ' + format(resultRollDiameter, precision) + ' inches';

                    this.dialog = true;
                }
            }
    }
</script>
