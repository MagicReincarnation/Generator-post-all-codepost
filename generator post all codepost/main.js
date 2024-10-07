function getConfig_punyaorang_pg() {
    return {
        blogId: localStorage.getItem('blogId_pg'),
        clientId: localStorage.getItem('clientId_pg'),
        clientSecret: localStorage.getItem('clientSecret_pg'),
        redirectUri: localStorage.getItem('redirectUri_pg'),
    };
}

const configApi_custom_input = document.getElementById('configAPI_custom');
const accessToken_pg = localStorage.getItem('accessToken_pg');
const ntf_pg = document.getElementById('ntf_pg');
const logpost_blogger_ul = document.querySelector('.logpost_blogger');
const logingoogle = document.getElementById('login_google');
const txtLogin = document.getElementById('txtLogin');
const postbutton = document.getElementById('post-button');


function runCekLocalStorage_pg() {  
    const blogId_pg = localStorage.getItem('blogId_pg');
    const clientId_pg = localStorage.getItem('clientId_pg');
    const clientSecret_pg = localStorage.getItem('clientSecret_pg');
    const redirectUri_pg = localStorage.getItem('redirectUri_pg');

    if (blogId_pg && clientId_pg && clientSecret_pg && redirectUri_pg) {
        if (configApi_custom_input) {
            configApi_custom_input.style.display = 'none';
        }
    } else {
      postbutton.style.display = 'none';
      logingoogle.style.display = 'none';
      alert('input config API belum disumbit.. silahkan isi input confignya dan sumbit');
    }
}

runCekLocalStorage_pg();


function saveConfig_punyaorang_pg() {
    const blogIdInput_pg = document.getElementById('blog-id-input').value;
    const clientIdInput_pg = document.getElementById('client-id-input').value;
    const clientSecretInput_pg = document.getElementById('client-secret-input').value;
    const redirectUriInput_pg = document.getElementById('redirect-uri-input').value;
    
  
    localStorage.setItem('blogId_pg', blogIdInput_pg);
    localStorage.setItem('clientId_pg', clientIdInput_pg);
    localStorage.setItem('clientSecret_pg', clientSecretInput_pg);
    localStorage.setItem('redirectUri_pg', redirectUriInput_pg);

    alert("settingan API kamu berhasil disimpan!");
      configApi_custom_input.style.display = 'none';
    logingoogle.style.display = 'block';
    postbutton.style.display = 'none';
}

function login_google_pg() {
    const punyaorangConfig_pg = getConfig_punyaorang_pg();
    const url_pg = `https://accounts.google.com/o/oauth2/auth?client_id=${punyaorangConfig_pg.clientId}&redirect_uri=${punyaorangConfig_pg.redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/blogger&access_type=offline`;
    window.location.href = url_pg;
}

async function codeToken_pg(code_pg) {
    const punyaorangConfig_pg = getConfig_punyaorang_pg();
    const response_pg = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            code: code_pg,
            client_id: punyaorangConfig_pg.clientId,
            client_secret: punyaorangConfig_pg.clientSecret,
            redirect_uri: punyaorangConfig_pg.redirectUri,
            grant_type: "authorization_code"
        })
    });

    const data_pg = await response_pg.json();
    const ntf_pg = document.getElementById('ntf_pg');
    
    if (response_pg.ok) {
        localStorage.setItem('accessToken_pg', data_pg.access_token);
        localStorage.setItem('refreshToken_pg', data_pg.refresh_token);

        const userInfo_pg = await get_user(data_pg.access_token);
        localStorage.setItem('authorname_pg', userInfo_pg.name); 
        
      ntf_pg.classList.add('show');
      ntf_pg.innerText = 'Login berhasil!';
      postbutton.style.display = 'block';
    } else {
        console.error("Error :", data_pg);
    }
    setTimeout(() => {
         ntf_pg.classList.remove('show');
    }, 6000);
}

async function get_user(accessToken_pg) {
    const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken_pg}`
        }
    });
    return await response.json();
}

async function refreshAccessToken_pg() {
    const punyaorangConfig_pg = getConfig_punyaorang_pg();
    const refreshToken_pg = localStorage.getItem('refreshToken_pg');

    if (!refreshToken_pg) {
        alert('sesi login tidak ditemukan, silakan login ulang.');
        return null;
    }

    try {
        const response_pg = await fetch("https://oauth2.googleapis.com/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                refresh_token: refreshToken_pg,
                client_id: punyaorangConfig_pg.clientId,
                client_secret: punyaorangConfig_pg.clientSecret,
                grant_type: "refresh_token"
            })
        });

        if (response_pg.ok) {
            const data_pg = await response_pg.json();
            localStorage.setItem('accessToken_pg', data_pg.access_token);
            return data_pg.access_token;
        } else {
            console.error("Error:", await response_pg.json());
            return null;
        }
    } catch (error_pg) {
        console.error('Error token:', error_pg);
        return null;
    }
}

async function post_blogger_pg(title_pg, labels_pg, content_pg) {
    const punyaorangConfig_pg = getConfig_punyaorang_pg();

    if (!accessToken_pg) {
        accessToken_pg = await refreshAccessToken_pg();
        if (!accessToken_pg) {
            login_google_pg();
            return;
        }
    }

    if (punyaorangConfig_pg.blogId && accessToken_pg) {
        ntf_pg.classList.add('show');
        ntf_pg.innerText = 'Sedang mempublikasikan...';

        const post_pg = {
            kind: "blogger#post",
            blog: {
                id: punyaorangConfig_pg.blogId
            },
            title: title_pg,
            labels: labels_pg.split(',').map(label_pg => label_pg.trim()),
            content: content_pg
        };

        try {
            const response_pg = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${punyaorangConfig_pg.blogId}/posts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken_pg}`
                },
                body: JSON.stringify(post_pg)
            });

            if (response_pg.ok) {
                const responseData_pg = await response_pg.json();
                ntf_pg.innerText = 'Berhasil dipublikasikan ke Blogger!';
                resetTextarea();

                const postId_pg = responseData_pg.id;
                const postUrl_pg = responseData_pg.url;
                const authorName_pg = responseData_pg.author.displayName;

                const listItem_pg = document.createElement('li');
                listItem_pg.innerHTML = `
                    <strong>Post ID:</strong> ${postId_pg}<br>
                    <strong>Post URL:</strong> <a href="${postUrl_pg}" target="_blank">${postUrl_pg}</a><br>
                    <strong>Author:</strong> ${authorName_pg}
                `;
                logpost_blogger_ul.appendChild(listItem_pg);

            } else {
                const errorData_pg = await response_pg.json();
                ntf_pg.innerText = `Gagal mempublikasikan post: ${response_pg.statusText} - ${errorData_pg.error.message}`;
            }
        } catch (error_pg) {
            ntf_pg.innerText = 'error: ' + error_pg.message;
        }
    } else {
         ntf_pg.classList.add('show');
        ntf_pg.innerText = 'IdBlog dan API belum dipasang';
    }

    setTimeout(() => {
         ntf_pg.classList.remove('show');
    }, 6000);
}

document.addEventListener("DOMContentLoaded", (event) => {
if (accessToken_pg) {
      postbutton.style.display = 'block';
      txtLogin.innerHTML = "Telah Login🛡️";
    }else {
      postbutton.style.display = 'none';
   }
});


const urlParams_pg = new URLSearchParams(window.location.search);
const authCode_pg = urlParams_pg.get('code');
if (authCode_pg) {
    codeToken_pg(authCode_pg);
}

document.getElementById('post-button').addEventListener('click', () => {
    const title_pg = document.getElementById('blogger-title').value;
    const labels_pg = document.getElementById('blogger-labels').value;
    const content_pg = textarea_ouputGetpost.getValue();
    post_blogger_pg(title_pg, labels_pg, content_pg);
});

document.getElementById('save-config-button').addEventListener('click', saveConfig_punyaorang_pg);

document.getElementById('login_google').addEventListener('click', login_google_pg);

function resetTextarea(){
    document.getElementById('blogger-title').value = "";
    document.getElementById('blogger-labels').value = "";
    document.getElementById('blogger-content').value = "";
}
