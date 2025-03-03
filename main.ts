sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myOrc)
    music.smallCrash.play()
    animation.runImageAnimation(
    myAxe,
    assets.animation`hammerAnimation`,
    50,
    false
    )
    animation.runImageAnimation(
    myOrc,
    assets.animation`moleAnimation`,
    50,
    false
    )
})
let myAxe: Sprite = null
let myOrc: Sprite = null
game.showLongText("Use the arrow keys to move Gimli's axe and attack the orc!", DialogLayout.Full)
scene.setBackgroundImage(assets.image`grid`)
myOrc = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myAxe = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myAxe, simplified.Speeds.Med)
carnival.startCountdownGame(20, carnival.WinTypes.Score)
carnival.addLabelTo("Whack-the-Orc", carnival.Areas.Bottom)
music.setTempo(50)
for (let index = 0; index < 2; index++) {
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(0, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
}
music.play(music.tonePlayable(175, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(0, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(175, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(165, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(0, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(147, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(131, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(175, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(147, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(0, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
game.onUpdateInterval(50, function () {
    simplified.moveToRandomHoleOnGrid(myOrc)
})
