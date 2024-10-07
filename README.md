# Generator-post-all-codepost
  **sebuah tools generator post flexsibel**
  
  kamu bisa memanfaatkan tools post ini agar bisa memudahkan kamu memposting dengan code format post milik kamu sendiri,
 untuk data post akan diisi secara otomatis pakai API Anilist, MAL, TMDB, cukup panggail saja {{data}}
 
 - **contoh**
   codepost ini 
   ```
   <h2>{{titleRomaji}}</h2>
   ```
   akan menghasilkan ouput
   judul series dalam bentuk romaji
   

# Web Demo tester
- link [demo test](https://codehiru.blogspot.com/2024/09/generator-post-all-codepost.html?m=1)
# video demo tester 
- link [demo video](https://www.youtube.com/embed/EcX1-bNo_a0)

# Setup post generator (Untuk v2.4)

0.**dapatkan cliendID auth2.0**
   
   lakukan dua hal ini
   - tonton video [Setup post generate (anilist,MAL) blogger](https://youtu.be/K8tYt5GsVwk?si=wyH_lX1ZO9tfAPTF)
   - sambil masuk ke [cloudGoogle](https://console.cloud.google.com/)
  
ikuti aja setiap intruksi yang ada divideo.

### Version 2.1 - 01 Okt,2024
1. Menambahkan Fitur *[ preset, backup, pulihkan backup ]*

### Version 2.2 - 01 Okt,2024
1. Memperbaiki stuktur Fitur *[preset, backup, pulihkan backup]*
2. merubah data [production jadi studios, prebuild preset {yugen, hexanime, anilist_demo, MAL_demo,} ,Array type ID].

### Version 2.3 - 02 Okt, 2024
1. Menambahkan TMDB
2. Menambahkan DATA baru
<ul> 
<h3>Anilist</h3>
<li><strong>{{titleSynonyms}}:</strong> Sinonim atau judul alternatif lainnya yang pernah digunakan untuk anime ini.</li>

<li><strong>{{countryOfOrigin}}:</strong> Negara produksi anime.</li>
     <li><strong>{{adult}}:</strong> Tag R-18/R-14.</li>   
     <li><strong>{{licensors}}:</strong> Tag YES/NO</li>
     <li><strong>{{chapters}}:</strong> Chapter (Manga)</li>
     <li><strong>{{volumes}}:</strong> volumes (Manga)</li>
     <li><strong>{{hashtag}}:</strong> hashtag anime.</li>   
     <li><strong>{{idMal}}</strong>ID Anime di situs MAL</li>
    <li><strong>{{source}}:</strong> Sumber data atau cerita asli anime (misalnya: Manga, Novel, Original).</li>
    <li><strong>{{sourceID}}:</strong> ID sumber informasi anime (misalnya: ID pada database seperti MyAnimeList atau Anilist).</li>
    <li><strong>{{staff}}:</strong> Daftar staff yg terlibat produksi anime.</li>
    <li><strong>{{characters}}:</strong> Daftar characters dan voice actors (VA) Jepang.</li>
</ul>
<ul>
  <h3>MAL</h3>
<li><strong>{{licensors}}:</strong> Perusahaan yang mendapatkan lisensi distribusi anime di luar negeri.</li>
    <li><strong>{{genres}}:</strong> Genre atau kategori utama anime (misalnya: Action, Comedy, Drama).</li>
    <li><strong>{{demographic}}:</strong> Target penonton berdasarkan demografi (misalnya: Shounen, Seinen).</li>
    <li><strong>{{source}}:</strong> Sumber data atau cerita asli anime (misalnya: Manga, Novel, Original).</li>
    <li><strong>{{sourceID}}:</strong> ID sumber informasi anime (misalnya: ID pada database seperti MyAnimeList atau Anilist).</li>
    <li><strong>{{rating}}:</strong> Klasifikasi usia atau rating anime (misalnya: PG-13, R-17).</li>
</ul>

3. support API
```
1.Anilist [ANIME & MANGA]
2.MAL [ANIME & MANGA]
3.TMDB [TV & MOVIE]
```
4. Menghapus spasi pada input labels


### Version 2.4 - 06 Okt, 2024

1. Mengganti Code "Post to Bloggger" karena yang awal Salah code.
     
2. Menambahkan Data Charakter diGetpost Anilist
   - `{{staff}}` : daftar para staff yang ikut produksi Anime/Manga
   - `{{characters}}`: Daftar characters dan voice actors (VA) Jepang.

 **NEW INFO:**
terdapat data baru pada bagian `{{characters}}`, Berikut list data barunya `[age, gender, description, dateOfBirth]`.
untuk menampilkan data baru pada characters

maka gunakan tag ( dan ) lalu isi data baru kedalamnya dengan koma sebagai pemisa datanya, disarankan jangan ada spasi supaya tidak error..

contohnya seperti ini :
 {{characters(gender,age)}} : ini akan menampilkan gender dan age kedalam list characters
  `{{characters(gender,age,description, dateOfBirth)}}` : ini akan menampilkan `gender,age,description, dateOfBirth` kedalam list characters
untuk menghapusnya tinggal hilangkan saja datanya dari dalam ().

3. Membuat Fitur custom Label silahkan baca [Bagaimana Cara Menggunakan Generator Post ini?](https://codehiru.blogspot.com/p/faq-post-generator.html?m=1)
   
4. Merubah lokasi config BlogID,ClienID,ClientID secret,Redirect URI  menjadi input yang disimpan dilocalstorage.
   
5. Memberikan style dasar sebelum style utama (wernayasa) selesai.


### Version 2.4 - 07 Okt, 2024
1. perbaikan Bug post to blogger contentnya kosong dikarenakan
salah dalam mengambil content
awalnya `const content_pg = document.getElementById('blogger-content').value;` setelah pakai codeMirror harusnya `    const content_pg = textarea_ouputGetpost.getValue();`

### Credit 
1. Roka (anilist & MAL)
2. Hirutshuji (flexsibel data Anilist & MAL)
