<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title class="pb-0">
              <span class="buy">Buy</span>
              <v-spacer></v-spacer>
              <div class="d-flex">
                <v-text-field v-model="buy_search" label="Search"></v-text-field>
                <v-btn class="mt-3" text icon color="blue" @click="getPrice">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </div>
            </v-card-title>
            <v-data-table :headers="headers" :items="buy_data" :hide-default-footer="true">
              <template v-slot:[`item.name`]="{ item }">
                <div class="align-center d-flex name mb-1">
                  <span class="mr-1">{{ item.advertiser.nickName }}</span>
                  <img src="/img/authentication_icon.svg" alt="" v-if="item.adv.classify == 'profession'">
                </div>
                <div class="overview">
                  <span class="mr-2">{{ formatVNPrice(item.advertiser.monthOrderCount) }} lệnh</span>
                  <span>{{ toFixedValue(item.advertiser.monthFinishRate * 100) }}% hoàn tất</span>
                </div>
              </template>
              <template v-slot:[`item.price`]="{ item }">
                <div class="price">{{ formatVNPrice(item.adv.price) }} <span>VND</span></div>
              </template>
              <template v-slot:[`item.limit`]="{ item }">
                <div class="limit">
                  <div class="mb-1">Khả dụng: <b>{{ formatPrice(item.adv.tradableQuantity) }} USDT</b></div>
                  <div>
                    <span>Giới hạn: <b>₫{{ formatPrice(item.adv.minSingleTransAmount) }}</b></span>
                    -
                    <span>
                      <b>₫{{ formatPrice(item.adv.dynamicMaxSingleTransAmount) }}</b>
                    </span>
                  </div>
                </div>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title class="pb-0">
              <span class="sell">Sell</span>
              <v-spacer></v-spacer>
              <div class="d-flex">
                <v-text-field v-model="sell_search" label="Search"></v-text-field>
                <v-btn class="mt-3" text icon color="blue" @click="getPrice">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </div>
            </v-card-title>
            <v-data-table :headers="headers" :items="sell_data" :hide-default-footer="true">
              <template v-slot:[`item.name`]="{ item }">
                <div class="align-center d-flex name mb-1">
                  <span class="mr-1">{{ item.advertiser.nickName }}</span>
                  <img src="/img/authentication_icon.svg" alt="" v-if="item.adv.classify == 'profession'">
                </div>
                <div class="overview">
                  <span class="mr-2">{{ formatVNPrice(item.advertiser.monthOrderCount) }} lệnh</span>
                  <span>{{ toFixedValue(item.advertiser.monthFinishRate * 100) }}% hoàn tất</span>
                </div>
              </template>
              <template v-slot:[`item.price`]="{ item }">
                <div class="price">{{ formatVNPrice(item.adv.price) }} <span>VND</span></div>
              </template>
              <template v-slot:[`item.limit`]="{ item }">
                <div class="limit">
                  <div class="mb-1">Khả dụng: <b>{{ formatPrice(item.adv.tradableQuantity) }} USDT</b></div>
                  <div>
                    <span>Giới hạn: <b>₫{{ formatPrice(item.adv.minSingleTransAmount) }}</b></span>
                    -
                    <span>
                      <b>₫{{ formatPrice(item.adv.dynamicMaxSingleTransAmount) }}</b>
                    </span>
                  </div>
                </div>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-data-table :headers="headers" :items="buy_top" :hide-default-footer="true" :hide-default-header="true">
              <template v-slot:[`item.name`]="{ item }">
                <div class="align-center d-flex name mb-1">
                  <span class="mr-1">{{ item.advertiser.nickName }}</span>
                  <img src="/img/authentication_icon.svg" alt="" v-if="item.adv.classify == 'profession'">
                </div>
                <div class="overview">
                  <span class="mr-2">{{ formatVNPrice(item.advertiser.monthOrderCount) }} lệnh</span>
                  <span>{{ toFixedValue(item.advertiser.monthFinishRate * 100) }}% hoàn tất</span>
                </div>
              </template>
              <template v-slot:[`item.price`]="{ item }">
                <div class="price">{{ formatVNPrice(item.adv.price) }} <span>VND</span></div>
              </template>
              <template v-slot:[`item.limit`]="{ item }">
                <div class="limit">
                  <div class="mb-1">Khả dụng: <b>{{ formatPrice(item.adv.tradableQuantity) }} USDT</b></div>
                  <div>
                    <span>Giới hạn: <b>₫{{ formatPrice(item.adv.minSingleTransAmount) }}</b></span>
                    -
                    <span>
                      <b>₫{{ formatPrice(item.adv.dynamicMaxSingleTransAmount) }}</b>
                    </span>
                  </div>
                </div>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-data-table :headers="headers" :items="sell_top" :hide-default-footer="true" :hide-default-header="true">
              <template v-slot:[`item.name`]="{ item }">
                <div class="align-center d-flex name mb-1">
                  <span class="mr-1">{{ item.advertiser.nickName }}</span>
                  <img src="/img/authentication_icon.svg" alt="" v-if="item.adv.classify == 'profession'">
                </div>
                <div class="overview">
                  <span class="mr-2">{{ formatVNPrice(item.advertiser.monthOrderCount) }} lệnh</span>
                  <span>{{ toFixedValue(item.advertiser.monthFinishRate * 100) }}% hoàn tất</span>
                </div>
              </template>
              <template v-slot:[`item.price`]="{ item }">
                <div class="price">{{ formatVNPrice(item.adv.price) }} <span>VND</span></div>
              </template>
              <template v-slot:[`item.limit`]="{ item }">
                <div class="limit">
                  <div class="mb-1">Khả dụng: <b>{{ formatPrice(item.adv.tradableQuantity) }} USDT</b></div>
                  <div>
                    <span>Giới hạn: <b>₫{{ formatPrice(item.adv.minSingleTransAmount) }}</b></span>
                    -
                    <span>
                      <b>₫{{ formatPrice(item.adv.dynamicMaxSingleTransAmount) }}</b>
                    </span>
                  </div>
                </div>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <div class="d-flex justify-center mt-5">
        <v-btn class="primary" width="150">
          Refresh:
          <span v-if="refresh == 0">
            <v-progress-circular :width="3" :size="13" color="white" indeterminate></v-progress-circular>
          </span>
          <span v-else>{{ refresh }}</span>
        </v-btn>
      </div>

    </v-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Tên',
          value: 'name',
          sortable: false
        },
        { text: 'Giá', value: 'price', sortable: false },
        { text: 'Giới hạn/Khả dụng', value: 'limit', sortable: false },
      ],
      buy_search: 1000000,
      buy_data: [],
      sell_search: 1000000,
      sell_data: [],
      buy_top: [],
      sell_top: [],
      refresh: 5
    }
  },
  mounted() {
    this.getPrice()
    setInterval(() => {
      this.getPrice()
    }, 6000);
    setInterval(() => {
      if (this.refresh == 0) {
        this.refresh = 5
        return
      }
      this.refresh = this.refresh - 1
    }, 1000);



  },
  methods: {
    getPrice() {
      this.CallAPI("get", "p2p?type=buy&asset=usdt&fiat=vnd&transAmount=" + this.buy_search, {}, (res) => {
        this.buy_data = res.data.data
      })
      this.CallAPI("get", "p2p?type=sell&asset=usdt&fiat=vnd&transAmount=" + this.sell_search, {}, (res) => {
        this.sell_data = res.data.data
      })
      this.CallAPI("get", "p2p?type=buy&asset=usdt&fiat=vnd", {}, (res) => {
        this.buy_top = res.data.data.slice(0, 4)
      })
      this.CallAPI("get", "p2p?type=sell&asset=usdt&fiat=vnd", {}, (res) => {
        this.sell_top = res.data.data.slice(0, 4)
      })
    },
    formatVNPrice(value) {
      let val = (value / 1).toFixed(0)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    toFixedValue(value) {
      if (Number.isInteger(value)) {
        return value
      }
      return value.toFixed(2)
    }
  },

};
</script>