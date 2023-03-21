<template>
  <v-app>
    <v-main>
      <div class="-content">
        <img class="img-banner" src="/phatra/banner.png" alt="phatra banner" />
        <div class="inner-banner">
          <v-container justify-center>

            <v-tabs show-arrows centered>
              <v-tab>{{ $t("label.about_us") }}</v-tab>
              <v-tab>{{ $t("label.awards") }}</v-tab>
              <v-tab>{{ $t("label.our_businesses") }}</v-tab>
              <v-tab>{{ $t("label.news_activities") }}</v-tab>
            </v-tabs>

            <div class="mt-8">
              <div class="news-height">
                <v-row>
                  <v-col lg="7" md="12" sm="12">

                    <div class="row-menu">
                      <div class="text-article">Article</div>
                      <div class="text-seeall desktop">{{ $t("label.seeall") }}</div>
                    </div>

                    <v-row>
                      <v-col>
                        <img class="img-news" src="/phatra/gold.png" alt="news about gold" />
                      </v-col>
                      <v-col>
                        <div class="margin-of-safety-copy">
                          Margin of Safety กลยุทธ์การลงทุนอย่างปลอดภัย หลักการลงทุนของเบนจามิน เกรแฮม
                        </div>
                        <span class="text-disrup">ตอบคำถามที่ว่า คุณมีความจำเป็น พร้อมเป็นเจ้าของหรือยัง เช่น
                          เพื่อหน้าที่การงาน อาชีพ หรือการเดินทาง ความสะดวกสบาย เพราะการซื้อรถนอกจากค่ารถแล้ว
                          ยังมีค่าน้ำมัน ค่าบำรุงรักษา ค่าประกันภัย ซึ่งเป็นค่าใช้จ่ายในระยะยาว</span>
                        <div class="d-flex mt-8">
                          <div class="rectangle-4 "></div>
                          <div class="text-money">การลงทุน</div>
                        </div>
                      </v-col>
                    </v-row>


                  </v-col>
                  <v-col lg="5" md="12" sm="12">
                    <div class="row-menu">
                      <div class="text-article">News</div>
                      <div class="text-seeall desktop">ดูทั้งหมด</div>
                    </div>


                    <div class="">
                      <div ref="slider" class="keen-slider">
                        <div class="keen-slider__slide number-slide1"><img src="/phatra/news1.png" alt="news phatra"/>
                        </div>
                        <div class="keen-slider__slide number-slide2"><img src="/phatra/news1.png" alt="news phatra"/>
                        </div>
                        <div class="keen-slider__slide number-slide3"><img src="/phatra/news1.png" alt="news phatra"/>
                        </div>
                        <div class="keen-slider__slide number-slide4"><img src="/phatra/news1.png" alt="news phatra"/>
                        </div>
                        <div class="keen-slider__slide number-slide5"><img src="/phatra/news1.png" alt="news phatra"/>
                        </div>
                        <div class="keen-slider__slide number-slide6"><img src="/phatra/news1.png" alt="news phatra"/>
                        </div>
                      </div>
                    </div>

                    <div v-if="slider" class="dots">
                      <button v-for="(_slide, idx) in dotHelper" @click="slider.moveToIdx(idx)"
                        :class="{ dot: true, active: current === idx }" :key="idx"></button>
                    </div>
                  </v-col>
                </v-row>

                <div class="top-row">
                  <v-row>
                    <v-col lg="4" md="6" sm="6">
                      <img class="img_article2" src="/phatra/img-article-2@2x.png" alt="news investment"/>
                      <div class="-copy">จับจังหวะการลงทุนเป็นก็สร้างเงินล้านได้ง่ายๆใกล้แค่เอื้อม</div>
                      <div class="d-flex">
                        <div class="rectangle-4"></div>
                        <div class="text-money">การลงทุน</div>
                      </div>

                    </v-col>
                    <v-col lg="4" md="6" sm="6">
                      <img class="img_article2" src="/phatra/img-article-3@2x.png" alt="news investment"/>
                      <div class="margin-of-safety-copy-2">Margin of Safety กลยุทธ์การลงทุนอย่างปลอดภัย Margin of Safety
                      </div>
                      <div class="d-flex">
                        <div class="rectangle-4"></div>
                        <div class="text-money">การลงทุน</div>
                      </div>
                    </v-col>
                    <v-col lg="4" md="12" sm="12">
                      <div class="rectangle">
                        <div class="set-index">Set Index</div>
                        <div class="set_index">
                          <img class="img_article2" src="/phatra/set-index@2x.png" alt="news"/>
                        </div>


                      </div>

                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </v-container>
        </div>


        <div>
          <div class="d-flex">
            <div class="line-3-copy-6 "></div>
            <h1 class="KKP-Channel">KKP Channel</h1>
            <div class="text-kkpspan">อัปเดตทุกความรู้ด้านการเงินและการลงทุนก่อนใคร
              พร้อมอินเทรนด์ไปกับหลากหลายเรื่องราวไลฟ์สไตล์</div>
          </div>
          <v-container>
            <v-tabs>
              <v-tab>KKP FOCUS</v-tab>
              <v-tab>OPTIMISE</v-tab>
              <v-tab>KKP Advisor</v-tab>
            </v-tabs>

            <div class="kkp-focus-content justify-center">
              <v-row>
                <v-col lg="8" md="12" class="text-center"><img src="/phatra/kkp_focus.png" alt="KKP Focus"/></v-col>
                <v-col lg="4" md="12">
                  <div class="grid-disrup ">
                    <div class="line-4-copy-2 desktop"></div>
                    <div class="textkkp-focus">KKP Focus</div>
                    <div class="textkkp-disrup">ฝนนักสู้ พบเรื่องราวจริง เจ็บจริง ประสบความสำเร็จจริง
                      ที่จะเป็นแรงกระตุ้นให้ SME นักสู้รุ่นต่อไป
                      ได้ก้าวไปถึงฝัน</div>
                    <div class="line-4-copy-2 desktop"></div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-container>

          <v-container>
            <div class="kkp-news">
              <v-row>
                <v-col lg="4">
                  <img src="/phatra/kkp-focus-news.png" alt="KKP Focus news"/>
                  <div class="kkp-focus-2">KKP Focus ช่วงที่ 2 กูรู... โต๊ะกลม</div>
                </v-col>
                <v-col lg="4"><img src="/phatra/kkp-focus-news2.png" alt="KKP Focus news"/>
                  <div class="kkp-focus-2">KKP Focus ช่วงที่ 1 ย่อประเด็นโลก โยกประเด็นร้อน</div>
                </v-col>
                <v-col lg="4"><img src="/phatra/kkp-focus-news3.png" alt="KKP Focus news"/>
                  <div class="kkp-focus-2">KKP Focus ช่วงที่ 2 กูรู... โต๊ะกลม</div>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </div>

        <div class="rectangle-12">
          <v-container>
            <v-row>
              <v-col lg="4" md="12" sm="12">
                <img class="logo" src="/phatra/logo-copy.png" alt="logo phatra"/>
                <div class="text-company">บริษัท ทุนภัทร จำกัด (มหาชน)</div>
                <div class="text-address">ชั้น 9 อาคารสำนักงานเมืองไทย-ภัทร 1 252/6 ถนนรัชดาภิเษก แขวงห้วยขวาง
                  กรุงเทพมหานคร 10310</div>
              </v-col>
              <v-col lg="2" md="6" sm="6">
                <div class="text-menu">เมนู</div>
                <ul class="style-ul">
                  <li>รู้จัก บลจ.ภัทร</li>
                  <li>เกี่ยวกับเรา</li>
                  <li>ติดต่อเรา</li>
                  <li>คำถามที่พบบ่อย</li>
                  <li>สมัครงาน</li>
                  <li>Links</li>
                </ul>

              </v-col>
              <v-col lg="2" md="6" sm="6">
                <div class="text-menu">เมนู</div>
                <ul class="style-ul">
                  <li>รู้จัก บลจ.ภัทร</li>
                  <li>เกี่ยวกับเรา</li>
                  <li>ติดต่อเรา</li>
                  <li>คำถามที่พบบ่อย</li>
                  <li>สมัครงาน</li>
                  <li>Links</li>
                </ul>
              </v-col>
              <v-col lg="4" md="12" sm="12">
                <div class="text-contact">ติดต่อเรา</div>
                <div class="d-flex"><img class="img-icon" src="/phatra/ic-tel.png" />
                  <div class="text-contact">(66) 2305 9800</div>
                </div>
                <div class="d-flex"><img class="img-icon" src="/phatra/ic-fax.png" />
                  <div class="text-contact">(66) 2305 9803</div>
                </div>
                <div class="d-flex"><img class="img-icon" src="/phatra/ic-mail.png" />
                  <div class="customerservicephat">customerservice@phatraasset.com</div>
                </div>

                <div class="d-flex social-icon ">
                  <img src="/phatra/facebook-logo-button.png" alt="logo facebook"/>
                  <img src="/phatra/twitter.png"  alt="logo twitter"/>
                  <img src="/phatra/youtube-logotype-1.png"  alt="logo youtube"/>
                </div>

              </v-col>
            </v-row>
          </v-container>
          <div class="row-info">
            <v-container class="d-flex justify-space-between">
              <div class="d-flex">
                <div class="box-info">
                  <div class="text-web ">แผนผังเว็บไซต์</div>
                </div>
                <div class="box-info">
                  <div class="text-web ">ข้อตกลงและเงื่อนไข</div>
                </div>
                <div class="box-info">
                  <div class="text-web ">นโยบายข้อมูลส่วนตัว</div>
                </div>
              </div>
              <div class="box--phatra-a- desktop">
                <div class="-phatra-a-">@2019 Phatra A© สงวนลิขสิทธิ์ 2562 บริษัทหลักทรัพย์จัดการกองทุน ภัทร จำกัดsset All
                  rights reserved.</div>
              </div>

            </v-container>
            <div class=" mobile">
              <div class="-phatra-a-mobile">@2019 Phatra A© สงวนลิขสิทธิ์ 2562 บริษัทหลักทรัพย์จัดการกองทุน ภัทร จำกัดsset
                All rights reserved.</div>
            </div>
          </div>
        </div>

        <div class="info-phatra">
          <div class="block-info-phatra">
            <v-container>
              <v-row>
                <v-col cols="3"><img class="" src="/phatra/logo-footer-1.png" alt="image logo for footer" /></v-col>
                <v-col cols="3"><img class="" src="/phatra/logo-footer-2.png" alt="image logo for footer" /></v-col>
                <v-col cols="3"><img class="" src="/phatra/logo-footer-3.png" alt="image logo for footer" /></v-col>
                <v-col cols="3"><img class="" src="/phatra/logo-footer-2.png" alt="image logo for footer" /></v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import KeenSlider from "keen-slider"
import "keen-slider/keen-slider.min.css"

export default {
  data() {
    return {
      current: 1,
      slider: null,
    };
  },
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      loop: true,
      initial: this.current,
      slideChanged: (s) => {
        this.current = s.track.details.rel
      },
    },

      [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy()
  },

  computed: {
    dotHelper() {
      return this.slider ? [...Array(this.slider.track.details.slides.length).keys()] : []
    },
  },
  methods: {
    async getLocalLang() {
      return await localStorage.getItem("lang");
    },
    async setLang(lang) {
      await localStorage.setItem("lang", lang);
      await this.$router.push(this.switchLocalePath(lang));
    },
  },
};
</script>

<style>
[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 100%;
}

.number-slide1 {
  background: transparent;
}

.number-slide2 {
  background: transparent;
}

.number-slide3 {
  background: transparent;
}

.number-slide4 {
  background: transparent;
}

.number-slide5 {
  background: transparent;
}

.number-slide6 {
  background: transparent;
}

.navigation-wrapper {
  position: relative;
}

.dots {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}

.dot {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}

.dot:focus {
  outline: none;
}

.dot.active {
  background: #000;
}

.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
}

.arrow--left {
  left: 5px;
}

.arrow--right {
  left: auto;
  right: 5px;
}

.arrow--disabled {
  fill: rgba(255, 255, 255, 0.5);
}</style>