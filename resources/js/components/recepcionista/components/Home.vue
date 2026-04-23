<template>
    <main>

    <table-citas :nombreUser="nombreUser" :idSede="idSede"></table-citas>
    </main>
</template>

<script>
export default{
	props:['nombreUser', 'idSede']
}</script>