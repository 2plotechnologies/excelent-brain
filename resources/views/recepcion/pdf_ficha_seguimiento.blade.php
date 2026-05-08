<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Ficha de seguimiento</title>

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
                <h1>Ficha de seguimiento</h1>
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

    <!-- Ficha de seguimiento -->
    @if(isset($ficha_seguimiento))
        @if($ficha_seguimiento->fecha)
        <div class="section">
            <div class="section-title">Fecha</div>
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5;">
                {!! nl2br(e($ficha_seguimiento->fecha)) !!}
            </div>
        </div>
        @endif

        @if($ficha_seguimiento->tipo)
        <div class="section">
            <div class="section-title">Tipo de Paquete</div>
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5;">
                {!! nl2br(e($ficha_seguimiento->tipo)) !!}
            </div>
        </div>
        @endif

        @if($ficha_seguimiento->professional)
        <div class="section">
            <div class="section-title">Profesional</div>
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5;">
                {!! nl2br(e($ficha_seguimiento->professional->name)) !!}
            </div>
        </div>
        @endif

        @if($ficha_seguimiento->frecuencia)
        <div class="section">
            <div class="section-title">Frecuencia</div>
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5;">
                {!! nl2br(e($ficha_seguimiento->frecuencia)) !!}
            </div>
        </div>
        @endif

        @if($ficha_seguimiento->motivo)
        <div class="section">
            <div class="section-title">Motivo</div>
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5;">
                {!! nl2br(e($ficha_seguimiento->motivo)) !!}
            </div>
        </div>
        @endif

        @if($ficha_seguimiento->interconsultas)
        <div class="section">
            <div class="section-title">Interconsultas</div>
            @foreach($ficha_seguimiento->interconsultas as $interconsulta)
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5; margin-bottom: 5px;">
                <strong>Tipo:</strong> {{ $interconsulta->tipo }} | <strong>Profesional:</strong> {{ $interconsulta->professional->name ?? 'N/A' }}<br>
                <strong>Motivo:</strong> {!! nl2br(e($interconsulta->motivo)) !!}
            </div>
            @endforeach
        </div>
        @endif

        @if($ficha_seguimiento->recomendaciones)
        <div class="section">
            <div class="section-title">Recomendaciones</div>
            @foreach($ficha_seguimiento->recomendaciones as $recomendacion)
            <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: justify; line-height: 1.5;">
                {!! nl2br(e($recomendacion)) !!}
            </div>
            @endforeach
        </div>
        @endif
    @endif
</div>

</body>
</html>