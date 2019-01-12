//allert
alert("selamat datang di javascript");

var dataBarang = [
	"pensil",
	"buku",
	"pen"
];

function showBarang(){
	var listBarang = document.getElementById("list-barang");
	
	//cetak semua barang
	for (let i=0 ; i <dataBarang.lenght; i++) {
		var btnEdit = "<a href='#' onclick='editBarang("+i+")'>edit<a/>";
		var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus<a/>";
		listBarang.innerHTML += "<li>" + dataBarang[i]+"["+btnEdit+"|"+btnHapus+"]</li>";
	}
}

function addBarang(){
	var input = document.querySelector ("input[name=barang]");
	dataBarang.push(input.value);
	showBarang();
}

function editBarang(id){
	var newBarang = prompt("nama baru", dataBarang[id])
	dataBarang[id] = newBarang;
	showBarang();
}

function deleteBarang(id){
	dataBarang.splice(id,1);
	showBarang();
}

showBarang();