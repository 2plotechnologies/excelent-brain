<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Imprimir Reporte de Paquete</title>
</head>
<body>

    <div class="pdf">
        <div class="pdf-content">
            <div class="header__content" style="margin-top:10px">
                <img src="{{ public_path('img/logo-reportee.png') }}" alt="Excelentemente" class="header-logo">

                <div class="header" style="margin-top: 3rem;">
                    <p class="header__name">CENTRO PSICOLOGICO EXCELENTEMENTE</p>
                </div>

                <br>
                <div class="separate"></div>
                <div class="separate"></div>
                <br>
            </div>

            <img src="{{public_path('img/logo-reporte.png')}}" alt="Excelentemente" class="logotipo">

            <div class="pdf__body">
                <!--
                DATA QUE RECIBE LA PLANTILLA PDF:
                $data = [
                    'membresia' => $membresia,
                    'citas' => $citas,
                    'pagos' => $pagos,
                    'deudas' => $deudas,
                    'cuotas_vencidas' => $cuotas_vencidas,
                    'deuda_total' => $deuda_total,
                    'total_cuotas' => $total_cuotas,
                    'professional' => $professional,
                    'status_name' => $status_name,
                ];
                            
                -->

                <div class="pdf__body__content">
                    <div class="pdf__body__content__header">
                        <h1 class="pdf__body__content__header__title">Reporte de Paquete</h1>
                    </div>

                    <div class="pdf__body__content__body">
                        <div class="pdf__body__content__body__header">
                            <h2 class="pdf__body__content__body__header__title">Información del Paciente:</h2>
                        </div>
                        <div class="pdf__body__content__body__content">
                            <div class="pdf__body__content__body__content__item">
                                <span class="pdf__body__content__body__content__item__label">Nombre:</span>
                                <span class="pdf__body__content__body__content__item__value">{{ $paciente->nombres }} {{ $paciente->name }}</span>
                            </div>
                            <div class="pdf__body__content__body__content__item">
                                <span class="pdf__body__content__body__content__item__label">DNI:</span>
                                <span class="pdf__body__content__body__content__item__value">{{ $paciente->dni }}</span>
                            </div>
                            <div class="pdf__body__content__body__content__item">
                                <span class="pdf__body__content__body__content__item__label">Teléfono:</span>
                                <span class="pdf__body__content__body__content__item__value">{{ $paciente->phone }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="pdf__body__content__body">
                        <div class="pdf__body__content__body__header">
                            <h2 class="pdf__body__content__body__header__title">Información del Paquete:</h2>
                        </div>
                        <div class="pdf__body__content__body__header">
                            <h2 class="pdf__body__content__body__header__title">Citas:</h2>
                        </div>
                        @foreach ($citas as $cita)
                            <div class="pdf__body__content__body__content__item">
                                <span class="pdf__body__content__body__content__item__label">Fecha:</span>
                                <span class="pdf__body__content__body__content__item__value">{{ $cita->date }}</span>
                            </div>
                            <div class="pdf__body__content__body__content__item">
                                <span class="pdf__body__content__body__content__item__label">Profesional:</span>
                                <span class="pdf__body__content__body__content__item__value">{{ $cita->professional->name }}</span>
                            </div>
                        @endforeach

                        <div class="pdf__body__content__body__content__item">
                            <span class="pdf__body__content__body__content__item__label">Total de Citas:</span>
                            <span class="pdf__body__content__body__content__item__value">{{ $total_citas }}</span>
                        </div>

                        <div class="pdf__body__content__body__header">
                            <h2 class="pdf__body__content__body__header__title">Pagos:</h2>
                        </div>

                        @foreach ($pagos as $pago)
                            <div class="pdf__body__content__body__content__item">
                                <span class="pdf__body__content__body__content__item__label">Monto:</span>
                                <span class="pdf__body__content__body__content__item__value">{{ $pago->price }}</span>
                            </div>
                            <div class="pdf__body__content__body__content__item">
                                <span class="pdf__body__content__body__content__item__label">Fecha:</span>
                                <span class="pdf__body__content__body__content__item__value">{{ $pago->date }}</span>
                            </div>
                        @endforeach

                        <div class="pdf__body__content__body__content__item">
                            <span class="pdf__body__content__body__content__item__label">Total Pagado:</span>
                            <span class="pdf__body__content__body__content__item__value">{{ $total_pagado }}</span>
                        </div>
                        <div class="pdf__body__content__body__content__item">
                            <span class="pdf__body__content__body__content__item__label">Total Deuda:</span>
                            <span class="pdf__body__content__body__content__item__value">{{ $deuda_total }}</span>
                        </div>
                        <div class="pdf__body__content__body__content__item">
                            <span class="pdf__body__content__body__content__item__label">Total Cuotas:</span>
                            <span class="pdf__body__content__body__content__item__value">{{ $total_cuotas }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</body>
<style>
        *{
            margin: 0px;
            padding: 0px;
        }

        body {
            font-family: 'Roboto', sans-serif;
            margin: auto;
            background: #2F4A99;
        }

        ul li{
            margin-left: 25px;
            list-style: disc;
        }

        .header__name {
            font-size: 30px;
            color: #0069b3;
            font-family:'Montserrat-Bold';
            text-transform: uppercase;
        }

        .header__sub{
            color:#484554;
            font-size: 15px;
            font-family:'Montserrat-Bold';
        }
        .logotipo {
            width: 90%;
            position: absolute;
            top: 15%;
            left: 6%;
            z-index: -10;
            opacity: .05
        }

        .light-signature{
            font-size:15px;
            font-family:'Montserrat-Light';
        }

        #container{
            margin: 150px auto;
            width: 600px;
        }

        .header__content {
            width: 80%;
            position: relative;
            margin: 0 auto 0; 
        }
        .header-logo {
            width: 250px;
            top: 00px;
            left: -40px;
            position: absolute
        }

          .header-logo-big {
            width: 400px !important;
            position: relative !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            margin-bottom: -50px !important;
            display: block !important;
        }

        .header {
            text-align: center;
            z-index: 100;
        }

        .separate {
            width: 100%;
            height: 5px;
            margin: 0 auto 5px;
            background: #0069b3;
        }

        .pdf__body {
            width: 80%;
            position: relative;
            z-index: 100;
            margin: 0 auto 0;
        }

        .pdf {
            width: 100%;
            background: #F2B201;
            border-radius: 0 150px 0 150px;
            position: absolute;
            top: 0;
            bottom: 0;
        }

        .pdf-content {
            width: 100%;
            background: #fff;
            border-radius: 0 180px 0 180px;
            position: absolute;
            top: 0;
            bottom: 0;
        }

        /* Cuerpo del pdf */

        .paciente__title {
            color: #484554;
            text-align: center;
            font-family:'Montserrat-Bold';
            font-size: 15px;
            margin-left: 15px;
        }

        .paciente__name {
            background: #fafafa;
            width: 100%;
            font-family: 'Montserrat-Light';
            font-size: 25px;
            padding: 0 0 10px 0;
            border: 1px solid;
            border-radius: 5px;
        }

        .body-receta {
            color: #484554;
            text-align: center;
            font-family:'Montserrat-Bold';
            font-size: 25px
        }

        .body__receta {
            margin: 10px 0;
        }

        /* Tabla */
        table{
            width: 100%;
            border-collapse: separate
        }
        
        .body__table {
            text-align: left;
            background: #fafafa;
            border: 1px solid;
        }

        .border-table-right {
            border-right: 2px solid
        }

        .table__head {
            border-bottom: 1px solid
        }

        .table__head td {
            padding: 5px;
            height: 25px !important;
            font-family: 'Montserrat-Bold' !important;
            text-align: center;
            color: #484554;
        }

        .table__body {
            /* padding: 5px; */
        }
        .table__body td {
            padding: 3px 15px;
            height: 25px !important;
            border-bottom: 1px solid;
            text-align: center;
            color: #495057;
            font-size: 13px;
        }

        .body__message {
            float: right;
            color: #495057;
        }

        .columna-1 {
            text-align: left !important;
            padding-left: 25px;
            /* margin-left: 15px !important; */
        }

        .pdf__footer {
            width: 100%;
            position: relative;
            transform: translateX(-10px);
            /* top: 59%; */
            /* left: 0; */
            margin: 25px auto 0;
        }

        .footer__contact {
            float: left;
            width: 70%;
            /* padding-right: 15px; */
        }


        .datos__item img{
            width: 25px;
        }

        .datos__item{
        font-size: 13px;
        text-align: left;
    }

        .contact__recipe {
            width: 35%;
        }

        .contact__recipe-item1 {
            width: 38%;
            padding: 7px 15px 7px 15px;
            margin-left: 15px;
            color: #495057;
            background: #fafafa;

            border-radius: 5px;
            border: 1px solid;
            font-size: 13px;
        }
        
        /* Datos de la siguiente consulta */
        .contact__recipe-item2 {
            width: 62%;
            padding: 7px 15px 7px 15px;
            background: #E6E6E6;

            /* margin-left: 15px; */
            color: #495057;
            border-radius: 5px;
            border: 2px solid
        }


        /* datos de contactos */
        .contact__datos {
            width: 100%;
            clear: both;
            margin-left: 10px;
            padding-right: 25px;
        }

        .contact__datos td{
            /* padding-right: 15px; */
        }

        .contact__datos thead tr th {
            text-align: left !important;
        }

        .icon-redes {
            margin-top: 8px;
        }

        /* firma  */
        .footer__firma {
            width: 25%;
            top: 0%;
            right: 0;
            text-align: center;
            position: absolute;
        }
            .footer__firma img {
                display: block;
                width: 350px;
                top:-0px;
                position: absolute;
                right: -75px;
            }

        .font-size-small {
            font-size: 14px
        }

        .bg-gray {
            background: rgba(236, 236, 236, 0.521);
        }

        .botica__info{
            width: 80%;
            padding: 7px 15px 7px 15px;
            margin-top: 180px;
            margin-left: 90px;
            color: #495057;
            background: #fafafa;
            border-radius: 5px;
            border: 2px solid;
            text-align: center;
            font-size: 12px;
        }

    </style>
</html>