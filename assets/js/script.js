
/* Texto circular */
circ = document.getElementById('circular');
textarr = circ.textContent.split('');
circ.textContent = '';

for (var i = 0; i < textarr.length; i++) {
  circ.innerHTML += '<span style="-webkit-transform: rotate('+((i+1)*10)+'deg);transform: rotate('+((i+1)*10)+'deg);">'+textarr[i]+'</span>';
}

// ---------------------------------------------------
/* <---------- Componentes en VUE ----------------> */
// ---------------------------------------------------

/* <---- Nosotros ----> */

Vue.component('pics', {
  props: ['image', 'title'],
  // <img v-bind:src="image" v-bind:alt="title" , se puede sustituir el 'v-bind' por ':' />
  template: `
    <div>
      <img width="100" :src="image" :alt="title" />
      <h2> {{title}} </h2>
    </div>
  `
})

new Vue({
  el: '#pics',
  data: {
    pics: [
      {title: 'Nosotros', image:assets/img/nos2.jpg},
      {title: 'Nosotros', image:assets/img/nos1.jpg},
      {title: 'Nosotros', image:assets/img/nos4.jpg}
    ]
  },
  template: `
  <div>
    <pics 
      v-for="(pics, index) in pics"
      :key="index"
      :title="pics.title"
      :image="pics.image">
    </pics>
  </div>`
})

/* <---- Pasteles ----> */

Vue.component('cakes', {
  props: ['image', 'title'],
  template: `
    <div>
      <img width="200" :src="image" :alt="title" />
      <h2> {{title}} </h2>
    </div>
  `
})

new Vue({
  el: '#cakes',
  data: {
    pics: [
      {title: 'Beethoven', image:assets/img/pastel1.jpg},
      {title: 'Liszt', image:assets/img/pastel2.jpg},
      {title: 'Brahms', image:assets/img/pastel3.jpg},
      {title: 'Debussy', image:assets/img/pastel4.jpg},
      {title: 'Chopin', image:assets/img/pastel5.jpg},
      {title: 'Rachmaninoff', image:assets/img/pastel6.jpg}
    ]
  },
  template: `
  <div>
    <cakes 
      v-for="(cakes, index) in cakes"
      :key="index"
      :title="cakes.title"
      :image="cakes.image">
    </cakes>
  </div>`
})