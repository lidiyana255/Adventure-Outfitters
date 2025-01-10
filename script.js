document.getElementById("formTransaksi").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const jumlah = document.getElementById("jumlah").value;
    const kategori = document.getElementById("kategori").value;

    if (!nama || !jumlah || !kategori) {
        alert("Semua data harus diisi!");
        return;
    }

    const table = document.getElementById("transaksiTable");
    const row = table.insertRow();
    row.insertCell(0).innerText = nama;
    row.insertCell(1).innerText = jumlah;
    row.insertCell(2).innerText = kategori;

    alert("Transaksi berhasil disimpan!");
});
