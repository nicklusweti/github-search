const searchGithub = async () => {
  const username = document.getElementById("search-input").value;
  const res = await fetch(`https://api.github.com/users/${username}`);
  const detailsBox = document.querySelector(".details-box");
  const data = await res.json();

  if (res.ok) {
    detailsBox.style.display = "flex";
    document.getElementById("result").innerHTML = `
    <div class="profile">
                <div class="profile-image">
                    <img src="${data.avatar_url}" />
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name || data.login}</h2>
                    <p class="username">@${data.login}</p>
                    <p class="bio">${
                      data.bio || "Account doesn't have a bio."
                    }</p>

                    <div class="stats">
                        <div>
                            <div class="stats-name">Public Repos</div>
                            <div class="stats-value">${data.public_repos}</div>
                        </div>
                        <div>
                            <div class="stats-name">Followers</div>
                            <div class="stats-value">${data.followers}</div>
                        </div>
                        <div>
                            <div class="stats-name">Following</div>
                            <div class="stats-value">${data.following}</div>
                        </div>
                    </div>

                <div class="media">
                    <p>
                        <span class="media-value">${
                          data.location || "Location not Available"
                        }</span>
                    </p>
                    <p>
                        <span class="media-value">${
                          data.blog || "Blog not Available"
                        }</span>
                    </p>
                    <p>
                        <span class="media-value">${
                          data.twitter_username || "Twitter not Available"
                        }</span>
                    </p>
                    <p>
                        <span class="media-value">${
                          data.company || "Company not Available"
                        }</span>
                    </p>
                </div>
            </div>
        </div>
    `;
  } else {
    alert(data.message);
  }
};
