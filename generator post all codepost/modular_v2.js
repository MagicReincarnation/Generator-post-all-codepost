async function fetchAniListData(id) {
  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json' 
    },
    body: JSON.stringify({
      query: `
        query ($id: Int) {
          Media(id: $id, type: ANIME) {
            title {
              romaji
              english
              native
            }
            description
            episodes
            duration
            status
            type
            format
            averageScore
            meanScore
            popularity
            genres
            coverImage {
              extraLarge
			  large
			  medium
            }
            bannerImage
            characters {
              edges {
                node {
                  name {
                    full
                  }
                  image {
                    large
                  }
                }
              }
            }
            studios {
              edges {
                node {
                  name
                }
              }
            }
            season
            seasonYear
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
          }
        }
      `,
      variables: { id: parseInt(id) }
    })
  });

  const data = await response.json();
  return mapAniListData(data.data.Media);
}

async function fetchJikanData(id) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await response.json();
  return mapJikanData(data.data);
}


function formatDate(dateSeries) {
    if (!dateSeries || (!dateSeries.year && !dateSeries.month && !dateSeries.day)) {return 'N/A';}
    const { year, month, day } = dateSeries;
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${monthNames[month - 1] || ''} ${day || ''}, ${year || ''}`.trim();
  }


// AniList data
function mapAniListData(data) {
  return {
    title: {
      romaji: data.title.romaji || 'N/A',
      english: data.title.english || 'N/A',
      japanese: data.title.native || 'N/A'
    },
    description: data.description || 'N/A',
    type: data.type || 'N/A',
    format: data.format || 'N/A',
    season: data.season || 'N/A',
    seasonYear: data.seasonYear || 'N/A',
    episodes: data.episodes || 'N/A',
    duration: data.duration ? `${data.duration} min. per ep.` : 'N/A',
    status: data.status || 'N/A',
    producers: data.studios.edges?.filter(studio => !studio.isAnimationStudio).map(studio => studio.node.name) || [],
    startDate: formatDate(data.startDate),
    endDate: formatDate(data.endDate),
    genres: data.genres || [],
    coverImageExtraLarge: data.coverImage.extraLarge ||'',
    coverImageLarge: data.coverImage.large || '',
    coverImageMedium: data.coverImage.medium || '',
    bannerImage: data.bannerImage || '',
    characters: data.characters.edges?.map(character => ({
      name: character.node.name.full,
      image: character.node.image.large,
    })) || [],
    
    popularity: data.popularity || 'N/A',
    averageScore: data.averageScore || 'N/A',
    meanScore: data.meanScore || 'N/A',
    source: 'AniList'
  };
}

// Jikan data
function mapJikanData(data) {
  return {
    title: data.title,
    titleAlternatif: {
      english: data.title_english || 'N/A',
      romaji: data.title_synonyms && data.title_synonyms.length > 0 ? data.title_synonyms[0] : 'N/A', 
      japanese: data.title_japanese || 'N/A',
      synonyms: data.title_synonyms || []
    },
    description: data.synopsis || 'N/A',
    type: data.type || 'N/A',
    episodes: data.episodes || 'N/A',
    status: data.status || 'N/A',
    aired: data.aired?.string || 'N/A',
    premiered: data.season ? `${data.season.charAt(0).toUpperCase() + data.season.slice(1)} ${data.year}` : 'N/A',
    broadcast: data.broadcast?.string || 'N/A',
    producers: data.producers?.map(producer => producer.name) || [],
    licensors: data.licensors?.map(licensor => licensor.name) || ['Unknown'],
    studios: data.studios?.map(studio => studio.name) || [],
    sourceID: data.source || 'N/A',
    genres: data.genres?.map(genre => genre.name) || [],
    demographic: data.demographics?.map(demo => demo.name) || [],
    duration: data.duration || 'N/A',
    rating: data.rating || 'N/A',
    coverImage: data.images?.jpg?.large_image_url || '',
    bannerImage: data.images?.jpg?.image_url || '',
    popularity: data.popularity || 'N/A',
    averageScore: data.score || 'N/A',
    source: 'Jikan'
  };
}

async function fetch_dataseries(url, source) {
  switch (source) {
    case 'anilist':
      return await fetchAniListData(url);
    case 'jikan':
      return await fetchJikanData(url);
    default:
  console.error('sumber kosong');
  }
}

async function mainAnime(url, source, callback) {
  try {
    const data = await fetch_dataseries(url, source);   
    callback(data);
  } catch (error) {
    console.error('Error fecth:', error);
  }
}