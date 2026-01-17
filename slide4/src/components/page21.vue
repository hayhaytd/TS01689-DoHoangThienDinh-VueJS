<template lang="">
<div>
<button v-on:click="this.dinn = !dinn" v-html="dinn?
'show' : 'hide'"> </button>
</div>
</template>
<script>
export default {
data() {
return {
dinn: true

}

}
</script>
<style lang="">

</style>