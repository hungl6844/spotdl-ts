import Bun from 'bun';

let res = await (await fetch('https://iv.ggtyler.dev/api/v1/search?q=lil yachty - poland&sort_by=relevance')).json();
for (let song of res) {
    if (83-3 <= song['lengthSeconds'] && song['lengthSeconds'] <= 83+3 && !song['title'].includes('Instrumental')) {
        let video = await (await fetch('https://co.wuk.sh/api/json', {
            method: 'POST',
            body: JSON.stringify({
                url: 'https://youtu.be/' + song['videoId'],
                isAudioOnly: true
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }));
        let video_json = await video.json();
        
        console.log(video_json);

        if (video_json['status'] == 'stream') {
            let file = Bun.file('lil_yachty_poland.mp3');
                console.log('Downloading ' + song['title']);
                let stream = await fetch(video_json['url']);
                let buffer = await stream.arrayBuffer();
                Bun.write(file, buffer);
        }
    }
}
