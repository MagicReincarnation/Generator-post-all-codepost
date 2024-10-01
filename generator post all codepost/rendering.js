function saveFormat(format) {
localStorage.setItem('postFormat', format);
        }
        
function loadFormat() {
            return localStorage.getItem('postFormat') || '';
        }
function display_inforSeries(data) {
  const format = loadFormat();
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

 if(data.source === 'AniList'){
   document.getElementById('blogger-title').value = data.title.romaji ? data.title.romaji : data.title.english;
  }else{
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
                return;
            }
            
            await mainAnime(id, source_dataAnime_FectURL, display_inforSeries);
        }

        document.getElementById('svbutton').addEventListener('click', () => {
            const format = document.getElementById('formatpost').value;
            saveFormat(format);
            alert('Format post tersimpan!');
        });
        window.onload = () => {
            const savedFormat = loadFormat();
            document.getElementById('formatpost').value = savedFormat;
        };

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
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
});