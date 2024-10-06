// Preset Default
const presetDefault = {
    DEFAULT: `Buat baru disini`,
    

Yugen_Anilist: `<!--[ Synopsis ]-->
<div id="synopsis">
<p>{{description}}</p>
</div>

<span><!--more--></span>

<!--[ Thumbnail ]-->
<div class="separator" style="clear: both;"><a href="{{coverImageExtraLarge}}" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" height="200" data-original-height="650" data-original-width="460" src="{{coverImageExtraLarge}}"/></a></div>

<!--[ Hero Background ]-->
<style>
.banner {
background-image: url("{{coverImageExtraLarge}}");
}
</style>


<iframe width="560" height="315" src="https://www.youtube.com/embed/3XUJOkFXRiw?si=KfR0AfyYLoYZe-Yq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--[ Extra information ]-->
<dl id="extra-info">
<span><dt>Romaji:</dt><dd>{{titleRomaji}}</dd></span>
<span><dt>Native:</dt><dd>{{titleJapanese}}</dd></span>
<span><dt>Synonyms:</dt><dd>{{titleSynonyms}}</dd></span>
<span><dt>Studios:</dt><dd>{{studios}}</dd></span>
<span><dt>Episodes Duration:</dt><dd>{{duration}}</dd></span>
</dl>`,
    

Yugen_MAL: `<!--[ Synopsis ]-->
<div id="synopsis">
<p>{{description}}</p>
</div>

<span><!--more--></span>

<!--[ Thumbnail ]-->
<div class="separator" style="clear: both;"><a href="{{coverImage}}" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" height="200" data-original-height="650" data-original-width="460" src="{{coverImage}}"/></a></div>

<!--[ Hero Background ]-->
<style>
.banner {
background-image: url("{{coverImage}}");
}
</style>


<iframe width="560" height="315" src="https://www.youtube.com/embed/3XUJOkFXRiw?si=KfR0AfyYLoYZe-Yq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--[ Extra information ]-->
<dl id="extra-info">
<span><dt>Romaji:</dt><dd>{{titleRomaji}}</dd></span>
<span><dt>Native:</dt><dd>{{titleJapanese}}</dd></span>
<span><dt>Synonyms:</dt><dd>{{titleSynonyms}}</dd></span>
<span><dt>Studios:</dt><dd>{{studios}}</dd></span>
<span><dt>Episodes Duration:</dt><dd>{{duration}}</dd></span>
</dl>`,
    
    
    HexaNime_Anilist: `<!--[ Synopsis ]-->
<div id="synopsis">
 <p>{{description}}</p>
</div>

<span><!--more--></span>

<!--[ Thumbnail ]-->
<div class="separator" style="clear: both;"><a href="{{coverImageExtraLarge}}" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" height="200" data-original-height="600" data-original-width="425" src="{{coverImageExtraLarge}}"/></a></div>

<!--[ Extra information ]-->
<dl id="extra-info">
<span><dt>Synonym:</dt><dd>{{titleSynonyms}}</dd></span>
<span><dt>Japanese:</dt><dd>{{titleJapanese}}</dd></span>
<span><dt>Aired:</dt><dd>{{startDate}} - {{endDate}}</dd></span>
<span><dt>Premiered:</dt><dd>{{season}} {{seasonYear}}</dd></span>
<span><dt>Duration:</dt><dd>{{duration}}</dd></span>
<span><dt>Episodes:</dt><dd>{{episodes}}</dd></span>
</dl>

<!--[ Seasons ]-->
<h2 class="title">More Seasons</h2>
<div class="os-list" data-jumlah='10' data-label='{{title}}'></div>


 <!--[ Episode List ]-->
    <script>const labelListBS = '{{title}}';</scr` + `ipt>`,



    HexaNime_MAL: `<!--[ Synopsis ]-->
<div id="synopsis">
 <p>{{description}}</p>
</div>

<span><!--more--></span>

<!--[ Thumbnail ]-->
<div class="separator" style="clear: both;"><a href="{{coverImage}}" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" height="200" data-original-height="600" data-original-width="425" src="{{coverImage}}"/></a></div>

<!--[ Extra information ]-->
<dl id="extra-info">
<span><dt>Synonym:</dt><dd>{{titleSynonyms}}</dd></span>
<span><dt>Japanese:</dt><dd>{{titleJapanese}}</dd></span>
<span><dt>Aired:</dt><dd>{{aired}}</dd></span>
<span><dt>Premiered:</dt><dd>{{premiered}}</dd></span>
<span><dt>Duration:</dt><dd>{{duration}}</dd></span>
<span><dt>Episodes:</dt><dd>{{episodes}}</dd></span>
</dl>

<!--[ Seasons ]-->
<h2 class="title">More Seasons</h2>
<div class="os-list" data-jumlah='10' data-label='{{title}}'></div>


 <!--[ Episode List ]-->
    <script>const labelListBS = '{{title}}';</scr` + `ipt>`,





    TMDB_demo: `<div class="tmdb-item">
  <div class="tmdb-banner">
    <img src="{{bannerImage}}" alt="{{title}} Banner" class="banner-image">
  </div>
  
  <div class="tmdb-content">
    <div class="tmdb-cover">
      <img src="{{coverImage}}" alt="{{title}} Cover" class="cover-image">
    </div>
    
    <div class="tmdb-info">
      <h2>{{title}}</h2>
      <p><strong>Alternative Titles:</strong> {{alternativeTitles}}</p>
      
      <p class="description">{{description}}</p>
      
      <div class="details">
        <p><strong>Release Date:</strong> {{releaseDate}}</p>
        <p><strong>Popularity:</strong> {{popularity}}</p>
        <p><strong>Average Score:</strong> {{averageScore}}</p>
        <p><strong>Vote Count:</strong> {{voteCount}}</p>
          <p><strong>Episodes:</strong> {{episodes}}</p>
          <p><strong>Seasons:</strong> {{season}}</p>

          <p><strong>Duration:</strong> {{duration}} minutes</p>
          
        <p><strong>Genres:</strong> 
          {{genres}}
        </p>
        
        <p><strong>Studios:</strong> 
          {{studios}}
        </p>
       <p><strong>SourceID:</strong> 
          {{sourceID}}
        </p>
      </div>
    </div>
  </div>
</div>`,

anilist_demo: `
<div class="anime-info">
    <h1>{{title}}</h1>

    <div class="banner-image">
        <img src="{{bannerImage}}" alt="{{title}} Cover" style="width: 100%; height: auto; max-width: 400px; margin-bottom: 20px;" />
    </div>
    
    <div class="cover-image">
        <h2>Gambar size Extra large</h2>
        <img src="{{coverImageExtraLarge}}" alt="{{title}} Cover" style="width: 100%; height: auto; max-width: 400px; margin-bottom: 20px;" />
        
        <h2>Gambar size large</h2>
        <img src="{{coverImageLarge}}" alt="{{title}} Cover" style="width: 100%; height: auto; max-width: 400px; margin-bottom: 20px;" />
        
        <h2>Gambar size medium</h2>
        <img src="{{coverImageMedium}}" alt="{{title}} Cover" style="width: 100%; height: auto; max-width: 400px; margin-bottom: 20px;" />
    </div>
  
    <h2>Alternative Titles</h2>
    <p><strong>Romaji:</strong> {{titleRomaji}}</p>
    <p><strong>English:</strong> {{titleEnglish}}</p>
    <p><strong>Native:</strong> {{titleJapanese}}</p>
    <p><strong>Synonyms:</strong> {{titleSynonyms}}</p>

    <h2>Description</h2>
    <p>{{description}}</p>

    <h2>Details</h2>
    <p><strong>ID Mal:</strong> {{idMal}}</p>
    <p><strong>Format:</strong> {{format}}</p>
    <p><strong>Type:</strong> {{type}}</p>
    <p><strong>Episodes:</strong> {{episodes}}</p>
    <p><strong>Duration:</strong> {{duration}}</p>
    <p><strong>Status:</strong> {{status}}</p>
    <p><strong>Start Date:</strong> {{startDate}}</p>
    <p><strong>End Date:</strong> {{endDate}}</p>
    <p><strong>Season:</strong> {{season}}</p>
    <p><strong>Season Year:</strong> {{seasonYear}}</p>
    <p><strong>Average Score:</strong> {{averageScore}}%</p>
    <p><strong>Mean Score:</strong> {{meanScore}}%</p>
    <p><strong>Popularity:</strong> {{popularity}}</p>
    <p><strong>Volumes:</strong> {{volumes}}</p> 
    <p><strong>Chapters:</strong> {{chapters}}</p> 
    <p><strong>Rating (Adult):</strong> {{adult}}</p> 
    <p><strong>Country of Origin:</strong> {{countryOfOrigin}}</p>
    <p><strong>Licensed:</strong> {{licensors}}</p>
    <p><strong>Hashtag:</strong> {{hashtag}}</p>
    <p><strong>Studios:</strong> {{studios}}</p> 
    <p><strong>Genres:</strong> {{genres}}</p>
    <p><strong>Source:</strong> {{source}}</p>
    <p><strong>SourceID:</strong> {{sourceID}}</p>
     
    <h2>Staff</h2>
    <div>{{staff}}</div> 
    <h2>Characters</h2>
    <div>{{characters}}</div>
    
</div>
`,
    
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
    <p><strong>Rating:</strong> {{rating}}</p>

    <p><strong>Source:</strong> {{source}}</p>

    <p><strong>SourceID:</strong> {{sourceID}}</p>
</div>`,
};
        
function savePreset() {
    const formatPost = textarea_preset.getValue();  
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
       textarea_preset.setValue(''); 
        return;
    }
    const storage_preset = { ...presetDefault, ...loadstorage_preset() };
    textarea_preset.setValue(storage_preset[pilihan_preset] || ''); 
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
      
const titleL1 = data.title.romaji? data.title.romaji : data.title.english;
const titleL2 = data.title? data.title : data.titleAlternatif.romaji;
   
    if (data.sourceID === 'Jikan') {
     postContent = format
     .replace(/{{title}}/g, titleL1? titleL1: titleL2)
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
      .replace(/{{genres}}/g, Array.isArray(data.genres) ? data.genres.join(', ') : 'N/A')      
      .replace(/{{demographic}}/g, Array.isArray(data.demographic) ? data.demographic.join(', ') : 'N/A')
       .replace(/{{licensors}}/g, data.licensors || 'N/A')
         .replace(/{{rating}}/g, data.rating || 'N/A')   .replace(/{{source}}/g, data.source || 'N/A')   .replace(/{{sourceID}}/g, data.sourceID || 'N/A')
         
        
  } else if (data.sourceID === 'AniList') {
   
   function characters_va_html(character, showdatax) {
    let showdata = showdatax;
    let html = `
      <div class="character">
        <img src="${character.image}" alt="${character.name}" style="width: 100px; height: auto;" />
        <p><strong>Character:</strong> ${character.name}</p>
        <p><strong>Role:</strong> ${character.role}</p>`;
        
        
   if (showdata.includes('description') && character.description) {
   html += `<p><strong>Description:</strong> ${character.description}</p>`;
    }

    if (showdata.includes('gender') && character.gender) {
        html += `<p><strong>Gender:</strong> ${character.gender}</p>`;
    }
    if (showdata.includes('age') && character.age) {
        html += `<p><strong>Age:</strong> ${character.age}</p>`;
    }
    if (showdata.includes('dateOfBirth') && character.dateOfBirth) {
        html += `<p><strong>Date of Birth:</strong> ${character.dateOfBirth}</p>`;
    }
    html += `
        <div class="voice-actors">
          <h4>Voice Actors:</h4>
          ${character.voiceActors
            .filter(va => va.language)
            .map(va => `
              <div class="voice-actor">
                <img src="${va.image}" alt="${va.name}" style="width: 80px; height: auto;" />
                <p class="va_mame"><strong>${va.name}</strong></p>
                <p class="va_language">${va.language}</p>
              </div>
            `).join('')}
        </div>
      </div>
    `;
    return html;
    } 
    postContent = format
    .replace(/{{title}}/g, titleL1? titleL1: titleL2)
    .replace(/{{titleRomaji}}/g, data.title.romaji || 'Unknown')
    .replace(/{{titleEnglish}}/g, data.title.english || 'Unknown')
    .replace(/{{titleJapanese}}/g, data.title.japanese || 'Unknown')
    .replace(/{{titleSynonyms}}/g, Array.isArray(data.title.synonyms) ? data.title.synonyms.join(', ') : 'Unknown')
    .replace(/{{idMal}}/g, data.idMal || 'N/A') 
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
    .replace(/{{volumes}}/g, data.volumes || 'N/A') 
    .replace(/{{chapters}}/g, data.chapters || 'N/A')  
    .replace(/{{adult}}/g, data.adult ? 'R-18' : 'R-14') 
    .replace(/{{countryOfOrigin}}/g, data.countryOfOrigin || 'N/A')  
    .replace(/{{licensors}}/g, data.isLicensed ? 'Yes' : 'No')  
    .replace(/{{hashtag}}/g, data.hashtag || 'N/A')  
 
    .replace(/{{studios}}/g, Array.isArray(data.studios) ? data.studios.join(', ') : 'N/A')    
    .replace(/{{genres}}/g, Array.isArray(data.genres) ? data.genres.join(', ') : 'N/A')
    .replace(/{{externalLinks}}/g, data.externalLinks.map(link => `
  <div class="external-link">
    <a href="${link.url}" target="_blank">
      Watch on ${link.site}
    </a>
  </div>
`).join('') || 'N/A')

    .replace(/{{staff}}/g, data.staff.map(staffMember => `
        <div class="staff">
            <img src="${staffMember.image}" alt="${staffMember.name}" style="width: 100px; height: auto;" />
            <p><strong>Staff:</strong> ${staffMember.name} - ${staffMember.role}</p>
        </div>
    `).join('') || 'N/A') 
    
    .replace(/{{characters(?:\(([^)]*)\))?}}/g, (match, p1) => {
    
     if (p1){
   let showdata = p1.split(',').map(item => item.trim()); 
  if (showdata) {
    return data.characters.map(character => characters_va_html(character, showdata)).join('') || 'N/A';
       }
    }else {
    let showdata = [];
    return data.characters.map(character => characters_va_html(character, showdata)).join('') || 'N/A';
  }
})    
    .replace(/{{source}}/g, data.source || 'N/A') .replace(/{{sourceID}}/g, data.sourceID || 'N/A')  
    
    } else if (data.sourceID === 'TMDB') {
    postContent = format
      .replace(/{{title}}/g, data.title || 'Unknown')
      .replace(/{{description}}/g, data.description || 'N/A')
      .replace(/{{bannerImage}}/g, data.bannerImage || '')
      .replace(/{{coverImage}}/g, data.coverImage || '')
      .replace(/{{episodes}}/g, data.episodes || 'N/A')
      .replace(/{{duration}}/g, data.duration || 'N/A')
      .replace(/{{averageScore}}/g, data.averageScore || 'N/A')
      .replace(/{{popularity}}/g, data.popularity || 'N/A')
      .replace(/{{season}}/g, data.season || 'N/A')
      .replace(/{{studios}}/g, Array.isArray(data.studios) ? data.studios.join(', ') : 'N/A')
      .replace(/{{genres}}/g, Array.isArray(data.genres) ? data.genres.join(', ') : 'N/A')
      .replace(/{{releaseDate}}/g, data.releaseDate || 'N/A')
      .replace(/{{voteCount}}/g, data.voteCount || 'N/A')   
      .replace(/{{alternativeTitles}}/g, data.alternativeTitles || 'N/A') 
      .replace(/{{sourceID}}/g, data.sourceID || 'N/A');
      
     } else if (data.sourceID === 'IMDB') {
    postContent = format
      .replace(/{{title}}/g, data.title || 'Unknown')
      .replace(/{{description}}/g, data.description || 'N/A')
      .replace(/{{coverImage}}/g, data.coverImage || '')
      .replace(/{{episodes}}/g, data.episodes || 'N/A')
      
      .replace(/{{duration}}/g, data.duration || 'N/A')
      .replace(/{{averageScore}}/g, data.averageScore || 'N/A')
      .replace(/{{popularity}}/g, data.popularity || 'N/A')
      
      .replace(/{{studios}}/g, Array.isArray(data.studios) ? data.studios.join(', ') : 'N/A')
      .replace(/{{genres}}/g, Array.isArray(data.genres) ? data.genres.join(', ') : 'N/A')
      .replace(/{{sourceID}}/g, data.sourceID || 'N/A')

   } else {
      postContent = 'Sumber tidak ada.';        
}

        
document.getElementById('post-result').innerHTML = postContent;

document.getElementById('ntf_pg').innerHTML = "Getpost Berhasil...";
 
  setTimeout(() => {
document.getElementById('ntf_pg').classList.remove('show');
    }, 3000);
    

  if (data.sourceID === 'AniList') {
      document.getElementById('blogger-title').value = data.title.romaji ? data.title.romaji : data.title.english;
        } else {
      document.getElementById('blogger-title').value = data.title ? data.title : 'error';
  }
const customL = localStorage.getItem('customLabel'),
customLcek = customL? customL + ',':'';
     
const genresdt =  customLcek + (titleL1? titleL1: titleL2) + ',' + data.genres.join(',');

document.getElementById('blogger-labels').value = genresdt;

textarea_ouputGetpost.setValue(postContent);
    }

document.addEventListener('DOMContentLoaded', () => {
    const storedLabel = localStorage.getItem('customLabel');
    const customLabelInput = document.getElementById('custom-label');
    if (storedLabel) {
        customLabelInput.value = storedLabel;
    }
});

document.getElementById('save-label').addEventListener('click', () => {
    const customLabelInput = document.getElementById('custom-label');
 
    document.getElementById('ntf_pg').classList.add('show');
    const label = customLabelInput.value.trim();
    document.getElementById('ntf_pg').innerHTML = "Custom label telah disimpan...";
localStorage.setItem('customLabel', label);
  setTimeout(() => {
document.getElementById('ntf_pg').classList.remove('show');
    }, 3000);
});

const typeOption= {
    anilist: ['ANIME', 'MANGA'],
    jikan: ['anime', 'manga'],
    tmdb: ['tv', 'movie'],
};

function run_typeOption() {
    const pilih_source = document.getElementById('source_dataAnime_FectURL');
    const pilih_type = document.getElementById('type_dataAnime_FectURL');
    const source_ON = pilih_source.value;
    pilih_type.innerHTML = '';
    const option_list = typeOption[source_ON];
    option_list.forEach(type => {
        const option_tag = document.createElement('option');
        option_tag.value = type; 
        option_tag.textContent = type;
        pilih_type.appendChild(option_tag);
    });
}
document.getElementById('source_dataAnime_FectURL').addEventListener('change', run_typeOption);
run_typeOption();


async function GetPost() {
    const source_dataAnime_FectURL = document.getElementById('source_dataAnime_FectURL').value;
    const type_dataAnime_FectURL = document.getElementById('type_dataAnime_FectURL').value;
    const id = document.getElementById('id-input').value;
document.getElementById('ntf_pg').classList.add('show');
document.getElementById('ntf_pg').innerHTML = "Getpost loading...";

    if (!id) {
        alert('Masukan ID Terlebih dahulu');
        return;
    }
 await mainAnime(id, source_dataAnime_FectURL, type_dataAnime_FectURL, display_inforSeries);
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
    textarea_preset.setValue(savedFormat);
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
