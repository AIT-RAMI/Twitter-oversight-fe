<script>
	import {Line} from "vue-chartjs";
	export default {
		extends: Line,
		props: {
			hashtag: String
		},
		data: () => ({
			
			chartdata: {
			labels: ['13 Aug', '14 Aug', '15 Aug', '16 Aug'],
			datasets: [{
						label: "Positive Sentiment",
						backgroundColor: "#27ae60",
						borderColor: "#27ae60",
						fill: false,
						data: [70, 160, 52, 260]
					},
					{
						label: "Negative Sentiment",
						backgroundColor: "#f87979",
						borderColor: "#f87979",
						fill: false,
						data: [15, 45, 49, 350]
					}
				]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: true
				},
				responsive: true,
				maintainAspectRatio: false
			}
		}),
		mounted() {
			this.renderChart(this.chartdata, this.options)
		}
	}
</script>