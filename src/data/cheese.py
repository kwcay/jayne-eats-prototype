AFRICAN_CHEESES = (
    'Ayibe',
    'Caravane',
    'Wagasi',
)

ASIAN_CHEESES = (
    'Bandel',
    'Byaslag',
    'Chechil',
    'Chhana',
    'Chhurpi',
    'Chura',
    'Chura loenpa',
    'Chura kampo',
    'Dahi chhana',
    'Dangke',
    'Flower of Rajya',
    'Imsil',
    'Kalari',
    'Kalimpong',
    'Kesong puti',
    'Paneer',
    'Rubing',
    'Rushan',
    'Sakura',
)

EUROPEAN_CHEESES = (
    'Djathë i bardhë',
    'Djathë pice ',
    'Gjizë',
    'Kaçkavall',
    'nguri',
    'paneer',
)

# https://en.wikipedia.org/wiki/List_of_cheeses
# Next country: Austria

MIDDLE_EASTERN_CHEESES = ()

NORTH_CENTRAL_AMERICAN_CHEESES = ()

OCEANIAN_CHEESES = ()

SOUTH_AMERICAN_CHEESES = ()

ALL_CHEESES = sorted(list(set(
    AFRICAN_CHEESES + \
    ASIAN_CHEESES + \
    EUROPEAN_CHEESES + \
    MIDDLE_EASTERN_CHEESES + \
    NORTH_CENTRAL_AMERICAN_CHEESES + \
    OCEANIAN_CHEESES + \
    SOUTH_AMERICAN_CHEESES
)))
