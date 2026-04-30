<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Reporte de Paquete</title>

<style>
    body {
        font-family: Arial, sans-serif;
        font-size: 12px;
        color: #333;
    }

    .container {
        width: 100%;
        padding: 20px;
        position: relative;
        z-index: 2;
    }

    /* MARCA DE AGUA */
    .watermark {
        position: fixed;
        top: 25%;
        left: 10%;
        width: 80%;
        opacity: 0.05;
        z-index: 0;
    }

    /* HEADER */
    .header-table {
        width: 100%;
        margin-bottom: 15px;
    }

    .logo {
        width: 150px;
    }

    .header-title {
        text-align: center;
    }

    .header-title h1 {
        margin: 0;
        color: #2F4A99;
        font-size: 20px;
    }

    .header-title p {
        margin: 0;
        font-size: 12px;
    }

    .section {
        margin-bottom: 15px;
    }

    .section-title {
        font-weight: bold;
        margin-bottom: 5px;
        color: #2F4A99;
        border-bottom: 1px solid #ccc;
        padding-bottom: 3px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        background: #2F4A99;
        color: white;
        padding: 6px;
        font-size: 11px;
    }

    td {
        padding: 6px;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }

    /* INFO PACIENTE */
    .info-table td {
        width: 33%;
        background: #fafafa;
        border: 1px solid #eee;
        padding: 8px;
        text-align: left;
    }

    .label {
        font-size: 10px;
        color: #777;
    }

    .value {
        font-size: 12px;
        font-weight: bold;
    }

    /* TOTALES */
    .totals-table td {
        width: 33%;
        background: #2F4A99;
        color: white;
        text-align: center;
        padding: 10px;
    }

    .totals-title {
        font-size: 10px;
    }

    .totals-value {
        font-size: 14px;
        font-weight: bold;
    }

</style>
</head>

<body>

<!-- MARCA DE AGUA -->
<img src="{{ public_path('img/logo-reporte.png') }}" class="watermark">

<div class="container">

    <!-- HEADER -->
    <table class="header-table">
        <tr>
            <td width="30%">
                <img src="{{ public_path('img/logo-reportee.png') }}" class="logo">
            </td>
            <td width="70%" class="header-title">
                <h1>Reporte de Paquete</h1>
                <p>CENTRO PSICOLÓGICO EXCELENTEMENTE</p>
            </td>
        </tr>
    </table>

    <!-- PACIENTE -->
    <div class="section">
        <div class="section-title">Paciente</div>

        <table class="info-table">
            <tr>
                <td>
                    <div class="label">Nombre</div>
                    <div class="value">{{ $paciente->nombres }} {{ $paciente->name }}</div>
                </td>
                <td>
                    <div class="label">DNI</div>
                    <div class="value">{{ $paciente->dni }}</div>
                </td>
                <td>
                    <div class="label">Teléfono</div>
                    <div class="value">{{ $paciente->phone }}</div>
                </td>
            </tr>
        </table>
    </div>

    <!-- REPORTE EXTRA -->
    @if(isset($reporte_extra) && $reporte_extra)
    <div class="section">
        <div class="section-title">Resumen del Tratamiento</div>
        <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5;">
            {!! nl2br(e($reporte_extra->resumen)) !!}
        </div>
    </div>

    <div class="section">
        <div class="section-title">Logros Alcanzados</div>
        <ul style="padding-left: 20px; line-height: 1.4;">
            @foreach(explode("\n", $reporte_extra->logros) as $logro)
                @if(trim($logro) != '')
                    <li style="margin-bottom: 5px;">{{ trim($logro, "• \t\n\r\0\x0B") }}</li>
                @endif
            @endforeach
        </ul>
    </div>

    <div class="section">
        <div class="section-title">Recomendaciones</div>
        <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5;">
            {!! nl2br(e($reporte_extra->recomendaciones)) !!}
        </div>
    </div>

    <div class="section">
        <div class="section-title">Próximos Pasos</div>
        <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5;">
            {!! nl2br(e($reporte_extra->proximos_pasos)) !!}
        </div>
    </div>
    @endif

    <!-- CITAS -->
    <div class="section">
        <div class="section-title">Citas</div>

        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Profesional</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($citas as $cita)
                    <tr>
                        <td>{{ $cita->date }}</td>
                        <td>{{ $cita->professional->name }}</td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="2">No hay citas</td>
                    </tr>
                @endforelse
            </tbody>
        </table>

        <p><strong>Total de citas:</strong> {{ $total_citas }}</p>
    </div>

    <!-- DEUDAS (CRONOGRAMA) -->
    <div class="section">
        <div class="section-title">Cronograma de Cuotas Adicionales</div>

        <table>
            <thead>
                <tr>
                    <th>Fecha de Vencimiento</th>
                    <th>Monto</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($deudas as $deuda)
                    <tr>
                        <td>{{ \Carbon\Carbon::parse($deuda->fecha)->format('d/m/Y') }}</td>
                        <td>S/ {{ $deuda->monto }}</td>
                        <td>{{ $deuda->estado == 2 ? 'Cancelado' : 'Pendiente' }}</td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="3">No hay cuotas programadas (Pago al contado o sin cronograma)</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <!-- PAGOS -->
    <div class="section">
        <div class="section-title">Historial de Pagos Recibidos</div>

        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($pagos as $pago)
                    <tr>
                        <td>{{ $pago->date }}</td>
                        <td>S/ {{ $pago->price }}</td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="2">No hay pagos</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <!-- TOTALES -->
    <div class="section">
        <table class="totals-table">
            <tr>
                <td>
                    <div class="totals-title">Total Pagado</div>
                    <div class="totals-value">S/ {{ $total_pagado }}</div>
                </td>
                <td>
                    <div class="totals-title">Deuda Total</div>
                    <div class="totals-value">S/ {{ $deuda_total }}</div>
                </td>
                <td>
                    <div class="totals-title">Total Cuotas</div>
                    <div class="totals-value">{{ $total_cuotas }}</div>
                </td>
            </tr>
        </table>
    </div>

</div>

</body>
</html>