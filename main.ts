namespace SpriteKind {
    export const MainMenuGun = SpriteKind.create()
    export const BulletStreak = SpriteKind.create()
    export const MainMenuBullet = SpriteKind.create()
    export const MainMenuObject = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStarted) {
        if (JumpLeft > 0) {
            mySprite.vy += -175
            timer.background(function () {
                scene.cameraShake(2, 200)
            })
            JumpLeft += -1
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStarted) {
        mySprite.setImage(img`
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
            . 5 5 5 5 5 f f f f f 5 . . . . 
            . 5 f f f 5 f f f f f 5 . . . . 
            . 5 5 5 5 5 f f f f f 5 . . . . 
            . . . . 5 f f f f f f 5 . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            `)
        Direction_1l_2r = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStarted) {
        mySprite.setImage(img`
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
            `)
        Direction_1l_2r = 2
    }
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "PLAY") {
        color.startFade(color.originalPalette, color.White, 1000)
        timer.after(1000, function () {
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
            JumpLeft = 2
            mySprite.ay = 300
            scene.cameraFollowSprite(mySprite)
            controller.moveSprite(mySprite, 100, 0)
            BulletsLeft = 5
            tiles.setTilemap(tiles.createTilemap(hex`23000f00040000000000000000000000000000000000000000000000000000000000000000000301000000000000000000000000000000000000000000000000000000000000000101010000010100000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000101000000000000000000000000000000000000000100000000000000000000000000000000000000000001010100000000000000000000000000010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000010100000000000000000000000000000000000001010000010000000000000000000001010000000000000000000000000000000000000101000101010101010101010101010101010101010101010101010101010101010101010101`, img`
                ...................................
                2...............................222
                ..22..........................2....
                ...................22..............
                .....2.....................222.....
                ........222........................
                ...................................
                ...................................
                ..22...............................
                ...................................
                ....................22.............
                ............................22.....
                ............22..................22.
                .2..........22..................22.
                22222222222222222222222222222222222
                `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5], TileScale.Sixteen))
            textSprite.destroy()
            BulletsLeft = 5
            Direction_1l_2r = 1
            textSprite2 = textsprite.create("" + BulletsLeft + "|5")
            textSprite2.setIcon(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 9 6 . . . . . . 
                . . . . . . . 9 f 9 6 . . . . . 
                . . . . . . . 9 f 9 6 . . . . . 
                . . . . . . 9 f f f 9 6 . . . . 
                . . . . . . 9 f f f 9 6 . . . . 
                . . . . . . 9 f f f 9 6 . . . . 
                . . . . . . 9 f f f 9 6 . . . . 
                . . . . . . 9 f f f 9 6 . . . . 
                . . . . . . 9 f f f 9 6 . . . . 
                . . . . . . 9 f f f 9 6 . . . . 
                . . . . . . 9 9 9 9 9 6 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            textSprite2.setPosition(12, 13)
            textSprite2.setFlag(SpriteFlag.RelativeToCamera, true)
            timer.after(1500, function () {
                color.startFade(color.White, color.originalPalette, 1000)
                GameStarted = true
            })
        })
    }
})
let textSprite2: TextSprite = null
let BulletsLeft = 0
let SloMo = false
let Direction_1l_2r = 0
let mySprite: Sprite = null
let JumpLeft = 0
let Main_Menu_Gun_Bullet: Sprite = null
let textSprite: TextSprite = null
let GameStarted = false
GameStarted = false
textSprite = textsprite.create("PROJECT")
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
    Main_Menu_Gun_Bullet.fx = 18
    timer.after(1750, function () {
        Main_Menu_Gun_Bullet.destroy(effects.blizzard, 500)
        blockMenu.showMenu(["PLAY"], MenuStyle.List, MenuLocation.BottomHalf)
        blockMenu.setColors(1, 15)
    })
})
game.onUpdate(function () {
    if (GameStarted) {
        console.log(JumpLeft)
    }
})
game.onUpdate(function () {
    if (GameStarted) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            JumpLeft = 2
        }
    }
})
