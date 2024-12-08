music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
forever(function () {
    music.play(music.createSong(assets.song`mySong loop`), music.PlaybackMode.InBackground)
    pause(2450)
})
