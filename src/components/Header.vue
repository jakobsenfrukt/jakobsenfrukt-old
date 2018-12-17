<template>
  <header class="site-header">
    <h1><a href="/">Jakobsen Frukt &amp; Grønt</a></h1>
    <img class="tomat" alt="Tomat" src="../assets/images/fin-tomat.png">
    <div class="header-text">{{ text }}</div>
    &#9737;
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    text: String
  }
}
</script>

<style scoped lang="scss">
.site-header {
  padding: 0.6rem 0;
}
h1 {
  text-align: center;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;
}
@-webkit-keyframes huerotate {
  from {
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(0deg);
    filter:hue-rotate(-360deg);
  }
}
.header-text {
  letter-spacing: 0.1em;
  position: fixed;
  top: 1.6rem;
  right: 0.6rem;
  display: block;
  transform: rotate(12deg);
	font-size: 0.9rem;
	color: #eee612;
	text-shadow: -1px -1px black, -1px 1px black, 1px -1px black,
		1px 1px black, 2px 2px black,
		3px 3px black, 4px 4px 8px black;
	text-decoration: none;
}
.tomat {
  position: fixed;
  top: 0;
  right: 2rem;
	display: block;
	width: 60px;
	margin: 2rem auto 0;
	border: 1px solid black;
	border-radius: 100%;
	box-shadow: 1px 1px black, 2px 2px black,
	3px 3px black, 4px 4px black,
	5px 5px black, 6px 6px 10px black;
	-webkit-animation: fargemagi 13s alternate infinite;
	animation: fargemagi 13s alternate infinite;
}
@-webkit-keyframes fargemagi {
  0% { -webkit-filter: hue-rotate(0deg); }
  50% { -webkit-filter: hue-rotate(180deg); }
  100% { -webkit-filter: hue-rotate(360deg); }   
}
@keyframes fargemagi {
  0% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(180deg); }
  100% { filter: hue-rotate(360deg); }   
}
</style>
