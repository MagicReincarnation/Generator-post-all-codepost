async function fetchAniListData(id,type) {
  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json' 
    },
    body: JSON.stringify({
      query: `
        query ($id: Int) {
  Media(id: $id, type: ${type}) {
    title {
      romaji
      english
      native
    }
    idMal
    synonyms
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
    hashtag
    volumes
    chapters
    isAdult
    countryOfOrigin
    isLicensed
    source
    staff {
      edges {
        node {
          name {
            full
          }
          image {
            large
          }
        }
        role
      }
    }
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
          description
          age
          gender
          dateOfBirth {
            year
            month
            day
          }
          image {
            large
          }
        }
        role
        voiceActors {
          name {
            full
          }
          language
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

async function fetchJikanData(id,type) {
  const response = await fetch(`https://api.jikan.moe/v4/${type}/${id}`);
  const data = await response.json();
  return mapJikanData(data.data);
}

async function fetchTmdbData(id, type, apiKey) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('TMDB API error (main data):', errorData);
      throw new Error(`TMDB API error: ${errorData.status_message}`);
    }
    const data = await response.json();
    let titleNative = [];
    if (type === 'movie') {
      const titleAlt_response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/alternative_titles?api_key=${apiKey}&language=en-US`);
      if (!titleAlt_response.ok) {
        const errorData_response = await titleAlt_response.json();
        console.error('TMDB API error (alternative titles):', errorData_response);
        throw new Error(`TMDB API error: ${errorData_response.status_message}`);
      }
      const alternativeTitles_data_json = await titleAlt_response.json();
      titleNative = Array.isArray(alternativeTitles_data_json.titles)
        ? alternativeTitles_data_json.titles.map(item => ({
            iso_3166_1: item.iso_3166_1,
            title: item.title
          }))
        : [];
    } else if (type === 'tv') {
      const titleAlt_response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/alternative_titles?api_key=${apiKey}&language=en-US`);
      if (!titleAlt_response.ok) {
        const errorData_response = await titleAlt_response.json();
        console.error('TMDB API error (alternative titles):', errorData_response);
        throw new Error(`TMDB API error: ${errorData_response.status_message}`);
      }
      const alternativeTitles_data_json = await titleAlt_response.json();
      titleNative = Array.isArray(alternativeTitles_data_json.results)
        ? alternativeTitles_data_json.results.map(item => ({
            iso_3166_1: item.iso_3166_1,
            title: item.title
          }))
        : [];
    }
    return mapTmdbData(data, type, titleNative);
  } catch (error) {
    console.error('Error fetching TMDB:', error);
    throw error;
  }
}


async function fetchImdbData(id, apiKey) {
  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
  const data = await response.json();
  return mapImdbData(data);
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


function mapAniListData(data) {
  
  function sortby_role(a, z) {
    const listOrder_role = ['MAIN', 'SUPPORTING', 'BACKGROUND'];
    return listOrder_role.indexOf(a.role) - listOrder_role.indexOf(z.role);
  }
 
  return {
    title: {
      romaji: data.title.romaji || 'N/A',
      english: data.title.english || 'N/A',
      japanese: data.title.native || 'N/A',
      synonyms: data.synonyms || []
    },
    idMal: data.idMal || 'N/A', 
    description: data.description || 'N/A',
    type: data.type || 'N/A',
    format: data.format || 'N/A',
    season: data.season || 'N/A',
    seasonYear: data.seasonYear || 'N/A',
    episodes: data.episodes || 'N/A',
    duration: data.duration ? `${data.duration} min. per ep.` : 'N/A',
    status: data.status || 'N/A',
    volumes: data.volumes || 'N/A',
    chapters: data.chapters || 'N/A',
    adult: data.isAdult || false,
    countryOfOrigin: data.countryOfOrigin || 'N/A',
    isLicensed: data.isLicensed || false,
    hashtag: data.hashtag || 'N/A',
    studios: data.studios.edges?.map(studio => studio.node.name) || [],
    staff: data.staff.edges?.map(staff => ({
      name: staff.node.name.full,
      image: staff.node.image.large,
      role: staff.role
    })) || [], 
    startDate: formatDate(data.startDate),
    endDate: formatDate(data.endDate),
    genres: data.genres || [],
    coverImageExtraLarge: data.coverImage.extraLarge || '',
    coverImageLarge: data.coverImage.large || '',
    coverImageMedium: data.coverImage.medium || '',
    bannerImage: data.bannerImage || '',
    characters: data.characters.edges?.map(character => ({
      name: character.node.name.full,
      image: character.node.image.large,
      role: character.role || 'Unknown', 
      description: character.node.description || 'No description available',
      age: character.node.age || 'Unknown',
      gender: character.node.gender || 'Unknown',
      dateOfBirth: character.node.dateOfBirth 
        ? `${character.node.dateOfBirth.day || '??'}/${character.node.dateOfBirth.month || '??'}/${character.node.dateOfBirth.year || '??'}` : 'Unknown',
      voiceActors: character.voiceActors
        ?.filter(va => va.language === 'JAPANESE')
        .map(va => ({
          name: va.name.full,
          language: va.language,
          image: va.image.large
        })) || []
    })).filter(character => character.role && character.description && character.gender).sort(sortby_role) || [], 
    
    externalLinks: data.externalLinks?.map(link => ({
      site: link.site,
      url: link.url
    })) || [],
    popularity: data.popularity || 'N/A',
    averageScore: data.averageScore || 'N/A',
    meanScore: data.meanScore || 'N/A',
    source: data.source || 'N/A',
    sourceID: 'AniList'
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
    
    genres: data.genres?.map(genre => genre.name) || [],
    demographic: data.demographics?.map(demo => demo.name) || [],
    duration: data.duration || 'N/A',
    rating: data.rating || 'N/A',
    coverImage: data.images?.jpg?.large_image_url || '',
    bannerImage: data.images?.jpg?.image_url || '',
    popularity: data.popularity || 'N/A',
    averageScore: data.score || 'N/A',
    source: data.source || 'N/A',
    sourceID: 'Jikan'
  };
}

// TMDB data
function mapTmdbData(data, type, titleNative) {
  return {
    title: type === 'movie' ? data.title : data.name || data.original_name,
    alternativeTitles: titleNative.length > 0 
      ? titleNative.map(title => `${title.title} (${title.iso_3166_1})`).join(', ')
      : 'N/A',
    coverImage: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
    bannerImage: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
    description: data.overview || 'No description available',
    episodes: type === 'tv' ? (data.number_of_episodes || 'N/A') : 'N/A',
    duration: type === 'movie' ? (data.runtime || 'N/A') : (data.episode_run_time ? data.episode_run_time[0] : 'N/A'),
    genres: data.genres ? data.genres.map(genre => genre.name) : [],
    studios: data.production_companies ? data.production_companies.map(studio => studio.name) : 'N/A',
    season: type === 'tv' ? `Season ${data.number_of_seasons || 'N/A'}` : 'N/A',
    releaseDate: type === 'movie' ? (data.release_date || 'N/A') : (data.first_air_date || 'N/A'),
    popularity: data.popularity || 'N/A',
    averageScore: data.vote_average ? `${data.vote_average} / 10` : 'N/A', 
    voteCount: data.vote_count || 0,
    sourceID: 'TMDB'
  };
}


//IMDB data
function mapImdbData(data) {
  return {
    title: data.Title,
    description: data.Plot,
    episodes: data.totalSeasons || 'N/A',
    duration: data.Runtime || 'N/A',
    genres: data.Genre.split(', ') || [],
    studios: [data.Production] || [],
    coverImage: data.Poster || '',
    popularity: data.imdbVotes || 'N/A',
    averageScore: data.imdbRating || 'N/A',
    sourceID: 'IMDB'
  };
}

async function fetch_dataseries(url, source, type,apiKeyTmdb, apiKeyImdb) {
  switch (source) {
    case 'anilist':
      return await fetchAniListData(url,type);
    case 'jikan':
      return await fetchJikanData(url,type);
    case 'tmdb':
      return await fetchTmdbData(url, type,apiKeyTmdb);
    case 'imdb':
      return await fetchImdbData(url,apiKeyImdb);
    default:
  console.error('sumber kosong');
  }
}

async function mainAnime(url, source, type, callback) {
  try {
    let apiKeyTmdb = configAPIKey.TMDB;
    let apiKeyImdb = configAPIKey.IMDB;
    const data = await fetch_dataseries(url, source, type, apiKeyTmdb, apiKeyImdb);   
    callback(data);
  } catch (error) {
    console.error('Error fecth:', error);
  }
}
