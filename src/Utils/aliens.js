const aliensData = [
    { alienName: 'Zorgon', planetName: 'Gliese 581g', starName: 'Gliese 581', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '20 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Qyrix', planetName: 'Kepler-22b', starName: 'Kepler-22', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '620 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Krelix', planetName: 'Proxima Centauri b', starName: 'Proxima Centauri', galaxyName: 'Andromeda', civilizationLevel: 1, distanceFromEarth: '4.2 light years', alienType: 'funny', gender: 'no gender' },
    { alienName: 'Alyssar', planetName: 'HD 40307g', starName: 'HD 40307', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '42 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Eldara', planetName: 'Kepler-186f', starName: 'Kepler-186', galaxyName: 'Milky Way', civilizationLevel: 4, distanceFromEarth: '500 light years', alienType: 'angry', gender: 'male' },
    { alienName: 'Xylor', planetName: 'Ross 128 b', starName: 'Ross 128', galaxyName: 'Andromeda', civilizationLevel: 2, distanceFromEarth: '11 light years', alienType: 'normal', gender: 'no gender' },
    { alienName: 'Thrax', planetName: 'Wolf 1061c', starName: 'Wolf 1061', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '14 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Luna', planetName: 'HD 85512b', starName: 'HD 85512', galaxyName: 'Milky Way', civilizationLevel: 1, distanceFromEarth: '36 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Korra', planetName: 'Kepler-62e', starName: 'Kepler-62', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '1,200 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Malthor', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '40 light years', alienType: 'funny', gender: 'female' },
    { alienName: 'Zirron', planetName: 'LHS 1140 b', starName: 'LHS 1140', galaxyName: 'Andromeda', civilizationLevel: 3, distanceFromEarth: '39 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Flarix', planetName: 'Kepler-12b', starName: 'Kepler-12', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '260 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Thyrax', planetName: 'GJ 1214 b', starName: 'GJ 1214', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '40 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Quorix', planetName: 'HD 209458 b', starName: 'HD 209458', galaxyName: 'Milky Way', civilizationLevel: 4, distanceFromEarth: '150 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Nyris', planetName: 'GJ 357 d', starName: 'GJ 357', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '31 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Varnak', planetName: 'K2-18 b', starName: 'K2-18', galaxyName: 'Andromeda', civilizationLevel: 8, distanceFromEarth: '124 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Braxar', planetName: 'Proxima Centauri c', starName: 'Proxima Centauri', galaxyName: 'Milky Way', civilizationLevel: 9, distanceFromEarth: '4.2 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Slyr', planetName: '55 Cancri e', starName: '55 Cancri', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '41 light years', alienType: 'funny', gender: 'female' },
    { alienName: 'Drayak', planetName: 'TRAPPIST-1e', starName: 'TRAPPIST-1', galaxyName: 'Andromeda', civilizationLevel: 3, distanceFromEarth: '40 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Talor', planetName: 'WASP-12b', starName: 'WASP-12', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '870 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Eryndor', planetName: 'HD 85512 b', starName: 'HD 85512', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '36 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Klyra', planetName: 'Kepler-62f', starName: 'Kepler-62', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '1,200 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Zynor', planetName: 'HD 69830 d', starName: 'HD 69830', galaxyName: 'Andromeda', civilizationLevel: 4, distanceFromEarth: '41 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Rynar', planetName: 'Kepler-10b', starName: 'Kepler-10', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '560 light years', alienType: 'informative', gender: 'no gender' },
    { alienName: 'Hylix', planetName: 'HD 189733 b', starName: 'HD 189733', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '63 light years', alienType: 'angry', gender: 'male' },
    { alienName: 'Pharix', planetName: 'WASP-18b', starName: 'WASP-18', galaxyName: 'Andromeda', civilizationLevel: 2, distanceFromEarth: '328 light years', alienType: 'funny', gender: 'female' },
    { alienName: 'Atheron', planetName: 'GJ 1132 b', starName: 'GJ 1132', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '41 light years', alienType: 'normal', gender: 'no gender' },
    { alienName: 'Vynor', planetName: 'Kepler-47c', starName: 'Kepler-47', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '3,500 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Xylar', planetName: 'TRAPPIST-1c', starName: 'TRAPPIST-1', galaxyName: 'Andromeda', civilizationLevel: 4, distanceFromEarth: '40 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Nekra', planetName: 'HD 209458 b', starName: 'HD 209458', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '150 light years', alienType: 'funny', gender: 'no gender' },
    { alienName: 'Vortan', planetName: 'Kepler-452b', starName: 'Kepler-452', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '1,400 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Lyra', planetName: 'HD 149026 b', starName: 'HD 149026', galaxyName: 'Milky Way', civilizationLevel: 8, distanceFromEarth: '258 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Draven', planetName: 'WASP-103b', starName: 'WASP-103', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '1,200 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Kara', planetName: 'Kepler-16b', starName: 'Kepler-16', galaxyName: 'Andromeda', civilizationLevel: 3, distanceFromEarth: '200 light years', alienType: 'funny', gender: 'female' },
    { alienName: 'Raxor', planetName: 'WASP-19b', starName: 'WASP-19', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '140 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Nyssa', planetName: 'LHS 1140 b', starName: 'LHS 1140', galaxyName: 'Andromeda', civilizationLevel: 2, distanceFromEarth: '39 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Cyril', planetName: 'Kepler-20e', starName: 'Kepler-20', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '570 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Torin', planetName: 'HD 189733 b', starName: 'HD 189733', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '63 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Orion', planetName: 'Kepler-69c', starName: 'Kepler-69', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '2,700 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Sylor', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Andromeda', civilizationLevel: 4, distanceFromEarth: '40 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Draxx', planetName: 'GJ 1132 b', starName: 'GJ 1132', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '41 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Yara', planetName: 'Kepler-22b', starName: 'Kepler-22', galaxyName: 'Milky Way', civilizationLevel: 8, distanceFromEarth: '620 light years', alienType: 'funny', gender: 'no gender' },
    { alienName: 'Xandar', planetName: 'WASP-80b', starName: 'WASP-80', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '230 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Liora', planetName: 'Kepler-47b', starName: 'Kepler-47', galaxyName: 'Andromeda', civilizationLevel: 9, distanceFromEarth: '3,500 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Bran', planetName: 'HD 40307g', starName: 'HD 40307', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '42 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Tara', planetName: 'Kepler-186f', starName: 'Kepler-186', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '500 light years', alienType: 'funny', gender: 'female' },
    { alienName: 'Drax', planetName: 'Proxima Centauri b', starName: 'Proxima Centauri', galaxyName: 'Andromeda', civilizationLevel: 4, distanceFromEarth: '4.2 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Vega', planetName: 'HD 85512b', starName: 'HD 85512', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '36 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Lyra', planetName: 'Kepler-62e', starName: 'Kepler-62', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '1,200 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Gorak', planetName: 'LHS 1140 b', starName: 'LHS 1140', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '39 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Tara', planetName: 'TRAPPIST-1e', starName: 'TRAPPIST-1', galaxyName: 'Andromeda', civilizationLevel: 6, distanceFromEarth: '40 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Xylon', planetName: 'HD 189733 b', starName: 'HD 189733', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '63 light years', alienType: 'informative', gender: 'no gender' },
    { alienName: 'Zephyrus', planetName: 'Kepler-20b', starName: 'Kepler-20', galaxyName: 'Milky Way', civilizationLevel: 4, distanceFromEarth: '570 light years', alienType: 'angry', gender: 'male' },
    { alienName: 'Mara', planetName: 'Kepler-22b', starName: 'Kepler-22', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '620 light years', alienType: 'funny', gender: 'female' },
    { alienName: 'Omar', planetName: 'GJ 1214 b', starName: 'GJ 1214', galaxyName: 'Andromeda', civilizationLevel: 3, distanceFromEarth: '39 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Zephyr', planetName: 'HD 85512b', starName: 'HD 85512', galaxyName: 'Milky Way', civilizationLevel: 8, distanceFromEarth: '36 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Qyra', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '40 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Rylor', planetName: 'HD 209458 b', starName: 'HD 209458', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '150 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Tyra', planetName: 'Kepler-47c', starName: 'Kepler-47', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '3,500 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Nyx', planetName: 'WASP-12b', starName: 'WASP-12', galaxyName: 'Andromeda', civilizationLevel: 4, distanceFromEarth: '870 light years', alienType: 'informative', gender: 'no gender' },
    { alienName: 'Kora', planetName: 'Kepler-186f', starName: 'Kepler-186', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '500 light years', alienType: 'angry', gender: 'male' },
    { alienName: 'Aron', planetName: 'Proxima Centauri b', starName: 'Proxima Centauri', galaxyName: 'Andromeda', civilizationLevel: 6, distanceFromEarth: '4.2 light years', alienType: 'funny', gender: 'female' },
    { alienName: 'Travis', planetName: 'TRAPPIST-1e', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '40 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Lyra', planetName: 'HD 209458 b', starName: 'HD 209458', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '150 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Elara', planetName: 'WASP-18b', starName: 'WASP-18', galaxyName: 'Milky Way', civilizationLevel: 8, distanceFromEarth: '330 light years', alienType: 'angry', gender: 'no gender' },
    { alienName: 'Goran', planetName: 'Kepler-69c', starName: 'Kepler-69', galaxyName: 'Milky Way', civilizationLevel: 4, distanceFromEarth: '2,700 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Zephyra', planetName: 'Kepler-22b', starName: 'Kepler-22', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '620 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Jax', planetName: 'GJ 1214 b', starName: 'GJ 1214', galaxyName: 'Andromeda', civilizationLevel: 7, distanceFromEarth: '39 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Zara', planetName: 'HD 85512b', starName: 'HD 85512', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '36 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Drake', planetName: 'Kepler-16b', starName: 'Kepler-16', galaxyName: 'Andromeda', civilizationLevel: 4, distanceFromEarth: '200 light years', alienType: 'funny', gender: 'no gender' },
    { alienName: 'Eira', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '40 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Rael', planetName: 'Kepler-47c', starName: 'Kepler-47', galaxyName: 'Milky Way', civilizationLevel: 2, distanceFromEarth: '3,500 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Gina', planetName: 'WASP-12b', starName: 'WASP-12', galaxyName: 'Andromeda', civilizationLevel: 5, distanceFromEarth: '870 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Zephyr', planetName: 'Kepler-62e', starName: 'Kepler-62', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '1,200 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Lorian', planetName: 'TRAPPIST-1e', starName: 'TRAPPIST-1', galaxyName: 'Andromeda', civilizationLevel: 8, distanceFromEarth: '40 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Kira', planetName: 'Kepler-186f', starName: 'Kepler-186', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '500 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Ryn', planetName: 'Kepler-20b', starName: 'Kepler-20', galaxyName: 'Andromeda', civilizationLevel: 7, distanceFromEarth: '570 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Taryn', planetName: 'GJ 1132 b', starName: 'GJ 1132', galaxyName: 'Milky Way', civilizationLevel: 4, distanceFromEarth: '41 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Lyra', planetName: 'HD 40307g', starName: 'HD 40307', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '42 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Zane', planetName: 'Proxima Centauri b', starName: 'Proxima Centauri', galaxyName: 'Andromeda', civilizationLevel: 5, distanceFromEarth: '4.2 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Kira', planetName: 'Kepler-22b', starName: 'Kepler-22', galaxyName: 'Milky Way', civilizationLevel: 8, distanceFromEarth: '620 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Aris', planetName: 'WASP-80b', starName: 'WASP-80', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '230 light years', alienType: 'funny', gender: 'no gender' },
    { alienName: 'Lyra', planetName: 'HD 189733 b', starName: 'HD 189733', galaxyName: 'Milky Way', civilizationLevel: 9, distanceFromEarth: '63 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Nora', planetName: 'Kepler-69c', starName: 'Kepler-69', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '2,700 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Faye', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Andromeda', civilizationLevel: 6, distanceFromEarth: '40 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Zara', planetName: 'Kepler-16b', starName: 'Kepler-16', galaxyName: 'Milky Way', civilizationLevel: 4, distanceFromEarth: '200 light years', alienType: 'funny', gender: 'no gender' },
    { alienName: 'Rian', planetName: 'WASP-19b', starName: 'WASP-19', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '140 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Jax', planetName: 'GJ 1214 b', starName: 'GJ 1214', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '39 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Thorne', planetName: 'Kepler-47c', starName: 'Kepler-47', galaxyName: 'Andromeda', civilizationLevel: 6, distanceFromEarth: '3,500 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Kai', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '40 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Sylor', planetName: 'Kepler-20b', starName: 'Kepler-20', galaxyName: 'Milky Way', civilizationLevel: 8, distanceFromEarth: '570 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Liora', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Andromeda', civilizationLevel: 5, distanceFromEarth: '40 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Fiona', planetName: 'Kepler-16b', starName: 'Kepler-16', galaxyName: 'Milky Way', civilizationLevel: 4, distanceFromEarth: '200 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Eira', planetName: 'WASP-12b', starName: 'WASP-12', galaxyName: 'Andromeda', civilizationLevel: 5, distanceFromEarth: '870 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Aris', planetName: 'Kepler-62e', starName: 'Kepler-62', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '1,200 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Mara', planetName: 'Kepler-186f', starName: 'Kepler-186', galaxyName: 'Milky Way', civilizationLevel: 8, distanceFromEarth: '500 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Nora', planetName: 'TRAPPIST-1e', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '40 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Mara', planetName: 'Kepler-47c', starName: 'Kepler-47', galaxyName: 'Milky Way', civilizationLevel: 4, distanceFromEarth: '3,500 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Rian', planetName: 'Kepler-16b', starName: 'Kepler-16', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '200 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Kai', planetName: 'Kepler-47c', starName: 'Kepler-47', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '3,500 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Sylor', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '40 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Jax', planetName: 'Kepler-47c', starName: 'Kepler-47', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '3,500 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Aris', planetName: 'TRAPPIST-1e', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '40 light years', alienType: 'angry', gender: 'male' },
    { alienName: 'Lyra', planetName: 'Kepler-62e', starName: 'Kepler-62', galaxyName: 'Milky Way', civilizationLevel: 8, distanceFromEarth: '1,200 light years', alienType: 'funny', gender: 'female' },
    { alienName: 'Goran', planetName: 'Kepler-186f', starName: 'Kepler-186', galaxyName: 'Milky Way', civilizationLevel: 4, distanceFromEarth: '500 light years', alienType: 'normal', gender: 'male' },
    { alienName: 'Goran', planetName: 'TRAPPIST-1e', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '40 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Mara', planetName: 'Kepler-20b', starName: 'Kepler-20', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '570 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Zephyr', planetName: 'Kepler-62e', starName: 'Kepler-62', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '1,200 light years', alienType: 'informative', gender: 'male' },
    { alienName: 'Zara', planetName: 'Kepler-62e', starName: 'Kepler-62', galaxyName: 'Milky Way', civilizationLevel: 8, distanceFromEarth: '1,200 light years', alienType: 'angry', gender: 'female' },
    { alienName: 'Zane', planetName: 'Kepler-62e', starName: 'Kepler-62', galaxyName: 'Milky Way', civilizationLevel: 6, distanceFromEarth: '1,200 light years', alienType: 'funny', gender: 'male' },
    { alienName: 'Nora', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 5, distanceFromEarth: '40 light years', alienType: 'normal', gender: 'female' },
    { alienName: 'Zephyra', planetName: 'TRAPPIST-1e', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 7, distanceFromEarth: '40 light years', alienType: 'informative', gender: 'female' },
    { alienName: 'Jax', planetName: 'TRAPPIST-1d', starName: 'TRAPPIST-1', galaxyName: 'Milky Way', civilizationLevel: 3, distanceFromEarth: '40 light years', alienType: 'angry', gender: 'male' }
]

export function getAlienDataByName(name) {
    return aliensData.find(alien => alien.alienName === name);
}

function max() {
    let max = 0
    aliensData.forEach(alien => {
        let distance = parseFloat(alien.distanceFromEarth.replace(',', '').split(' ')[0])
        if (distance > max) {
            max = distance
        }
    });

    return max
}

function min() {
    let min = 400000
    aliensData.forEach(alien => {
        let distance = parseFloat(alien.distanceFromEarth.replace(',', '').split(' ')[0])
        console.log(distance);
        if (distance < min) {
            min = distance
        }
    });
    return min

}

// console.log({ min: min(), max: max() }); { min: 4.2, max: 3500 }

export default aliensData;
