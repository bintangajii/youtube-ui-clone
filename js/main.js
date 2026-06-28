// -- DOM Elements -------------------------
const container = document.getElementById('video-container');

// -- Video Data Array -------------------------
const dataVideos = [
  {
    creator: 'SuperSimpleDev',
    username: '@SuperSimpleDev',
    subscribers: '805K',
    videoCount: '38',
    title: 'HTML & CSS Full Course - Beginner to Pro',
    duration: '6:31:16',
    views: '19M',
    timeAgo: '4 years ago',
    avatar: 'assets/images/profile/v01-super.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-01.jpg',
    videoUrl:
      'https://www.youtube.com/watch?v=G3e-cpL7ofc&list=PLEPye7A7EcQZrT3VSBb7jtxnxIfY3yyG6',
    channelUrl: 'https://www.youtube.com/@SuperSimpleDev',
  },
  {
    creator: 'Sarah Li',
    username: '@sarahliyt',
    subscribers: '93.4K',
    videoCount: '95',
    title: 'A Day in the Life of an Amazon Software Engineer',
    duration: '20:30',
    views: '436K',
    timeAgo: '2 months ago',
    avatar: 'assets/images/profile/v02-sarah.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-02.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=wc834eYNlfQ&t=1s',
    channelUrl: 'https://www.youtube.com/@sarahliyt',
  },
  {
    creator: 'Apple Developer',
    username: '@AppleDeveloper',
    subscribers: '305K',
    videoCount: '1k',
    title: 'WWDC26: Principles of great design | Apple',
    duration: '17:17',
    views: '38K',
    timeAgo: '7 days ago',
    avatar: 'assets/images/profile/v03-apple-dev.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-03.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Xa9L2yx_QH8',
    channelUrl: 'https://www.youtube.com/@AppleDeveloper',
  },
  {
    creator: 'Senator Bernie Sanders',
    username: '@SenatorSanders',
    subscribers: '1.31M',
    videoCount: '2.7K',
    title: 'Bernie vs. Claude',
    duration: '9:18',
    views: '4.6M',
    timeAgo: '2 months ago',
    avatar: 'assets/images/profile/v04-bernie.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-04.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=h3AtWdeu_G0',
    channelUrl: 'https://www.youtube.com/@SenatorSanders',
  },
  {
    creator: 'Cecilia Kim',
    username: '@ceciliakimdesign',
    subscribers: '10.6K',
    videoCount: '27',
    title: 'every tool I use as a designer in 2026',
    duration: '15:53',
    views: '7.3K',
    timeAgo: '2 weeks ago',
    avatar: 'assets/images/profile/v05-cecilia.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-05.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=0m8L5yVc-I4',
    channelUrl: 'https://www.youtube.com/@ceciliakimdesign',
  },
  {
    creator: 'Sajid',
    username: '@whosajid',
    subscribers: '143K',
    videoCount: '21',
    title: 'The 80% of UI Design - Typography',
    duration: '12:24',
    views: '342K',
    timeAgo: '1 year ago',
    avatar: 'assets/images/profile/v06-sajid.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-06.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9-oefwZ6Z74',
    channelUrl: 'https://www.youtube.com/@whosajid',
  },
  {
    creator: 'essential;',
    username: '@essentialme',
    subscribers: '1.52M',
    videoCount: '547',
    title: 'happy morning pop songs ☁️ soft & fresh pop',
    duration: '42:34',
    views: '1.1M',
    timeAgo: '3 years ago',
    avatar: 'assets/images/profile/v07-essential.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-07.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Q4cGsnIl0sQ',
    channelUrl: 'https://www.youtube.com/@essentialme',
  },
  {
    creator: 'Marques Brownlee',
    username: '@mkbhd',
    subscribers: '21M',
    videoCount: '1.8K',
    title: "WWDC 2026 Impressions: Yeah, That's About Right",
    duration: '16:28',
    views: '3.8M',
    timeAgo: '6 days ago',
    avatar: 'assets/images/profile/v08-mkbhd.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-08.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=_gCXmKjDecU',
    channelUrl: 'https://www.youtube.com/@mkbhd',
  },
  {
    creator: 'Disco Lines',
    username: '@discolines',
    subscribers: '78.7K',
    videoCount: '366',
    title: 'Disco Lines Live @ Savaya Bali 2026',
    duration: '2:25:50',
    views: '41K',
    timeAgo: '12 days ago',
    avatar: 'assets/images/profile/v09-disco.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-09.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=UFBWeo6l8Xw&t=7373s',
    channelUrl: 'https://www.youtube.com/@discolines',
  },
  {
    creator: 'SuperSimpleDev',
    username: '@SuperSimpleDev',
    subscribers: '805K',
    videoCount: '38',
    title: 'How to put an HTML website online (on the Internet)',
    duration: '29:37',
    views: '2.6M',
    timeAgo: '4 years ago',
    avatar: 'assets/images/profile/v01-super.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-10.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=p1QU3kLFPdg',
    channelUrl: 'https://www.youtube.com/@SuperSimpleDev',
  },
  {
    creator: 'Satori Graphics',
    username: '@SatoriGraphics',
    subscribers: '1.58M',
    videoCount: '1.2K',
    title: 'The FULL 2026 Guide To Layout & Composition For Designers!',
    duration: '30:56',
    views: '66K',
    timeAgo: '1 month ago',
    avatar: 'assets/images/profile/v11-satori.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-11.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=PKfZ1gnVJ44',
    channelUrl: 'https://www.youtube.com/@SatoriGraphics',
  },
  {
    creator: 'Google Antigravity',
    username: '@googleantigravity',
    subscribers: '138K',
    videoCount: '44',
    title: 'Learn the basics of Google Antigravity',
    duration: '13:54',
    views: '1.6M',
    timeAgo: '6 months ago',
    avatar: 'assets/images/profile/v12-gravity.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-12.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=nTOVIGsqCuY',
    channelUrl: 'https://www.youtube.com/@googleantigravity',
  },
  {
    creator: 'SuperSimpleDev',
    username: '@SuperSimpleDev',
    subscribers: '805K',
    videoCount: '38',
    title: 'JavaScript Tutorial Full Course - Beginner to Pro',
    duration: '22:15:57',
    views: '8.8M',
    timeAgo: '2 years ago',
    avatar: 'assets/images/profile/v01-super.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-13.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=EerdGm-ehJQ&t=39755s',
    channelUrl: 'https://www.youtube.com/@SuperSimpleDev',
  },
  {
    creator: 'JavaScript Mastery',
    username: '@javascriptmastery',
    subscribers: '1.25M',
    videoCount: '216',
    title: "I Built a SaaS App Landing Page in 3 Hours Here's What I Learned",
    duration: '2:49:04',
    views: '243K',
    timeAgo: '1 year ago',
    avatar: 'assets/images/profile/v14-js-mastery.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-14.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ukiGFmZ32YA',
    channelUrl: 'https://www.youtube.com/@javascriptmastery',
  },
  {
    creator: 'Apple',
    username: '@Apple',
    subscribers: '20.7M',
    videoCount: '177',
    title: 'Introducing Liquid Glass | Apple',
    duration: '4:34',
    views: '4.1M',
    timeAgo: '1 year ago',
    avatar: 'assets/images/profile/v15-apple.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-15.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=jGztGfRujSE',
    channelUrl: 'https://www.youtube.com/@Apple',
  },
  {
    creator: 'ochaxt',
    username: '@ochaxt',
    subscribers: '209K',
    videoCount: '593',
    title: 'Jangan Beli iMac M4 Sebelum Nonton Ini!',
    duration: '10:38',
    views: '16K',
    timeAgo: '1 month ago',
    avatar: 'assets/images/profile/v16-ocha.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-16.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=2Cn14DXrtFI',
    channelUrl: 'https://www.youtube.com/@ochaxt',
  },
  {
    creator: 'Raditya Dika',
    username: '@radityadika',
    subscribers: '11.7M',
    videoCount: '3.3K',
    title: 'Pertemuan Bersejarah dr. Tirta dan dr. Gia',
    duration: '1:08:47',
    views: '15M',
    timeAgo: '2 months ago',
    avatar: 'assets/images/profile/v17-raditya.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-17.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dSq0Z5XpoLc',
    channelUrl: 'https://www.youtube.com/@radityadika',
  },
  {
    creator: 'Tina Huang',
    username: '@TinaHuang1',
    subscribers: '1.24M',
    videoCount: '352',
    title: 'How To Learn To Code In 2026',
    duration: '15:39',
    views: '645K',
    timeAgo: '3 months ago',
    avatar: 'assets/images/profile/v18-tina.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-18.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=oshQg1uSRvg',
    channelUrl: 'https://www.youtube.com/@TinaHuang1',
  },
  {
    creator: 'Jeff Su',
    username: '@JeffSu',
    subscribers: '1.78M',
    videoCount: '308',
    title: "How I'd Learn AI From Scratch in 2026 (skip the useless 80%)",
    duration: '13:17',
    views: '132K',
    timeAgo: '9 days ago',
    avatar: 'assets/images/profile/v19-jeff.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-19.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=msFxQ7OYPj8',
    channelUrl: 'https://www.youtube.com/@JeffSu',
  },
  {
    creator: 'Agusleo Halim',
    username: '@AgusleoHalim',
    subscribers: '1.02M',
    videoCount: '1K',
    title: 'Lewatin 99% orang dengan 6 Fitur Claude AI ini',
    duration: '15:43',
    views: '71K',
    timeAgo: '4 weeks ago',
    avatar: 'assets/images/profile/v20-agusleo.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-20.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=cCIltbeA_nQ',
    channelUrl: 'https://www.youtube.com/@AgusleoHalim',
  },
  {
    creator: 'Google Cloud Tech',
    username: '@googlecloudtech',
    subscribers: '1.38M',
    videoCount: '2.1K',
    title: 'AI agents explained: Build your first agent in 8 minutes',
    duration: '8:29',
    views: '143K',
    timeAgo: '8 days ago',
    avatar: 'assets/images/profile/v21-gcloud.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-21.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Zqno_vux6d8',
    channelUrl: 'https://www.youtube.com/@googlecloudtech',
  },
  {
    creator: 'Oliur Online',
    username: '@OliurOnline',
    subscribers: '172K',
    videoCount: '145',
    title: 'The Claude SUPERPOWER most people don’t know.',
    duration: '12:57',
    views: '13K',
    timeAgo: '1 month ago',
    avatar: 'assets/images/profile/v22-oliur.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-22.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=cWp1R11CZc0',
    channelUrl: 'https://www.youtube.com/@OliurOnline',
  },
  {
    creator: 'Griffin Wooldridge',
    username: '@griffinwdesigns',
    subscribers: '23.3K',
    videoCount: '240',
    title: 'How to Use Codex as a Designer',
    duration: '16:44',
    views: '30K',
    timeAgo: '10 days ago',
    avatar: 'assets/images/profile/v23-griffin.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-23.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=GOtHFZnagO0',
    channelUrl: 'https://www.youtube.com/@griffinwdesigns',
  },
  {
    creator: 'Framer',
    username: '@Framer',
    subscribers: '357K',
    videoCount: '348',
    title: 'Framer Event — Introducing Agents, Branching, and a new Community',
    duration: '40:01',
    views: '26K',
    timeAgo: '2 days ago',
    avatar: 'assets/images/profile/v24-framer.jpg',
    thumbnail: 'assets/images/thumbnail/thumb-24.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=j4WW4bwWhPk',
    channelUrl: 'https://www.youtube.com/@Framer',
  },
];

// -- Render Video List -------------------------
dataVideos.forEach((video) => {
  container.innerHTML += `
        <div
          class="video-preview"
          onclick="
            window.location.href = '${video.videoUrl}'
          "
        >
          <div class="thumbnail-row">
            <img
              class="thumbnail"
              src="${video.thumbnail}"
            />
            <div class="time-video">${video.duration}</div>
          </div>

          <div class="video-info-grid">
            <div class="channel-picture" onclick="event.stopPropagation()">
              <a href="${video.channelUrl}" class="channel-link">
                <img
                  class="profile-picture"
                  src="${video.avatar}"
                />
              </a>
              <!-- Card Profile Hover -->
              <div class="card-profile">
                <div class="profile-wrapper">
                  <a href="${video.channelUrl}">
                    <img
                      class="profile-img"
                      src="${video.avatar}"
                    />
                  </a>
                  <div class="text-profile">
                    <p class="profile-title">${video.creator}</p>
                    <p class="profile-stats">
                      <span class="text-highlight">${video.username}</span> <br/> ${video.subscribers}
                      subscribers • ${video.videoCount} videos
                    </p>
                  </div>
                </div>
                <div class="profile-buttons-wrapper">
                  <a
                    href="${video.channelUrl}?sub_confirmation=1"
                    class="btn-view-channel-wrapper"
                    onclick="event.stopPropagation()"
                  >
                    <button class="btn-subscribe">Subscribe</button>
                  </a>

                  <a
                    href="${video.channelUrl}"
                    class="btn-view-channel-wrapper"
                    onclick="event.stopPropagation()"
                  >
                    <button class="btn-view-channel">View Channel</button>
                  </a>
                </div>
              </div>
            </div>

            <div class="video-info">
              <div class="title-info">
                <p class="video-title">
                  <a href="${video.videoUrl}"
                    >${video.title}</a
                  >
                </p>
                <button
                  class="btn-info"
                  data-tooltip="More actions"
                  onclick="event.stopPropagation()"
                >
                  <img src="assets/icons/info.svg" alt="info" class="icon" />
                </button>
              </div>
              <p class="video-author">
                <a
                  href="${video.channelUrl}"
                  class="channel-link"
                  onclick="event.stopPropagation()"
                  >${video.creator}</a
                >
              </p>
              <p class="video-stats">${video.views} views • ${video.timeAgo}</p>
            </div>
          </div>
        </div>
        `;
});
