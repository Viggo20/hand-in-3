namespace SpriteKind {
    export const passive = SpriteKind.create()
}
function changeText () {
    if (counter == 0) {
        text = "Der bliver smidt 10 ton plastik ud i havet om året!"
    } else if (counter == 1) {
        text = "Det ødelægger ikke bare havet, men dræber også fisk!"
    } else if (counter == 2) {
        text = "Find endnu en fact"
    } else {
        text = "Find endnu en fact"
    }
}
function tileMap () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`plastic`, function (sprite, location) {
    changeText()
    tiles.setTileAt(location, assets.tile`myTile10`)
    counter += 1
    game.showLongText(text, DialogLayout.Bottom)
    info.changeScoreBy(100)
})
function player2 () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    mySprite.setPosition(200, 200)
}
function spawnFish () {
    fish1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c c . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c b b b b 1 b b c c . . 
        . . . . c 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 b b c c 
        . . c c d 1 1 1 b 1 b 1 5 5 5 c 
        . . c c d 1 c 1 1 1 b 1 b b 5 c 
        . c c d d 1 1 1 1 1 b 1 f b 5 c 
        f d d d 1 1 1 1 1 b b b f . c c 
        f f f f f 1 1 1 b b 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `, SpriteKind.passive)
    fish2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.passive)
    fish3 = sprites.create(img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `, SpriteKind.passive)
    tiles.placeOnTile(fish1, tiles.getTileLocation(randint(0, 75), randint(0, 75)))
    tiles.placeOnTile(fish2, tiles.getTileLocation(randint(0, 75), randint(0, 75)))
    tiles.placeOnTile(fish3, tiles.getTileLocation(randint(0, 75), randint(0, 75)))
    fish1.setVelocity(randint(-100, 100), randint(-100, 100))
    fish2.setVelocity(randint(-100, 100), randint(-100, 100))
    fish3.setVelocity(randint(-100, 100), randint(-100, 100))
    fish1.setBounceOnWall(true)
    fish1.setBounceOnWall(true)
    fish2.setBounceOnWall(true)
    fish3.setBounceOnWall(true)
    animation.runImageAnimation(
    fish1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b b b c . . . . 
        . . . c 1 1 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b 1 1 1 1 c . . . 
        c c b b 1 1 1 b 1 1 1 1 c . . . 
        c 5 5 5 1 b 1 b 1 1 1 d c c . . 
        c 5 b b 1 b 1 1 1 c 1 d c c . . 
        c 5 b f 1 b 1 1 1 1 1 d d c c . 
        c c . f b b b 1 1 1 1 1 d d d f 
        . . f 5 5 5 b b 1 1 1 f f f f f 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c . . . . . . . . 
        . . c 5 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b b 1 1 1 b 1 1 1 d c . . . 
        c 5 5 5 1 b 1 b 1 c 1 d c c . . 
        c 5 b b 1 b 1 1 1 1 1 d d c c . 
        c c . f 1 b b 1 1 1 1 1 d d d f 
        . . . f b b b 1 1 1 1 1 1 f f f 
        . . f 5 5 b b b 1 1 1 f f . . . 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        `,img`
        . . c c c c c . . . . . . . . . 
        . c c 5 5 5 5 c c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c c . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b c 1 1 1 b 1 1 1 d c . . . 
        c 5 b b 1 1 1 b 1 c 1 d c c . . 
        c 5 5 5 1 b 1 b 1 1 1 d d c c c 
        c c b b 1 b 1 1 1 1 1 1 d d d f 
        . . . f 1 b b 1 1 1 1 1 1 f f . 
        . . . f b b b 1 1 1 1 1 f . . . 
        . . . f 5 5 b b 1 1 f f . . . . 
        . . . f 5 5 5 5 5 f . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . c c c c c . . . . . . . . 
        . . c 5 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b b 1 1 1 b 1 1 1 d c . . . 
        c 5 5 5 1 b 1 b 1 c 1 d c c . . 
        c 5 b b 1 b 1 1 1 1 1 d d c c . 
        c c . f 1 b b 1 1 1 1 1 d d d f 
        . . . f b b b 1 1 1 1 1 1 f f f 
        . . f 5 5 b b b 1 1 1 f f . . . 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    fish2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        . . . c c d 4 4 4 4 c c . . . . 
        c c . c 1 4 4 4 4 4 d 4 c . . . 
        c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
        c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
        f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
        f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
        f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
        f f f f d 4 f 4 c 1 4 4 4 4 f . 
        . . c f c 4 f f 4 4 d 4 f f . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c . . . . . . . 
        . . . c d d d d d c . . . . . . 
        . . . c d c c c c c . . . . . . 
        . . . c c d 4 4 4 4 c . . . . . 
        . . . c 1 4 4 4 4 4 d c . . . . 
        . . c 1 4 4 4 4 4 1 4 4 c . . . 
        c c c 1 4 4 4 4 1 4 4 4 4 c . . 
        c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
        f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
        f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
        f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
        f f c b c 4 4 4 4 1 4 4 4 4 f . 
        . . c d d c 4 4 4 4 d f f f . . 
        . . . c c c f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . c c c c . . . . . . . . 
        . . . c d d d d c c . . . . . . 
        . . . c d c c c c c c . . . . . 
        c c . c c d 4 4 4 4 c c . . . . 
        c 4 c c 1 4 4 4 4 4 d 4 c . . . 
        f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
        f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
        f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
        f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
        f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
        . . f f d 4 4 c c 1 4 4 4 4 f . 
        . . . f c 4 4 4 4 4 d 4 f f . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c . . . . . . . . . 
        . . c d d d d c c . . . . . . . 
        . . c d d c c c c c c . . . . . 
        c c c c c d 4 4 4 4 c c c . . . 
        f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
        f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
        f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
        f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
        f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
        . . f d 4 4 f 4 4 1 4 4 4 4 f . 
        . . . f d 4 4 c c 4 1 4 4 f . . 
        . . . f c 4 4 4 4 4 4 d f . . . 
        . . c b d c 4 4 4 4 f f . . . . 
        . . c d d d f f f f . . . . . . 
        . . . c c c . . . . . . . . . . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    fish3,
    [img`
        ..............fffcc.............
        ..............fcbddcc...........
        ...............fbbddcc..........
        ...............fcbbccf..........
        ..ccc.........ffccccccfffff.....
        ..cbbcc....fffcbbbbcbbbbbbbff...
        ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
        ...fbbdcfcccccbbbcbcbbffbbbbbbff
        ....fbbffcccccbbbbbcb1ff11bbbcbf
        ....fcbbcccccccbbbbb11111111bbbf
        ....fcccccccccccbbbb11cc33111bf.
        ...fcbbffbdbcccccbbb111c13cccf..
        ...fbbf..ccddddcfbbbc111c31cf...
        ..fbbf.....ccdccbbdbf111cccf....
        ..fff........ccbbdcfcccc........
        ..............fffff.............
        `,img`
        ..............fffcc.............
        ..............fbbddc............
        ...............fbbddc...........
        ccc............fcbbccf..........
        cbbcc.........ffccccccffffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `,img`
        ..............fffc..............
        ..............fbddcc............
        ..ccc.........ffbddbc...........
        ..cbbc.........fcbbccf..........
        ...cbdc.......ffccccccfffffff...
        ...fbdc....fffcbbbbbbbbbbbbbcff.
        ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
        ....fcdffcccccbbbcbcbbbffbbbbcbf
        ....fcbbccccccbbbcbcbbbff1111bbf
        ...fcbbccccccccbbbcbb11111111bf.
        ...fbbfffcccccccbbbb11bc33cccf..
        ..fbbf..cbdbcccccbbb111c131cf...
        ..fff....cbdddddccbbc111c33f....
        ..........ccbddccbbdf1111ff.....
        ............ccfbbbdfccccc.......
        ..............fffff.............
        `,img`
        ..............fffcc.............
        ..............fbbddc............
        ...............fbbddc...........
        ccc............fcbbccf..........
        cbbcc.........ffccccccffffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `],
    500,
    true
    )
    fishCounter += 1
}
let fish3: Sprite = null
let fish2: Sprite = null
let fish1: Sprite = null
let mySprite: Sprite = null
let text = ""
let counter = 0
let fishCounter = 0
tileMap()
player2()
while (fishCounter <= 5) {
    spawnFish()
}
