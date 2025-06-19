export default function handler(req, res) {
  const gifs = [
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/404.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/atl.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/bar.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/bart.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/blackcat.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/cry.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/dvd.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/error.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/laptop.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/london.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/lucy.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/sailormoon.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/sea.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/stan.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/windows.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/windy.gif"
  ];

  const randomIndex = Math.floor(Math.random() * gifs.length);
  const randomGif = gifs[randomIndex];

  res.writeHead(302, { Location: randomGif });
  res.end();
}
