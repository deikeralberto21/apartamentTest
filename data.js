var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.7314723660728433,
        "pitch": 0.052090728467035774,
        "fov": 1.3004965440597092
      },
      "linkHotspots": [
        {
          "yaw": -1.6003541160982806,
          "pitch": 0.0448227873857725,
          "rotation": 0,
          "target": "1-den"
        },
        {
          "yaw": -0.7276514593916428,
          "pitch": 0.06231724473286704,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 0.17611218567150821,
          "pitch": 0.04833303273268008,
          "rotation": 0,
          "target": "3-kitchen-bar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.521899622175386,
          "pitch": 0.3563023321023504,
          "title": "GUEST PASSES<br>",
          "text": "Use these to go to the pool.<br>"
        }
      ]
    },
    {
      "id": "1-den",
      "name": "DEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.742714793064822,
          "pitch": 0.09620635612633244,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.129610160456954,
          "pitch": 0.12408694344165383,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 1.8563394198157548,
          "pitch": 0.01990057952987101,
          "rotation": 0,
          "target": "3-kitchen-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-bar",
      "name": "KITCHEN BAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9847244325175,
          "pitch": -0.03144455342591712,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 1.0032174614246223,
          "pitch": 0.03608097324301873,
          "rotation": 0,
          "target": "4-hall-way"
        },
        {
          "yaw": -0.3256078010119392,
          "pitch": 0.04452168342798046,
          "rotation": 0,
          "target": "7-double-bed-room"
        },
        {
          "yaw": -1.2716125349168692,
          "pitch": 0.042450192115571994,
          "rotation": 0,
          "target": "8-living-room"
        },
        {
          "yaw": -2.9212687685502488,
          "pitch": 0.042962687353998774,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall-way",
      "name": "HALL WAY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9561944257179107,
          "pitch": 0.03931953957200385,
          "rotation": 0,
          "target": "6-bathroom"
        },
        {
          "yaw": -0.9442297537982149,
          "pitch": 0.0366119535320415,
          "rotation": 0,
          "target": "5-king-room"
        },
        {
          "yaw": 3.072991736759132,
          "pitch": -0.011954792149964533,
          "rotation": 0,
          "target": "3-kitchen-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-king-room",
      "name": "KING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom",
      "name": "BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.753631039797348,
          "pitch": 0.024629839634496165,
          "rotation": 0,
          "target": "4-hall-way"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-double-bed-room",
      "name": "DOUBLE BED ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0863026266689806,
          "pitch": 0.08072589025071863,
          "rotation": 0,
          "target": "3-kitchen-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.803451294789518,
          "pitch": 0.0846141410326311,
          "rotation": 0,
          "target": "3-kitchen-bar"
        },
        {
          "yaw": -2.515367882821849,
          "pitch": 0.08255470573570634,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5852501341628233,
          "pitch": 0.050176726495291035,
          "rotation": 0,
          "target": "8-living-room"
        },
        {
          "yaw": 2.115254614387328,
          "pitch": -0.012588540129947035,
          "rotation": 0,
          "target": "10-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-master-bathroom",
      "name": "MASTER BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4983015306818217,
          "pitch": 0.03610276395683698,
          "rotation": 0,
          "target": "9-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
