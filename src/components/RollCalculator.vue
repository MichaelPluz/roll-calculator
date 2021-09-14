<template src="./RollCalculator.vue.html"></template>

<script>
    import RollCalc1 from "./RollCalc1";
    import RollCalc2 from "./RollCalc2";
    import RollAbout from "./RollAbout";

    export default {
        name: "RollCalculator",
        components: {
            RollCalc1,
            RollCalc2,
            RollAbout
        },
        data: function () {
            return {
                tab: 0,
                tabTitles: [' Calc #1', ' Calc #2', 'About'],
            }
        },
    }
</script>

<style scoped>

</style>