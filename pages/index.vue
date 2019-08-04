<template>
  <section class="container">
    <div>
      <h1 class="title">
        Weather app
      </h1>
      <div class="links">
        <detail-page id="703448" />
        <detail-page id="2643743" />
        <detail-page id="5128638" />
      </div>
    </div>
  </section>
</template>

<script>
import DetailPage from '~/components/DetailPage';

export default {
  // asyncData({ params }) {
  //   return axios.get(`http://localhost:3000/api/weather/703448`).then(res => {
  //     return { weather: res.data }
  //   })
  // },
  components: {
    DetailPage
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 77px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

