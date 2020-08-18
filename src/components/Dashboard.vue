<template>
  <section id="dashboard">
    <!-- Search query
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          <a href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">Home Page</a><span>/</span><span>Dashboard</span>
        </h4>
        <form class="d-flex md-form justify-content-center" style="margin:0;">
          <input aria-label="Search" class="form-control" placeholder="Type your query" type="search" />
          <mdb-btn color="primary" size="sm" class="my-0" type="submit"><i class="fa fa-search"></i></mdb-btn>
        </form>
      </mdb-card-body>
    </mdb-card>
    -->
    <section class="mt-lg-5">
      <mdb-row>
        <mdb-col md="12" lg="4" class="mb-4">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <div class="data">
                <p>Number Of Tweets</p>
                <h4>
                  <strong>0.877k</strong>
                </h4>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
        <mdb-col md="12" lg="4" class="mb-4">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <div class="data">
                <p>Positive Sentiments</p>
                <h4>
                  <strong>463</strong>
                </h4>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
        <mdb-col md="12" lg="4" class="mb-4">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <div class="data">
                <p>Negative Sentiments</p>
                <h4>
                  <strong>568</strong>
                </h4>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
        <!--
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-line" class="warning-color"/>
              <div class="data">
                <p>SUBSCRIPTIONS</p>
                <h4>
                  <strong>200</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey darken-2" role="progressbar"
                  style="width: 25%"></div>
              </div>
              <mdb-card-text>Worse than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-pie" class="light-blue lighten-1"/>
              <div class="data">
                <p>TRAFFIC</p>
                <h4>
                  <strong>20000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" class="progress-bar grey darken-2" role="progressbar"
                  style="width: 75%"></div>
              </div>
              <mdb-card-text>Worse than last week (75%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-bar" class="red accent-2"/>
              <div class="data">
                <p>ORGANIC TRAFFIC</p>
                <h4>
                  <strong>2000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-primary" role="progressbar"
                  style="width: 25%"></div>
              </div>
              <mdb-card-text>Better than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        -->
      </mdb-row>
    </section>
    <section>
      <mdb-row class="mt-5">
        <mdb-col md="12" class="mb-4">
          <mdb-card>
            <mdb-card-body>
                    <div style="display: block">
                      <line-chart/>
                    </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
    <section>
      <mdb-row class="mt-5">
      <mdb-col md="6" class="mb-4">
        <mdb-card class="mb-4">
          <mdb-card-header>Sentiment Classification</mdb-card-header>
          <mdb-card-body>
            <div style="display: block">
              <mdb-doughnut-chart :data="doughnutChartData" :options="doughnutChartOptions" :height="350"/>
            </div>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col md="6" class="mb-4">
        <mdb-card class="mb-4">
          <mdb-card-header>Word Cloud</mdb-card-header>
          <mdb-card-body>
            <div class="wordcloud">
              <wordcloud/>
            </div>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      </mdb-row>
    </section>
    <section>
      <mdb-row>
          <mdb-col md="6" class="mb-4">
              <mdb-card>
                <mdb-card-header>Top positive tweets</mdb-card-header>
                  <mdb-card-body style="text-align: center">
                      <mdb-tbl hover>
                          <thead class="dusty-grass-gradient">
                              <tr>
                                  <th>Username</th>
                                  <th>Tweet</th>
                                  <th>Retweets</th>
                                  <th>Likes</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <th scope="row">Jh0nTh3R1p33r</th>
                                  <td>it’s okay to have a bad day. one bad day doesn’t undo all the work you’ve done. let it remind you just how far you’ve come.#corona #covid19</td>
                                  <td>1450</td>
                                  <td>2601</td>
                              </tr>
                              <tr>
                                  <th scope="row">hanaa1965210</th>
                                  <td>Protect yourself and others from Coronavirus (COVID-19). #COVID19</td>
                                  <td>1204</td>
                                  <td>2803</td>
                              </tr>
                              <tr>
                                  <th scope="row">gorosimpise332</th>
                                  <td>CORONAVIRUS INFORMATION: Wash your hands more often than usual, for 20 seconds each time with soap and water, or use hand sanitiser. Wash your hands when you: Get home or into work Blow your nose, sneeze or cough Eat or handle food Protect yourself and others.</td>
                                  <td>928</td>
                                  <td>1302</td>
                              </tr>
                              <tr>
                                  <th scope="row">jeuneneymar653</th>
                                  <td>On peut vaincre cette pandémie! #COVID19</td>
                                  <td>632</td>
                                  <td>874</td>
                              </tr>
                          </tbody>
                      </mdb-tbl>
                      <mdb-btn color="primary" style="width:1rm;">Show all</mdb-btn>
                  </mdb-card-body>
              </mdb-card>
          </mdb-col>
          <mdb-col md="6" class="mb-4">
              <mdb-card>
                <mdb-card-header>Top negative tweets</mdb-card-header>
                  <mdb-card-body style="text-align: center">
                      <mdb-tbl hover>
                          <thead class="young-passion-gradient">
                              <tr>
                                  <th>Username</th>
                                  <th>Tweet</th>
                                  <th>Retweets</th>
                                  <th>Likes</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td scope="row">madara216431</td>
                                  <td>#كورونا Wake up call for upright Arab to raise. Your current leaders are worse than COVID19. #Arab</td>
                                  <td>642</td>
                                  <th>1860</th>
                              </tr>
                              <tr>
                                  <th scope="row">younes08</th>
                                  <td>على #وزارةالتربية ان تتحمل مسؤولية قرارها باداء امتحانات #المرحلةالسادسة في ايام #الحر_الشديد وانتشار وباء #كورونا وان توفر للطلبة كل مستلزمات الوقاية والراحة فمؤشرات ظروف الامتحانات الاخيرة لم تكن دليل استعداد كامل كما صرحت دائما.</td>
                                  <td>765</td>
                                  <td>1340</td>
                              </tr>
                              <tr>
                                  <th scope="row">simopp08</th>
                                  <td>واش خرج شي مسؤول دوا مع المغاربة ايشرح ليهم، هاد الغفلة لي طرات؟ حينت هادشي لي بقيت تنتسنى و ما بان لياش #كوروناالمغرب #شرحولينا</td>
                                  <td>369</td>
                                  <td>630</td>
                              </tr>
                              <tr>
                                  <th scope="row">skislove27</th>
                                  <td># كورونا: Wenn infizierte Fälle zunehmen, ist ein teilweises und umfassendes Verbot unvermeidlich, und wir sind alle zuversichtlich, dass die Regierung Maßnahmen ergreift ... !! Diener der Menschheit</td>
                                  <td>369</td>
                                  <td>630</td>
                              </tr>
                          </tbody>    
                      </mdb-tbl>
                      <mdb-btn color="primary" style="width:1rm;">Show all</mdb-btn>
                  </mdb-card-body>
              </mdb-card>
          </mdb-col>
      </mdb-row>
    </section>
  </section>
</template>

<script>
import LineChart from '@/components/LineChart.vue';
import { mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbTbl, mdbDoughnutChart } from 'mdbvue'
import wordcloud from '@/components/Wordcloud.vue'

export default {
  name: 'Dashboard',
  components: {
    'line-chart': LineChart,
    wordcloud,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbTbl,
    mdbDoughnutChart,
  },
  data () {
    return {
      showFrameModalTop: false,
      showFrameModalBottom: false,
      showSideModalTopRight: false,
      showSideModalTopLeft: false,
      showSideModalBottomRight: false,
      showSideModalBottomLeft: false,
      showCentralModalSmall: false,
      showCentralModalMedium: false,
      showCentralModalLarge: false,
      showCentralModalFluid: false,
      showFluidModalRight: false,
      showFluidModalLeft: false,
      showFluidModalTop: false,
      showFluidModalBottom: false,
      barChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            data: [12, 39, 3, 50, 2, 32, 84],
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            borderWidth: 1
          }, {
            label: '#2',
            data: [56, 24, 5, 16, 45, 24, 8],
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            borderWidth: 1
          }, {
            label: '#3',
            data: [12, 25, 54, 3, 15, 44, 3],
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 1,
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },lineChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      pieChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            data: [300, 50, 100, 40, 120, 24, 52],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
          }
        ]
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }]
        }
      },
      radarChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: '#1',
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: '#2',
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            data: [12, 42, 121, 56, 24, 12, 2]
          },
          {
            label: '#3',
            backgroundColor: 'rgba(245, 192, 50, 0.5)',
            data: [2, 123, 154, 76, 54, 23, 5]
          }
        ]
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      doughnutChartData: {
        labels: ['Positive', 'Negative'],
        datasets: [
          {
            data: [463, 568],
            backgroundColor: ['#27ae60', '#E46651'],
            hoverBackgroundColor: ['#27ae60', '#E46651']
          }
        ]
      },
      doughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cascading-admin-card {
  margin: 0px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: center;
  margin-top: 2rem;
  text-align: center;
}
.admin-up .data p {
  color: #000000;
  font-size: 20px;
}
.admin-up .data h4 {
  margin-bottom: 20px
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
.wordcloud {
  height: 350px;
  display: block;
}

</style>
