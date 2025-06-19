export default function handler(req, res) {
  const gifs = [
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/atl.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/bart.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/sea.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/windows.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/sailormoon.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/error.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/laptop.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/bar.gif",
    "https://raw.githubusercontent.com/xqyet/xqyet/main/media/blackcat.gif"
    
    
  ];

  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  res.redirect(randomGif);
}
