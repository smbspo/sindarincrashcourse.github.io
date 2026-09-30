
        // Data structure for consonant mutations
        const mutations = {
            articlei: {
                "p": "i·b", "t": "i·d", "c": "i·g", 
                "b": "i·v", "d": "i·dh", "g": "i·‘", 
                "br": "i·vr", "bl": "i·vl", "dr": "i·dhr", "gw": "i·'w", "gr": "i·‘r", "gl": "i·‘l",
                "mb": "i·m", "nd": "i·n", "ñg": "i·ñ", 
                "m": "i·v", "n": "i·n", 
                "f": "i·f", "th": "i·th", "h": "i·ch", "s": "i·h", 
                "r": "i·r", "l": "i·l", "j": "i·‘", 
                "rh": "i·thr", "lh": "i·thl", "hw": "i·chw", "wh": "i·chw",
                "a": "i·a", "e": "i·e", "i": "i·i", "o": "i·o", "u": "i·u", "û": "i·û",
            },
            articlee: {
                "p": "e·b", "t": "e·d", "c": "e·g", 
                "b": "e·v", "d": "e·dh", "g": "e·‘", 
                "br": "e·vr", "bl": "e·vl", "dr": "e·dhr", "gw": ["e·‘w", "†e·‘w"], "gr": "e·‘r", "gl": "e·‘l",
                "mb": "e·mb", "nd": "e·nd", "ñg": "e·ñg", 
                "m": "e·v", "n": "e·n", 
                "f": "e·f", "th": "e·th", "h": "e·ch", "s": "e·h", 
                "r": "e·r", "l": "e·l", "j": "e·i", 
                "rh": ["e·rh", "†e·thr"], "lh": ["e·lh", "†e·thl"], "hw": "e·chw", "wh": ["e·cwh", "†e·cwh"],
                "a": "en·a", "e": "en·e", "i": "en·i", "o": "en·o", "u": "en·u", "û": "en·û",
            },
             articlein: {
                "p": "i·ph", "t": "i·th", "c": "i·ch", 
                "b": "i·m", "d": "i·n", "g": "i·ñ", 
                "br": "im·br", "bl": "im·bl", "dr": "in·dr", "gw": "iñ·gw", "gr": "iñ·gr", "gl": "iñ·gl",
                "mb": "i·mb", "nd": "i·nd", "ñg": "i·ñg", 
                "m": "i·m", "n": "i·n", 
                "f": "i·f", "th": "i·th", "h": "i·ch", "s": "i·s", 
                "r": "idh·r", "l": "i·l", "j": "in·i", 
                "rh": "ith·r", "lh": "ith·l", "hw": "ich·w", "wh": "ich·w",
                "a": "in·a", "e": "in·e", "i": "in·i", "o": "in·o", "u": "in·u", "û": "in·û",
            },
            articlein2: {
                "p": "i·ph", "t": "i·th", "c": "i·ch", 
                "b": "i·mb", "d": "i·nd", "g": "i·ñg", 
                "br": "*i·mbr", "bl": "*i·mbl", "dr": "*i·ndr", "gw": ["i·ñgw", "†in·‘w"], "gr": "*i·ñgr", "gl": "*i·ñgl",
                "mb": "i·mb", "nd": "i·nd", "ñg": "i·ñg", 
                "m": "i·m", "n": "i·n", 
                "f": "i·f", "th": "i·th", "h": "i·ch", "s": "i·s", 
                "r": "*idh·r", "l": "*i·l", "j": "*i(n)·i", 
                "rh": ["i·rh", "†i·thr"], "lh": ["i·lh", "†i·thl"], "hw": "i·chw", "wh": ["i·wh", "i·chw"],
                "a": "in·a", "e": "in·e", "i": "in·i", "o": "in·o", "u": "in·u", "û": "in·û",
            },
            an: {
                "p": "am b", "t": "an d", "c": "añ g", 
                "b": "am b", "d": "an d", "g": "añ g", 
                "br": "am br", "bl": "am bl", "dr": "an dr", "gw": ["añ gw", "†an ‘w"], "gr": "añ gr", "gl": "añ gl",
                "mb": "am b", "nd": "an d", "ñg": "añ g", 
                "f": "an f", "th": "an th", "h": "añ ch", "s": "an h", 
                "m": "am m", "n": "an n", 
                "r": "adh r", "l": "al l", "j": "a ch", 
                "rh": ["an rh", "†a thr"], "lh": ["an lh", "†a thl"], "hw": "a ‘w", "wh": ["an wh", "†a chw"],
                "a": "an a", "e": "an e", "i": "an i", "o": "an o", "u": "an u", "û": "an û",
            },
            eni: {
               "p": "(e)ni b", "t": "(e)ni d", "c": "(e)ni g", 
                "b": "(e)ni v", "d": "(e)ni dh", "g": "(e)ni ‘", 
                "br": "(e)ni vr", "bl": "(e)ni vl", "dr": "(e)ni dhr", "gw": ["(e)ni ‘w", "†(e)ni ‘w"], "gr": "(e)ni ‘r", "gl": "(e)ni ‘l",
                "mb": "(e)ni mb", "nd": "(e)ni nd", "ñg": "(e)ni ñg", 
                "m": "(e)ni v", "n": "(e)ni n", 
                "f": "(e)ni f", "th": "(e)ni th", "h": "(e)ni ch", "s": "(e)ni h", 
                "r": "(e)ni r", "l": "(e)ni l", "j": "(e)ni i", 
                "rh": ["(e)ni rh", "†(e)ni thr"], "lh": ["(e)ni lh", "†(e)ni thl"], "hw": "(e)ni chw", "wh": ["(e)ni cwh", "†(e)ni cwh"],
                "a": "(e)ni a", "e": "(e)ni e", "i": "(e)n’ i", "o": "(e)ni o", "u": "(e)ni u", "û": "(e)ni û",
            },
            enin: {
               "p": "(e)ni ph", "t": "(e)ni th", "c": "(e)ni ch", 
                "b": "(e)ni mb", "d": "(e)ni nd", "g": "(e)ni ñg", 
                "br": "(e)ni mbr", "bl": "(e)ni mbl", "dr": "(e)ni ndr", "gw": ["(e)ni ñgw", "†(e)nin ‘w"], "gr": "(e)ni ñgr", "gl": "(e)nin ñgl",
                "mb": "(e)ni mb", "nd": "(e)ni nd", "ñg": "(e)ni ñg", 
                "m": "(e)ni m", "n": "(e)ni n", 
                "f": "(e)ni f", "th": "(e)ni th", "h": "(e)ni ch", "s": "(e)ni h", 
                "r": "(e)nidh r", "l": "(e)ni l", "j": "(e)nin i", 
                "rh": ["(e)ni rh", "†(e)ni thr"], "lh": ["(e)ni thl", "†(e)ni thl"], "hw": "(e)ni cwh", "wh": ["(e)ni wh", "†(e)ni cwh"],
                "a": "(e)nin a", "e": "(e)nin e", "i": "(e)nin i", "o": "(e)nin o", "u": "(e)nin u", "û": "(e)nin û",
            },
            nan: {
                "p": "na ph", "t": "na th", "c": "na ch", 
                "b": "na mb", "d": "na nd", "g": "na ñg", 
                "br": "na mbr", "bl": "na mbl", "dr": "na ndr", "gw": ["na ñgw", "†nan ‘w"], "gr": "na ñgr", "gl": "na ñgl",
                "mb": "na mb", "nd": "na nd", "ñg": "na ñg", 
                "f": "na f", "th": "na th", "h": "na ch", "s": "na s", 
                "m": "na m", "n": "na n", 
                "r": "nadh r", "l": "na l", "j": "nan i", 
                "rh": ["na rh", "†na thr"], "lh": ["na lh", "na thl"], "hw": "na chw", "wh": ["na wh", "na chw"],
                "a": "nan a", "e": "nan e", "i": "nan i", "o": "nan o", "u": "nan u", "û": "nan û",
            },
             o: {
                "p": "o b", "t": "o d", "c": "o g", 
                "b": "o v", "d": "o dh", "g": "o ‘", 
                "br": "o vr", "bl": "o vl", "dr": "o dhr", "gw": ["o ‘w", "†o ‘w"], "gr": "o ‘r", "gl": "o ‘l",
                "mb": "o mb", "nd": "o nd", "ñg": "o ñg", 
                "m": "o v", "n": "o n", 
                "f": "o f", "th": "o th", "h": "o ch", "s": "o h", 
                "r": "o r", "l": "o l", "j": "o i", 
                "rh": ["o rh", "†o thr"], "lh": ["o lh", "†o thl"], "hw": "o chw", "wh": ["o chw", "†o chw"],
                "a": "o a", "e": "o e", "i": "o i", "o": "o o", "u": "o u","û": "o û",
            },
            ui: {
                "p": "ui b", "t": "ui d", "c": "ui g", 
                "b": "ui v", "d": "ui dh", "g": "ui ‘", 
                "br": "ui vr", "bl": "ui vl", "dr": "ui dhr", "gw": ["ui ‘w", "†ui ‘w"], "gr": "ui ‘r", "gl": "ui ‘l",
                "mb": "ui mb", "nd": "ui nd", "ñg": "ui ñg", 
                "m": "ui v", "n": "ui n", 
                "f": "ui f", "th": "ui th", "h": "ui ch", "s": "ui h", 
                "r": "ui r", "l": "ui l", "j": "ui i", 
                "rh": ["ui rh", "†ui thr"], "lh": ["ui lh", "†ui thl"], "hw": "ui chw", "wh": ["ui wh", "†ui chw"],
                "a": "ui a", "e": "ui e", "i": "u’ i", "o": "ui o", "u": "ui u","û": "ui û",
            },
             uin: {
                "p": "ui ph", "t": "ui th", "c": "ui ch", 
                "b": "ui mb", "d": "ui nd", "g": "ui ñg", 
                "br": "ui mbr", "bl": "ui mbl", "dr": "ui ndr", "gw": ["ui ñgw", "†uin ‘w"], "gr": "ui ñgr", "gl": "ui ñgl",
                "mb": "ui mb", "nd": "ui nd", "ñg": "ui ñg", 
                "f": "ui f", "th": "ui th", "h": "ui ch", "s": "ui s", 
                "m": "ui m", "n": "ui n", 
                "r": "uidh r", "l": "ui l", "j": "uin i", 
                "rh": ["ui rh", "†ui thr"], "lh": ["ui lh", "†ui thl"], "hw": "ui chw", "wh": ["ui wh", "†ui chw"],
                "a": "uin a", "e": "uin e", "i": "uin i", "o": "uin o", "u": "uin u", "û": "uin û",
                
            },
            dan: {
                "p": "dam b", "t": "dan d", "c": "dañ g", 
                "b": "dam b", "d": "dan d", "g": "dañ g", 
                "br": "dam br", "bl": "dam bl", "dr": "dan dr", "gw": ["dañ gw", "†an ‘w"], "gr": "dañ gr", "gl": "dañ gl",
                "mb": "dam b", "nd": "dan d", "ñg": "dañ g", 
                "f": "dan f", "th": "dan th", "h": "dañ ch", "s": "dan h", 
                "m": "dam m", "n": "dan n", 
                "r": "dadh r", "l": "dal l", "j": "da ch", 
                "rh": ["dan rh", "†da thr"], "lh": ["dan lh", "†da thl"], "hw": "da ‘w", "wh": ["dan wh", "†da chw"],
                "a": "dan a", "e": "dan e", "i": "dan i", "o": "dan o", "u": "dan u", "û": "dan û",
            },
            di: {
                "p": "di b", "t": "di d", "c": "di g", 
                "b": "di v", "d": "di dh", "g": "di ‘", 
                "br": "di vr", "bl": "di vl", "dr": "di dhr", "gw": ["di ‘w", "†di ‘w"], "gr": "di ‘r", "gl": "di ‘l",
                "mb": "di mb", "nd": "di nd", "ñg": "di ñg", 
                "m": "di v", "n": "di n", 
                "f": "di f", "th": "di th", "h": "di ch", "s": "di h", 
                "r": "di r", "l": "di l", "j": "di i", 
                "rh": ["di rh", "†di thr"], "lh": ["di lh", "†di thl"], "hw": "di chw", "wh": ["di wh", "†di chw"],
                "a": "di a", "e": "di e", "i": "d’ i", "o": "di o", "u": "di u", "û": "di û",
            },
            din1: {
                "p": "dim b", "t": "din d", "c": "diñ g", 
                "b": "dim b", "d": "din d", "g": "diñ g", 
                "br": "dim br", "bl": "dim bl", "dr": "din dr", "gw": ["diñ gw", "†din ‘w"], "gr": "diñ gr", "gl": "diñ gl",
                "mb": "dim b", "nd": "din d", "ñg": "diñ g", 
                "f": "din f", "th": "din th", "h": "diñ ch", "s": "din h", 
                "m": "dim m", "n": "din n", 
                "r": "didh r", "l": "dil l", "j": "di ch", 
                "rh": ["din rh", "†di thr"], "lh": ["din rh", "†di thl"], "hw": "di chw", "wh": ["din wh", "†di chw"],
                "a": "din a", "e": "din e", "i": "din i", "o": "din o", "u": "din u", "û": "din û",
            },
            din2: {
                "p": "di ph", "t": "di th", "c": "di ch", 
                "b": "di mb", "d": "di nd", "g": "di ñg", 
                "br": "di mbr", "bl": "di mbl", "dr": "di ndr", "gw": ["di ñgw", "†din ‘w"], "gr": "di ñgr", "gl": "di ñgl",
                "mb": "di mb", "nd": "di nd", "ñg": "di ñg", 
                "f": "di f", "th": "di th", "h": "di ch", "s": "di s", 
                "m": "di m", "n": "di n", 
                "r": "didh r", "l": "di l", "j": "din i", 
                "rh": ["di rh", "†di thr"], "lh": ["di lh", "†di thl"], "hw": "di chw", "wh": ["di wh", "†di chw"],
                "a": "din a", "e": "din e", "i": "din i", "o": "din o", "u": "din u", "û": "din û",
            },
            oh: {
                "p": "o ph", "t": "o th", "c": "o ch", 
                "b": "o b", "d": "o d", "g": "o g", 
                "br": "o br", "bl": "o bl", "dr": "o dr", "gw": ["o gw", "†o wh"], "gr": "o gr",
                "mb": "o b", "nd": "o d", "ñg": "o g", 
                "m": "o m", "n": "o n",
                "f": "o f", "th": "o th", "h": "o ch", "s": "o s", 
                "r": "o rh", "l": "o lh", "j": "o ch", 
                "rh": "o rh", "lh": "o lh", "hw": "o hw", "wh": "o wh",
                "a": "oh a", "e": "oh e", "i": "oh i", "o": "oh o", "u": "oh u", "û": "oh û",
            },
            gu: {
                "p": "gu b", "t": "gu d", "c": "gu g", 
                "b": "gu v", "d": "gu dh", "g": "gu ‘", 
                "br": "gu vr", "bl": "gu vl", "dr": "gu dhr", "gw": ["gu ‘w", "†gu ‘w"], "gr": "gu ‘r", "gl": "gu ‘l",
                "mb": "gu mb", "nd": "gu nd", "ñg": "gu ñg", 
                "m": "gu v", "n": "gu n", 
                "f": "gu f", "th": "gu th", "h": "gu ch", "s": "gu h", 
                "r": "gu r", "l": "gu l", "j": "gu i", 
                "rh": ["gu rh", "†gu thr"], "lh": ["gu lh", "†gu thl"], "hw": "gu chw", "wh": ["gu wh", "†gu chw"],
                "a": "gu a", "e": "gu e", "i": "d’ i", "o": "gu o", "u": "gu u", "û": "gu û",
            },
            gui: {
                "p": "gui b", "t": "gui d", "c": "gui g", 
                "b": "gui v", "d": "gui dh", "g": "gui ‘", 
                "br": "gui vr", "bl": "gui vl", "dr": "gui dhr", "gw": ["gui ‘w", "†gui ‘w"], "gr": "gui ‘r", "gl": "gui ‘l",
                "mb": "gui mb", "nd": "gui nd", "ñg": "gui ñg", 
                "m": "gui v", "n": "gui n", 
                "f": "gui f", "th": "gui th", "h": "gui ch", "s": "gui h", 
                "r": "gui r", "l": "gui l", "j": "gui i", 
                "rh": ["gui rh", "†gui thr"], "lh": ["gui lh", "†gui thl"], "hw": "gui chw", "wh": ["gui wh", "†gui chw"],
                "a": "gui a", "e": "gui e", "i": "gu’ i", "o": "gui o", "u": "gui u","û": "gui û",
            },
             guin: {
                "p": "gui ph", "t": "gui th", "c": "gui ch", 
                "b": "gui mb", "d": "gui nd", "g": "gui ñg", 
                "br": "gui mbr", "bl": "gui mbl", "dr": "gui ndr", "gw": ["gui ñgw", "†guin ‘w"], "gr": "gui ñgr", "gl": "gui ñgl",
                "mb": "gui mb", "nd": "gui nd", "ñg": "gui ñg", 
                "f": "gui f", "th": "gui th", "h": "gui ch", "s": "gui s", 
                "m": "gui m", "n": "gui n", 
                "r": "guidh r", "l": "gui l", "j": "guin i", 
                "rh": ["gui rh", "†gui thr"], "lh": ["gui lh", "†gui thl"], "hw": "gui chw", "wh": ["gui wh", "†gui chw"],
                "a": "guin a", "e": "guin e", "i": "guin i", "o": "guin o", "u": "guin u", "û": "guin û",
                
            },
            mo: {
                "p": "mo b", "t": "mo d", "c": "mo g", 
                "b": "mo v", "d": "mo dh", "g": "mo ‘", 
                "br": "mo vr", "bl": "mo vl", "dr": "mo dhr", "gw": ["mo ‘w", "†mo ‘w"], "gr": "mo ‘r", "gl": "mo ‘l",
                "mb": "mo mb", "nd": "mo nd", "ñg": "mo ñg", 
                "m": "mo v", "n": "mo n", 
                "f": "mo f", "th": "mo th", "h": "mo ch", "s": "mo h", 
                "r": "mo r", "l": "mo l", "j": "mo i", 
                "rh": ["mo rh", "†mo thr"], "lh": ["mo lh", "†mo thl"], "hw": "mo chw", "wh": ["mo wh", "†mo chw"],
                "a": "mo a", "e": "mo e", "i": "mo i", "o": "mo o", "u": "mo u", "û": "mo û",
            },
            moe: {
                "p": "moe b", "t": "moe d", "c": "moe g", 
                "b": "moe v", "d": "moe dh", "g": "moe ‘", 
                "br": "moe vr", "bl": "moe vl", "dr": "moe dhr", "gw": ["moe ‘w", "†moe ‘w"], "gr": "moe ‘r", "gl": "moe ‘l",
                "mb": "moe mb", "nd": "moe n", "ñg": "moe ñg", 
                "m": "moe v", "n": "moe nd", 
                "f": "moe f", "th": "moe th", "h": "moe ch", "s": "moe h", 
                "r": "moe r", "l": "moe l", "j": "moe i", 
                "rh": ["moe rh", "†moe thr"], "lh": ["moe lh", "†moe thl"], "hw": "moe chw", "wh": ["moe wh", "†moe chw"],
                "a": "moe a", "e": "mo’ e", "i": "moe i", "o": "moe o", "u": "moe u","û": "moe û",
            },
             moen: {
                "p": "moe ph", "t": "moe th", "c": "moe ch", 
                "b": "moe mb", "d": "moe nd", "g": "moe ñg", 
                "br": "moe mbr", "bl": "moe mbl", "dr": "moe ndr", "gw": ["moe ñgw", "†moen ‘w"], "gr": "moe ñgr", "gl": "moe ñgl",
                "mb": "moe mb", "nd": "moe nd", "ñg": "moe ñg", 
                "f": "moe f", "th": "moe th", "h": "moe ch", "s": "moe s", 
                "m": "moe m", "n": "moe n", 
                "r": "moedh r", "l": "moe l", "j": "moen i", 
                "rh": ["moe rh", "†moe thr"], "lh": ["moe lh", "†moe thl"], "hw": "moe chw", "wh": ["moe wh", "†moe chw"],
                "a": "moen a", "e": "moen e", "i": "moen i", "o": "moen o", "u": "moen u", "û": "moen û",
                
            },
            be: {
               "p": "be b", "t": "be d", "c": "be g", 
               "b": "be v", "d": "be dh", "g": "be ‘", 
               "br": "be vr", "bl": "be vl", "dr": "be dhr", "gw": ["be ‘w", "†be ‘w"], "gr": "be ‘r", "gl": "be ‘l",
               "mb": "be mb", "nd": "be nd", "ñg": "be ñg", 
               "m": "be v", "n": "be n", 
               "f": "be f", "th": "be th", "h": "be ch", "s": "be h", 
               "r": "be r", "l": "be l", "j": "be i", 
               "rh": ["be rh", "†be thr"], "lh": ["be lh", "†be thl"], "hw": "be chw", "wh": ["be wh", "†be chw"],
               "a": "be a", "e": "be e", "i": "b’ i", "o": "be o", "u": "be u", "û": "be û",
            },
            ben1: {
                "p": "bem b", "t": "ben d", "c": "beñ g", 
                "b": "bem b", "d": "ben d", "g": "beñ g", 
                "br": "bem br", "bl": "bem bl", "dr": "ben dr", "gw": ["beñ gw", "†ben ‘w"], "gr": "beñ gr", "gl": "beñ gl",
                "mb": "bem b", "nd": "ben d", "ñg": "beñ g", 
                "f": "ben f", "th": "ben th", "h": "beñ ch", "s": "ben h", 
                "m": "bem m", "n": "ben n", 
                "r": "bedh r", "l": "bel l", "j": "be ch", 
                "rh": ["ben rh", "†be thr"], "lh": ["ben lh", "†be thl"], "hw": "be chw", "wh": ["ben wh", "†be chw"],
                "a": "ben a", "e": "ben e", "i": "ben i", "o": "ben o", "u": "ben u", "û": "ben û",
            },
            ben2: {
                "p": "be ph", "t": "be th", "c": "be ch", 
                "b": "be mb", "d": "be nd", "g": "be ñg", 
                "br": "be mbr", "bl": "be mbl", "dr": "be ndr", "gw": ["be ñgw", "†ben ‘w"], "gr": "be ñgr", "gl": "be ñgl",
                "mb": "be mb", "nd": "be nd", "ñg": "be ñg", 
                "f": "be f", "th": "be th", "h": "be ch", "s": "be s", 
                "m": "be m", "n": "be n", 
                "r": "bedh r", "l": "be l", "j": "ben i", 
                "rh": ["be rh", "†be thr"], "lh": ["be lh", "†be thl"], "hw": "be chw", "wh": ["be wh", "†be chw"],
                "a": "ben a", "e": "ben e", "i": "ben i", "o": "ben o", "u": "ben u", "û": "ben û",
            },
             sui: {
                "p": "sui b", "t": "sui d", "c": "sui g", 
                "b": "sui v", "d": "sui dh", "g": "sui ‘", 
                "br": "sui vr", "bl": "sui vl", "dr": "sui dhr", "gw": ["sui ‘w", "†sui ‘w"], "gr": "sui ‘r", "gl": "sui ‘l",
                "mb": "sui mb", "nd": "sui nd", "ñg": "sui ñg", 
                "m": "sui v", "n": "sui n", 
                "f": "sui f", "th": "sui th", "h": "sui ch", "s": "sui h", 
                "r": "sui r", "l": "sui l", "j": "sui i", 
                "rh": ["sui rh", "†sui thr"], "lh": ["sui lh", "†sui thl"], "hw": "sui chw", "wh": ["sui wh", "†sui chw"],
                "a": "sui a", "e": "sui e", "i": "su’ i", "o": "sui o", "u": "sui u", "û": "sui û",
            },
            suin1: {
                "p": "suim b", "t": "suin d", "c": "suiñ g", 
                "b": "suim b", "d": "suin d", "g": "suiñ g", 
                "br": "suim br", "bl": "suim bl", "dr": "suin dr", "gw": ["suiñ gw", "†suin ‘w"], "gr": "suiñ gr", "gl": "suiñ gl",
                "mb": "suim b", "nd": "suin d", "ñg": "suiñ g", 
                "f": "suin f", "th": "suin th", "h": "suiñ ch", "s": "suin h", 
                "m": "suim m", "n": "suin n", 
                "r": "suidh r", "l": "suil l", "j": "sui ch", 
                "rh": ["suin rh", "†sui thr"], "lh": ["suin rh", "†sui thl"], "hw": "sui chw", "wh": ["suin wh", "†sui chw"],
                "a": "suin a", "e": "suin e", "i": "suin i", "o": "suin o", "u": "suin u", "û": "suin û",
            },
            suin2: {
                "p": "sui ph", "t": "sui th", "c": "sui ch", 
                "b": "sui mb", "d": "sui nd", "g": "sui ñg", 
                "br": "sui mbr", "bl": "sui mbl", "dr": "sui ndr", "gw": ["sui ñgw", "†suin ‘w"], "gr": "sui ñgr", "gl": "sui ñgl",
                "mb": "sui mb", "nd": "sui nd", "ñg": "sui ñg", 
                "f": "sui f", "th": "sui th", "h": "sui ch", "s": "sui s", 
                "m": "sui m", "n": "sui n", 
                "r": "suidh r", "l": "sui l", "j": "suin i", 
                "rh": ["sui rh", "†sui thr"], "lh": ["sui lh", "†sui thl"], "hw": "sui chw", "wh": ["sui wh", "†sui chw"],
                "a": "suin a", "e": "suin e", "i": "suin i", "o": "suin o", "u": "suin u", "û": "suin û",
            },
            pen: {
                "p": "pem b", "t": "dan d", "c": "peñ g", 
                "b": "pem b", "d": "pen d", "g": "peñ g", 
                "br": "pem br", "bl": "pem bl", "dr": "pen dr", "gw": ["peñ gw", "†pen ‘w"], "gr": "peñ gr", "gl": "peñ gl",
                "mb": "pem b", "nd": "pen d", "ñg": "peñ g", 
                "f": "pen f", "th": "pen th", "h": "peñ ch", "s": "pen h", 
                "m": "pem m", "n": "pen n", 
                "r": "pedh r", "l": "pel l", "j": "pe ch", 
                "rh": ["pen rh", "†pe thr"], "lh": ["pen lh", "†pe thl"], "hw": "pe ‘w", "wh": ["pen wh", "†pe chw"],
                "a": "pen a", "e": "pen e", "i": "pen i", "o": "pen o", "u": "pen u", "û": "pen û",
            },
            eb: {
               "p": "eb b", "t": "eb d", "c": "eb g", 
               "b": "eb v", "d": "eb dh", "g": "eb ‘", 
               "br": "eb vr", "bl": "eb vl", "dr": "eb dhr", "gw": ["eb ‘w", "†eb ‘w"], "gr": "eb ‘r", "gl": "eb ‘l",
               "mb": "eb mb", "nd": "eb n", "ñg": "eb ñg", 
               "m": "eb v", "n": "eb n", 
               "f": "eb f", "th": "eb th", "h": "eb ch", "s": "eb h", 
               "r": "eb r", "l": "eb l", "j": "eb i", 
              "rh": ["eb rh", "†eb thr"], "lh": ["eb lh", "†eb thl"], "hw": "eb chw", "wh": ["eb wh", "†eb chw"],
               "a": "eb a", "e": "eb e", "i": "eb’ i", "o": "eb o", "u": "eb u", "û": "eb û",
            },
            na: {
                "p": "na b", "t": "na d", "c": "na g", 
                "b": "na v", "d": "na dh", "g": "na ‘", 
                "br": "na vr", "bl": "na vl", "dr": "na dhr", "gw": ["na ‘w", "†na ‘w"], "gr": "na ‘r", "gl": "na ‘l",
                "mb": "na mb", "nd": "na nd", "ñg": "na ñg", 
                "m": "na v", "n": "na n", 
                "f": "na f", "th": "na th", "h": "na ch", "s": "na h", 
                "r": "na r", "l": "na l", "j": "na i", 
                "rh": ["na rh", "†na thr"], "lh": ["na lh", "†na thl"], "hw": "na chw", "wh": ["na wh", "†na chw"],
                "a": "n’ a", "e": "n’ e", "i": "n’ i", "o": "n’ o", "u": "n’ u", "û": "n’ û",
            },
            ten: {
                "p": "tem b", "t": "tan d", "c": "teñ g", 
                "b": "tem b", "d": "ten d", "g": "teñ g", 
                "br": "tem br", "bl": "tem bl", "dr": "ten dr", "gw": ["teñ gw", "†pen ‘w"], "gr": "teñ gr", "gl": "teñ gl",
                "mb": "tem b", "nd": "ten d", "ñg": "teñ g", 
                "f": "ten f", "th": "ten th", "h": "teñ ch", "s": "ten h", 
                "m": "tem m", "n": "ten n", 
                "r": "tedh r", "l": "tel l", "j": "te ch", 
                "rh": ["ten rh", "†te thr"], "lh": ["ten lh", "†te thl"], "hw": "te ‘w", "wh": ["ten wh", "†te chw"],
                "a": "ten a", "e": "ten e", "i": "ten i", "o": "ten o", "u": "ten u", "û": "ten û",
            },
            od: {
                "p": "o ph", "t": "o th", "c": "o ch", 
                "b": "o b", "d": "o d", "g": "o g", 
                "br": "o br", "bl": "o bl", "dr": "o dr", "gw": ["od ‘w", "†od ‘w"], "gr": "o gr", "gl": "o gl",
                "mb": "om b", "nd": "on d", "ñg": "oñ g", 
                "m": "o m", "n": "o n",
                "f": "oph f", "th": "oth th", "h": "och ch", "s": "os s", 
                "r": "od r", "l": "od l", "j": "od i", 
                "rh": ["od rh", "†oth r"], "lh": ["od lh", "†oth l"], "hw": "oth w", "wh": ["od w", "†oth w"],
                "a": "od a", "e": "od e", "i": "od i", "o": "od o", "u": "od u", "û": "od û",
            },
            ed: {
                "p": "e ph", "t": "e th", "c": "e ch", 
                "b": "e b", "d": "e d", "g": "e g", 
                "br": "e br", "bl": "e bl", "dr": "e dr", "gw": ["ed ‘w", "†ed ‘w"], "gr": "e gr", "gl": "e gl",
                "mb": "em b", "nd": "en d", "ñg": "eñ g", 
                "m": "e m", "n": "e n",
                "f": "eph f", "th": "eth th", "h": "ech ch", "s": "es s", 
                "r": "ed r", "l": "ed l", "j": "ed i", 
                "rh": ["ed rh", "†eth r"], "lh": ["ed lh", "†eth l"], "hw": "eth w", "wh": ["ed wh", "†eth w"],
                "a": "ed a", "e": "ed e", "i": "ed i", "o": "ed o", "u": "ed u", "û": "ed û",
            },
            am: {
                "p": "am b", "t": "am d", "c": "am g", 
                "b": "am v", "d": "am dh", "g": "am ‘", 
                "br": "am vr", "bl": "am vl", "dr": "am dhr", "gw": ["am ‘w", "†am ‘w"], "gr": "am ‘r", "gl": "am ‘l",
                "mb": "am mb", "nd": "am nd", "ñg": "am ñg", 
                "m": "am v", "n": "am n", 
                "f": "am f", "th": "am th", "h": "am ch", "s": "am h", 
                "r": "am r", "l": "am l", "j": "am i", 
                "rh": ["am rh", "†am thr"], "lh": ["am lh", "†am thl"], "hw": "am chw", "wh": ["am wh", "†am chw"],
                "a": "am a", "e": "am e", "i": "am i", "o": "am o", "u": "am u", "û": "am û",
            },
            dad: {
                "p": "dad b", "t": "dad d", "c": "dad g", 
                "b": "dad v", "d": "dad dh", "g": "dad ‘", 
                "br": "dad vr", "bl": "dad vl", "dr": "dad dhr", "gw": ["dad ‘w", "†dad ‘w"], "gr": "dad ‘r", "gl": "dad ‘l",
                "mb": "dad mb", "nd": "dad nd", "ñg": "dad ñg", 
                "m": "dad v", "n": "dad n", 
                "f": "dad f", "th": "dad th", "h": "dad ch", "s": "dad h", 
                "r": "dad r", "l": "dad l", "j": "dad i", 
                "rh": ["dad rh", "†dad thr"], "lh": ["dad lh", "†dad thl"], "hw": "dad chw", "wh": ["dad wh", "†dad chw"],
                "a": "dad a", "e": "dad e", "i": "dad i", "o": "dad o", "u": "dad u", "û": "dad û",
            },
            thar: {
                "p": "thar b", "t": "thar d", "c": "thar g", 
                "b": "thar v", "d": "thar dh", "g": "thar ‘", 
                "br": "thar vr", "bl": "thar vl", "dr": "thar dhr", "gw": ["thar ‘w", "†thar ‘w"], "gr": "thar ‘r", "gl": "thar ‘l",
                "mb": "thar mb", "nd": "thar nd", "ñg": "thar ñg", 
                "m": "thar v", "n": "thar n", 
                "f": "thar f", "th": "thar th", "h": "thar ch", "s": "thar h", 
                "r": "thar r", "l": "thar l", "j": "thar i", 
               "rh": ["thar rh", "†thar thr"], "lh": ["thar lh", "†thar thl"], "hw": "thar chw", "wh": ["thar wh", "†thar chw"],
                "a": "thar a", "e": "thar e", "i": "thar’ i", "o": "thar o", "u": "thar u", "û": "thar û",
            },
             tri: {
                "p": "tri b", "t": "tri d", "c": "tri g", 
                "b": "tri v", "d": "tri dh", "g": "tri ‘", 
                "br": "tri vr", "bl": "tri vl", "dr": "tri dhr", "gw": ["tri ‘w", "†tri ‘w"], "gr": "tri ‘r", "gl": "tri ‘l",
                "mb": "tri mb", "nd": "tri nd", "ñg": "tri ñg", 
                "m": "tri v", "n": "tri n", 
                "f": "tri f", "th": "tri th", "h": "tri ch", "s": "tri h", 
                "r": "tri r", "l": "tri l", "j": "tri i", 
                "rh": ["tri rh", "†tri thr"], "lh": ["tri lh", "†tri thl"], "hw": "tri chw", "wh": ["tri wh", "†tri chw"],
                "a": "tri a", "e": "tri e", "i": "tr’ i", "o": "tri o", "u": "tri u", "û": "tri û",
            },
            trin1: {
                "p": "trim b", "t": "trin d", "c": "triñ g", 
                "b": "trim b", "d": "trin d", "g": "triñ g", 
                "br": "trim br", "bl": "trim bl", "dr": "trin dr", "gw": ["triñ gw", "†trin ‘w"], "gr": "triñ gr", "gl": "triñ gl",
                "mb": "trim b", "nd": "trin d", "ñg": "triñ g", 
                "f": "trin f", "th": "trin th", "h": "triñ ch", "s": "trin h", 
                "m": "trim m", "n": "trin n", 
                "r": "tridh r", "l": "tril l", "j": "tri ch", 
                "rh": ["trin rh", "†tri thr"], "lh": ["trin lh", "†tri thl"], "hw": "tri chw", "wh": ["trin wh", "†tri chw"],
                "a": "trin a", "e": "trin e", "i": "trin i", "o": "trin o", "u": "trin u", "û": "trin û",
            },
            trin2: {
                "p": "tri ph", "t": "tri th", "c": "tri ch", 
                "b": "tri mb", "d": "tri nd", "g": "tri ñg", 
                "br": "tri mbr", "bl": "tri mbl", "dr": "tri ndr", "gw": ["tri ñgw", "†trin ‘w"], "gr": "tri ñgr", "gl": "tri ñgl",
                "mb": "tri mb", "nd": "tri nd", "ñg": "tri ñg", 
                "f": "tri f", "th": "tri th", "h": "tri ch", "s": "tri s", 
                "m": "tri m", "n": "tri n", 
                "r": "tridh r", "l": "tri l", "j": "trin i", 
               "rh": ["tri rh", "†tri thr"], "lh": ["tri lh", "†tri thl"], "hw": "tri chw", "wh": ["tri wh", "†tri chw"],
                "a": "trin a", "e": "trin e", "i": "trin i", "o": "trin o", "u": "trin u", "û": "trin û",
            },
            pelah: {
                "p": "pela ph", "t": "pela th", "c": "pela ch", 
                "b": "pela b", "d": "pela d", "g": "pela g", 
                "br": "pela br", "bl": "pela bl", "dr": "pela dr", "gw": ["pela gw", "†pela wh"], "gr": "pela gr",
                "mb": "pela b", "nd": "pela d", "ñg": "pela g", 
                "m": "pela m", "n": "pela n",
                "f": "pela f", "th": "pela th", "h": "pela ch", "s": "pela s", 
                "r": "pela rh", "l": "pela lh", "j": "pela ch", 
                "rh": "pela rh", "lh": "pela lh", "hw": "pela hw", "wh": "pela wh",
                "a": "pelah a", "e": "pelah e", "i": "pelah i", "o": "pelah o", "u": "pelah u", "û": "pelah û",
            },
            ho: {
                "p": "ho b", "t": "ho d", "c": "ho g", 
                "b": "ho v", "d": "ho dh", "g": "ho ‘", 
                "br": "ho vr", "bl": "ho vl", "dr": "ho dhr", "gw": ["ho ‘w", "†ho ‘w"], "gr": "ho ‘r", "gl": "ho ‘l",
                "mb": "ho m", "nd": "ho n", "ñg": "ho ñg", 
                "m": "ho v", "n": "ho n", 
                "f": "ho f", "th": "ho th", "h": "ho ch", "s": "ho h", 
                "r": "ho r", "l": "ho l", "j": "ho i", 
                "rh": ["ho rh", "†ho thr"], "lh": ["ho lh", "†ho thl"], "hw": "ho chw", "wh": ["ho wh", "†ho chw"],
                "a": "ho a", "e": "ho e", "i": "ho i", "o": "ho o", "u": "ho u", "û": "ho û",
            },
            hoe: {
                "p": "hoe b", "t": "hoe d", "c": "hoe g", 
                "b": "hoe v", "d": "hoe dh", "g": "hoe ‘", 
                "br": "hoe vr", "bl": "hoe vl", "dr": "hoe dhr", "gw": ["hoe ‘w", "†hoe ‘w"], "gr": "hoe ‘r", "gl": "hoe ‘l",
                "mb": "hoe mb", "nd": "hoe nd", "ñg": "hoe ñg", 
                "m": "hoe v", "n": "hoe n", 
                "f": "hoe f", "th": "hoe th", "h": "hoe ch", "s": "hoe h", 
                "r": "hoe r", "l": "hoe l", "j": "hoe i", 
                "rh": ["hoe rh", "†hoe thr"], "lh": ["hoe lh", "†hoe thl"], "hw": "hoe chw", "wh": ["hoe wh", "†hoe chw"],
                "a": "hoe a", "e": "ho’ e", "i": "hoe i", "o": "hoe o", "u": "hoe u", "û": "hoe û",
            },
            hoen: {
                "p": "hoe ph", "t": "hoe th", "c": "hoe ch", 
                "b": "hoe mb", "d": "hoe nd", "g": "hoe ñg", 
                "br": "hoe mbr", "bl": "hoe mbl", "dr": "hoe ndr", "gw": ["hoe ñgw", "†hoen ‘w"], "gr": "hoe ñgr", "gl": "hoe ñgl",
                "mb": "hoe mb", "nd": "hoe nd", "ñg": "hoe ñg", 
                "f": "hoe f", "th": "hoe th", "h": "hoe ch", "s": "hoe s", 
                "m": "hoe m", "n": "hoe n", 
                "r": "hoedh r", "l": "hoe l", "j": "hoen i", 
                "rh": ["hoe rh", "†hoe thr"], "lh": ["hoe lh", "†hoe thl"], "hw": "hoe chw", "wh": ["hoe wh", "†hoe chw"],
                "a": "hoen a", "e": "hoen e", "i": "hoen i", "o": "hoen o", "u": "hoen u", "û": "hoen û",
            },
            pad: {
                "p": "pad b", "t": "pad d", "c": "pad g", 
                "b": "pad v", "d": "pad dh", "g": "pad ‘", 
                "br": "pad vr", "bl": "pad vl", "dr": "pad dhr", "gw": ["pad ‘w", "†pad ‘w"], "gr": "pad ‘r", "gl": "pad ‘l",
                "mb": "pad mb", "nd": "pad nd", "ñg": "pad ñg", 
                "m": "pad v", "n": "pad n", 
                "f": "pad f", "th": "pad th", "h": "pad ch", "s": "pad h", 
                "r": "pad r", "l": "pad l", "j": "pad i", 
                "rh": ["pad rh", "†pad thr"], "lh": ["pad lh", "†pad thl"], "hw": "pad chw", "wh": ["pad wh", "†pad chw"],
                "a": "pad a", "e": "pad e", "i": "pad i", "o": "pad o", "u": "pad u","û": "pad û",
            },
            adel: {
                "p": "adel b", "t": "adel d", "c": "adel g", 
                "b": "adel v", "d": "adel dh", "g": "adel ‘", 
                "br": "adel vr", "bl": "adel vl", "dr": "adel dhr", "gw": ["adel ‘w", "†adel ‘w"], "gr": "adel ‘r", "gl": "adel ‘l",
                "mb": "adel mb", "nd": "adel nd", "ñg": "adel ñg", 
                "m": "adel v", "n": "adel n", 
                "f": "adel f", "th": "adel th", "h": "adel ch", "s": "adel h", 
                "r": "adel r", "l": "adel l", "j": "adel i", 
                "rh": ["adel rh", "†adel thr"], "lh": ["adel lh", "†adel thl"], "hw": "adel chw", "wh": ["adel wh", "†adel chw"],
                "a": "adel a", "e": "adel e", "i": "adel i", "o": "adel o", "u": "adel u","û": "adel û",
            },
            po: {
                "p": "po b", "t": "po d", "c": "po g", 
                "b": "po v", "d": "po dh", "g": "po ‘", 
                "br": "po vr", "bl": "po vl", "dr": "po dhr", "gw": ["po ‘w", "†po ‘w"], "gr": "po ‘r", "gl": "po ‘l",
                "mb": "po mb", "nd": "po nd", "ñg": "po ñg", 
                "m": "po v", "n": "po n", 
                "f": "po f", "th": "po th", "h": "po ch", "s": "po h", 
                "r": "po r", "l": "po l", "j": "po i", 
                "rh": ["po rh", "†po thr"], "lh": ["po lh", "†po thl"], "hw": "po chw", "wh": ["po wh", "†po chw"],
                "a": "po a", "e": "po e", "i": "po i", "o": "po o", "u": "po u", "û": "po û",
            },
            poe: {
                "p": "poe b", "t": "poe d", "c": "poe g", 
                "b": "poe v", "d": "poe dh", "g": "poe ‘", 
                "br": "poe vr", "bl": "poe vl", "dr": "poe dhr", "gw": ["poe ‘w", "†poe ‘w"], "gr": "poe ‘r", "gl": "poe ‘l",
                "mb": "poe mb", "nd": "poe nd", "ñg": "poe ñg", 
                "m": "poe v", "n": "poe n", 
                "f": "poe f", "th": "poe th", "h": "poe ch", "s": "poe h", 
                "r": "poe r", "l": "poe l", "j": "poe i", 
                "rh": ["poe rh", "†poe thr"], "lh": ["poe lh", "†poe thl"], "hw": "poe chw", "wh": ["poe wh", "†poe chw"],
                "a": "poe a", "e": "po’ e", "i": "poe i", "o": "poe o", "u": "poe u","û": "poe û",
            },
             poen: {
                "p": "poe ph", "t": "poe th", "c": "poe ch", 
                "b": "poe mb", "d": "poe nd", "g": "poe ñg", 
                "br": "poe mbr", "bl": "poe mbl", "dr": "poe ndr", "gw": ["poe ñgw", "†poen ‘w"], "gr": "poe ñgr", "gl": "poe ñgl",
                "mb": "poe mb", "nd": "poe nd", "ñg": "poe ñg", 
                "f": "poe f", "th": "poe th", "h": "poe ch", "s": "poe s", 
                "m": "poe m", "n": "poe n", 
                "r": "poedh r", "l": "poe l", "j": "poen i", 
                "rh": ["poe rh", "†poe thr"], "lh": ["poe lh", "†poe thl"], "hw": "poe chw", "wh": ["poe wh", "†poe chw"],
                "a": "poen a", "e": "poen e", "i": "poen i", "o": "poen o", "u": "poen u", "û": "poen û",
                
            },
            or: {
                "p": "or ph", "t": "or th", "c": "or ch", 
                "b": "or v", "d": "or dh", "g": "or ‘", 
                "br": "or vr", "bl": "or vl", "dr": "or dhr", "gw": ["or ‘w", "†or ‘w"], "gr": "or ‘r",
                "mb": "or b", "nd": "or d", "ñg": "or g", 
                "m": "or v", "n": "or n",
                "f": "or f", "th": "or th", "h": "or ch", "s": "os s", 
                "r": "or r", "l": "or l", "j": "or i", 
                "rh": ["or rh", "†or ‘r"], "lh": ["or lh", "†or ‘l"], "hw": "or ‘w", "wh": ["or wh", "†or ‘w"],
                "a": "or a", "e": "or e", "i": "or i", "o": "or o", "u": "or u", "û": "or û",
            },
            nu: {
                "p": "nu b", "t": "nu d", "c": "nu g", 
                "b": "nu v", "d": "nu dh", "g": "nu ‘", 
                "br": "nu vr", "bl": "nu vl", "dr": "nu dhr", "gw": ["nu ‘w", "†nu ‘w"], "gr": "nu ‘r", "gl": "nu ‘l",
                "mb": "nu mb", "nd": "nu nd", "ñg": "nu ñg", 
                "m": "nu v", "n": "nu n", 
                "f": "nu f", "th": "nu th", "h": "nu ch", "s": "nu h", 
                "r": "nu r", "l": "nu l", "j": "nu i", 
                "rh": ["nu rh", "†nu thr"], "lh": ["nu lh", "†nu thl"], "hw": "nu chw", "wh": ["nu wh", "†nu chw"],
                "a": "nu a", "e": "nu e", "i": "nu’ i", "o": "nu o", "u": "n’ u", "û": "nu û",
            },
            nui: {
                "p": "nui b", "t": "nui d", "c": "nui g", 
                "b": "nui v", "d": "nui dh", "g": "nui ‘", 
                "br": "nui vr", "bl": "nui vl", "dr": "nui dhr", "gw": ["nui ‘w", "†nui ‘w"], "gr": "nui ‘r", "gl": "nui ‘l",
                "mb": "nui mb", "nd": "nui nd", "ñg": "nui ñg", 
                "m": "nui v", "n": "nui n", 
                "f": "nui f", "th": "nui th", "h": "nui ch", "s": "nui h", 
                "r": "nui r", "l": "nui l", "j": "nui i", 
                "rh": ["nui rh", "†nui thr"], "lh": ["nui lh", "†nui thl"], "hw": "nui chw", "wh": ["nui wh", "†nui chw"],
                "a": "nui a", "e": "nui e", "i": "nu’ i", "o": "nui o", "u": "nui u", "û": "nui û",
            },
             nuin: {
                "p": "nui ph", "t": "nui th", "c": "nui ch", 
                "b": "nui mb", "d": "nui nd", "g": "nui ñg", 
                "br": "nui mbr", "bl": "nui mbl", "dr": "nui ndr", "gw": ["nui ñgw", "†nuin ‘w"], "gr": "nui ñgr", "gl": "nui ñgl",
                "mb": "nui mb", "nd": "nui nd", "ñg": "nui ñg", 
                "f": "nui f", "th": "nui th", "h": "nui ch", "s": "nui s", 
                "m": "nui m", "n": "nui n", 
                "r": "nuidh r", "l": "nui l", "j": "nuin i", 
                "rh": ["nui rh", "†nui thr"], "lh": ["nui lh", "†nui thl"], "hw": "nui chw", "wh": ["nui wh", "†nui chw"],
                "a": "nuin a", "e": "nuin e", "i": "nuin i", "o": "nuin o", "u": "nuin u", "û": "nuin û",     
            },
            mi: {
                "p": "mi b", "t": "mi d", "c": "mi g", 
                "b": "mi v", "d": "mi dh", "g": "mi ‘", 
                "br": "mi vr", "bl": "mi vl", "dr": "mi dhr", "gw": ["mi ‘w", "†mi ‘w"], "gr": "mi ‘r", "gl": "mi ‘l",
                "mb": "mi mb", "nd": "mi nd", "ñg": "mi ñg", 
                "m": "mi v", "n": "mi n", 
                "f": "mi f", "th": "mi th", "h": "mi ch", "s": "mi h", 
                "r": "mi r", "l": "mi l", "j": "mi i", 
                "rh": ["mi rh", "†mi thr"], "lh": ["mi lh", "†mi thl"], "hw": "mi chw", "wh": ["mi wh", "†mi chw"],
                "a": "mi a", "e": "mi e", "i": "m’ i", "o": "mi o", "u": "mi u", "û": "mi û",
            },
            min1: {
                "p": "mim b", "t": "min d", "c": "miñ g", 
                "b": "mim b", "d": "min d", "g": "miñ g", 
                "br": "mim br", "bl": "mim bl", "dr": "min dr", "gw": ["miñ gw", "†min ‘w"], "gr": "miñ gr", "gl": "miñ gl",
                "mb": "mim b", "nd": "min d", "ñg": "miñ g", 
                "f": "min f", "th": "min th", "h": "miñ ch", "s": "min h", 
                "m": "mim m", "n": "min n", 
                "r": "midh r", "l": "mil l", "j": "mi ch", 
                "rh": ["min rh", "†mi thr"], "lh": ["min lh", "†mi thl"], "hw": "mi chw", "wh": ["min wh", "†mi chw"],
                "a": "min a", "e": "min e", "i": "min i", "o": "min o", "u": "min u", "û": "min û",
            },
            min2: {
                "p": "mi ph", "t": "mi th", "c": "mi ch", 
                "b": "mi mb", "d": "mi nd", "g": "mi ñg", 
                "br": "mi mbr", "bl": "mi mbl", "dr": "mi ndr", "gw": ["mi ñgw", "†min ‘w"], "gr": "mi ñgr", "gl": "mi ñgl",
                "mb": "mi mb", "nd": "mi nd", "ñg": "mi ñg", 
                "f": "mi f", "th": "mi th", "h": "mi ch", "s": "mi s", 
                "m": "mi m", "n": "mi n", 
                "r": "midh r", "l": "mi l", "j": "min i", 
               "rh": ["mi rh", "†mi thr"], "lh": ["mi lh", "†mi thl"], "hw": "mi chw", "wh": ["mi wh", "†mi chw"],
                "a": "min a", "e": "min e", "i": "min i", "o": "min o", "u": "min u", "û": "min û",
            },
            im: {
                "p": "im b", "t": "im d", "c": "im g", 
                "b": "im v", "d": "im dh", "g": "im ‘", 
                "br": "im vr", "bl": "im vl", "dr": "im dhr", "gw": ["im ‘w", "†im ‘w"], "gr": "im ‘r", "gl": "im ‘l",
                "mb": "im mb", "nd": "im nd", "ñg": "im ñg", 
                "m": "im v", "n": "im n", 
                "f": "im f", "th": "im th", "h": "im ch", "s": "im h", 
                "r": "im r", "l": "im l", "j": "im i", 
                "rh": ["im rh", "†im thr"], "lh": ["im lh", "†im thl"], "hw": "im chw", "wh": ["im wh", "†im chw"],
                "a": "im a", "e": "im e", "i": "im i", "o": "im o", "u": "im u", "û": "im û",
            },
            sa: {
                "p": "sa b", "t": "sa d", "c": "sa g", 
                "b": "sa v", "d": "sa dh", "g": "sa ‘", 
                "br": "sa vr", "bl": "sa vl", "dr": "sa dhr", "gw": ["sa ‘w", "†sa ‘w"], "gr": "sa ‘r", "gl": "sa ‘l",
                "mb": "sa mb", "nd": "sa nd", "ñg": "sa ñg", 
                "m": "sa v", "n": "sa n", 
                "f": "sa f", "th": "sa th", "h": "sa ch", "s": "sa h", 
                "r": "sa r", "l": "sa l", "j": "sa i", 
                "rh": ["sa rh", "†sa thr"], "lh": ["sa lh", "†sa thl"], "hw": "sa chw", "wh": ["sa wh", "†sa chw"],
                "a": "s’ a", "e": "sa e", "i": "sa i", "o": "sa o", "u": "sa u", "û": "sa û",
            },
            mig: {
                "p": "mig b", "t": "mig d", "c": "mig g", 
                "b": "mig v", "d": "mig dh", "g": "mig ‘", 
                "br": "mig vr", "bl": "mig vl", "dr": "mig dhr", "gw": ["mig ‘w", "†mig ‘w"], "gr": "mig ‘r", "gl": "mig ‘l",
                "mb": "mig mb", "nd": "mig nd", "ñg": "mig ñg", 
                "m": "mig v", "n": "mig n", 
                "f": "mig f", "th": "mig th", "h": "mig ch", "s": "mig h", 
                "r": "mig r", "l": "mig l", "j": "mig i", 
                "rh": ["mig rh", "†mig thr"], "lh": ["mig lh", "†mig thl"], "hw": "mig chw", "wh": ["mig wh", "†mig chw"],
                "a": "mig a", "e": "mig e", "i": "mig i", "o": "mig o", "u": "mig u", "û": "mig û",
            },
            nef: {
                "p": "nef b", "t": "nef d", "c": "nef g", 
                "b": "nef v", "d": "nef dh", "g": "nef ‘", 
                "br": "nef vr", "bl": "nef vl", "dr": "nef dhr", "gw": ["nef ‘w", "†nef ‘w"], "gr": "nef ‘r", "gl": "nef ‘l",
                "mb": "nef mb", "nd": "nef nd", "ñg": "nef ñg", 
                "m": "nef v", "n": "nef n", 
                "f": "nef f", "th": "nef th", "h": "nef ch", "s": "nef h", 
                "r": "nef r", "l": "nef l", "j": "nef i", 
                "rh": ["nef rh", "†nef thr"], "lh": ["nef lh", "†nef thl"], "hw": "nef chw", "wh": ["nef wh", "†nef chw"],
                "a": "nef a", "e": "nef e", "i": "nef i", "o": "nef o", "u": "nef u", "û": "nef û",
            },
            athar: {
                "p": "athar b", "t": "athar d", "c": "athar g", 
                "b": "athar v", "d": "athar dh", "g": "athar ‘", 
                "br": "athar vr", "bl": "athar vl", "dr": "athar dhr", "gw": ["athar ‘w", "†athar ‘w"], "gr": "athar ‘r", "gl": "athar ‘l",
                "mb": "athar mb", "nd": "athar nd", "ñg": "athar ñg", 
                "m": "athar v", "n": "athar n", 
                "f": "athar f", "th": "athar th", "h": "athar ch", "s": "athar h", 
                "r": "athar r", "l": "athar l", "j": "athar i", 
                "rh": ["athar rh", "†athar thr"], "lh": ["athar lh", "†athar thl"], "hw": "athar chw", "wh": ["athar wh", "†athar chw"],
                "a": "athar a", "e": "athar e", "i": "athar i", "o": "athar o", "u": "athar u", "û": "athar û",
            },
            ab: {
                "p": "ab b", "t": "ab d", "c": "ab g", 
                "b": "ab v", "d": "ab dh", "g": "ab ‘", 
                "br": "ab vr", "bl": "ab vl", "dr": "ab dhr", "gw": ["ab ‘w", "†ab ‘w"], "gr": "ab ‘r", "gl": "ab ‘l",
                "mb": "ab mb", "nd": "ab nd", "ñg": "ab ñg", 
                "m": "ab v", "n": "ab n", 
                "f": "ab f", "th": "ab th", "h": "ab ch", "s": "ab h", 
                "r": "ab r", "l": "ab l", "j": "ab i", 
                "rh": ["ab rh", "†ab thr"], "lh": ["ab lh", "†ab thl"], "hw": "ab chw", "wh": ["ab wh", "†ab chw"],
                "a": "ab a", "e": "ab e", "i": "ab i", "o": "ab o", "u": "ab u", "û": "ab û",
            },
            cad: {
                "p": "cad b", "t": "cad d", "c": "cad g", 
                "b": "cad v", "d": "cad dh", "g": "cad ‘", 
                "br": "cad vr", "bl": "cad vl", "dr": "cad dhr", "gw": ["cad ‘w", "†cad ‘w"], "gr": "cad ‘r", "gl": "cad ‘l",
                "mb": "cad mb", "nd": "cad nd", "ñg": "cad ñg", 
                "m": "cad v", "n": "cad n", 
                "f": "cad f", "th": "cad th", "h": "cad ch", "s": "cad h", 
                "r": "cad r", "l": "cad l", "j": "cad i", 
                "rh": ["cad rh", "†cad thr"], "lh": ["cad lh", "†cad thl"], "hw": "cad chw", "wh": ["cad wh", "†cad chw"],
                "a": "cad a", "e": "cad e", "i": "cad i", "o": "cad o", "u": "cad u", "û": "cad û",
           },
           fo: {
                "p": "fo b", "t": "fo d", "c": "fo g", 
                "b": "fo v", "d": "fo dh", "g": "fo ‘", 
                "br": "fo vr", "bl": "fo vl", "dr": "fo dhr", "gw": ["fo ‘w", "†fo ‘w"], "gr": "fo ‘r", "gl": "fo ‘l",
                "mb": "fo mb", "nd": "fo nd", "ñg": "fo ñg", 
                "m": "fo v", "n": "fo n", 
                "f": "fo f", "th": "fo th", "h": "fo ch", "s": "fo h", 
                "r": "fo r", "l": "fo l", "j": "fo i", 
                "rh": ["fo rh", "†fo thr"], "lh": ["fo lh", "†fo thl"], "hw": "fo chw", "wh": ["fo wh", "†fo chw"],
                "a": "fo a", "e": "fo e", "i": "fo i", "o": "fo o", "u": "fo u", "û": "fo û",
           },
           foe: {
                "p": "foe b", "t": "foe d", "c": "foe g", 
                "b": "foe v", "d": "foe dh", "g": "foe ‘", 
                "br": "foe vr", "bl": "foe vl", "dr": "foe dhr", "gw": ["foe ‘w", "†foe ‘w"], "gr": "foe ‘r", "gl": "foe ‘l",
                "mb": "foe mb", "nd": "foe nd", "ñg": "foe ñg", 
                "m": "foe v", "n": "foe n", 
                "f": "foe f", "th": "foe th", "h": "foe ch", "s": "foe h", 
                "r": "foe r", "l": "foe l", "j": "foe i", 
                "rh": ["foe rh", "†foe thr"], "lh": ["foe lh", "†foe thl"], "hw": "foe chw", "wh": ["foe hw", "†foe chw"],
                "a": "foe a", "e": "fo’ e", "i": "foe i", "o": "foe o", "u": "foe u", "û": "foe û",
           },
           foen: {
                "p": "foe ph", "t": "foe th", "c": "foe ch", 
                "b": "foe mb", "d": "foe nd", "g": "foe ñg", 
                "br": "foe mbr", "bl": "foe mbl", "dr": "foe ndr", "gw": ["foe ñgw", "†foen ‘w"], "gr": "foe ñgr", "gl": "foe ñgl",
                "mb": "foe mb", "nd": "foe nd", "ñg": "foe ñg", 
                "f": "foe f", "th": "foe th", "h": "foe ch", "s": "foe s", 
                "m": "foe m", "n": "foe n", 
                "r": "foedh r", "l": "foe l", "j": "foen i", 
                "rh": ["foe rh", "†foe thr"], "lh": ["foe lh", "†foe thl"], "hw": "foe chw", "wh": ["foe wh", "†foe chw"],
                "a": "foen a", "e": "foen e", "i": "foen i", "o": "foen o", "u": "foen u", "û": "foen û",
          },
        };

// Exception list for special plural forms (keys are case-sensitive with accents)
const exceptionPlurals = {
     'caun': 'conin',
    'ael': 'aelin',
    'têw': 'tîw',
    'tê': 'tî',
    'feir': 'fîr',
    'miniel': 'mínil',
    'naug': 'noeg',
    'thôn': 'thuin',
    'bâr': 'bair',
    'pôd': 'pŷd',
    'ódel': 'ódil',
    'rodon': 'rodyn',
    'cair': 'cîr',
    'gail': 'gîl',
    'laich': 'lîch',
    'gwein': 'gwîn',
    'sein': 'sîn',
    'thlein': 'thlîn',
    'air': 'îr',
    'teleir': 'telir',
    'balrog': 'belroeg',
    'niben-nog': 'nibin-noeg',
    'eruchên': 'eruchîn',
    'galadhremmen': 'galadhremmin',
    'morben': 'morbin',
    'morchant': 'morchaint',
    'tad-dal': 'tad-dail',
    'ion': 'yn(d)',
    'ionn': 'ynd',
    'iond': 'ynd',
    'iôn': 'ynd',
    'gaear': 'geiair',
    'aenu': 'aeny',
    'peth': 'pith',
    'meth': 'mith',
    'neth': 'nith',
    'breth': 'brith',
    'ach': 'ech',
    'ñgolodhrim': 'ñgolodhrim',
    'fela': 'fili',
    'thôl': 'thely',
    'whest': 'whist',
    'gwend': 'gwind',
    'nadha': 'nedhi',
    'lhoss' : 'lhuis',
     'loss' : 'luis',
 'noss' : 'nuis',
 'ross' : 'ruis',
 'thoss' : 'thuis',
 'bloss' : 'bluis',
 'toss' : 'tuis',
 'caw' : 'coe',
 'rodyn' : 'rodyn',
 'eirien' : 'eirin'


};

// Function to get the plural form, handling exceptions
function getPluralForm(word) {
    if (exceptionPlurals[word]) {
        return exceptionPlurals[word];
    } else {
        return pluralize(word);
    }
}

function applyMutation(noun, mutationType) {
  if (noun === "rhass") {
    const rhassOverride = {
     articlei: ["i·thrass", "†i·chrass"],
      articlee: ["e·rhass", "†e·chrass"],
      articlein: ["ith·rais", "†i·chrais"],
      articlein2: ["i·rhais", "†i·chrais"],
      an: ["an rhass", "†a chrass"],
      eni: ["(e)ni rhass", "†(e)ni chrass"],
      enin: ["(e)ni rhais", "†(e)ni chrais"],
      nan: ["na rhass", "†na chrass"],
      o: ["o rhass", "†o chrass"],
      ui: ["ui rhass", "†ui chrass"],
      uin: ["ui rhais", "†ui chrais"],
      dan: ["da rhass", "†da chrass"],
      di: ["di rhass", "†di chrass"],
      din1: ["din rhass", "†di chrass"],
      din2: ["di rhais", "†di chrais"], 
      oh: ["o rhass", "†o chrass"], 
      gu: ["gu rhass", "†gu chrass"],
      gui: ["gui rhass", "†gui chrass"],
      guin: ["gui rhais", "†gui chrais"],
      mo: ["mo rhass", "†mo chrass"],
      moe: ["moe rhass", "†moe chrass"],
      moen: ["moe rhais", "†moe chrais"],
      be: ["be rhass", "†be chrass"],
      ben1: ["ben rhass", "†be chrass"],
      ben2: ["be rhais", "†be chrais"],
      pen: ["pe rhass", "†pe chrass"],
      eb: ["eb rhass", "†eb chrass"],
      na: ["na rhass", "†na chrass"],
      ten: ["te rhass", "†te chrass"],
      od: ["od rhass", "†och rass"],
      ed: ["ed rhass", "†ech rass"],
      thar: ["thar rhass", "†thar chrass"],
      palah: ["pela rhass", "†pela chrass"],
      ho: ["ho rhass", "†ho chrass"],
      hoe: ["hoe rhass", "†hoe chrass"],
      hoen: ["hoe rhais", "†hoe chrais"],
      pad: ["pad rhass", "†pad chrass"],
      adel: ["adel rhass", "†adel thrass"],
      po: ["po rhass", "†po chrass"],
      poe: ["poe rhass", "†poe chrass"],
      poen: ["poe rhais", "†poe chrais"],
      or: ["or rhass", "†or chrass"],
      nu: ["nu rhass", "†nu chrass"],
      nui: ["nui rhass", "†nui chrass"],
      nuin: ["nui rhais", "†nui chrais"],
      mi: ["mi rhass", "†mi chassr"],
      min1: ["min rhass", "†mi chrass"],
      min2: ["mi rhais", "†mi chrais"],
      im: ["im rhass", "†im chrass"],
      sa: ["sa rhass", "†sa chrass"],
      mig: ["mig rhass", "†mig chrass"],
      nef: ["nef rhass", "†nef chrass"],
      ab: ["ab rhass", "†ab chrass"],
      cad: ["cad rhass", "†cad chrass"],
      fo: ["fo rhass", "†fo chrass"],
      foe: ["foe rhass", "†foe chrass"],
      foen: ["foe rhais", "†foe chrais"]
    };

    if (rhassOverride[mutationType]) {
      return rhassOverride[mutationType].join(" / ");
    }
  }
  
  let firstLetter = noun.slice(0, 2); // Check for consonant clusters first
  const mutationSet = mutations[mutationType];
  let mutatedNoun;

  if (mutationType === "nai") return "n' " + applyMutation(noun, "articlee");
  if (mutationType === "edi") return "ed " + applyMutation(noun, "articlee");
  if (mutationType === "odi") return "od " + applyMutation(noun, "articlee");
  if (mutationType === "ohi") return "oh " + applyMutation(noun, "articlee");

  // If the first two letters are not a recognized cluster, check the first letter
  if (!mutationSet[firstLetter]) {
    firstLetter = noun[0];
  }

  const rest = noun.slice(firstLetter.length);
  const val = mutationSet[firstLetter];

  if (val) {

    if (Array.isArray(val)) {
      mutatedNoun = val.map(prefix => prefix + rest).join(" / "); // or "\n"
    } else {
      mutatedNoun = val + rest;
    }
  } else {
    mutatedNoun = noun;
  }

  return mutatedNoun;
}


// Helper function to check if a character is a vowel
function isVowel(c) {
    return 'aeiouyáéíóúŷâêîôû'.includes(c.toLowerCase());
}

// Helper function to check if a vowel is long
function isLongVowel(c) {
    return 'áéíóúŷâêîôû'.includes(c.toLowerCase());
}

// Helper function to check if two characters form a diphthong
function isDiphthong(c1, c2) {
    const diphthongs = ['ae', 'oe', 'ei', 'ai', 'ui', 'au', 'oe'];
    return diphthongs.includes((c1 + c2).toLowerCase());
}

// Helper function to check for diphthongs that do not mutate
function isNonMutatingDiphthong(c1, c2) {
    const nonMutatingDiphthongs = ['ae', 'oe', 'ei', 'ai', 'ui', 'ie'];
    return nonMutatingDiphthongs.includes((c1 + c2).toLowerCase());
}

// Updated helper function to check if a syllable ends with a consonant cluster
function endsWithConsonantCluster(syllable) {
    // Treat these as single consonants
    const singleConsonants = ['th', 'dh', 'ch', 'ng'];
    // Treat these as special double consonants
    const specialDoubleConsonants = ['ss', 'll', 'nn'];

    // Check for single consonants first
    for (let consonant of singleConsonants) {
        if (syllable.endsWith(consonant)) {
            return false; // These are not treated as clusters
        }
    }

    // Check for special double consonants
    for (let doubleConsonant of specialDoubleConsonants) {
        if (syllable.endsWith(doubleConsonant)) {
            return false; // Treat as not ending with a consonant cluster
        }
    }

    let consonantCount = 0;
    let i = syllable.length - 1;

    // Count consecutive consonants from the end
    while (i >= 0 && !isVowel(syllable[i])) {
        consonantCount++;
        i--;
    }

    // A consonant cluster is two or more consonants at the end
    return consonantCount >= 2;
}

// Function to apply mutations to non-final syllables
function mutateNonFinalSyllable(syllable) {
    let letters = syllable.split('');
    for (let i = 0; i < letters.length; i++) {
        // Check for diphthongs first
        if (i + 1 < letters.length && isDiphthong(letters[i], letters[i + 1])) {
            // If it's a non-mutating diphthong, skip mutation
            if (isNonMutatingDiphthong(letters[i], letters[i + 1])) {
                break; // Do not mutate; exit the loop
            } else {
                // Handle mutating diphthongs if needed (currently, we skip mutation for diphthongs)
                break;
            }
        } else if (isVowel(letters[i])) {
            let c = letters[i];
            if (isLongVowel(c)) {
                break;
            }
            // Check if the vowel is part of a non-mutating diphthong
            if (i + 1 < letters.length && isNonMutatingDiphthong(c, letters[i + 1])) {
                break; // Do not mutate; exit the loop
            }
            if (c === 'a' || c === 'o') {
                letters[i] = 'e';
            } else if (c === 'u') {
                letters[i] = 'y';
            }
            break;
        }
        // Continue to next letter if no conditions are met
    }
    return letters.join('');
}

// Updated function to apply mutations to the final syllable
function mutateFinalSyllable(syllable, isMonosyllable, originalWord) {
    let letters = syllable.split('');
    let lastVowelIndex = -1;
    let vowel = '';
    let longVowel = false;
    let diphthong = false;
    let finalAtoE = false;

    // Find the last vowel or diphthong in the syllable
    for (let i = letters.length - 1; i >= 0; i--) {
        if (i > 0 && isDiphthong(letters[i - 1], letters[i])) {
            console.log(11, letters[i], letters[i - 1])
            vowel = letters[i - 1] + letters[i];
            lastVowelIndex = i - 1;
            diphthong = true;
            break;
        } else if (isVowel(letters[i])) {
            vowel = letters[i];
            lastVowelIndex = i;
            longVowel = isLongVowel(vowel);
            finalAtoE = /(a(?:m|rn|ng|nd|rth|rdh))+$/i.test(originalWord)
            break;
        }
    }

    // Determine if the syllable ends with a consonant cluster
    let endsWithCluster = endsWithConsonantCluster(syllable);

    // Apply vowel mutations based on the rules
    if (vowel) {
        if (isMonosyllable) {
            // Special case for "gil"
            if (originalWord === 'gil') {
                letters[lastVowelIndex] = 'î';
            }
            // Do not mutate non-mutating diphthongs in monosyllables
            else if (diphthong && isNonMutatingDiphthong(vowel[0], vowel[1])) {
                // Do nothing
            } else if (vowel === 'a' || vowel === 'â') {
                if (endsWithCluster || finalAtoE) {
                    // Consonant cluster, 'a' changes to 'e'
                    letters.splice(lastVowelIndex, vowel.length, 'e');
                } else {
                    // No consonant cluster, 'a' changes to 'ai'
                    letters.splice(lastVowelIndex, vowel.length, 'ai');
                }
            } else if (vowel === 'o' || vowel === 'u') {
                letters[lastVowelIndex] = 'y';
            } else if (['ô', 'û'].includes(vowel)) {
                letters.splice(lastVowelIndex, vowel.length, 'ui');
            } else if (vowel === 'au') {
                letters.splice(lastVowelIndex, 2, 'oe');
            } else if (vowel === 'ê') {
                // Change 'ê' to 'î'
                letters[lastVowelIndex] = 'î';
            }
        } else {
            // Polysyllabic word mutations
            if (vowel === 'a') {
                if (endsWithCluster) {
                    // Consonant cluster inhibits i-intrusion, so 'a' changes to 'e'
                    letters[lastVowelIndex] = 'e';
                } else {
                    // Single consonant, 'a' changes to 'ai' (i-intrusion)
                    letters.splice(lastVowelIndex, 1, 'ai');
                }
            } else if (vowel === 'o' || vowel === 'u') {
                letters[lastVowelIndex] = 'y';
            } else if (vowel === 'au') {
                letters.splice(lastVowelIndex, 2, 'oe');
            } else if (vowel === 'e' && !longVowel) {
                letters[lastVowelIndex] = 'i';
            } else if (vowel === 'ê') {
                // Change 'ê' to 'î' for polysyllables
                letters[lastVowelIndex] = 'î';
            }
        }
    }

    // Reduce special double consonants to single consonants in the plural
    const specialDoubleConsonants = ['ss', 'll', 'nn'];
    for (let doubleConsonant of specialDoubleConsonants) {
        if (syllable.endsWith(doubleConsonant)) {
            // Remove the last letter to reduce the double consonant
            letters.pop();
            break;
        }
    }

    return letters.join('');
}

// Function to remove initial mutations
function removeInitialMutation(word) {
    if (word.startsWith('ng')) {
        return 'g' + word.slice(2);
    }
    // Add other initial mutation checks if necessary
    return word;
}

// Function to reapply initial mutations
function reapplyInitialMutation(originalWord, pluralizedWord) {
    if (originalWord.startsWith('ng') && pluralizedWord.startsWith('g')) {
        return 'ng' + pluralizedWord.slice(1);
    }
    // Add other mutation reapplications if necessary
    return pluralizedWord;
}

// Function to pluralize the noun
function pluralize(word) {
    // Remove initial mutations to get the base word
    const baseWord = removeInitialMutation(word);

    // Special case for "gil"
    if (baseWord === 'gil') {
        let plural = 'gîl'; // Apply the special exception

        // Reapply the initial mutation
        plural = reapplyInitialMutation(word, plural);

        return plural;
    }

    // Proceed with your existing pluralization logic for other words
    let letters = baseWord.split('');
    let syllables = [];
    let i = 0;

    while (i < letters.length) {
        let syllable = '';
        while (i < letters.length && !isVowel(letters[i])) {
            syllable += letters[i];
            i++;
        }
        if (i < letters.length) {
            if (i + 1 < letters.length && isDiphthong(letters[i], letters[i + 1])) {
                syllable += letters[i] + letters[i + 1];
                i += 2;
            } else {
                syllable += letters[i];
                i++;
            }
        }
        while (
            i < letters.length &&
            !isVowel(letters[i]) &&
            !(i + 1 < letters.length && isDiphthong(letters[i], letters[i + 1]))
        ) {
            syllable += letters[i];
            i++;
        }
        syllables.push(syllable);
    }

    // Apply mutations to non-final syllables
    for (let j = 0; j < syllables.length - 1; j++) {
        syllables[j] = mutateNonFinalSyllable(syllables[j]);
    }

    // Determine if the word is monosyllabic
    let isMonosyllable = syllables.length === 1;

    // Mutate the final syllable
    let lastSyllable = syllables[syllables.length - 1];
    let pluralLastSyllable = mutateFinalSyllable(lastSyllable, isMonosyllable, baseWord);
    syllables[syllables.length - 1] = pluralLastSyllable;

   // Apply initial mutation only to polysyllabic words starting with 'a'
    if (syllables.length > 1 && syllables[0][0] === 'a' && !
isDiphthong(syllables[0][0],
syllables[0][1])) {
Syllables[0] =
syllables[0].replace( 'a', 'e' );
  }


    // Reapply initial mutations
    let pluralizedWord = syllables.join('');
    pluralizedWord = pluralizedWord.replace(/^iist$/i, 'ist');

pluralizedWord = reapplyInitialMutation(word, pluralizedWord);

    return pluralizedWord;
}

// Added function: Helper function to autocorrect "ng" to "ñg" at the beginning of the word
function autocorrectNg(noun) {
    if (noun.startsWith('ng')) {
        noun = 'ñg' + noun.slice(2);
    }
    return noun;
}

// Function to display mutations as user types
function displayMutations() {
    let noun = document.getElementById("noun").value.trim().toLowerCase();
    noun = autocorrectNg(noun); // Apply autocorrection here


    if (!noun) {
        // Clear outputs if input is empty
        document.getElementById("articlei-mutation").textContent = '';
        document.getElementById("articlee-mutation").textContent = '';
        document.getElementById("articlein-mutation").textContent = '';
        document.getElementById("articlein2-mutation").textContent = '';
        document.getElementById("an-mutation").textContent = '';
        document.getElementById("eni-mutation").textContent = '';
        document.getElementById("enin-mutation").textContent = '';
        document.getElementById("nan-mutation").textContent = '';
        document.getElementById("dan-mutation").textContent = '';
        document.getElementById("o-mutation").textContent = '';
        document.getElementById("ui-mutation").textContent = '';
        document.getElementById("uin-mutation").textContent = '';
        document.getElementById("di-mutation").textContent = '';
        document.getElementById("din1-mutation").textContent = '';
        document.getElementById("din2-mutation").textContent = '';
        document.getElementById("oh-mutation").textContent = '';
        document.getElementById("gu-mutation").textContent = '';
        document.getElementById("gui-mutation").textContent = '';
        document.getElementById("guin-mutation").textContent = '';
        document.getElementById("mo-mutation").textContent = '';
        document.getElementById("moe-mutation").textContent = '';
        document.getElementById("moen-mutation").textContent = '';
        document.getElementById("be-mutation").textContent = '';
        document.getElementById("ben1-mutation").textContent = '';
        document.getElementById("ben2-mutation").textContent = '';
        document.getElementById("sui-mutation").textContent = '';
        document.getElementById("suin1-mutation").textContent = '';
        document.getElementById("suin2-mutation").textContent = '';
        document.getElementById("pen-mutation").textContent = '';
        document.getElementById("eb-mutation").textContent = '';
        document.getElementById("na-mutation").textContent = '';
        document.getElementById("ten-mutation").textContent = '';
        document.getElementById("od-mutation").textContent = '';
        document.getElementById("ed-mutation").textContent = '';
        document.getElementById("am-mutation").textContent = '';
        document.getElementById("dad-mutation").textContent = '';
        document.getElementById("thar-mutation").textContent = '';
        document.getElementById("tri-mutation").textContent = '';
        document.getElementById("trin1-mutation").textContent = '';
        document.getElementById("trin2-mutation").textContent = '';
        document.getElementById("pelah-mutation").textContent = '';
        document.getElementById("ho-mutation").textContent = '';
        document.getElementById("hoe-mutation").textContent = '';
        document.getElementById("hoen-mutation").textContent = '';
        document.getElementById("pad-mutation").textContent = '';
        document.getElementById("adel-mutation").textContent = '';
        document.getElementById("po-mutation").textContent = '';
        document.getElementById("poe-mutation").textContent = '';
        document.getElementById("poen-mutation").textContent = '';
        document.getElementById("or-mutation").textContent = '';
        document.getElementById("nu-mutation").textContent = '';
        document.getElementById("nui-mutation").textContent = '';
        document.getElementById("nuin-mutation").textContent = '';
        document.getElementById("mi-mutation").textContent = '';
        document.getElementById("min1-mutation").textContent = '';
        document.getElementById("min2-mutation").textContent = '';
        document.getElementById("im-mutation").textContent = '';
        document.getElementById("sa-mutation").textContent = '';
        document.getElementById("mig-mutation").textContent = '';
        document.getElementById("nef-mutation").textContent = '';
        document.getElementById("athar-mutation").textContent = '';
        document.getElementById("ab-mutation").textContent = '';
        document.getElementById("cad-mutation").textContent = '';
        document.getElementById("fo-mutation").textContent = '';
        document.getElementById("foe-mutation").textContent = '';
        document.getElementById("foen-mutation").textContent = '';
        return;
    }

    document.getElementById("articlei-mutation").textContent = applyMutation(noun, "articlei");
    document.getElementById("articlee-mutation").textContent = applyMutation(noun, "articlee");

    // Pluralize the noun before applying the nasal1 mutation
    const pluralNoun = getPluralForm(noun);

// --- HARD OVERRIDE: rhass for articlein + articlein2 ONLY ---
if (noun === "rhass") {
  // force these two, no pluralizer, no applyMutation, no vowel-branching
  document.getElementById("articlein-mutation").textContent  = "ith·rais / †i·chrais";
  document.getElementById("articlein2-mutation").textContent = "i·rhais / †i·chrais";
} else {
  // ---- your existing articlein / articlein2 logic ----
  const pluralNoun = getPluralForm(noun);

  if (isVowel(pluralNoun[0])) {
    document.getElementById("articlein-mutation").textContent = "in·" + pluralNoun;
    document.getElementById("articlein2-mutation").textContent = "in·" + pluralNoun;
  } else {
    document.getElementById("articlein-mutation").textContent = applyMutation(pluralNoun, "articlein");
    document.getElementById("articlein2-mutation").textContent = applyMutation(pluralNoun, "articlein2");
  }

  // (keep using pluralNoun below like you already do)
}


    // Apply mutations to the singular noun for other cases
    document.getElementById("an-mutation").textContent = applyMutation(noun, "an");
    document.getElementById("eni-mutation").textContent = applyMutation(noun, "eni");
    document.getElementById("enin-mutation").textContent = applyMutation(pluralNoun, "enin");
    document.getElementById("nan-mutation").textContent = applyMutation(noun, "nan");
    document.getElementById("o-mutation").textContent = applyMutation(noun, "o")
    document.getElementById("ui-mutation").textContent = applyMutation(noun, "ui")
    document.getElementById("uin-mutation").textContent = applyMutation(pluralNoun, "uin");
    document.getElementById("dan-mutation").textContent = applyMutation(noun, "dan");
    document.getElementById("di-mutation").textContent = applyMutation(noun, "di");
    document.getElementById("din1-mutation").textContent = applyMutation(noun, "din1");
    document.getElementById("din2-mutation").textContent = applyMutation(pluralNoun, "din2");
    document.getElementById("oh-mutation").textContent = applyMutation(noun, "oh");
    document.getElementById("gu-mutation").textContent = applyMutation(noun, "gu")
    document.getElementById("gui-mutation").textContent = applyMutation(noun, "gui")
    document.getElementById("guin-mutation").textContent = applyMutation(pluralNoun, "guin");
    document.getElementById("mo-mutation").textContent = applyMutation(noun, "mo")
    document.getElementById("moe-mutation").textContent = applyMutation(noun, "moe")
    document.getElementById("moen-mutation").textContent = applyMutation(pluralNoun, "moen");
    document.getElementById("be-mutation").textContent = applyMutation(noun, "be");
    document.getElementById("ben1-mutation").textContent = applyMutation(noun, "ben1");
    document.getElementById("ben2-mutation").textContent = applyMutation(pluralNoun, "ben2");
    document.getElementById("sui-mutation").textContent = applyMutation(noun, "sui");
    document.getElementById("suin1-mutation").textContent = applyMutation(noun, "suin1");
    document.getElementById("suin2-mutation").textContent = applyMutation(pluralNoun, "suin2");
    document.getElementById("pen-mutation").textContent = applyMutation(noun, "pen");
    document.getElementById("eb-mutation").textContent = applyMutation(noun, "eb");
    document.getElementById("na-mutation").textContent = applyMutation(noun, "na");
    document.getElementById("ten-mutation").textContent = applyMutation(noun, "ten");
    document.getElementById("od-mutation").textContent = applyMutation(noun, "od");
    document.getElementById("ed-mutation").textContent = applyMutation(noun, "ed");
    document.getElementById("am-mutation").textContent = applyMutation(noun, "am");
    document.getElementById("dad-mutation").textContent = applyMutation(noun, "dad");
    document.getElementById("thar-mutation").textContent = applyMutation(noun, "thar");
    document.getElementById("tri-mutation").textContent = applyMutation(noun, "tri");
    document.getElementById("trin1-mutation").textContent = applyMutation(noun, "trin1");
    document.getElementById("trin2-mutation").textContent = applyMutation(pluralNoun, "trin2");
    document.getElementById("pelah-mutation").textContent = applyMutation(noun, "pelah");
    document.getElementById("ho-mutation").textContent = applyMutation(noun, "ho")
    document.getElementById("hoe-mutation").textContent = applyMutation(noun, "hoe")
    document.getElementById("hoen-mutation").textContent = applyMutation(pluralNoun, "hoen");
    document.getElementById("pad-mutation").textContent = applyMutation(noun, "pad");
    document.getElementById("adel-mutation").textContent = applyMutation(noun, "adel");
    document.getElementById("po-mutation").textContent = applyMutation(noun, "po")
    document.getElementById("poe-mutation").textContent = applyMutation(noun, "poe")
    document.getElementById("poen-mutation").textContent = applyMutation(pluralNoun, "poen");
    document.getElementById("or-mutation").textContent = applyMutation(noun, "or");
    document.getElementById("nu-mutation").textContent = applyMutation(noun, "nu")
    document.getElementById("nui-mutation").textContent = applyMutation(noun, "nui")
    document.getElementById("nuin-mutation").textContent = applyMutation(pluralNoun, "nuin");
    document.getElementById("mi-mutation").textContent = applyMutation(noun, "mi");
    document.getElementById("min1-mutation").textContent = applyMutation(noun, "min1");
    document.getElementById("min2-mutation").textContent = applyMutation(pluralNoun, "min2");
    document.getElementById("im-mutation").textContent = applyMutation(noun, "im");
    document.getElementById("sa-mutation").textContent = applyMutation(noun, "sa");
    document.getElementById("mig-mutation").textContent = applyMutation(noun, "mig");
    document.getElementById("nef-mutation").textContent = applyMutation(noun, "nef");
    document.getElementById("athar-mutation").textContent = applyMutation(noun, "athar");
    document.getElementById("ab-mutation").textContent = applyMutation(noun, "ab");
    document.getElementById("cad-mutation").textContent = applyMutation(noun, "cad");
    document.getElementById("fo-mutation").textContent = applyMutation(noun, "fo")
    document.getElementById("foe-mutation").textContent = applyMutation(noun, "foe")
    document.getElementById("foen-mutation").textContent = applyMutation(pluralNoun, "foen");
}
  // Responsive navigation: dropdown menu logic for touch/mobile
document.querySelectorAll('.dropdown > button').forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Only run on mobile
    if (window.innerWidth <= 700) {
      event.preventDefault();
      this.classList.toggle('active');
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
      // Close other dropdowns
      document.querySelectorAll('.dropdown > button').forEach(function(otherBtn) {
        if (otherBtn !== button) {
          otherBtn.classList.remove('active');
          var otherDropdown = otherBtn.nextElementSibling;
          if (otherDropdown) otherDropdown.style.display = "none";
        }
      });
    }
  });
});
// Collapse nav on resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 700) {
    document.querySelectorAll('.dropdown-content').forEach(function(el){
      el.style.display = '';
    });
    document.querySelectorAll('.dropdown > button').forEach(function(btn){
      btn.classList.remove('active');
    });
  }
});
// Back to top button logic (unchanged)
var mybutton = document.getElementById("myBtn");
window.onscroll = function() { scrollFunction(); };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.addEventListener("copy", function (e) {
  const selection = window.getSelection();
  if (!selection) return;

  e.preventDefault();
  e.clipboardData.setData(
    "text/plain",
    selection.toString()
  );
});

// --- expose what the page needs (keeps behavior the same) ---
window.mutations = mutations;
window.exceptionPlurals = exceptionPlurals;

window.getPluralForm = getPluralForm;
window.pluralize = pluralize;

window.applyMutation = applyMutation;
window.displayMutations = displayMutations;

// optional: if these are referenced elsewhere
window.autocorrectNg = autocorrectNg;
window.isVowel = isVowel;