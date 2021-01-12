namespace SpriteKind {
    export const MainMenuGun = SpriteKind.create()
    export const BulletStreak = SpriteKind.create()
    export const MainMenuBullet = SpriteKind.create()
    export const MainMenuObject = SpriteKind.create()
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "PLAY") {
        color.startFade(color.originalPalette, color.White, 1000)
        tiles.destroySpritesOfKind(SpriteKind.MainMenuObject)
        SloMo = false
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 f f f f f f 5 . . . . 
            . . . . 5 f f f f f f 5 . . . . 
            . . . . 5 f f f f f 5 5 5 5 5 . 
            . . . . 5 f f f f f 5 f f f 5 . 
            . . . . 5 f f f f f 5 5 5 5 5 . 
            . . . . 5 f f f f f f 5 . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            `, SpriteKind.Player)
        mySprite.ay = 300
        scene.cameraFollowSprite(mySprite)
        controller.moveSprite(mySprite)
        tiles.setTilemap(tiles.createTilemap(hex`23000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000001010000010000000000000000010000010000000000000000010100000000000000000101000101010101010101010101010101010101010101010101010101010101010101010101`, img`
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            ...................................
            .............2.....................
            .............2..................22.
            .2........2..2........22........22.
            22222222222222222222222222222222222
            `, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen))
        timer.after(1500, function () {
            color.startFade(color.White, color.originalPalette, 1000)
        })
    }
})
let mySprite: Sprite = null
let SloMo = false
let Main_Menu_Gun_Bullet: Sprite = null
let textSprite = textsprite.create("PROJECT")
textSprite.setMaxFontHeight(12)
textSprite.setPosition(77, 20)
let Main_Menu_Gun = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 f f f f f f f f 1 1 . . . 
    . 1 1 f f f f f f f f 1 1 . . . 
    . 1 1 f f 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MainMenuObject)
Main_Menu_Gun.setPosition(25, 19)
timer.after(500, function () {
    Main_Menu_Gun_Bullet = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 1 1 1 
        . . . . . . . . . . . 1 1 1 1 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Main_Menu_Gun, 80, 0)
    Main_Menu_Gun_Bullet.setKind(SpriteKind.MainMenuObject)
    Main_Menu_Gun_Bullet.fx = 15
    timer.after(2500, function () {
        blockMenu.showMenu(["PLAY"], MenuStyle.List, MenuLocation.BottomHalf)
        blockMenu.setColors(1, 15)
    })
})
