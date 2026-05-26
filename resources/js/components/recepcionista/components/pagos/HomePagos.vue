<template>
	<div>
	<div class="d-sm-flex align-items-center justify-content-between mb-4">
					<div class="d-flex align-items-center d-print-none">
						<select class="form-select mx-1" id="sltSede" v-model="$attrs.idSede" disabled>
							<option value="1">Sede Principal</option>
							<option value="2">Sede San Carlos</option>
						</select>
						<input type="date" class="form-control" @change="selectDate" v-model="fecha">
					</div>
					<div class="m-4 d-print-none">
						<button class="btn-premium btn-export" @click="exportar()"><i class="fas fa-file-excel"></i> Exportar</button>
						<button data-bs-toggle="modal" data-bs-target="#pagoExtras" class="btn-premium btn-ingreso"><i class="fas fa-plus"></i> Ingresos</button>
						<button data-bs-toggle="modal" data-bs-target="#egresosExtras" class="btn-premium btn-egreso"><i class="fas fa-minus"></i> Egresos</button>
						<button class="btn-premium btn-print" v-if="consultarFecha()" @click="verTicketCierre()"> <i class="fas fa-print"></i> Ticket</button>
						<button class="btn-premium btn-refresh" @click="actualizar()"> <i class="fas fa-sync"></i> Actualizar</button>


					</div>
	</div>
	<div class="row mb-3 mt-3 d-print-none">
		<div class="col-md-3 mb-2">
			<div class="card border-0 shadow-sm rounded p-3 h-100">
				<div class="text-muted small mb-1"><i class="fas fa-arrow-trend-up text-success me-1"></i> Total Ingresos</div>
				<h4 class="mb-0 text-success fw-bold">S/ {{ parseFloat(totalIngresosStats).toFixed(2) }}</h4>
			</div>
		</div>
		<div class="col-md-3 mb-2">
			<div class="card border-0 shadow-sm rounded p-3 h-100">
				<div class="text-muted small mb-1"><i class="fas fa-arrow-trend-down text-danger me-1"></i> Total Egresos</div>
				<h4 class="mb-0 text-danger fw-bold">S/ {{ parseFloat(totalEgresosStats).toFixed(2) }}</h4>
			</div>
		</div>
		<div class="col-md-3 mb-2">
			<div class="card border-0 shadow-sm rounded p-3 h-100">
				<div class="text-muted small mb-1"><i class="fas fa-money-bill-wave text-primary me-1"></i> Neto del Día</div>
				<h4 class="mb-0 text-primary fw-bold">S/ {{ parseFloat(netoDiaStats).toFixed(2) }}</h4>
			</div>
		</div>
		<div class="col-md-3 mb-2">
			<div class="card border-0 shadow-sm rounded p-3 h-100 pb-2">
				<div class="text-muted small mb-1"><i class="far fa-calendar-check text-secondary me-1"></i> Citas Cobradas</div>
				<h4 class="mb-0 text-dark fw-bold">S/ {{ parseFloat(totalCitasCobradas).toFixed(2) }}</h4>
				<div class="text-muted mt-1" style="font-size: 0.8rem;">Adelantos: S/ {{ parseFloat(totalAdelantos).toFixed(2) }}</div>
			</div>
		</div>
	</div>

	<div class="d-flex mb-3 gap-2 flex-wrap d-print-none">
		<button v-for="filtro in filtrosPills" :key="filtro"
				class="btn rounded-pill border-0 px-3 py-1"
				style="font-size: 0.85rem; font-weight: 500;"
				:class="filtroActual === filtro ? 'btn-primary' : 'bg-light text-muted'"
				@click="filtroActual = filtro">
			{{ filtro }}
		</button>
	</div>

	<div class="card px-1 pt-2 ">
		<div class="table-responsive">
			<table class="table-pagos mt-1" id="table_export">
				<thead>
					<tr>
						<th>Ticket</th>
						<th>Hora</th>
						<th>Concepto</th>
						<th>Tipo</th>
						<th>Profesional</th>
						<th>Método</th>
						<th>Nro. Op.</th>
						<th>Monto</th>
						<th class="text-center">Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="transaction in unifiedTransactions" :key="transaction.id">
						<td>
							<span class="ticket-id">T-{{ String(transaction.id).padStart(3, '0') }}</span>
						</td>
						<td>
							<span class="hora-txt">{{ transaction.horario || horaLatam(transaction.created_at) }}</span>
						</td>
						<td>
							<div class="concepto-container">
								<div class="icon-box" :class="transaction.iconBoxClass">
									<i class="fas" :class="transaction.displayIcon"></i>
								</div>
								<div class="concepto-info">
									<span class="title">{{ transaction.displayTitle }}</span>
									<span class="subtitle">{{ fechaLatam(transaction.fechaCita || transaction.created_at) }}</span>
								</div>
							</div>
						</td>
						<td>
							<span class="badge-custom" :class="transaction.displayBadgeClass">{{ transaction.displayType }}</span>
						</td>
						<td>
							<span class="text-muted">{{ transaction.profesional_name || '—' }}</span>
						</td>
						<td>
							<span class="badge bg-light text-muted fw-normal">{{ queMoneda(transaction.moneda) }}</span>
						</td>
						<td>
							<span class="text-muted small">{{ transaction.voucher_issued || '—' }}</span>
						</td>
						<td>
							<span class="monto-txt" :class="transaction.isIncome ? 'monto-positivo' : 'monto-negativo'">
								{{ transaction.isIncome ? '+' : '-' }}S/ {{ retornarFloat(transaction.displayAmount) }}
							</span>
						</td>
						<td class="text-center">
							<div class="d-flex justify-content-center gap-1">
								<!-- Eye Icon (PDF). -->
								<a v-if="transaction.source === 'payments'"
								   target="_blank" :href="`/api/pdfExtraCupon/${transaction.id}?token=${token}`"
								   class="btn-action" title="Ver PDF">
									<i class="far fa-eye"></i>
								</a>
								<a v-else target="_blank"
								   :href="`/api/pdfExtraCupon/${transaction.id}?token=${token}`"
								   class="btn-action" title="Ver PDF">
									<i class="far fa-eye"></i>
								</a>

								<!-- Pencil Icon (Edit) -->
								<button class="btn-action" title="Editar"
										data-bs-toggle="modal" data-bs-target="#modalEditarPago"
										@click="editar(transaction.originalIndex)"
										v-if="consultarFecha()">
									<i class="fas fa-pencil-alt"></i>
								</button>

								<!-- Paperclip Icon (Adjunto) -->
								<button class="btn-action" data-bs-toggle="offcanvas" data-bs-target="#offAdjunto"
										@click="verAdjunto(transaction.id)" title="Adjuntar archivo">
									<i class="fas fa-paperclip"></i>
								</button>

								<!-- Three dots menu -->
								<div class="dropdown dropdown-action d-inline-block">
									<button class="btn-action dropdown-toggle" type="button" data-bs-toggle="dropdown">
										<i class="fas fa-ellipsis-v"></i>
									</button>
									<ul class="dropdown-menu dropdown-menu-end">
										<li>
											<button class="dropdown-item" v-if="esAdmin && transaction.source === 'payments'"
													@click="pagoSeleccionado = transaction"
													data-bs-toggle="modal" data-bs-target="#modalDividirPago">
												<i class="fas fa-divide"></i> Dividir pago
											</button>
										</li>
										<li>
											<button class="dropdown-item" v-if="transaction.source === 'payments'"
													@click="pagoSeleccionado = transaction"
													data-bs-toggle="modal" data-bs-target="#modalFacturacion">
												<i class="fas fa-file-invoice"></i> Facturación SUNAT
											</button>
										</li>
										<li><hr class="dropdown-divider" v-if="esAdmin"></li>
										<li>
											<button class="dropdown-item text-danger" v-if="esAdmin"
													@click="mostrarModalBorrar(transaction.id, transaction.originalIndex)"
													data-bs-toggle="modal" data-bs-target="#modalMotivoBorrar">
												<i class="fas fa-trash-alt text-danger"></i> Eliminar
											</button>
										</li>
									</ul>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Resumen de totales -->
		<div class="row mt-4 mb-4" v-if="unifiedTransactions.length > 0">
			<div class="col-md-6">
				<div class="card border-0 shadow-sm p-3">
					<h6 class="text-primary fw-bold mb-3"><i class="fas fa-list-check me-2"></i>Resumen por Moneda (Ingresos)</h6>
					<div v-for="tipo in sumaTipos" :key="tipo.moneda" class="d-flex justify-content-between mb-1">
						<span class="text-muted">{{ tipo.moneda }}:</span>
						<span class="fw-bold">S/ {{ tipo.suma.toFixed(2) }}</span>
					</div>
					<hr>
					<div class="d-flex justify-content-between">
						<span class="fw-bold">Total Ingresos:</span>
						<span class="text-primary fw-bold">S/ {{ parseFloat(suma).toFixed(2) }}</span>
					</div>
				</div>
			</div>
			<div class="col-md-6" v-if="sumaSalidas.length > 0">
				<div class="card border-0 shadow-sm p-3">
					<h6 class="text-danger fw-bold mb-3"><i class="fas fa-list-check me-2"></i>Resumen por Moneda (Egresos)</h6>
					<div v-for="tipo in sumaSalidas" :key="tipo.moneda" class="d-flex justify-content-between mb-1">
						<span class="text-muted">{{ tipo.moneda }}:</span>
						<span class="fw-bold">S/ {{ tipo.suma.toFixed(2) }}</span>
					</div>
					<hr>
					<div class="d-flex justify-content-between">
						<span class="fw-bold">Total Egresos:</span>
						<span class="text-danger fw-bold">S/ {{ parseFloat(sumaSal).toFixed(2) }}</span>
					</div>
				</div>
			</div>
		</div>

		<p class="mt-2 text-danger" v-if="eliminados.length>0"><strong>Pagos eliminados</strong></p>
		<table class="table table-hover w-100 mt-1" id="table_eliminados" v-if="eliminados.length>0">
			<thead class="">
				<tr class="">
					<th class="text-danger" colspan="15"><i class="fas fa-angle-right"></i>  Cuadro anulados</th>
				</tr>
				<tr>
					<td class="text-danger d-print-none" v-if="tienePrivilegios=='1'">@</td>
					<td class="text-danger">N°</td>
					<td class="text-danger"><i class="far fa-user"></i> | Registro</td>
					<td class="text-danger">Fact. Bol.</td>
					<td class="text-danger">Ticket</td>
					<td class="text-danger">Cliente - Motivo</td>
					<td class="text-danger">Tipo</td>
					<td class="text-danger">Obs.</td>
					<td class="text-danger">Monto</td>
					<td class="text-danger">Moneda</td>
					<td class="text-danger">Medio de pago</td>
					<td class="text-danger">N° Op.</td>
					<td class="text-danger">Hora</td>
					<td class="text-danger d-print-none">@</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(payment, index) in eliminados">
					<td>
						<span>{{index+1}}</span>
					</td>
					<td v-if="payment.usuario" style="white-space: nowrap;" :title="payment.usuario.nombre" data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="payment.usuario.nombre" ><i class="far fa-user"></i> {{payment.created_at | formatedDate}}</td>
					<td v-else style="white-space: nowrap;" title="Sin datos" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sin datos">{{payment.created_at | formatedDate}}</td>
					<td>{{payment.voucher}}</td>

					<td>{{ payment.id}}</td>
					<td class="text-capitalize">{{ payment.customer }} <span v-if="payment.observation!='' && payment.observacion!=null"> <br />Obs. {{ payment.observation }}</span> <span class="text-danger"><br><strong>Motivo: </strong>{{payment.razon}}</span></td>
					<!-- <td v-if="payment.pay_status == 1">Sin cancelar</td>
						<td v-else-if="payment.pay_status == 2">Cancelado</td> -->
					<td>
						<span v-if="payment.continuo=='1'">N</span>
						<span v-else-if="payment.continuo=='2'">C</span>
						<span v-else-if="payment.continuo=='3'">M</span>
						<span v-else>
							<span v-if="payment.continuo=='-1'">X</span>
							<span v-if="payment.continuo==null">X</span>
						</span>
					</td>
					<td>{{ payment.observation }}</td>
					<td :class="{'text-danger' : payment.type==6, 'text-primary': payment.type!=6}">S/ <span v-if="payment.type==6">-</span> {{ retornarFloat(payment.price)}}</td>
					<td>
						<span v-if="payment.type==6">Salida de dinero</span>
						<span v-if="payment.type==5">Pago de cita</span>
						<span v-if="payment.type==3">Informe</span>
						<span v-if="payment.type==2">Paquete Kurame</span>
						<span v-if="payment.type==1">Paquete</span>
						<span v-if="payment.type==0">Certificado</span>
					</td>
					<td class="text-capitalize"> <span>{{queMoneda(payment.moneda)}}</span> </td>
					<td>{{ payment.voucher_issued }}</td>
					<td>{{ payment.profesional_name }}</td>
					<td>{{ horaLatam(payment.created_at) }}</td>
					<td class="d-print-none" style="white-space: nowrap">
							<button class="btn btn-outline-success btn-sm" data-bs-toggle="offcanvas" data-bs-target="#offAdjunto"  @click="verAdjunto(payment.id)" title="Adjuntar archivo"><i class="far fa-file"></i></button>
						<a v-if="payment.appointment_id!==0" target="_blank" :href="`/api/pdfCupon/${payment.appointment_id}?token=${token}`" class="btn btn-danger btn-sm"><i class="fa-solid fa-file-pdf"></i> PDF</a>
						<a v-else target="_blank" :href="`/api/pdfExtraCupon/${payment.id}?token=${token}`" class="btn btn-danger btn-sm"><i class="fa-solid fa-file-pdf"></i> PDF</a>
					</td>
				</tr>
			</tbody>
		</table>

	</div>

	<!-- Modal -->
	<div class="modal fade" id="modalMotivoBorrar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Borrar pago</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p class="mb-0">Esta a punto de eliminar el pago:</p>
					<p class="fst-italic mb-0 text-capitalize">{{ contenido }}</p>
					<p>Ingrese una razón para borrar</p>
					<input type="text" class="form-control" v-model="razon" autocomplete="off">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" @click="borrarPagoExtra()"><i class="fa-solid fa-trash"></i> Eliminar pago</button>
				</div>
			</div>
		</div>
	</div>
	<ModalMembresias :idUsuario="idUsuario" :vista="'buscar'"></ModalMembresias>

	<!-- Modal -->
	<div class="modal fade" id="modalEditarPago" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Editar pago</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="form-group row">
						<div class="col-sm-12">
							<label for="">Método de pago</label>
							<select class="form-select" id="pay_status" name="pay_status" v-model="caso.moneda">
								<option v-for="moneda in monedas" :value="moneda.id">{{moneda.tipo}}</option>
							</select>
						</div>
						<div class="col-sm-12">
							<label for="">N° de Operación</label>
							<input type="text" class="form-control" v-model="caso.comprobante">
						</div>
						<div class="col-sm-12">
							<label for="">Tipo de comprobante</label>
							<select class="form-select" id="sltTipoComprobante" v-model="caso.tipo">
								<option value="1">Factura</option>
								<option value="4">Contrato</option>
								<option value="3">Boleta de venta</option>
								<option value="2">Recibo por honorarios</option>
								<option value="-1">Ninguno</option>
							</select>
						</div>
						<div class="col-sm-12" v-show="caso.tipo!=-1">
							<label for="">Boleta / Factura</label>
							<input type="text" class="form-control" v-model="caso.boleta">
						</div>

						<div class="form-group">
							<label for="">Observación</label>
							<textarea class="form-control" name="observation" id="observation" cols="10" rows="2" v-model="caso.observacion"></textarea>
						</div>
					</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal" @click="editarPagoExtra()"><i class="fa-solid fa-rotate-right"></i> Actualizar pago</button>
				</div>
			</div>
			</div>
		</div>
	</div>

	<modal-pagos-extras :idUsuario="$attrs.idUser" :idSede="$attrs.idSede" />
	<modal-egresos-extras :idUsuario="$attrs.idUser" :nombreUser="$attrs.nombreUser" :idSede="$attrs.idSede"/>
	<OffcanvasAdjuntos :id="idSeleccionado" :foto="foto" :habilitarEliminado="habilitarEliminado" ></OffcanvasAdjuntos>
	<ModalDividirPago v-if="pagoSeleccionado" :pago="pagoSeleccionado" :idUsuario="$attrs.idUser"></ModalDividirPago>
	<ModalFacturacion v-if="pagoSeleccionado" :idSede="$attrs.idSede" :pago="pagoSeleccionado" ></ModalFacturacion>
</div>
</template>

<script>
import ModalMembresias from "./ModalMembresias.vue"
import ModalPagosExtras from './../citas/ModalPagosExtras.vue'
import ModalEgresosExtras from './../citas/ModalEgresosExtras.vue'
import OffcanvasAdjuntos from './OffcanvasAdjuntos.vue'
import ModalDividirPago from "./ModalDividirPago.vue"
import ModalFacturacion from "./ModalFacturacion.vue"
import moment from 'moment'

export default{
	data(){
		return{
			filtroActual: 'Todos',
			payments:[], sumaTipos:[], sumaSalidas:[], salidas:[], monedas:['Efectivo', 'Depósito bancario',  'POS', 'Aplicativo Yape', 'Banco: BCP', 'Banco: BBVA', 'Banco: Interbank', 'Banco: Nación', 'Banco: Scotiabank', 'Aplicativo Plin', 'Open pay'], idSeleccionado:-1,
			idUsuario: null, tienePrivilegios: null, razon:'', queId:null, queINdex:null, contenido:'', eliminados:[], caso:{id:-1,index:-1,moneda:1, boleta:'', comprobante:'', observacion:'', tipo:-1}, foto:'', habilitarEliminado:false, fecha:moment().format('YYYY-MM-DD'), monedas:[], idSede:1, pagoSeleccionado:null,
			buscarVacio:true, token: localStorage.getItem('token')
		}
	},
	name: 'HomePagos',
	props:{},
	components:{ ModalMembresias, ModalPagosExtras, ModalEgresosExtras, OffcanvasAdjuntos, ModalDividirPago, ModalFacturacion },
	methods:{
		verAdjunto(id){
			this.idSeleccionado=id;
			this.axios.get('/api/verAdjuntoPago/'+id)
			.then(res=> {this.foto = res.data.archivo ? res.data.archivo[0].file : '' } )
		},
			getAllExtraPayments(){
				this.habilitarEliminado=true;
				this.foto=''
				this.axios.post('/api/getAllExtraPayments',{idSede:this.$attrs.idSede})
					.then(res =>{ console.log(res.data)
						this.payments = res.data.activos
						this.salidas = res.data.salidas
						this.eliminados = res.data.eliminados
					})
				.finally(()=>{
					const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
					const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
				})
			},
			selectDate(e){
				this.habilitarEliminado = (e.target.value == moment().format('YYYY-MM-DD') ) ? true : false;
				this.foto=''
				this.axios.post(`/api/getExtraPaymentsByDay`,{
					'date': e.target.value,
					'idSede': this.$attrs.idSede
				})
				.then(res =>{ console.log(res.data)
					this.payments = res.data.activos
					this.salidas = res.data.salidas
					this.eliminados = res.data.eliminados
				})
			},
			exportar(){
				var table2excel = new Table2Excel();
				table2excel.export(document.getElementById('table_export'), `Caja de ${moment().format('DD-MM-YYYY hh-mm a')}`);
			},
			horaLatam(horita){
				return moment(horita).format('hh:mm a')
			},
			retornarFloat(price){
				if (price==null || price == undefined){ return '0.00'}else{
					return parseFloat(price).toFixed(2)
				}
			},
			mostrarModalBorrar(id, index){
				this.queId = id; this.queINdex = index;
				this.contenido = `${this.payments[index].customer} ${this.payments[index].observation??''}`;
			},
			borrarPagoExtra(){
				if(this.tienePrivilegios==1){
					if(this.razon==''){
						this.$swal({ icon:'error', title: 'Faltan rellenar una razón' });
					}
					else{
						this.axios.post('/api/borrarPagoExtra',{ id: this.queId, razon:this.razon})
						.then(res=> { console.log(res.data);
							this.razon='';
							if(res.data.mensaje){
								this.payments.splice(this.queIndex, 1)
								this.$swal({title: 'Elimado con éxito'})
							}
						})

					}
				}
			},
			fechaLatam(fecha) {
				if(fecha) return moment(fecha).format('DD/MM/YYYY');
			},
			editar(index){
				this.caso.index =index
				this.caso.id = this.payments[index].id
				this.caso.moneda = this.payments[index].moneda
				this.caso.boleta = this.payments[index].voucher
				this.caso.comprobante = this.payments[index].voucher_issued
				this.caso.observacion = this.payments[index].observation
			},
			editarPagoExtra(){
				this.axios.post('/api/editarPagoExtra', this.caso)
				.then(res=> {
					if(res.data.msg=='success'){
						this.$swal({title: 'Actualizado con éxito'})
						this.payments[this.caso.index].id = this.caso.id
						this.payments[this.caso.index].moneda = this.caso.moneda
						this.payments[this.caso.index].voucher = this.caso.boleta
						this.payments[this.caso.index].voucher_iss = this.caso.comprobante
						this.payments[this.caso.index].observation = this.caso.observacion
						this.payments[this.caso.index].tipo= this.caso.tipo
					}
					this.caso.tipo=-1
				})
			},
			actualizar(){ this.getAllExtraPayments() },
			consultarFecha(){
				return this.fecha == moment().format('YYYY-MM-DD')
			},

			//verTicketCierre(){ window.open('/api/ticketCierreCaja/'+this.fecha+'/'+this.$attrs.nombreUser, '_blank'); },

			verTicketCierre(){
				const fecha = this.fecha; // La fecha que ya se tiene seleccionada
				const sede = this.idSede; // La IdSede del usuario

				// Generar el enlace dinámico
				const url = `/api/ticketCierreCaja/${fecha}/${this.$attrs.nombreUser}/${sede}?token=${localStorage.getItem('token')}`;
				// Redirigir a la URL generada
				window.open(url, '_blank');
			},
			esAdmin(){
				let puede = false
				if(this.tienePrivilegios==1 || this.tienePrivilegios=='1')
					puede = true
				return puede
			},


			queMoneda(idMoneda){
				return this.monedas.find(x=> x.id == idMoneda)?.tipo
			},
			getDisplayType(payment) {
				if (payment.type == 8) return 'Adelanto';
				if (payment.type == 5) return 'Cita';
				if ([1, 2, 7, 15].includes(payment.type)) return 'Cuota';
				if (payment.type == 4) return 'Ing. Extra';
				if (payment.type == 6) return 'Egr. Extra';
				return 'Otro';
			},
			getDisplayIcon(payment) {
				if (payment.type == 8) return 'fa-clock';
				if (payment.type == 5) return 'fa-calendar-check';
				if ([1, 2, 7, 15].includes(payment.type)) return 'fa-receipt';
				if (payment.type == 4) return 'fa-arrow-up-long';
				if (payment.type == 6) return 'fa-arrow-down-long';
				return 'fa-circle-info';
			},
			getBadgeClass(payment) {
				if (payment.type == 8) return 'badge-adelanto';
				if (payment.type == 5) return 'badge-cita';
				if ([1, 2, 7, 15].includes(payment.type)) return 'badge-cuota';
				if (payment.type == 4) return 'badge-ingreso';
				if (payment.type == 6) return 'badge-egreso';
				return 'badge-secondary';
			},
			getIconBoxClass(payment) {
				if (payment.type == 8) return 'icon-adelanto';
				if (payment.type == 5) return 'icon-cita';
				if ([1, 2, 7, 15].includes(payment.type)) return 'icon-cuota';
				if (payment.type == 4) return 'icon-ingreso';
				if (payment.type == 6) return 'icon-egreso';
				return 'icon-otros';
			},
			getDisplayTitle(payment) {
				if (payment.type == 5 || payment.type == 8) {
					let motivo = payment.detalle || 'Cita';
					return `${motivo} - ${payment.customer}`;
				}
				return payment.observation || payment.customer || 'Sin descripción';
			}

	},
	mounted(){
		this.getAllExtraPayments()
		this.axios.get('/api/user')
		.then((res) => {
			this.idUsuario = res.data.user.id
			this.tienePrivilegios = res.data.user.privilegios
			this.idSede = res.data.user.idSede // Aquí obtienes la IdSede
		})
		this.axios.get("/api/listarMonedas")
		.then(resp => this.monedas = resp.data)
	},
	filters:{
		formatedDate(date){
			return moment(date).format('DD/MM/yyyy')
		}
	},
	computed:{
		filtrosPills() {
			return ['Todos', 'Ingresos', 'Egresos', 'Citas', 'Adelantos', 'Cuotas', 'Ing. Extra', 'Egr. Extra'];
		},
		filteredPayments() {
			let result = this.payments.map((item, index) => {
				item.originalIndex = index;
				return item;
			});

			if (this.filtroActual === 'Ingresos') return result;
			if (this.filtroActual === 'Egresos') return result.filter(item => item.type == 6);
			if (this.filtroActual === 'Citas') return result.filter(item => item.type == 5);
			if (this.filtroActual === 'Adelantos') return result.filter(item => item.type == 8);
			if (this.filtroActual === 'Cuotas') return result.filter(item => [1, 2, 7, 15].includes(item.type));
			if (this.filtroActual === 'Ing. Extra') return result.filter(item => item.type == 4);
			if (this.filtroActual === 'Egr. Extra') return [];

			return result;
		},
		filteredSalidas() {
			let result = this.salidas.map((item, index) => {
				item.originalIndex = index;
				return item;
			});

			if (this.filtroActual === 'Egresos') return result;
			if (this.filtroActual === 'Egr. Extra') return result;
			if (['Citas', 'Adelantos', 'Cuotas', 'Ing. Extra', 'Ingresos'].includes(this.filtroActual)) return [];

			return result;
		},
		unifiedTransactions() {
			let combined = [];

			// Add income (payments)
			this.filteredPayments.forEach(p => {
				combined.push({
					...p,
					isIncome: p.type != 6,
					displayType: this.getDisplayType(p),
					displayIcon: this.getDisplayIcon(p),
					displayBadgeClass: this.getBadgeClass(p),
					iconBoxClass: this.getIconBoxClass(p),
					displayAmount: p.price,
					displayTitle: this.getDisplayTitle(p),
					source: 'payments'
				});
			});

			// Add expenses (salidas)
			this.filteredSalidas.forEach(s => {
				// Avoid duplicates if any (though usually separate)
				if (!combined.find(p => p.id === s.id && p.source === 'payments')) {
					combined.push({
						...s,
						isIncome: false,
						displayType: 'Egr. Extra',
						displayIcon: this.getDisplayIcon({type: 6}),
						displayBadgeClass: this.getBadgeClass({type: 6}),
						iconBoxClass: this.getIconBoxClass({type: 6}),
						displayAmount: s.price,
						displayTitle: s.observation || s.customer || 'Salida de dinero',
						source: 'salidas'
					});
				}
			});

			// Sort by ID descending
			return combined.sort((a, b) => b.id - a.id);
		},

		totalIngresosStats() {
			if(this.payments.length > 0){
				return this.payments.reduce((suma, item)=>{
					if(item.type == 6){
						return suma - parseFloat(item.price ?? 0)
					} else {
						return suma + parseFloat(item.price ?? 0)
					}
				}, 0)
			}
			return 0;
		},
		totalEgresosStats() {
			if(this.salidas.length > 0){
				let sal = this.salidas.reduce((suma, item)=>{
					if(item.type == 6){
						return suma - parseFloat(item.price ?? 0)
					} else {
						return suma + parseFloat(item.price ?? 0)
					}
				}, 0);
				return Math.abs(sal);
			}
			return 0;
		},
		netoDiaStats() {
			return this.totalIngresosStats - this.totalEgresosStats;
		},
		totalCitasCobradas() {
			return this.payments.reduce((sum, item) => {
				if (item.type == 5) return sum + parseFloat(item.price ?? 0);
				return sum;
			}, 0);
		},
		totalAdelantos() {
			return this.payments.reduce((sum, item) => {
				if (item.type == 8) return sum + parseFloat(item.price ?? 0);
				return sum;
			}, 0);
		},
		suma: function (){
			this.sumaTipos=[]
			if(this.filteredPayments.length>0){
				return this.filteredPayments.reduce((suma, item)=>{ //console.log(item);
					let queIndex= this.sumaTipos.findIndex(x=> x.moneda== this.queMoneda(item.moneda) );
					if( queIndex>-1 ){ //encuentra
						if( item.type==6)
							this.sumaTipos[queIndex].suma-= parseFloat(item.price ?? 0)
						else
							this.sumaTipos[queIndex].suma+= parseFloat(item.price ?? 0)
					}else{
						if( item.type==6 )
							this.sumaTipos.push({suma: -parseFloat(item.price ?? 0), moneda: this.queMoneda(item.moneda)})
						else
							this.sumaTipos.push({suma: parseFloat(item.price ?? 0), moneda: this.queMoneda(item.moneda)})
					}
					//console.log(item.type==6);

					if(item.type==6){
						return suma- parseFloat(item.price??0)
					}else{
						return suma+ parseFloat(item.price??0)
					}

				}, 0)
			}else{
				return 0;
			}
		},
		sumaSal: function (){
			this.sumaSalidas=[]
			if(this.filteredSalidas.length>0){
				return this.filteredSalidas.reduce((suma, item)=>{
					let queIndex= this.sumaSalidas.findIndex(x=> x.moneda== this.queMoneda(item.moneda ));
					//console.log(queIndex);
					if( queIndex>-1 ){ //encuentra
						if( item.type==6)
							this.sumaSalidas[queIndex].suma-= parseFloat(item.price ?? 0)
						else
							this.sumaSalidas[queIndex].suma+= parseFloat(item.price ?? 0)
					}else{
						if( item.type==6 )
							this.sumaSalidas.push({suma: -parseFloat(item.price ?? 0), moneda: this.queMoneda(item.moneda)})
						else
							this.sumaSalidas.push({suma: parseFloat(item.price ?? 0), moneda: this.queMoneda(item.moneda)})
					}
					//console.log(item.type==6);

					if(item.type==6){
						return suma- parseFloat(item.price??0)
					}else{
						return suma+ parseFloat(item.price??0)
					}

				}, 0)
			}else{
				return 0;
			}
		}
	}
}
</script>
<style scoped>
.btn-premium {
    padding: 0.5rem 1.2rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.btn-premium i {
    font-size: 0.9rem;
}

.btn-premium:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-export { color: #10b981; border-color: #d1fae5; }
.btn-export:hover { background: #10b981; color: white; }

.btn-ingreso { color: #3b82f6; border-color: #dbeafe; }
.btn-ingreso:hover { background: #3b82f6; color: white; }

.btn-egreso { color: #ef4444; border-color: #fee2e2; }
.btn-egreso:hover { background: #ef4444; color: white; }

.btn-print { color: #6366f1; border-color: #e0e7ff; }
.btn-print:hover { background: #6366f1; color: white; }

.btn-refresh { color: #64748b; border-color: #f1f5f9; }
.btn-refresh:hover { background: #64748b; color: white; }

.table-pagos {
    border-collapse: separate;
    border-spacing: 0 10px;
    width: 100%;
}
.table-pagos thead th {
    border: none !important;
    color: #adb5bd !important;
    font-weight: 500 !important;
    font-size: 0.85rem !important;
    padding: 10px 15px !important;
    text-transform: capitalize;
    background: transparent !important;
}
.table-pagos tbody tr {
    background: white;
    transition: all 0.2s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
}
.table-pagos tbody tr:hover {
    background: #fdfdfd;
    box-shadow: 0 4px 10px rgba(0,0,0,0.04);
}
.table-pagos td {
    padding: 12px 15px;
    vertical-align: middle;
    border-top: 1px solid #f1f3f5;
    border-bottom: 1px solid #f1f3f5;
    color: #495057;
}
.table-pagos td:first-child {
    border-left: 1px solid #f1f3f5;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.table-pagos td:last-child {
    border-right: 1px solid #f1f3f5;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

/* Ticket style */
.ticket-id {
    color: #adb5bd;
    font-size: 0.85rem;
    font-weight: 500;
}

/* Hora style */
.hora-txt {
    font-weight: 700;
    color: #212529;
}

/* Concepto */
.concepto-container {
    display: flex;
    align-items: center;
}
.icon-box {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    font-size: 1.1rem;
}
.icon-cita { background-color: #e7fcf0; color: #2ecc71; }
.icon-adelanto { background-color: #fff8e1; color: #ffc107; }
.icon-cuota { background-color: #f3f0ff; color: #9b59b6; }
.icon-egreso { background-color: #fff0f0; color: #e74c3c; }
.icon-ingreso { background-color: #e8f5e9; color: #27ae60; }
.icon-otros { background-color: #f0f4ff; color: #3498db; }

.concepto-info .title {
    display: block;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 2px;
    text-transform: capitalize;
}
.concepto-info .subtitle {
    display: block;
    font-size: 0.75rem;
    color: #95a5a6;
}

/* Badges */
.badge-custom {
    padding: 4px 12px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.7rem;
    text-transform: capitalize;
    display: inline-block;
}
.badge-cita { background-color: #e3f2fd; color: #1976d2; }
.badge-adelanto { background-color: #fff3e0; color: #f57c00; }
.badge-cuota { background-color: #e0f7fa; color: #00838f; }
.badge-egreso { background-color: #ffebee; color: #c62828; }
.badge-ingreso { background-color: #e8f5e9; color: #2e7d32; }

/* Monto */
.monto-txt {
    font-weight: 700;
    font-size: 0.95rem;
}
.monto-positivo { color: #2ecc71; }
.monto-negativo { color: #e74c3c; }

/* Actions */
.btn-action {
    color: #adb5bd;
    background: transparent;
    border: none;
    padding: 5px 8px;
    font-size: 1.1rem;
    transition: all 0.2s;
}
.btn-action:hover {
    color: #3498db;
}

.dropdown-action .dropdown-toggle::after {
    display: none;
}
.dropdown-menu {
    border: none;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    border-radius: 12px;
    padding: 8px;
}
.dropdown-item {
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 0.9rem;
    color: #495057;
}
.dropdown-item i {
    width: 20px;
    margin-right: 8px;
    color: #adb5bd;
}
.dropdown-item:hover {
    background-color: #f8f9fa;
    color: #212529;
}
.dropdown-item:hover i {
    color: #3498db;
}
</style>
