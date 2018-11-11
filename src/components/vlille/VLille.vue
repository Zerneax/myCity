<template>
  <body>
    <button class="ui button">API</button>
    <div class="ui two column grid">
      <div class="column">
        <button class="ui circular right floated icon button" v-on:click="api()">
          <i class="filter icon"></i>
        </button>
        <sui-modal v-model="optionOpened">
          <sui-modal-header>Commune</sui-modal-header>
          <sui-modal-content image>
            <!-- <sui-image wrapped size="medium" src="static/images/avatar/large/rachel.png" /> -->
            <sui-modal-description>
              <sui-form-fields grouped v-for="city in ville">
                <!-- <sui-list  >
                  <sui-list-item> -->
                    <!-- <p> {{city}} </p> -->
                    <sui-form-field>
                      <sui-checkbox :label="city" radio :value="city" v-model="commune"/>
                    </sui-form-field>
                  <!-- </sui-list-item>
                </sui-list> -->
                <!-- <sui-form-field>
                  <sui-checkbox label="Toutes" radio value="ALL" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Lille" radio value="LILLE" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Mons en Baroeul" radio value="MONS EN BAROEUL" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="La Madeleine" radio value="LA MADELEINE" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Lambersart" radio value="LAMBERSART" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Villeneuve d'Ascq" radio value="VILLENEUVE D'ASCQ" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Croix" radio value="CROIX" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Roubaix" radio value="ROUBAIX" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Tourcoing" radio value="TOURCOING" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Wattrelos" radio value="WATTRELOS" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Lille Hellemmes" radio value="LILLE HELLEMMES" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Marcq en Baroeul" radio value="MARCQ EN BAROEUL" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Ronchin" radio value="RONCHIN" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Hellemmes" radio value="HELLEMMES" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Lomme" radio value="LOMME" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Faches-Thumesnil" radio value="FACHES-THUMESNIL" v-model="commune"/>
                </sui-form-field>
                <sui-form-field>
                  <sui-checkbox label="Saint Andre Lez Lille" radio value="SAINT ANDRE LEZ LILLE" v-model="commune"/>
                </sui-form-field> -->
              </sui-form-fields>
            </sui-modal-description>
          </sui-modal-content>
          <sui-modal-actions>
            <sui-button positive @click.native="option(); search()">
              OK
            </sui-button>
          </sui-modal-actions>
        </sui-modal>
        <!-- <i class="big circular right floated red inverted filter icon "></i> -->
        <!-- <div class="ui" v-infinite-scroll="loadMore" infinite-scroll-disabled="scrollAvailable" infinite-scroll-distance="10"> -->
        <sui-list v-for="station in vlille" :key="station.recordid" >
          <sui-list-item>
            <p> Commune : {{station.fields.commune}} </p>
            <p> Nom de la station : {{station.fields.nom}} </p>
            <p> Nombre de velos disponibles : {{station.fields.nbvelosdispo}} </p>
            <p> Nombre de places disponibles : {{station.fields.nbplacesdispo}} </p>
            <font-awesome-icon icon="bicycle"/>
            <!-- <i class="fas fa-bicycle"></i> -->
          </sui-list-item>
          <div class="ui divider"></div>
        </sui-list>
        <button class="ui left floated red button" v-on:click="precedent()" :disabled="start == 0"> Précédent </button>
        <button class="ui right floated red button" v-on:click="suivant()" :disabled="(nbhits - (start + 10)) <= 0"> Suivant </button>
        <!-- </div> -->
      </div>
      <div class="column">
        <v-map ref="map" :zoom=13 :center="[50.6333, 3.0667]" :options="mapOptions" >
          <!-- <v-zoom :position="position" /> -->
          <!-- <v-control-attribution
            :position='topleft' /> -->
          <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
          <v-marker v-for="station in vlille" :lat-lng="station.fields.geo">
            <v-tooltip :content="station.fields.nom" />
          </v-marker>
        </v-map>
      </div>
    </div>
  </body>
</template>

<script src="./VLille.js"></script>
