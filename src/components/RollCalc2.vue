<template src="./RollCalc2.vue.html"></template>

<script>
    import {currency, roundCur} from "../helper"
    import {CalculateRollLength, CalculateRollDiameter, format} from "../RollCalculator"
    import RollCalcResult from "./RollCalcResult";

    //const fields = ['weight', 'width', 'thickness', 'diameter', 'filmType'];
    /**
     * Precision: -1 - do not round; 0 - round to Integer; >0 - precision (number of signs after dot)
     * @type {number}
     */
    const precision = 4;

    export default {
        name: "roll-calc-2",
        components: {
           RollCalcResult
        },
        data: function () {
            return {
                weight: '',
                width: '',
                thickness: '',
                diameter: '',
                filmType: '',
                
                message: '',
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

                    let resultRollLength = CalculateRollLength(this.weight, this.width, this.filmType, this.thickness);
                    let resultRollDiameter = CalculateRollDiameter(resultRollLength, this.thickness, this.diameter);

                    this.message = 'Roll Length: ' + format(resultRollLength, precision) + ' feet';
                    this.message += '<br />';
                    this.message += 'Outside Roll Diameter: ' + format(resultRollDiameter, precision) + ' inches';

                    this.dialog = true;
                }
            }
    }
</script>
