// Preset Default
const presetDefault = {
    DEFAULT: `Buat Baru (gak perlu diubah)`,
    yugen: `Code post Yugen`,
    hexanime: `Code post Hexanime`,
   
    anilist_demo: `<div class="anime-info">
    <h1>{{title}}</h1>
 <div class="banner-image">
        <img src="{{bannerImage}}" alt="{{title}} Cover" style="width: 100%; height: auto; max-width: 400px; margin-bottom: 20px;" />
    </div>
    
    <div class="cover-image">

<h2> Gambar size Extra large 
</h2>

<img src="{{coverImageExtraLarge}}" alt="{{title}} Cover" style="width: 100%; height: auto; max-width: 400px; margin-bottom: 20px;"/>

<h2> Gambar size large 
</h2>
      
<img src="{{coverImageLarge}}" alt="{{title}} Cover" style="width: 100%; height: auto; max-width: 400px; margin-bottom: 20px;"/>

<h2> Gambar size medium
</h2>
      
<img src="{{coverImageMedium}}" alt="{{title}} Cover" style="width: 100%; height: auto; max-width: 400px; margin-bottom: 20px;"/>

</div>
  
    <h2>Alternative Titles</h2>
    <p><strong>Romaji:</strong> {{titleRomaji}}</p>
    <p><strong>English:</strong> {{titleEnglish}}</p>
    <p><strong>Native:</strong> {{titleJapanese}}</p>

    <h2>Description</h2>
    <p>{{description}}</p>

    <h2>Details</h2>
    <p><strong>Format:</strong> {{format}}</p>
    <p><strong>type:</strong> {{type}}</p>
    <p><strong>Episodes:</strong> {{episodes}}</p>
    <p><strong>Status:</strong> {{status}}</p>
    <p><strong>Start Date:</strong> {{startDate}}</p>
    <p><strong>End Date:</strong> {{endDate}}</p>
    <p><strong>Season:</strong> {{season}}</p>
    <p><strong>Season Year:</strong> {{seasonYear}}</p>
    <p><strong>Average Score:</strong> {{averageScore}}%</p>
    <p><strong>Mean Score:</strong> {{meanScore}}%</p>
    <p><strong>Popularity:</strong> {{popularity}}</p>
    <p><strong>Producers:</strong> {{producers}}</p>
    <p><strong>Genres:</strong> {{genres}}</p>
    <p><strong>Source:</strong> {{source}}</p>
    <h2>Characters</h2>
    <div>{{characters}}</div>
</div>`,

   MAL_demo: `<div class="anime-info">
    <h1>{{title}}</h1>
    <div class="cover-image">
        <img src="{{coverImage}}" alt="{{title}} Cover" style="width: 100%; height: auto; max-width: 400px; margin-bottom: 20px;" />
    </div>

    <h2>Alternative Titles</h2>
    <p><strong>Romaji:</strong> {{titleRomaji}}</p>
    <p><strong>English:</strong> {{titleEnglish}}</p>
    <p><strong>Japanese:</strong> {{titleJapanese}}</p>
    <p><strong>Synonyms:</strong> {{titleSynonyms}}</p>

    <h2>Description</h2>
    <p>{{description}}</p>

    <h2>Details</h2>
    <p><strong>Type:</strong> {{type}}</p>
    <p><strong>Episodes:</strong> {{episodes}}</p>
    <p><strong>Episode Duration:</strong> {{duration}}</p>
    <p><strong>Status:</strong> {{status}}</p>
    <p><strong>Aired:</strong> {{aired}}</p>
    <p><strong>Premiered:</strong> {{premiered}}</p>
    <p><strong>Broadcast:</strong> {{broadcast}}</p>
    <p><strong>Average Score:</strong> {{averageScore}}</p>
    <p><strong>Popularity:</strong> {{popularity}}</p>
    <p><strong>Studios:</strong> {{studios}}</p>
    <p><strong>Producers:</strong> {{producers}}</p>
    <p><strong>Licensors:</strong> {{licensors}}</p>
    <p><strong>Genres:</strong> {{genres}}</p>
    <p><strong>Demographic:</strong> {{demographic}}</p>

    <p><strong>Source Informasi:</strong> {{sourceID}}</p>

    <p><strong>Source GetPost:</strong> {{source}}</p>

<p><strong>Rating:</strong> {{rating}}</p>
</div>`,
};


function savePreset() {
    const formatPost = document.getElementById('formatpost').value;
    const judulpreset = document.getElementById('judulpreset').value.trim();

    if (!judulpreset) {
        alert('Masukan Judul preset code post ini');
        return;
    }
    let storage_preset = JSON.parse(localStorage.getItem('storage_preset')) || {};

    storage_preset[judulpreset] = formatPost;
    localStorage.setItem('storage_preset', JSON.stringify(storage_preset));

    alert('preset berhasil disimpan!');
    loadOpsi_preset();
    document.getElementById('judulpreset').value = '';
}

function hapus_presetTersimpan() {
    const preset_ON = document.getElementById('preset_ON');
    const pilihan_preset = preset_ON.value;

    if (!pilihan_preset) {
        alert('harap pilih dahulu preset yang ingin dihapus');
        return;
    }
    if (presetDefault[pilihan_preset]) {
        alert('preset default tidak bisa dihapus');
        return;
    }
    const password = prompt('masukan Password 12345 sebagai konfirmasi');
    if (password !== '12345') {
        alert('password salah.');
        return;
    }
    let storage_preset = JSON.parse(localStorage.getItem('storage_preset')) || {};
    delete storage_preset[pilihan_preset];
    localStorage.setItem('storage_preset', JSON.stringify(storage_preset));

    alert('preset berhasil dihapus!');
    loadOpsi_preset();
    document.getElementById('formatpost').value = '';
}

function loadpilihan_preset() {
    const preset_ON = document.getElementById('preset_ON');
    const pilihan_preset = preset_ON.value;
    if (!pilihan_preset) {
        document.getElementById('formatpost').value = '';
        return;
    }
    const storage_preset = { ...presetDefault, ...loadstorage_preset() };
    document.getElementById('formatpost').value = storage_preset[pilihan_preset] || '';
    localStorage.setItem('lastpilihan_preset', pilihan_preset);
    return storage_preset[pilihan_preset];
}

function loadOpsi_preset() {
    const preset_ON = document.getElementById('preset_ON');
    preset_ON.innerHTML = '';
    const storage_preset = { ...presetDefault, ...loadstorage_preset() };
    for (const judulpreset in storage_preset) {
        const option = document.createElement('option');
        option.value = judulpreset;
        option.textContent = judulpreset;
        preset_ON.appendChild(option);
    }
    loadLastpilihan_preset();
}

function loadstorage_preset() {
    return JSON.parse(localStorage.getItem('storage_preset')) || {};
}
function loadLastpilihan_preset() {
    const lastpilihan_preset = localStorage.getItem('lastpilihan_preset');
    const preset_ON = document.getElementById('preset_ON');

    if (lastpilihan_preset && preset_ON.querySelector(`option[value="${lastpilihan_preset}"]`)) {
        preset_ON.value = lastpilihan_preset;
        loadpilihan_preset();
    }
}

function display_inforSeries(data) {
        const format = loadpilihan_preset();
        let postContent;

        if (data.source === 'Jikan') {
           postContent = format
     .replace(/{{title}}/g, data.title || 'Unknown')
     .replace(/{{titleRomaji}}/g, data.titleAlternatif.romaji || 'Unknown')
     .replace(/{{titleJapanese}}/g, data.titleAlternatif.japanese || 'Unknown')
      .replace(/{{titleEnglish}}/g, data.titleAlternatif.english || 'Unknown')
      .replace(/{{titleSynonyms}}/g, data.titleAlternatif.synonyms || 'Unknown')
      
      .replace(/{{description}}/g, data.description || 'N/A')
      .replace(/{{bannerImage}}/g, data.bannerImage || '')
      .replace(/{{coverImage}}/g, data.coverImage || '')
      .replace(/{{type}}/g, data.type || 'N/A')
      .replace(/{{episodes}}/g, data.episodes || 'N/A')
      .replace(/{{duration}}/g, data.duration || 'N/A')
      .replace(/{{status}}/g, data.status || 'N/A')
      .replace(/{{aired}}/g, data.aired || 'N/A')
      .replace(/{{premiered}}/g, data.premiered || 'N/A')
      .replace(/{{broadcast}}/g, data.broadcast || 'N/A')
      .replace(/{{averageScore}}/g, data.averageScore || 'N/A')
      .replace(/{{meanScore}}/g, data.meanScore || 'N/A')
      .replace(/{{popularity}}/g, data.popularity || 'N/A')
      .replace(/{{favorites}}/g, data.favorites || 'N/A')
      .replace(/{{studios}}/g, Array.isArray(data.studios) ? data.studios.join(', ') : 'N/A')
      .replace(/{{producers}}/g, Array.isArray(data.producers) ? data.producers.join(', ') : 'N/A')
      .replace(/{{sourceID}}/g, data.sourceID || 'N/A')
      .replace(/{{genres}}/g, Array.isArray(data.genres) ? data.genres.join(', ') : 'N/A')      
      .replace(/{{demographic}}/g, Array.isArray(data.demographic) ? data.demographic.join(', ') : 'N/A')
      

.replace(/{{licensors}}/g, data.licensors || 'N/A')
      
.replace(/{{rating}}/g, data.rating || 'N/A')          
 
        } else if (data.source === 'AniList') {
        postContent = format
    .replace(/{{title}}/g, data.title.romaji || data.title.english)
      .replace(/{{titleRomaji}}/g, data.title.romaji || 'Unknown')
      .replace(/{{titleEnglish}}/g, data.title.english || 'Unknown')
      .replace(/{{titleJapanese}}/g, data.title.japanese || 'Unknown')
      .replace(/{{bannerImage}}/g, data.bannerImage || '')
      .replace(/{{coverImageExtraLarge}}/g, data.coverImageExtraLarge || '')
      .replace(/{{coverImageLarge}}/g, data.coverImageLarge || '')
      .replace(/{{coverImageMedium}}/g, data.coverImageMedium || '')
      .replace(/{{description}}/g, data.description || 'N/A')
      .replace(/{{type}}/g, data.type || 'N/A')
     .replace(/{{format}}/g, data.format || 'N/A')
      .replace(/{{episodes}}/g, data.episodes || 'N/A')
      .replace(/{{duration}}/g, data.duration || 'N/A')
      .replace(/{{status}}/g, data.status || 'N/A')
      .replace(/{{startDate}}/g, data.startDate || 'N/A')
      .replace(/{{endDate}}/g, data.endDate || 'N/A')
      .replace(/{{season}}/g, data.season || 'N/A')
      .replace(/{{seasonYear}}/g, data.seasonYear || 'N/A')
      .replace(/{{averageScore}}/g, data.averageScore || 'N/A')
      .replace(/{{meanScore}}/g, data.meanScore || 'N/A')
      .replace(/{{popularity}}/g, data.popularity || 'N/A')
      .replace(/{{producers}}/g, Array.isArray(data.producers) ? data.producers.join(', ') : 'N/A')
      .replace(/{{source}}/g, data.source || 'N/A')
      .replace(/{{genres}}/g, Array.isArray(data.genres) ? data.genres.join(', ') : 'N/A')
      .replace(/{{characters}}/g, data.characters.map(character => `
          <div class="character">
              <img src="${character.image}" alt="${character.name}" style="width: 100px; height: auto;" />
              <p><strong>Character:</strong> ${character.name}</p>
          </div>
      `).join('') || 'N/A');

        } else {
            postContent = 'Sumber tidak ada.';
        }

        document.getElementById('post-result').innerHTML = postContent;

        if (data.source === 'AniList') {
            document.getElementById('blogger-title').value = data.title.romaji ? data.title.romaji : data.title.english;
        } else {
            document.getElementById('blogger-title').value = data.title ? data.title : 'error';
        }

        document.getElementById('blogger-labels').value = Array.isArray(data.genres) ? data.genres.join(', ') : '';
        document.getElementById('blogger-content').value = postContent;
    }

async function GetPost() {
    const source_dataAnime_FectURL = document.getElementById('source_dataAnime_FectURL').value;
    const id = document.getElementById('id-input').value;
    if (!id) {
        alert('Masukan ID Terlebih dahulu');
        return;  }
    await mainAnime(id, source_dataAnime_FectURL, display_inforSeries);
}


function backup_preset() {
    const  storage_preset = JSON.parse(localStorage.getItem('storage_preset')) || {};
    const storage_preset_json = JSON.stringify(storage_preset, null, 2);
    
    const blob_preset = new Blob([storage_preset_json], { type: 'application/json' });
    const url_file_preset = URL.createObjectURL(blob_preset);
    const buatTaglink = document.createElement('a');
    buatTaglink.href = url_file_preset;
    buatTaglink.download = 'preset_Generator_post.json';
    document.body.appendChild(buatTaglink);
    buatTaglink.click();
    document.body.removeChild(buatTaglink);
    URL.revokeObjectURL(url_file_preset);
}

function pulihkan_preset(event) {
    const file_preset = event.target.files[0];
    if (!file_preset) {
        alert('harap masukan File cadangan preset kamu');
        return;
    }

    const reader_preset = new FileReader();
    reader_preset.onload = function(e) {
        try {
            const pulihkan_preset = JSON.parse(e.target.result);
     if (typeof pulihkan_preset !== 'object') {
                alert('format salah!');
                return;
            }
            const storage_preset = JSON.parse(localStorage.getItem('storage_preset')) || {};

            const gabungkan_preset = { ...storage_preset, ...pulihkan_preset };
            localStorage.setItem('storage_preset', JSON.stringify(gabungkan_preset));

            alert('Cadangan preset berhasil dipulihkan');
            loadOpsi_preset();
        } catch (err) {
            alert('Error parsing file!');
        }
    };

    reader_preset.readAsText(file_preset);
}

document.addEventListener('DOMContentLoaded', () => {
    loadOpsi_preset();
    setupTabs();
    document.getElementById('backup_preset_codepost').addEventListener('click', backup_preset);
   document.getElementById('pulihkan_preset_codepost').addEventListener('change', pulihkan_preset);
    document.getElementById('btn_pulihkan_preset_codepost').addEventListener('click', () => {
        document.getElementById('pulihkan_preset_codepost').click();
    });
    document.getElementById('preset_ON').addEventListener('change', loadpilihan_preset);
    document.getElementById('svbutton').addEventListener('click', savePreset);
    document.getElementById('hapus_presetTersimpan').addEventListener('click', hapus_presetTersimpan);

    const savedFormat = loadpilihan_preset();
    document.getElementById('formatpost').value = savedFormat;
});

function setupTabs() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.style.display = 'none');

            tab.classList.add('active');
            contents[index].style.display = 'block';
        });
    });
}
