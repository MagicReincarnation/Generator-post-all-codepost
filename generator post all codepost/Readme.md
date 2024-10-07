### Version 2.4.1
 - untuk cek lebih details apa yang diupdate silahkan ke Readme.md difolder main

### Dokumentasi: Fungsi `mainAnime` (modular_v3.js)

Fungsi `mainAnime` digunakan untuk mengambil data dari berbagai sumber (seperti AniList, Jikan, TMDB, atau IMDB) berdasarkan ID media dan tipe media (anime, film, atau serial TV). Hasilnya akan dikembalikan dalam callback yang bisa digunakan untuk menampilkan (dalam bentuk HTML) atau memproses data secara langsung.

## Cara Menggunakan:

**Sintaks:**
```javascript
mainAnime(url, source, type, callback)
```
### Parameter:

**url**: ID dari media yang ingin diambil datanya (contohnya ID dari AniList, Jikan (MyAnimeList), TMDB).

**source**: Sumber data, bisa salah satu dari: 'anilist', 'jikan (MyAnimeList)', 'tmdb', atau 'imdb'.


**type**: Tipe media, misalnya 'ANIME', 'MANGA', 'movie', atau 'tv'.


**callback**: Fungsi callback yang akan dipanggil setelah data berhasil diambil. Data yang diambil akan diteruskan ke callback ini (kamu bisa memprosesnya agar tampil dalam bentuk HTML).


**Contoh pakainya:**

Misalkan kamu ingin mengambil data anime dari AniList dengan ID 5114:
```
mainAnime(5114, 'anilist', 'ANIME', (data) => {
  console.log('Data yang diambil:', data);
  console.log('Judul dalam bahasa Inggris:', data.title.english);
});
```
Atau mengambil data film dari TMDB:
```
mainAnime(5678, 'tmdb', 'movie', (data) => {
  console.log('Data yang diambil:', data);
});
```
Dalam contoh di atas, hasil yang diambil dari sumber akan ditampilkan di console melalui callback.

### Catatan:

Pastikan kamu sudah memiliki API key untuk TMDB serta memasukkannya di configAPIKey sebelum menggunakan sumber TMDB.
```
const configAPIKey = {
  TMDB: "b6b0afcc3b7949d79323e31a950b7511",
  IMDB: "" // belum selesai dikerjakan
};
```

