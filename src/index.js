import 'phaser';

var configWebGl = {
    type: Phaser.WEBGL,
    parent: 'webgl',
    width: 200,
    height: 90,
    scene: {
        preload: preload,
        create: create
    }
};

var configCanvas = {
    type: Phaser.CANVAS,
    parent: 'canvas',
    width: 200,
    height: 90,
    scene: {
        preload: preload,
        create: create
    }
};

var gameWebGl = new Phaser.Game(configWebGl);
var gameCanvas = new Phaser.Game(configCanvas);

function preload ()
{
    this.load.image('tiles', 'assets/tileset.png');
}

function create ()
{
    var level = [
      [ null, null, null, null ],
      [ null, null, null, null ],
      [ null, null, null, null ],
      [ null, null, 0,    null ],
      [ null, null, null, null ],
    ]

    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('tiles', null, 40, 40);
    var layer = map.createStaticLayer(0, tiles, 0, 0);
    
    var image = this.add.image(150, 44, 'tiles');
}
