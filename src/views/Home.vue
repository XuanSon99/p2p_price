<template>
  <main>
    <v-container class="mt-3">
      <v-row>
        <v-col cols="12" lg="6">
          <v-card>
            <v-card-title class="pb-0">
              <span class="buy">Mua</span>
              <v-spacer></v-spacer>
              <div class="d-flex">
                <v-text-field v-model="buy_search" append-icon="mdi-magnify" label="Số lượng"></v-text-field>
              </div>
            </v-card-title>
            <v-data-table :headers="headers" :items="buy_data" :items-per-page="9"
              :footer-props="{ 'items-per-page-options': [9, 9] }" :page.sync="page.buy"
              :server-items-length="totalItems">
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
              <template v-slot:[`item.payments`]="{ item }">
                <div class="payments" v-for="(method, index) in item.adv.tradeMethods.slice(0, 2)" :key="index"
                  :style="{ color: method.tradeMethodBgColor }">
                  {{ method.tradeMethodName }}
                </div>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6">
          <v-card>
            <v-card-title class="pb-0">
              <span class="sell">Bán</span>
              <v-spacer></v-spacer>
              <div class="d-flex">
                <v-text-field v-model="sell_search" append-icon="mdi-magnify" label="Số lượng"></v-text-field>
              </div>
            </v-card-title>
            <v-data-table :headers="headers" :items="sell_data" :items-per-page="9"
              :footer-props="{ 'items-per-page-options': [9, 9] }" :page.sync="page.sell"
              :server-items-length="totalItems">
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
              <template v-slot:[`item.payments`]="{ item }">
                <div class="payments" v-for="(method, index) in item.adv.tradeMethods.slice(0, 2)" :key="index"
                  :style="{ color: method.tradeMethodBgColor }">
                  {{ method.tradeMethodName }}
                </div>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <div class="d-flex justify-center align-center mt-5">
        <v-btn class="primary mr-3" @click="refreshHandle">Làm mới</v-btn>
        <v-card class="d-flex align-center justify-center" width="180">
          <v-checkbox v-model="is_refresh"></v-checkbox>
          <span class="mr-1">Làm mới sau</span>
          <span v-if="refresh == 0">
            <v-progress-circular :width="3" :size="13" color="blue" indeterminate></v-progress-circular>
          </span>
          <span v-else>{{ refresh }}s</span>
        </v-card>
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
        { text: 'Thanh toán', value: 'payments', sortable: false },
      ],
      buy_search: "",
      buy_data: [],
      sell_search: "",
      sell_data: [],
      buy_top: [],
      sell_top: [],
      refresh: 10,
      is_refresh: false,
      totalItems: 99,
      page: {
        buy: 1,
        sell: 1
      },
      setInter: ""
    }
  },
  mounted() {
    this.getBuyPrice()
    this.getSellPrice()
    setInterval(() => {
      if (this.refresh == 0) {
        this.refresh = 10
        return
      }
      this.refresh = this.refresh - 1
    }, 1000);
  },
  methods: {
    refreshHandle() {
      this.buy_data = []
      this.sell_data = []
      this.getBuyPrice()
      this.getSellPrice()
    },
    getBuyPrice() {
      this.CallAPI("get", `p2p?type=buy&asset=usdt&fiat=vnd&transAmount=${this.buy_search}&page=${this.page.buy}`, {}, (res) => {
        this.buy_data = res.data.data
      })
    },
    getSellPrice() {
      this.CallAPI("get", `p2p?type=sell&asset=usdt&fiat=vnd&transAmount=${this.sell_search}&page=${this.page.sell}`, {}, (res) => {
        this.sell_data = res.data.data
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
  watch: {
    "page.buy"() {
      this.getBuyPrice()
    },
    "page.sell"() {
      this.getSellPrice()
    },
    is_refresh() {
      if (this.is_refresh) {
        this.refresh = 10
        this.setInter = setInterval(() => {
          this.getBuyPrice()
          this.getSellPrice()
        }, 11000);
        return
      }
      clearInterval(this.setInter)
    }
  }
};
</script>