import React, { useEffect, useState, useRef, useCallback } from 'react'

const InitialData = {
  elements: [
    {
      type: 'rectangle',
      version: 141,
      versionNonce: 361174001,
      isDeleted: false,
      id: 'oDVXy8D6rom3H1-LLH2-f',
      fillStyle: 'hachure',
      strokeWidth: 1,
      strokeStyle: 'solid',
      roughness: 1,
      opacity: 100,
      angle: 0,
      x: 100.50390625,
      y: 93.67578125,
      strokeColor: '#000000',
      backgroundColor: 'transparent',
      width: 186.47265625,
      height: 141.9765625,
      seed: 1968410350,
      groupIds: [],
    },
    {
      id: '-xMIs_0jIFqvpx-R9UnaG',
      type: 'ellipse',
      x: 300.5703125,
      y: 190.69140625,
      width: 198.21875,
      height: 129.51171875,
      angle: 0,
      strokeColor: '#000000',
      backgroundColor: 'transparent',
      fillStyle: 'hachure',
      strokeWidth: 1,
      strokeStyle: 'solid',
      roughness: 1,
      opacity: 100,
      groupIds: [],
      seed: 957947807,
      version: 47,
      versionNonce: 1128618623,
      isDeleted: false,
    },
    {
      fileId: 'rocket',
      type: 'image',
      x: 606.1042326312408,
      y: 153.57729779411773,
      width: 231.30325348751828,
      height: 231.64340533088227,
      angle: 0,
      strokeColor: 'transparent',
      backgroundColor: 'transparent',
      fillStyle: 'hachure',
      strokeWidth: 1,
      strokeStyle: 'solid',
      roughness: 1,
      opacity: 100,
      groupIds: [],
      strokeSharpness: 'round',
      seed: 707269846,
      version: 143,
      versionNonce: 2028982666,
      isDeleted: false,
      boundElements: null,
      updated: 1644914782403,
      link: null,
      status: 'pending',
      scale: [1, 1],
    },
  ],
  appState: { viewBackgroundColor: '#AFEEEE', currentItemFontFamily: 1 },
  scrollToContent: true,
  libraryItems: [
    [
      {
        type: 'line',
        version: 1699,
        versionNonce: 1813275999,
        isDeleted: false,
        id: '1OMHrnYMU3LJ3w3IaXU_R',
        fillStyle: 'hachure',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: 209.72304760646858,
        y: 338.83587294718825,
        strokeColor: '#881fa3',
        backgroundColor: '#be4bdb',
        width: 116.42036295658873,
        height: 103.65107323746608,
        seed: 1445523839,
        groupIds: [],
        strokeSharpness: 'sharp',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [-92.28090097254909, 7.105427357601002e-15],
          [-154.72281841151394, 19.199290805487394],
          [-155.45758928571422, 79.43840749607878],
          [-99.89923520113778, 103.6510732374661],
          [-40.317783799181804, 79.1587107641305],
          [-39.037226329125524, 21.285677238400705],
          [-92.28090097254909, 7.105427357601002e-15],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
    ],
    [
      {
        type: 'line',
        version: 3901,
        versionNonce: 540959103,
        isDeleted: false,
        id: 'b-rwW8s76ztV_uTu1SHq1',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -249.48446738689245,
        y: 374.851387389359,
        strokeColor: '#0a11d3',
        backgroundColor: '#228be6',
        width: 88.21658171083376,
        height: 113.8575037534261,
        seed: 1513238033,
        groupIds: ['N2YAi9nU-wlRb0rDaDZoe'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [-0.22814350714115691, -43.414939319563715],
          [0.06274947619197979, 42.63794490105306],
          [-0.21453039840335475, 52.43469208825097],
          [4.315205554872581, 56.66774540453215],
          [20.089784992984285, 60.25027917349701],
          [46.7532926683984, 61.365826671969444],
          [72.22851104292477, 59.584691681394986],
          [85.76368213524371, 55.325139565662596],
          [87.67263486434864, 51.7342924478499],
          [87.94074036468018, 43.84700272879395],
          [87.73030872197806, -36.195582644606276],
          [87.2559282533682, -43.758132174307036],
          [81.5915337527493, -47.984890854524416],
          [69.66352776578219, -50.4328058257654],
          [42.481213744224995, -52.49167708145666],
          [20.68789182864576, -51.26396751574663],
          [3.5475921483286084, -47.099726468136254],
          [-0.2758413461535838, -43.46664538034193],
          [-0.22814350714115691, -43.414939319563715],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'line',
        version: 1635,
        versionNonce: 1383184881,
        isDeleted: false,
        id: '3CMZYj34FwjhgPB7jUC3f',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -249.02524930453623,
        y: 398.8804363713438,
        strokeColor: '#0a11d3',
        backgroundColor: 'transparent',
        width: 88.30808627974527,
        height: 9.797916664247975,
        seed: 683951089,
        groupIds: ['N2YAi9nU-wlRb0rDaDZoe'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [0, -2.1538602707609424],
          [2.326538897826852, 1.751753055375216],
          [12.359939318521995, 5.028526743934819],
          [25.710950037209347, 7.012921076245119],
          [46.6269757640547, 7.193749997581346],
          [71.03526003420632, 5.930375670950649],
          [85.2899738827162, 1.3342483900732343],
          [88.30808627974527, -2.6041666666666288],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'line',
        version: 1722,
        versionNonce: 303290783,
        isDeleted: false,
        id: 'DX3fUhBWtlJwYyrBDhebG',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -250.11899081659772,
        y: 365.80628180927204,
        strokeColor: '#0a11d3',
        backgroundColor: 'transparent',
        width: 88.30808627974527,
        height: 9.797916664247975,
        seed: 1817746897,
        groupIds: ['N2YAi9nU-wlRb0rDaDZoe'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [0, -2.1538602707609424],
          [2.326538897826852, 1.751753055375216],
          [12.359939318521995, 5.028526743934819],
          [25.710950037209347, 7.012921076245119],
          [46.6269757640547, 7.193749997581346],
          [71.03526003420632, 5.930375670950649],
          [85.2899738827162, 1.3342483900732343],
          [88.30808627974527, -2.6041666666666288],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'ellipse',
        version: 4738,
        versionNonce: 753357777,
        isDeleted: false,
        id: 'a-Snvp2FgqDYqSLylF44S',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -251.23981350275943,
        y: 323.4117518426986,
        strokeColor: '#0a11d3',
        backgroundColor: '#fff',
        width: 87.65074610854188,
        height: 17.72670397681366,
        seed: 1409727409,
        groupIds: ['N2YAi9nU-wlRb0rDaDZoe'],
        strokeSharpness: 'sharp',
        boundElementIds: ['bxuMGTzXLn7H-uBCptINx'],
      },
      {
        type: 'ellipse',
        version: 109,
        versionNonce: 1992641983,
        isDeleted: false,
        id: '7-6c-JFuB2yGoNQRgb2WM',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -179.73008120217884,
        y: 347.98755471983213,
        strokeColor: '#0a11d3',
        backgroundColor: '#fff',
        width: 12.846057046979809,
        height: 13.941904362416096,
        seed: 1073094033,
        groupIds: ['N2YAi9nU-wlRb0rDaDZoe'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'ellipse',
        version: 158,
        versionNonce: 1028567473,
        isDeleted: false,
        id: '150XitJtlKDhTPRCyzv56',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -179.73008120217884,
        y: 378.5900085788926,
        strokeColor: '#0a11d3',
        backgroundColor: '#fff',
        width: 12.846057046979809,
        height: 13.941904362416096,
        seed: 526271345,
        groupIds: ['N2YAi9nU-wlRb0rDaDZoe'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'ellipse',
        version: 212,
        versionNonce: 158547423,
        isDeleted: false,
        id: 'cmwAR3NBl1VqvSorrQN2W',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -179.73008120217884,
        y: 411.8508097533892,
        strokeColor: '#0a11d3',
        backgroundColor: '#fff',
        width: 12.846057046979809,
        height: 13.941904362416096,
        seed: 243707217,
        groupIds: ['N2YAi9nU-wlRb0rDaDZoe'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
    ],
    [
      {
        type: 'diamond',
        version: 659,
        versionNonce: 1294871039,
        isDeleted: false,
        id: 'aDDArXRjZugwyEawdhCeZ',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -109.55894395256101,
        y: 381.22641397493356,
        strokeColor: '#c92a2a',
        backgroundColor: '#fd8888',
        width: 112.64736525303451,
        height: 36.77344700318558,
        seed: 511870335,
        groupIds: ['M6ByXuSmtHCr3RtPPKJQh'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'diamond',
        version: 700,
        versionNonce: 60864881,
        isDeleted: false,
        id: 'Hzx8zkeyDs3YicO2Tdv6G',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -109.55894395256101,
        y: 372.354634046675,
        strokeColor: '#c92a2a',
        backgroundColor: '#fd8888',
        width: 112.64736525303451,
        height: 36.77344700318558,
        seed: 1283079231,
        groupIds: ['M6ByXuSmtHCr3RtPPKJQh'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'diamond',
        version: 780,
        versionNonce: 251040287,
        isDeleted: false,
        id: 'PNzYhT295VNCT5EXmqvmw',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -109.55894395256101,
        y: 359.72407445196296,
        strokeColor: '#c92a2a',
        backgroundColor: '#fd8888',
        width: 112.64736525303451,
        height: 36.77344700318558,
        seed: 996251633,
        groupIds: ['M6ByXuSmtHCr3RtPPKJQh'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'diamond',
        version: 822,
        versionNonce: 1862951761,
        isDeleted: false,
        id: 'jiMMAhQF3__7bF-obgXc0',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -109.55894395256101,
        y: 347.1924021546656,
        strokeColor: '#c92a2a',
        backgroundColor: '#fd8888',
        width: 112.64736525303451,
        height: 36.77344700318558,
        seed: 1764842481,
        groupIds: ['M6ByXuSmtHCr3RtPPKJQh'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
    ],
    [
      {
        type: 'line',
        version: 4766,
        versionNonce: 2003030321,
        isDeleted: false,
        id: 'BXfdLRoPYZ9MIumzzoA9-',
        fillStyle: 'hachure',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 1.5707963267948957,
        x: -471.6208001976387,
        y: 520.7681448415112,
        strokeColor: '#087f5b',
        backgroundColor: '#40c057',
        width: 52.317507746132115,
        height: 154.56722543646003,
        seed: 1424381745,
        groupIds: ['HSrtfEf-CssQTf160Fb6R'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [-0.24755378372925183, -40.169554027464216],
          [-0.07503751055611152, 76.6515171914404],
          [-0.23948042713317108, 89.95108885873196],
          [2.446913573036335, 95.69766931810295],
          [11.802146636255692, 100.56113713047068],
          [27.615140546177496, 102.07554835500338],
          [42.72341054254274, 99.65756899883291],
          [50.75054563137204, 93.87501510096598],
          [51.88266441510958, 89.00026150397161],
          [52.04166639997853, 78.29287333983132],
          [51.916868330459295, -30.36891819848148],
          [51.635533423123285, -40.63545540065934],
          [48.27622163143906, -46.37349057843314],
          [41.202227904674494, -49.69665692879073],
          [25.081551986374073, -52.49167708145666],
          [12.15685839679867, -50.825000270901],
          [1.9916746648394732, -45.171835889467935],
          [-0.2758413461535838, -40.23974757720194],
          [-0.24755378372925183, -40.169554027464216],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'line',
        version: 2405,
        versionNonce: 2120341087,
        isDeleted: false,
        id: 'TYsYe2VvJ60T_yKa3kyOw',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 1.5707963267948957,
        x: -496.3957643857249,
        y: 541.7241190920508,
        strokeColor: '#087f5b',
        backgroundColor: 'transparent',
        width: 50.7174766392476,
        height: 12.698053371678215,
        seed: 726657713,
        groupIds: ['HSrtfEf-CssQTf160Fb6R'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [0, -2.0205717204386002],
          [1.3361877396713384, 3.0410845646550486],
          [7.098613049589299, 7.287767671898479],
          [14.766422451441104, 9.859533283467512],
          [26.779003528407447, 10.093886705011586],
          [40.79727342221974, 8.456559589697127],
          [48.98410145879092, 2.500000505196364],
          [50.7174766392476, -2.6041666666666288],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'line',
        version: 2538,
        versionNonce: 1913946897,
        isDeleted: false,
        id: 'VIuxhGjvYUBniitomEkKm',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 1.5707963267948957,
        x: -450.969983237283,
        y: 542.1789894334747,
        strokeColor: '#087f5b',
        backgroundColor: 'transparent',
        width: 50.57247907260371,
        height: 10.178760037658167,
        seed: 1977326481,
        groupIds: ['HSrtfEf-CssQTf160Fb6R'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [0, -2.136356936862347],
          [1.332367676378171, 1.9210669226078037],
          [7.078318632616268, 5.325208253515953],
          [14.724206326638113, 7.386735659885842],
          [26.70244431044034, 7.574593370991538],
          [40.68063699304561, 6.262111896696538],
          [48.84405948536458, 1.4873339211608216],
          [50.57247907260371, -2.6041666666666288],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'ellipse',
        version: 5503,
        versionNonce: 1236644479,
        isDeleted: false,
        id: '1acGiqpJjntE3sr1JVnBP',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 1.5707963267948957,
        x: -404.36521010516793,
        y: 534.1894365757241,
        strokeColor: '#087f5b',
        backgroundColor: '#fff',
        width: 51.27812853552538,
        height: 22.797152568995934,
        seed: 1774660383,
        groupIds: ['HSrtfEf-CssQTf160Fb6R'],
        strokeSharpness: 'sharp',
        boundElementIds: ['bxuMGTzXLn7H-uBCptINx'],
      },
    ],
    [
      {
        type: 'rectangle',
        version: 4270,
        versionNonce: 309922463,
        isDeleted: false,
        id: 'SqGRpNqls7OV1QB2Eq-0m',
        fillStyle: 'solid',
        strokeWidth: 2,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -393.3000561423187,
        y: 338.9742643666818,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 70.67858069123133,
        height: 107.25081879410921,
        seed: 371096063,
        groupIds: ['9ppmKFUbA4iKjt8FaDFox'],
        strokeSharpness: 'sharp',
        boundElementIds: [
          'CFu0B4Mw_1wC1Hbgx8Fs0',
          'XIl_NhaFtRO00pX5Pq6VU',
          'EndiSTFlx1AT7vcBVjgve',
        ],
      },
      {
        type: 'rectangle',
        version: 4319,
        versionNonce: 896119505,
        isDeleted: false,
        id: 'fayss6b_GPh6LK1x4iX-q',
        fillStyle: 'solid',
        strokeWidth: 2,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -400.8474891780329,
        y: 331.95417508096745,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 70.67858069123133,
        height: 107.25081879410921,
        seed: 685932433,
        groupIds: ['0RJwA-yKP5dqk5oMiSeot', '9ppmKFUbA4iKjt8FaDFox'],
        strokeSharpness: 'sharp',
        boundElementIds: [
          'CFu0B4Mw_1wC1Hbgx8Fs0',
          'XIl_NhaFtRO00pX5Pq6VU',
          'EndiSTFlx1AT7vcBVjgve',
        ],
      },
      {
        type: 'rectangle',
        version: 4417,
        versionNonce: 1968987839,
        isDeleted: false,
        id: 'HgAnv2rwYhUpLiJiZAXv-',
        fillStyle: 'solid',
        strokeWidth: 2,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -410.24257846374826,
        y: 323.7002688309677,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 70.67858069123133,
        height: 107.25081879410921,
        seed: 58634943,
        groupIds: ['9ppmKFUbA4iKjt8FaDFox'],
        strokeSharpness: 'sharp',
        boundElementIds: [
          'CFu0B4Mw_1wC1Hbgx8Fs0',
          'XIl_NhaFtRO00pX5Pq6VU',
          'EndiSTFlx1AT7vcBVjgve',
        ],
      },
      {
        type: 'draw',
        version: 3541,
        versionNonce: 1680683185,
        isDeleted: false,
        id: '12aO-Bs9HdALZN_-tuQTr',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -398.2561518768373,
        y: 371.84603609547054,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 46.57983585730082,
        height: 3.249953844290203,
        seed: 1673003743,
        groupIds: ['9ppmKFUbA4iKjt8FaDFox'],
        strokeSharpness: 'round',
        boundElementIds: [],
        points: [
          [0, 0.6014697828497827],
          [40.42449133807562, 0.7588628355182573],
          [46.57983585730082, -2.491091008771946],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'draw',
        version: 3567,
        versionNonce: 620768991,
        isDeleted: false,
        id: 'Ck_Y0EVPh_fsY0qoRnGiD',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -396.400899638823,
        y: 340.9822185794818,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 45.567415680676426,
        height: 2.8032978840147194,
        seed: 1821527807,
        groupIds: ['9ppmKFUbA4iKjt8FaDFox'],
        strokeSharpness: 'round',
        boundElementIds: [],
        points: [
          [0, 0],
          [16.832548902953302, -2.8032978840147194],
          [45.567415680676426, -0.3275477042019195],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'draw',
        version: 3592,
        versionNonce: 1300624017,
        isDeleted: false,
        id: 'a_7IZapEuD918VW1P8Ss_',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -396.4774991551924,
        y: 408.37659284983897,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 48.33668263438425,
        height: 4.280657518731036,
        seed: 1485707039,
        groupIds: ['9ppmKFUbA4iKjt8FaDFox'],
        strokeSharpness: 'round',
        boundElementIds: [],
        points: [
          [0, 0],
          [26.41225578429045, -0.2552319773002338],
          [37.62000339651456, 2.3153712935189787],
          [48.33668263438425, -1.9652862252120569],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'draw',
        version: 3629,
        versionNonce: 737475327,
        isDeleted: false,
        id: '8io6FVNdFOLsQ266W8Lni',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -399.6615463367227,
        y: 419.61974125811776,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 54.40694982784246,
        height: 2.9096445412231735,
        seed: 1042012991,
        groupIds: ['9ppmKFUbA4iKjt8FaDFox'],
        strokeSharpness: 'round',
        boundElementIds: [],
        points: [
          [0, 0],
          [10.166093050596771, -1.166642430373031],
          [16.130660965377448, -0.8422655250909383],
          [46.26079588567538, 0.6125567455206506],
          [54.40694982784246, -2.297087795702523],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'draw',
        version: 3594,
        versionNonce: 1982560369,
        isDeleted: false,
        id: 'LJI5kY6tg7UFAjPV3fKL-',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -399.3767034411569,
        y: 356.042820132743,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 46.92865289294453,
        height: 2.4757501798128,
        seed: 295443295,
        groupIds: ['9ppmKFUbA4iKjt8FaDFox'],
        strokeSharpness: 'round',
        boundElementIds: [],
        points: [
          [0, 0],
          [18.193786115221407, -0.5912874140789839],
          [46.92865289294453, 1.884462765733816],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'draw',
        version: 3609,
        versionNonce: 1857766175,
        isDeleted: false,
        id: 'zCrZOHW-q8YWKLw6ltKxX',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -399.26921524500654,
        y: 390.5261491685826,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 46.92865289294453,
        height: 2.4757501798128,
        seed: 1734301567,
        groupIds: ['9ppmKFUbA4iKjt8FaDFox'],
        strokeSharpness: 'round',
        boundElementIds: [],
        points: [
          [0, 0],
          [8.093938105125233, 1.4279702913643746],
          [18.193786115221407, -0.5912874140789839],
          [46.92865289294453, 1.884462765733816],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
    ],
    [
      {
        type: 'rectangle',
        version: 676,
        versionNonce: 1841530687,
        isDeleted: false,
        id: 'XOD3vRhtoLWoxC9wF9Sk8',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -593.9896997899341,
        y: 343.9798351106279,
        strokeColor: '#000000',
        backgroundColor: 'transparent',
        width: 127.88383573213892,
        height: 76.53703389977764,
        seed: 106569279,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'line',
        version: 462,
        versionNonce: 1737150513,
        isDeleted: false,
        id: 'WBkTga1PjKzYK-tcGjnjZ',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -595.0652975408293,
        y: 354.6963695028721,
        strokeColor: '#000000',
        backgroundColor: 'transparent',
        width: 128.84193229844433,
        height: 0,
        seed: 73916127,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [0, 0],
          [128.84193229844433, 0],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'ellipse',
        version: 282,
        versionNonce: 1198409567,
        isDeleted: false,
        id: 'FHX0ZsIzUUfYPJqrZ8Lso',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 0,
        opacity: 100,
        angle: 0,
        x: -589.5016643209792,
        y: 348.2514049106367,
        strokeColor: '#000000',
        backgroundColor: '#fa5252',
        width: 5.001953125,
        height: 5.001953125,
        seed: 387857791,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'ellipse',
        version: 327,
        versionNonce: 1661182481,
        isDeleted: false,
        id: 'ugVRR0f_uDOjrllO10yAs',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 0,
        opacity: 100,
        angle: 0,
        x: -579.2389690084792,
        y: 348.2514049106367,
        strokeColor: '#000000',
        backgroundColor: '#fab005',
        width: 5.001953125,
        height: 5.001953125,
        seed: 1486370207,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'ellipse',
        version: 385,
        versionNonce: 2047607679,
        isDeleted: false,
        id: 'SBzNA0Sn-ou4QGxotj0SB',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 0,
        opacity: 100,
        angle: 0,
        x: -568.525552542133,
        y: 348.7021260644829,
        strokeColor: '#000000',
        backgroundColor: '#40c057',
        width: 5.001953125,
        height: 5.001953125,
        seed: 610150847,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'ellipse',
        version: 664,
        versionNonce: 2135373809,
        isDeleted: false,
        id: 'VKcfbELTVlyJ90m0bGsj0',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 90,
        angle: 0,
        x: -552.4984915525058,
        y: 364.75449494249875,
        strokeColor: '#000000',
        backgroundColor: '#04aaf7',
        width: 42.72020253937572,
        height: 42.72020253937572,
        seed: 144280593,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'draw',
        version: 1281,
        versionNonce: 1708997535,
        isDeleted: false,
        id: 'zWrJVrKnkF5K8iXNxi9Aa',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 0,
        opacity: 100,
        angle: 0,
        x: -530.327851842306,
        y: 378.9357912947449,
        strokeColor: '#087f5b',
        backgroundColor: '#40c057',
        width: 28.226201983883442,
        height: 24.44112284281997,
        seed: 29167967,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [4.907524351775825, 2.043055712211473],
          [3.0769604829149455, 1.6284171290602836],
          [-2.66472604008681, -4.228569719133945],
          [-6.450168189798415, -2.304577297733668],
          [-7.704241049212052, 4.416384506147983],
          [-6.361372181234263, 8.783101300254884],
          [-12.516984713388897, 10.9291595737194],
          [-12.295677738198286, 15.686226498407976],
          [-7.473371426945252, 15.393030178104425],
          [-3.787654025313423, 11.5207568827343],
          [1.2873793872375165, 19.910682356036197],
          [4.492232250183542, 20.212553123686025],
          [1.1302787567009416, 6.843494873631317],
          [6.294108177816019, 6.390688722156585],
          [8.070028349098962, 7.910451897221202],
          [14.143675334886687, 7.910451897221202],
          [15.709217270494545, 2.6780252579576427],
          [9.128749989671498, 3.1533849725326517],
          [10.393751588600717, -3.7167773257046695],
          [7.380151667177483, -3.30213874255348],
          [4.669824267311791, 1.1200945145694894],
          [4.907524351775825, 2.043055712211473],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'line',
        version: 701,
        versionNonce: 1583157713,
        isDeleted: false,
        id: 'LX6kTl9A8K36ld2MEV4tI',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 90,
        angle: 0,
        x: -551.4394290784783,
        y: 385.71736850567976,
        strokeColor: '#000000',
        backgroundColor: '#99bcff',
        width: 42.095115772272244,
        height: 0,
        seed: 1443027377,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [0, 0],
          [42.095115772272244, 0],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'line',
        version: 2908,
        versionNonce: 252866495,
        isDeleted: false,
        id: 'SHmV_QtcwxIE-peI_QOX1',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 0,
        opacity: 90,
        angle: 0,
        x: -546.3441000487039,
        y: 372.6245229061568,
        strokeColor: '#000000',
        backgroundColor: '#99bcff',
        width: 29.31860660384862,
        height: 5.711199931375845,
        seed: 244310513,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [0, -2.341683327443203],
          [0.7724193963150375, -0.06510358900749044],
          [4.103544916365185, 1.84492589414448],
          [8.536129150893453, 3.0016281808630056],
          [15.480325949120388, 3.1070332647092163],
          [23.583965316012858, 2.3706131055211244],
          [28.316582284417855, -0.3084668090492442],
          [29.31860660384862, -2.6041666666666288],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
      {
        type: 'ellipse',
        version: 725,
        versionNonce: 1969008561,
        isDeleted: false,
        id: 'PKRg6SqIetkWIgRqBAnDY',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 90,
        angle: 0,
        x: -538.2701841247845,
        y: 363.37196531290607,
        strokeColor: '#000000',
        backgroundColor: 'transparent',
        width: 15.528434353116108,
        height: 44.82230388130942,
        seed: 683572113,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'line',
        version: 3113,
        versionNonce: 533471199,
        isDeleted: false,
        id: 'HrelUAgvfxi_4v8MyL_iT',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 0,
        opacity: 90,
        angle: 0,
        x: -544.828148539078,
        y: 402.0199316371545,
        strokeColor: '#000000',
        backgroundColor: '#99bcff',
        width: 29.31860660384862,
        height: 5.896061363392446,
        seed: 318798801,
        groupIds: ['TC0RSM64Cxmu17MlE12-o'],
        strokeSharpness: 'round',
        boundElementIds: [],
        startBinding: null,
        endBinding: null,
        points: [
          [0, 0],
          [4.103544916365185, -4.322122351104391],
          [8.536129150893453, -5.516265043290966],
          [15.480325949120388, -5.625081903117008],
          [23.583965316012858, -4.8648251269605955],
          [28.316582284417855, -2.0990281379671547],
          [29.31860660384862, 0.2709794602754383],
        ],
        lastCommittedPoint: null,
        startArrowhead: null,
        endArrowhead: null,
      },
    ],
    [
      {
        type: 'rectangle',
        version: 685,
        versionNonce: 706399231,
        isDeleted: false,
        id: 'dba8s5bDYEnF20oGn2a8b',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -715.1043446306466,
        y: 330.4231266309418,
        strokeColor: '#000000',
        backgroundColor: '#ced4da',
        width: 70.81644178885557,
        height: 108.30428902193904,
        seed: 1914896753,
        groupIds: ['GMZ-NW9lG7c1AtfBInZ0n'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'rectangle',
        version: 835,
        versionNonce: 851916657,
        isDeleted: false,
        id: '3HxCT4mFZF-jJ6m9pyOCt',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -706.996640540555,
        y: 338.68030798133873,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 55.801163535143246,
        height: 82.83278895375764,
        seed: 1306468145,
        groupIds: ['GMZ-NW9lG7c1AtfBInZ0n'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'ellipse',
        version: 881,
        versionNonce: 704574495,
        isDeleted: false,
        id: 'xX9mcMHy_0Bn-D0UAMyCc',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -684.8099707762028,
        y: 425.0579911039235,
        strokeColor: '#000000',
        backgroundColor: '#fff',
        width: 11.427824006438863,
        height: 11.427824006438863,
        seed: 93422161,
        groupIds: ['GMZ-NW9lG7c1AtfBInZ0n'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'rectangle',
        version: 528,
        versionNonce: 816914769,
        isDeleted: false,
        id: 'h60d2h6UPYkopTlW_XEs4',
        fillStyle: 'cross-hatch',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -698.7169501405845,
        y: 349.2244646574789,
        strokeColor: '#000000',
        backgroundColor: '#fab005',
        width: 39.2417827352022,
        height: 19.889460471185775,
        seed: 11646495,
        groupIds: ['GMZ-NW9lG7c1AtfBInZ0n'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
      {
        type: 'rectangle',
        version: 570,
        versionNonce: 1198069823,
        isDeleted: false,
        id: 'bZbx28BjXM33JV1UezMcH',
        fillStyle: 'cross-hatch',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: -698.7169501405845,
        y: 384.7822247024333,
        strokeColor: '#000000',
        backgroundColor: '#fab005',
        width: 39.2417827352022,
        height: 19.889460471185775,
        seed: 291717649,
        groupIds: ['GMZ-NW9lG7c1AtfBInZ0n'],
        strokeSharpness: 'sharp',
        boundElementIds: [],
      },
    ],
  ],
}

const resolvablePromise = () => {
  let resolve
  let reject
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })
  promise.resolve = resolve
  promise.reject = reject
  return promise
}

const renderTopRightUI = () => {
  return (
    <button onClick={() => alert('This is dummy top right UI')}>
      {' '}
      Click me{' '}
    </button>
  )
}

const renderFooter = () => {
  return (
    <button onClick={() => alert('This is dummy footer')}>
      {' '}
      custom footer{' '}
    </button>
  )
}

function Sidebar(props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div id="mySidebar" className={`sidebar ${open ? 'open' : ''}`}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          x
        </button>
        <div className="sidebar-links">
          <button>Dummy Home</button>
          <button>Dummy About</button>{' '}
        </div>
      </div>
      <div className={`${open ? 'sidebar-open' : ''}`}>
        <button
          className="openbtn"
          onClick={() => {
            setOpen(!open)
          }}
        >
          Open Sidebar
        </button>
        {props.children}
      </div>
    </>
  )
}

export default function App() {
  const excalidrawRef = useRef(null)

  const [Excalidraw, setExcalidraw] = useState()

  const [viewModeEnabled, setViewModeEnabled] = useState(false)
  const [zenModeEnabled, setZenModeEnabled] = useState(false)
  const [gridModeEnabled, setGridModeEnabled] = useState(false)
  const [blobUrl, setBlobUrl] = useState(null)
  const [canvasUrl, setCanvasUrl] = useState(null)
  const [exportWithDarkMode, setExportWithDarkMode] = useState(false)
  const [theme, setTheme] = useState('light')

  const initialStatePromiseRef = useRef({ promise: null })
  if (!initialStatePromiseRef.current.promise)
    initialStatePromiseRef.current.promise = resolvablePromise()

  useEffect(() => {
    import('@excalidraw/excalidraw').then((comp) => setExcalidraw(comp.default))

    const fetchData = async () => {
      const res = await fetch('/rocket.jpeg')
      const imageData = await res.blob()
      const reader = new FileReader()
      reader.readAsDataURL(imageData)

      reader.onload = function () {
        const imagesArray = [
          {
            id: 'rocket',
            dataURL: reader.result,
            mimeType: 'image/jpeg',
            created: 1644915140367,
          },
        ]

        initialStatePromiseRef.current.promise.resolve(InitialData)
        excalidrawRef.current?.addFiles(imagesArray)
      }
    }
    fetchData()

    const onHashChange = () => {
      const hash = new URLSearchParams(window.location.hash.slice(1))
      const libraryUrl = hash.get('addLibrary')
      if (libraryUrl) {
        excalidrawRef.current.importLibrary(libraryUrl, hash.get('token'))
      }
    }
    window.addEventListener('hashchange', onHashChange, false)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  const updateScene = () => {
    const sceneData = {
      elements: [
        {
          type: 'rectangle',
          version: 141,
          versionNonce: 361174001,
          isDeleted: false,
          id: 'oDVXy8D6rom3H1-LLH2-f',
          fillStyle: 'hachure',
          strokeWidth: 1,
          strokeStyle: 'solid',
          roughness: 1,
          opacity: 100,
          angle: 0,
          x: 100.50390625,
          y: 93.67578125,
          strokeColor: '#c92a2a',
          backgroundColor: 'transparent',
          width: 186.47265625,
          height: 141.9765625,
          seed: 1968410350,
          groupIds: [],
        },
      ],
      appState: {
        viewBackgroundColor: '#edf2ff',
      },
    }
    excalidrawRef.current.updateScene(sceneData)
  }

  const onLinkOpen = useCallback((element, event) => {
    const link = element.link
    const { nativeEvent } = event.detail
    const isNewTab = nativeEvent.ctrlKey || nativeEvent.metaKey
    const isNewWindow = nativeEvent.shiftKey
    const isInternalLink =
      link.startsWith('/') || link.includes(window.location.origin)
    if (isInternalLink && !isNewTab && !isNewWindow) {
      // signal that we're handling the redirect ourselves
      event.preventDefault()
      // do a custom redirect, such as passing to react-router
      // ...
    }
  }, [])

  return Excalidraw ? (
    <div className="App">
      <h1> Excalidraw Example</h1>
      <Sidebar>
        <div className="button-wrapper">
          <button className="update-scene" onClick={updateScene}>
            Update Scene
          </button>
          <button
            className="reset-scene"
            onClick={() => {
              excalidrawRef.current.resetScene()
            }}
          >
            Reset Scene
          </button>
          <button
            onClick={() => {
              excalidrawRef.current.updateScene({
                libraryItems: [
                  {
                    status: 'published',
                    elements: initialData.libraryItems[0],
                  },
                  {
                    status: 'unpublished',
                    elements: initialData.libraryItems[1],
                  },
                ],
              })
            }}
          >
            Update Library
          </button>
          <label>
            <input
              type="checkbox"
              checked={viewModeEnabled}
              onChange={() => setViewModeEnabled(!viewModeEnabled)}
            />
            View mode
          </label>
          <label>
            <input
              type="checkbox"
              checked={zenModeEnabled}
              onChange={() => setZenModeEnabled(!zenModeEnabled)}
            />
            Zen mode
          </label>
          <label>
            <input
              type="checkbox"
              checked={gridModeEnabled}
              onChange={() => setGridModeEnabled(!gridModeEnabled)}
            />
            Grid mode
          </label>
          <label>
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={() => {
                let newTheme = 'light'
                if (theme === 'light') {
                  newTheme = 'dark'
                }
                setTheme(newTheme)
              }}
            />
            Switch to Dark Theme
          </label>
        </div>
        <div className="excalidraw-wrapper">
          <Excalidraw
            ref={excalidrawRef}
            initialData={initialStatePromiseRef.current.promise}
            onChange={(elements, state) =>
              console.info('Elements :', elements, 'State : ', state)
            }
            onPointerUpdate={(payload) => console.info(payload)}
            onCollabButtonClick={() =>
              window.alert('You clicked on collab button')
            }
            viewModeEnabled={viewModeEnabled}
            zenModeEnabled={zenModeEnabled}
            gridModeEnabled={gridModeEnabled}
            theme={theme}
            name="Custom name of drawing"
            UIOptions={{ canvasActions: { loadScene: false } }}
            renderTopRightUI={renderTopRightUI}
            renderFooter={renderFooter}
            onLinkOpen={onLinkOpen}
          />
        </div>

        <div className="export-wrapper button-wrapper">
          <label className="export-wrapper__checkbox">
            <input
              type="checkbox"
              checked={exportWithDarkMode}
              onChange={() => setExportWithDarkMode(!exportWithDarkMode)}
            />
            Export with dark mode
          </label>
          <button
            onClick={async () => {
              const svg = await exportToSvg({
                elements: excalidrawRef.current.getSceneElements(),
                appState: {
                  ...initialData.appState,
                  exportWithDarkMode,
                  width: 300,
                  height: 100,
                },
                embedScene: true,
                files: excalidrawRef.current.getFiles(),
              })
              document.querySelector('.export-svg').innerHTML = svg.outerHTML
            }}
          >
            Export to SVG
          </button>
          <div className="export export-svg"></div>

          <button
            onClick={async () => {
              const blob = await exportToBlob({
                elements: excalidrawRef.current.getSceneElements(),
                mimeType: 'image/png',
                appState: {
                  ...initialData.appState,
                  exportWithDarkMode,
                },
                files: excalidrawRef.current.getFiles(),
              })
              setBlobUrl(window.URL.createObjectURL(blob))
            }}
          >
            Export to Blob
          </button>
          <div className="export export-blob">
            <img src={blobUrl} alt="" />
          </div>

          <button
            onClick={async () => {
              const canvas = await exportToCanvas({
                elements: excalidrawRef.current.getSceneElements(),
                appState: {
                  ...initialData.appState,
                  exportWithDarkMode,
                },
                files: excalidrawRef.current.getFiles(),
              })
              const ctx = canvas.getContext('2d')
              ctx.font = '30px Virgil'
              ctx.strokeText('My custom text', 50, 60)
              setCanvasUrl(canvas.toDataURL())
            }}
          >
            Export to Canvas
          </button>
          <div className="export export-canvas">
            <img src={canvasUrl} alt="" />
          </div>
        </div>
      </Sidebar>
    </div>
  ) : null
}
