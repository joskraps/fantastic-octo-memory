export type Pokemon = {
  id: number;
  name: string;
};

// Sammple Pokemon response
// {
//   "abilities": [
//     {
//       "ability": {
//         "name": "swarm",
//         "url": "https://pokeapi.co/api/v2/ability/68/"
//       },
//       "is_hidden": false,
//       "slot": 1
//     },
//     {
//       "ability": {
//         "name": "hustle",
//         "url": "https://pokeapi.co/api/v2/ability/55/"
//       },
//       "is_hidden": false,
//       "slot": 2
//     },
//     {
//       "ability": {
//         "name": "truant",
//         "url": "https://pokeapi.co/api/v2/ability/54/"
//       },
//       "is_hidden": true,
//       "slot": 3
//     }
//   ],
//   "base_experience": 169,
//   "cries": {
//     "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/632.ogg",
//     "legacy": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/632.ogg"
//   },
//   "forms": [
//     {
//       "name": "durant",
//       "url": "https://pokeapi.co/api/v2/pokemon-form/632/"
//     }
//   ],
//   "game_indices": [
//     {
//       "game_index": 632,
//       "version": {
//         "name": "black",
//         "url": "https://pokeapi.co/api/v2/version/17/"
//       }
//     },
//     {
//       "game_index": 632,
//       "version": {
//         "name": "white",
//         "url": "https://pokeapi.co/api/v2/version/18/"
//       }
//     },
//     {
//       "game_index": 632,
//       "version": {
//         "name": "black-2",
//         "url": "https://pokeapi.co/api/v2/version/21/"
//       }
//     },
//     {
//       "game_index": 632,
//       "version": {
//         "name": "white-2",
//         "url": "https://pokeapi.co/api/v2/version/22/"
//       }
//     }
//   ],
//   "height": 3,
//   "held_items": [],
//   "id": 632,
//   "is_default": true,
//   "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/632/encounters",
//   "moves": [
//     {
//       "move": {
//         "name": "vice-grip",
//         "url": "https://pokeapi.co/api/v2/move/11/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 4,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "guillotine",
//         "url": "https://pokeapi.co/api/v2/move/12/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 61,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 61,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 61,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 61,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 51,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 51,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 56,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "cut",
//         "url": "https://pokeapi.co/api/v2/move/15/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "sand-attack",
//         "url": "https://pokeapi.co/api/v2/move/28/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "bite",
//         "url": "https://pokeapi.co/api/v2/move/44/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 11,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 11,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 11,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 11,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 20,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "strength",
//         "url": "https://pokeapi.co/api/v2/move/70/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "thunder-wave",
//         "url": "https://pokeapi.co/api/v2/move/86/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "dig",
//         "url": "https://pokeapi.co/api/v2/move/91/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 41,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 41,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 41,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 41,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 31,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 31,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 28,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "toxic",
//         "url": "https://pokeapi.co/api/v2/move/92/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "agility",
//         "url": "https://pokeapi.co/api/v2/move/97/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 16,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 16,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 16,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 16,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 6,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 6,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 24,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "screech",
//         "url": "https://pokeapi.co/api/v2/move/103/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "double-team",
//         "url": "https://pokeapi.co/api/v2/move/104/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "rest",
//         "url": "https://pokeapi.co/api/v2/move/156/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "rock-slide",
//         "url": "https://pokeapi.co/api/v2/move/157/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "substitute",
//         "url": "https://pokeapi.co/api/v2/move/164/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "snore",
//         "url": "https://pokeapi.co/api/v2/move/173/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "flail",
//         "url": "https://pokeapi.co/api/v2/move/175/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "protect",
//         "url": "https://pokeapi.co/api/v2/move/182/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "feint-attack",
//         "url": "https://pokeapi.co/api/v2/move/185/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "sandstorm",
//         "url": "https://pokeapi.co/api/v2/move/201/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "endure",
//         "url": "https://pokeapi.co/api/v2/move/203/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "swagger",
//         "url": "https://pokeapi.co/api/v2/move/207/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "fury-cutter",
//         "url": "https://pokeapi.co/api/v2/move/210/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 6,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 6,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 6,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 6,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "attract",
//         "url": "https://pokeapi.co/api/v2/move/213/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "sleep-talk",
//         "url": "https://pokeapi.co/api/v2/move/214/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "return",
//         "url": "https://pokeapi.co/api/v2/move/216/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "frustration",
//         "url": "https://pokeapi.co/api/v2/move/218/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "baton-pass",
//         "url": "https://pokeapi.co/api/v2/move/226/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "metal-claw",
//         "url": "https://pokeapi.co/api/v2/move/232/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 21,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 21,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 21,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 21,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 11,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 11,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 8,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "hidden-power",
//         "url": "https://pokeapi.co/api/v2/move/237/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "crunch",
//         "url": "https://pokeapi.co/api/v2/move/242/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 31,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 31,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 31,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 31,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 21,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 21,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 36,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "rock-smash",
//         "url": "https://pokeapi.co/api/v2/move/249/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "beat-up",
//         "url": "https://pokeapi.co/api/v2/move/251/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 12,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "facade",
//         "url": "https://pokeapi.co/api/v2/move/263/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "helping-hand",
//         "url": "https://pokeapi.co/api/v2/move/270/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "superpower",
//         "url": "https://pokeapi.co/api/v2/move/276/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "endeavor",
//         "url": "https://pokeapi.co/api/v2/move/283/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "secret-power",
//         "url": "https://pokeapi.co/api/v2/move/290/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "rock-tomb",
//         "url": "https://pokeapi.co/api/v2/move/317/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "metal-sound",
//         "url": "https://pokeapi.co/api/v2/move/319/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 66,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 66,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 66,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 66,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 56,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 56,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 40,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "aerial-ace",
//         "url": "https://pokeapi.co/api/v2/move/332/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "iron-defense",
//         "url": "https://pokeapi.co/api/v2/move/334/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 56,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 56,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 56,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 1,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 56,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 46,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 46,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 52,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "metal-burst",
//         "url": "https://pokeapi.co/api/v2/move/368/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "rock-polish",
//         "url": "https://pokeapi.co/api/v2/move/397/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "x-scissor",
//         "url": "https://pokeapi.co/api/v2/move/404/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 51,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 51,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 51,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 51,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 41,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 41,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 32,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "energy-ball",
//         "url": "https://pokeapi.co/api/v2/move/412/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "giga-impact",
//         "url": "https://pokeapi.co/api/v2/move/416/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "shadow-claw",
//         "url": "https://pokeapi.co/api/v2/move/421/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "thunder-fang",
//         "url": "https://pokeapi.co/api/v2/move/422/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "flash-cannon",
//         "url": "https://pokeapi.co/api/v2/move/430/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "rock-climb",
//         "url": "https://pokeapi.co/api/v2/move/431/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "iron-head",
//         "url": "https://pokeapi.co/api/v2/move/442/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 36,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 36,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 36,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 36,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 26,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 26,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 44,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "stone-edge",
//         "url": "https://pokeapi.co/api/v2/move/444/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "bug-bite",
//         "url": "https://pokeapi.co/api/v2/move/450/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 26,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 26,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 26,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 26,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 16,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 16,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 16,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "hone-claws",
//         "url": "https://pokeapi.co/api/v2/move/468/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "entrainment",
//         "url": "https://pokeapi.co/api/v2/move/494/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 46,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 46,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 46,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 46,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 36,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 36,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 48,
//           "move_learn_method": {
//             "name": "level-up",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "round",
//         "url": "https://pokeapi.co/api/v2/move/496/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "retaliate",
//         "url": "https://pokeapi.co/api/v2/move/514/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "struggle-bug",
//         "url": "https://pokeapi.co/api/v2/move/522/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-white",
//             "url": "https://pokeapi.co/api/v2/version-group/11/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "black-2-white-2",
//             "url": "https://pokeapi.co/api/v2/version-group/14/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "confide",
//         "url": "https://pokeapi.co/api/v2/move/590/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "x-y",
//             "url": "https://pokeapi.co/api/v2/version-group/15/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "omega-ruby-alpha-sapphire",
//             "url": "https://pokeapi.co/api/v2/version-group/16/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sun-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/17/"
//           }
//         },
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "ultra-sun-ultra-moon",
//             "url": "https://pokeapi.co/api/v2/version-group/18/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "infestation",
//         "url": "https://pokeapi.co/api/v2/move/611/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "first-impression",
//         "url": "https://pokeapi.co/api/v2/move/660/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "egg",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "stomping-tantrum",
//         "url": "https://pokeapi.co/api/v2/move/707/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "machine",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "steel-beam",
//         "url": "https://pokeapi.co/api/v2/move/796/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     },
//     {
//       "move": {
//         "name": "skitter-smack",
//         "url": "https://pokeapi.co/api/v2/move/806/"
//       },
//       "version_group_details": [
//         {
//           "level_learned_at": 0,
//           "move_learn_method": {
//             "name": "tutor",
//             "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
//           },
//           "version_group": {
//             "name": "sword-shield",
//             "url": "https://pokeapi.co/api/v2/version-group/20/"
//           }
//         }
//       ]
//     }
//   ],
//   "name": "durant",
//   "order": 755,
//   "past_abilities": [],
//   "past_types": [],
//   "species": {
//     "name": "durant",
//     "url": "https://pokeapi.co/api/v2/pokemon-species/632/"
//   },
//   "sprites": {
//     "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/632.png",
//     "back_female": null,
//     "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/632.png",
//     "back_shiny_female": null,
//     "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
//     "front_female": null,
//     "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/632.png",
//     "front_shiny_female": null,
//     "other": {
//       "dream_world": {
//         "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/632.svg",
//         "front_female": null
//       },
//       "home": {
//         "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/632.png",
//         "front_female": null,
//         "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/632.png",
//         "front_shiny_female": null
//       },
//       "official-artwork": {
//         "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png",
//         "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/632.png"
//       },
//       "showdown": {
//         "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/632.gif",
//         "back_female": null,
//         "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/632.gif",
//         "back_shiny_female": null,
//         "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/632.gif",
//         "front_female": null,
//         "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/632.gif",
//         "front_shiny_female": null
//       }
//     },
//     "versions": {
//       "generation-i": {
//         "red-blue": {
//           "back_default": null,
//           "back_gray": null,
//           "back_transparent": null,
//           "front_default": null,
//           "front_gray": null,
//           "front_transparent": null
//         },
//         "yellow": {
//           "back_default": null,
//           "back_gray": null,
//           "back_transparent": null,
//           "front_default": null,
//           "front_gray": null,
//           "front_transparent": null
//         }
//       },
//       "generation-ii": {
//         "crystal": {
//           "back_default": null,
//           "back_shiny": null,
//           "back_shiny_transparent": null,
//           "back_transparent": null,
//           "front_default": null,
//           "front_shiny": null,
//           "front_shiny_transparent": null,
//           "front_transparent": null
//         },
//         "gold": {
//           "back_default": null,
//           "back_shiny": null,
//           "front_default": null,
//           "front_shiny": null,
//           "front_transparent": null
//         },
//         "silver": {
//           "back_default": null,
//           "back_shiny": null,
//           "front_default": null,
//           "front_shiny": null,
//           "front_transparent": null
//         }
//       },
//       "generation-iii": {
//         "emerald": {
//           "front_default": null,
//           "front_shiny": null
//         },
//         "firered-leafgreen": {
//           "back_default": null,
//           "back_shiny": null,
//           "front_default": null,
//           "front_shiny": null
//         },
//         "ruby-sapphire": {
//           "back_default": null,
//           "back_shiny": null,
//           "front_default": null,
//           "front_shiny": null
//         }
//       },
//       "generation-iv": {
//         "diamond-pearl": {
//           "back_default": null,
//           "back_female": null,
//           "back_shiny": null,
//           "back_shiny_female": null,
//           "front_default": null,
//           "front_female": null,
//           "front_shiny": null,
//           "front_shiny_female": null
//         },
//         "heartgold-soulsilver": {
//           "back_default": null,
//           "back_female": null,
//           "back_shiny": null,
//           "back_shiny_female": null,
//           "front_default": null,
//           "front_female": null,
//           "front_shiny": null,
//           "front_shiny_female": null
//         },
//         "platinum": {
//           "back_default": null,
//           "back_female": null,
//           "back_shiny": null,
//           "back_shiny_female": null,
//           "front_default": null,
//           "front_female": null,
//           "front_shiny": null,
//           "front_shiny_female": null
//         }
//       },
//       "generation-v": {
//         "black-white": {
//           "animated": {
//             "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/632.gif",
//             "back_female": null,
//             "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/632.gif",
//             "back_shiny_female": null,
//             "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/632.gif",
//             "front_female": null,
//             "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/632.gif",
//             "front_shiny_female": null
//           },
//           "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/632.png",
//           "back_female": null,
//           "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/632.png",
//           "back_shiny_female": null,
//           "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/632.png",
//           "front_female": null,
//           "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/632.png",
//           "front_shiny_female": null
//         }
//       },
//       "generation-vi": {
//         "omegaruby-alphasapphire": {
//           "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/632.png",
//           "front_female": null,
//           "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/632.png",
//           "front_shiny_female": null
//         },
//         "x-y": {
//           "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/632.png",
//           "front_female": null,
//           "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/632.png",
//           "front_shiny_female": null
//         }
//       },
//       "generation-vii": {
//         "icons": {
//           "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/632.png",
//           "front_female": null
//         },
//         "ultra-sun-ultra-moon": {
//           "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/632.png",
//           "front_female": null,
//           "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/632.png",
//           "front_shiny_female": null
//         }
//       },
//       "generation-viii": {
//         "icons": {
//           "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/632.png",
//           "front_female": null
//         }
//       }
//     }
//   },
//   "stats": [
//     {
//       "base_stat": 58,
//       "effort": 0,
//       "stat": {
//         "name": "hp",
//         "url": "https://pokeapi.co/api/v2/stat/1/"
//       }
//     },
//     {
//       "base_stat": 109,
//       "effort": 0,
//       "stat": {
//         "name": "attack",
//         "url": "https://pokeapi.co/api/v2/stat/2/"
//       }
//     },
//     {
//       "base_stat": 112,
//       "effort": 2,
//       "stat": {
//         "name": "defense",
//         "url": "https://pokeapi.co/api/v2/stat/3/"
//       }
//     },
//     {
//       "base_stat": 48,
//       "effort": 0,
//       "stat": {
//         "name": "special-attack",
//         "url": "https://pokeapi.co/api/v2/stat/4/"
//       }
//     },
//     {
//       "base_stat": 48,
//       "effort": 0,
//       "stat": {
//         "name": "special-defense",
//         "url": "https://pokeapi.co/api/v2/stat/5/"
//       }
//     },
//     {
//       "base_stat": 109,
//       "effort": 0,
//       "stat": {
//         "name": "speed",
//         "url": "https://pokeapi.co/api/v2/stat/6/"
//       }
//     }
//   ],
//   "types": [
//     {
//       "slot": 1,
//       "type": {
//         "name": "bug",
//         "url": "https://pokeapi.co/api/v2/type/7/"
//       }
//     },
//     {
//       "slot": 2,
//       "type": {
//         "name": "steel",
//         "url": "https://pokeapi.co/api/v2/type/9/"
//       }
//     }
//   ],
//   "weight": 330
// }
