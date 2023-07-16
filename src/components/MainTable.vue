<template>
  <div class="hello">
    <table class='table table-bordered'>
      <thead >
        <th v-for="heading in headings" :key="heading">{{heading}}</th>
      </thead>
      <tbody v-for="(item, index) in TableData" :key="index">
        <td v-for="heading in headings" :key="heading">{{ item[heading] }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props:{
      TableData: Object
    },
    data(){
      return{
        headings: []
      }
    },
    created() {
      this.TableData ? this.headings = Object.keys(this.TableData[0]) : null;
    },
  //   computed: {
  //   sortedHeadings() {
  //     return this.TableData ? this.headings.slice().sort() : null; // Create a sorted copy of the headings array
  //   },
  // },
}
</script>

<style scoped>
</style>
