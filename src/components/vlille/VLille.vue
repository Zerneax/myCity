<template>
  <body>
    <div class="ui two column grid">
      <div class="column">
        <div class="ui">
          <sui-list v-for="station in vlille" :key="station.recordid" >
            <sui-list-item>
              <p> Commune : {{station.fields.commune}} </p>
              <p> Nom de la station : {{station.fields.nom}} </p>
              <p> Nombre de velos disponibles : {{station.fields.nbvelosdispo}} </p>
              <p> Nombre de places disponibles : {{station.fields.nbplacesdispo}} </p>
            </sui-list-item>
            <div class="ui divider"></div>
          </sui-list>
          <button class="ui button" v-on:click="precedent()" :disabled="start == 0"> Précédent </button>
          <button class="ui button" v-on:click="suivant()" :disabled="(nbhits - (start + 10)) <= 0"> Suivant </button>
        </div>
      </div>
      <div class="column">
      </div>
    </div>
  </body>
</template>

<script src="./VLille.js"></script>
