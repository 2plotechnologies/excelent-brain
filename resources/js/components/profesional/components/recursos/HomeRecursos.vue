<template>
	<main class="p-4" style="background-color: #f8f9fc; min-height: 100vh;">
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<div>
				<h4 class="m-0 font-weight-bold text-dark"><i class="fas fa-layer-group text-primary mr-2"></i> Mis Recursos</h4>
				<small class="text-muted">Cuestionarios y pruebas psicológicas disponibles</small>
			</div>
		</div>

		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
			<CardRecurso title="SCL90R" color="primary" url="scr" icon="fa-clipboard-list" />
			<CardRecurso title="Ansiedad de BURNS" color="success" url="burns" icon="fa-brain" />
			<CardRecurso title="MILLON" color="primary" url="millon" icon="fa-clipboard-check" />
			<CardRecurso title="Depresión de Zung" color="success" url="depzung" icon="fa-brain" />
			<CardRecurso title="Ansiedad de Zung" color="primary" url="anszung" icon="fa-brain" />
			<CardRecurso title="PHQ - 9" color="success" url="phq-9" icon="fa-clipboard-list" />
			<CardRecurso title="GAD - 7" color="primary" url="gad-7" icon="fa-clipboard-list" />
			<CardRecurso title="BDI - 2" color="success" url="bdi-2" icon="fa-clipboard-list" />
			<CardRecurso title="MCMI - II" color="primary" url="mcmi" icon="fa-clipboard-check" />
			<CardRecurso title="BARON" color="success" url="baron" icon="fa-brain" />
			<CardRecurso title="Eysenck-A" color="primary" url="eysenck-a" icon="fa-user-check" />
			<CardRecurso title="Eysenck-B" color="success" url="eysenck-b" icon="fa-user-check" />
			<CardRecurso title="SRQ 18" color="primary" url="srq" icon="fa-clipboard-list" />
			<CardRecurso title="PHQ-15" color="success" url="phq-15" icon="fa-clipboard-list" />
			<CardRecurso title="MDQ" color="primary" url="mdq" icon="fa-clipboard-list" />
		</div>
	</main>
</template>

<script>
import CardRecurso from './CardRecurso';
export default {
	components: { CardRecurso },

	methods: {
		getNames() {
			this.axios.get('/api/getNames')
				.then((result) => {
					console.log(result)
				}).catch((err) => {

				});
		}
	},

	computed() {

	},

	mounted() {
		this.getNames()
	}
}
</script>
