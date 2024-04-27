Q.1 Apa itu React?
A.1 React adalah salah satu UI Library JavaScript yang digunakan untuk mempermudah proses pembuatan website yang dinamis

Q.2 Apa keunggulan React?
A.2 Diantara keunggulan react adalah:
    1. Menggunakan bahasa pemrograman javascript sehingga dalam pembuatan website bisa langsung menghandle front-end dan back-end menggunakan bahasa pemrograman yang sama
    2. Menggunakan prinsip Single Page Application (SPA) sehingga tidak perlu memuat halaman setiap kali menuju halaman lain, melainkan halaman hanya mengubah kontennya saja.
    3. Menggunakan prinsip reusable component, sehingga tidak perlu membuat komponen berulang.
    4. Dapat digunakan untuk pembuatan aplikasi multi platform: website, mobile, dan desktop.

Q.3 Apa itu SPA pada React?
A.3 SPA atau Single Page Application adalah sebuah prinsip yang digunakan oleh React yang mana sebuah website hanya menggunakan satu halaman utama. Kegunaan SPA di sini dapat dilihat ketika pengguna ingin beralih ke halaman lain, maka tidak perlu memuat ulang seluruh konten halaman, melainkan hanya mengubah isi kontennya saja dengan memanggil konten halaman tersebut.

Q.4 Apa itu state dan props? Apa perbedaannya?
A.4 Dalam pembuatan sebuah web/aplikasi, pasti akan membutuhkan data dan sangat memungkinkan data tersebut akan diperlukan pada komponen lain. Dalam React, data dapat dibuat dan diolah melalui sebuah built-in object bernama State. Data yang berada di dalam state hanya dapat diakses dan diubah di dalam komponen tempat state tersebut didefinisikan. State sering digunakan untuk menyimpan informasi yang bersifat dinamis dan dapat berubah seiring waktu. Adapun props digunakan ketika komponen memerlukan data dari luar untuk menampilkan informasi atau berinteraksi dengan komponen lain.

Dengan demikian, secara umum perbedaan antara state dan props terletak pada fungsinya. State berfungsi untuk membuat dan mengolah data secara lokal di dalam suatu komponen, sedangkan props berfungsi untuk mengoper/mentransfer data antar komponen.

Q.5 Kapan harus menggunakan state dan props? Berikan contoh studi kasus
A.5 State digunakan ketika sebuah komponen memerlukan data yang dinamis yang harus diperbarui di dalam komponen itu sendiri. Sebagai contoh, dalam pembuatan To Do List, data To Do List perlu diperbarui setiap kali user menambah atau menghapus task. Oleh karena itu, developer dapat menggunakan state untuk mengelola data tersebut.

Kemudian, jika dalam aplikasi To Do List dibutuhkan beberapa button seperti tambah, edit, dan hapus, developer bisa membuat satu komponen button saja dan memanfaatkan props. Props seperti onClick digunakan untuk menangani event klik, label atau text untuk menyesuaikan teks yang ditampilkan pada button, dan bahkan bisa mencakup properti-properti lain seperti warna button. Dengan ini, developer tidak perlu membuat tiga komponen button yang berbeda secara terpisah, yang mana dapat mengurangi duplikasi kode.

Q.6 Apa itu state management dan kapan harus menggunakannya?
A.6 State management adalah cara mengelola state dalam komponen. Sebagaimana disebutkan sebelumnya bahwa dalam pengembangan wesbite sering kali diperlukan data, data tersebut ada kalanya hanya diperlukan di satu komponen saja, tapi ada juga data yang diperlukan antar komponen. Dengan state management developer dapat mengelola data-data tersebut berdasarkan keperluannya.

Jika data yang diperlukan bersifat lokal dan tidak kompleks, maka cukup menggunakan useState. Adapun jika datanya yang diperlukan bersifat global dan kompleks, maka dapat menggunakan state management lanjutan seperti React Redux atau React Context.

Q.7 Apa itu ORM/ODM?
A.7 ORM atau Object Relational Mapping adalah sebuah teknik relasi data yang digunakan untuk menghubungkan data melalui tabel. Sedangkan ODM atau Object Document Mapping menghubungkan data melalui bentuk dokumen.

Q.8 Apa perbedaan SQL dan NoSQL?
A.8  SQL merelasikan data menggunakan tabel dengan skema yang telah ditentukan sebelumnya. Artinya struktur tabel dan jenis data harus didefinisikan sebelum data dapat dimasukkan. Kemudian data disimpan dalam tabel yang terstruktur dengan kolom dan baris, dan setiap baris memiliki nilai yang sesuai dengan kolom tertentu.

Sedangkan NoSQL umumnya tidak menggunakan tabel dalam merelasikan datanya, melainkan melalui dokumen, key-value, atau yang lainnya.