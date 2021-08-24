<template>
  <div class="d-flex justify-space-around align-center">
    <div>
      <v-simple-table dark dense fixed-header height="500px" class="my-4">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Cuota 1
              </th>
              <th class="text-left">
                Cuota 2
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cuotas1" :key="item.name">
              <td>{{ item.cuot1 }}</td>
              <td>{{ item.cuot2 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div>
      <v-card elevation="4" outlined shaped tile class="my-8 py-8 px-6">
        <div class="d-flex justify-center align-center">
          <div class="mx-4">Inversión</div>
          <v-text-field v-model="inversion" required></v-text-field>
        </div>
        <div class="d-flex flex justify-center align-center">
          <div class="mx-4">Cuota 1</div>
          <v-text-field v-model="value1" required></v-text-field>
        </div>
        <div class="d-flex flex justify-center align-center">
          <div class="mx-4">Cuota 2</div>
          <v-text-field v-model="value2" required></v-text-field>
        </div>
        <div v-if="sur" class="d-flex flex-column justify-center align-center">
          <h2 class="font-weight-bold my-4 red--text">SUREBET ENCONTRADA</h2>
          <img
            src="https://images.emojiterra.com/google/android-11/512px/1f911.png"
            width="30px"
            height="30px"
            class="mb-2"
            alt=""
          />
          <span class="my-2 font-weight-bold"
            >Para la C1 debes apostar:
            <b class="red--text">{{ this.apuesta1 }}€</b></span
          >
          <span class="my-2 font-weight-bold"
            >Para la C2 debes apostar:
            <b class="red--text">{{ this.apuesta2 }}€</b></span
          >
          <span class="my-2 font-weight-bold"
            >Si lo haces, da igual que apuesta ganes que el beneficio será:
            <b class="red--text">{{ this.total }}€</b>
          </span>
          <span class="font-weight-bold">
            o mejor dicho
            <b class="red--text">{{ this.ganancia }}€</b> redondeados</span
          >
        </div>
        <div v-else-if="this.sur === null" class="font-weight-bold">
          <h2 class=" my-4 red--text">{{ this.messageError }}</h2>
        </div>
        <div v-else-if="this.sur === false" class="font-weight-bold">
          <h2 class="font-weight-bold my-4 red--text">SUREBET NO ENCONTRADA</h2>
        </div>
        <div class="d-flex flex-column justify-center align-center my-2">
          <v-btn color="error" class="mr-4 my-2" @click="prob">
            Calcular
          </v-btn>
        </div>
      </v-card>
    </div>
    <div>
      <template>
        <v-simple-table dark dense fixed-header height="500px" class="my-4">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Cuota 1
                </th>
                <th class="text-left">
                  Cuota 2
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cuotas2" :key="item.name">
                <td>{{ item.cuot1 }}</td>
                <td>{{ item.cuot2 }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculadora",
  props: [],
  data() {
    return {
      inversion: 0,
      probabilidad: 0,
      value1: 0,
      value2: 0,
      sur: null,
      messageError: "",
      apuesta1: 0,
      apuesta2: 0,
      total: 0,
      ganancia: 0,
      cuotas1: [
        {
          name: "1",
          cuot1: 1.1,
          cuot2: 11,
        },
        {
          name: "2",
          cuot1: 1.12,
          cuot2: 9.33,
        },
        {
          name: "3",
          cuot1: 1.14,
          cuot2: 8.14,
        },
        {
          name: "4",
          cuot1: 1.16,
          cuot2: 7.25,
        },
        {
          name: "5",
          cuot1: 1.18,
          cuot2: 6.58,
        },
        {
          name: "6",
          cuot1: 1.2,
          cuot2: 6,
        },
        {
          name: "7",
          cuot1: 1.22,
          cuot2: 5.5,
        },
        {
          name: "8",
          cuot1: 1.25,
          cuot2: 5,
        },
        {
          name: "9",
          cuot1: 1.28,
          cuot2: 4.5,
        },
        {
          name: "10",
          cuot1: 1.3,
          cuot2: 4.33,
        },
        {
          name: "11",
          cuot1: 1.33,
          cuot2: 4,
        },
        {
          name: "12",
          cuot1: 1.36,
          cuot2: 3.75,
        },
        {
          name: "13",
          cuot1: 1.4,
          cuot2: 3.5,
        },
        {
          name: "14",
          cuot1: 1.44,
          cuot2: 3.25,
        },
      ],
      cuotas2: [
        {
          name: "1",
          cuot1: 1.5,
          cuot2: 3,
        },
        {
          name: "2",
          cuot1: 1.53,
          cuot2: 2.89,
        },
        {
          name: "3",
          cuot1: 1.57,
          cuot2: 2.75,
        },
        {
          name: "4",
          cuot1: 1.6,
          cuot2: 2.67,
        },
        {
          name: "5",
          cuot1: 1.66,
          cuot2: 2.52,
        },
        {
          name: "6",
          cuot1: 1.7,
          cuot2: 2.43,
        },
        {
          name: "7",
          cuot1: 1.72,
          cuot2: 2.39,
        },
        {
          name: "8",
          cuot1: 1.75,
          cuot2: 2.33,
        },
        {
          name: "9",
          cuot1: 1.8,
          cuot2: 2.25,
        },
        {
          name: "10",
          cuot1: 1.83,
          cuot2: 2.2,
        },
        {
          name: "11",
          cuot1: 1.85,
          cuot2: 2.18,
        },
        {
          name: "12",
          cuot1: 1.9,
          cuot2: 2.11,
        },
        {
          name: "13",
          cuot1: 1.95,
          cuot2: 2.05,
        },
        {
          name: "14",
          cuot1: 1.99,
          cuot2: 2.01,
        },
      ],
    };
  },
  methods: {
    prob() {
      if (this.value1 != 0 && this.value2 != 0) {
        this.probabilidad = 1 / this.value1 + 1 / this.value2;
        this.probabilidad = this.trunc(this.probabilidad, 2);
        const sum = (1 / this.probabilidad) * this.inversion;
        if (this.probabilidad < 1) {
          this.sur = true;
          this.apuesta1 = ((1 / this.value1) * sum).toFixed(2);
          this.apuesta2 = ((1 / this.value2) * sum).toFixed(2);
          this.ganancia = (
            this.apuesta1 * this.value1 -
            this.inversion
          ).toFixed(2);
          this.total = this.apuesta1 * this.value1;
          this.total = this.total.toFixed(2);
        } else {
          this.sur = false;
        }
      } else {
        this.sur = null;
        this.messageError = "Inserta bien los importes";
      }
    },
    // func para truncar
    trunc(x, posiciones = 2) {
      var s = x.toString();
      var decimalLength = s.indexOf(".") + 1;
      var numStr = s.substr(0, decimalLength + posiciones);
      return Number(numStr);
    },
  },
};
</script>

<style>
.table {
  width: 100%;
}
</style>
