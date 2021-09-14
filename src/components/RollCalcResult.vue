<template>
    <v-dialog
                v-model="dialog"
                max-width="400"
        >
            <v-card>
                <v-card-title class="text-h5 primary white--text">
                    Result
                </v-card-title>

                <v-card-text class="pt-4" v-html="message">
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>

<script>
    export default {
        name: "RollCalcResult",
        props: {
            message: String,
            dialog: Boolean,
        }
    }
</script>

<style scoped>
    .v-dialog__content {
      align-items: flex-start;
    }
</style>